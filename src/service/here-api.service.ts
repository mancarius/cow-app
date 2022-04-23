import _ from "lodash";
import { Here } from "../@types/Here";

interface HereAPi {
  base_url: {
    autocomplete: string;
    autosuggest: string;
    geocode: string;
    reverse_geocode: string;
    lookup_by_id: string;
  };
  cache: Map<string, any>;
  _apiKey: string | null;
  apiKey: string;
  controller: AbortController | null;
  apiCall: <T>(_url: string, _params: string[]) => Promise<T>;
  reverseGeocode: (_latitude: number, _longitude: number) => Promise<any>;
  geocode: (_address: string, _limit: number, _type?: string) => Promise<any>;
  autosuggest: (
    _longitude: number,
    _latitude: number,
    _query: string,
    _limit: number,
    _type?: string
  ) => Promise<any>;
  autocomplete: (
    _query: string,
    _limit?: number,
    _type?: string
  ) => Promise<Here.Item[]>;
  lookupByID: (_id: string) => Promise<any>;
  filterBy: (_array: Here.Item[], _localityType?: string) => Here.Item[];
}

const HereApi: HereAPi = {
  /**
   * url per le chiamate api
   */

  base_url: {
    autocomplete: "https://autocomplete.search.hereapi.com/v1/autocomplete",
    autosuggest: "https://autosuggest.search.hereapi.com/v1/autosuggest",
    geocode: "https://geocode.search.hereapi.com/v1/geocode",
    reverse_geocode: "https://revgeocode.search.hereapi.com/v1/revgeocode",
    lookup_by_id: "https://lookup.search.hereapi.com/v1/lookup",
  },

  /**
   * @private
   */

  cache: new Map(),

  /**
   * @private
   */

  _apiKey: null,

  /**
   * @param {string} value
   */

  set apiKey(value: string) {
    this._apiKey = typeof value !== "undefined" ? value : null;
  },

  /**
   * controller
   */

  controller: null,

  /**
   * metodo per le chiamate verso l 'api.
   *
   * @async
   * @method
   * @param {string} _url
   * @param {Array} _params
   * @returns {Promise} Ritorna la risposta di fetch()
   */

  async apiCall(_url: string, _params: Array<any>): Promise<any> {
    // se la chiave non è valorizzata creo l'errore
    if (this._apiKey === null)
      throw {
        name: "InvalidApiKey",
        message: "'null' isn't a valid key",
      };

    //if (this.controller) this.controller.abort();

    this.controller = new AbortController();

    const apiKey = `apiKey=${this._apiKey}`;
    const lang = `lang=${navigator.language}`;
    _params.push(lang, apiKey);

    let apiUrl = [_url, "?", _params.join("&")].join("");
    let response = null;

    try {
      // codifico url
      apiUrl = encodeURI(apiUrl);
      // se ho già il risultato di questa query in cache lo ritorno
      if (this.cache.has(apiUrl)) return this.cache.get(apiUrl);
      else {
        // altrimenti invio chiamata GET all'api
        response = await fetch(apiUrl, {
          signal: this.controller.signal,
        });
        // salvo risposta nella cache
        this.cache.set(apiUrl, response);
      }
      if (response.ok) {
        let json = await response.clone().json();
        // salvo risposta nella cache
        this.cache.set(apiUrl, json);
        return json;
      } else {
        throw {
          name: "HereError",
          message: `Richiesta fallita (code: ${response.status})`,
        };
      }
    } catch (e) {
      // questo errore viene chiamato ogni volta che il controller annulla la chiamata
      if (e instanceof DOMException) {
        console.warn(e);
        return [];
      }
      throw e;
    }
  },

  /**
   * dati longitudine e latitudine, ritorna un indirizzo
   *
   * @async
   * @method reverseGeocode
   * @param {Number} _latitude
   * @param {Number} _longitude
   * @returns {Promise}
   */

  async reverseGeocode(_latitude, _longitude) {
    const url = this.base_url.reverse_geocode;
    const at = `at=${_latitude},${_longitude}`;
    let result;

    try {
      result = await this.apiCall<any>(url, [at]);
    } catch (e) {
      throw e;
    }
    // ritorna un oggetto con l'indirizzo, altrimenti null
    return result.items?.[0] || {};
  },

  /**
   * dato un indirizzo ritorna latitudine e longitudine
   *
   * @async
   * @method
   * @param {string} address
   * @param {number} limit
   * @param {string} type - localityType filter
   * @returns {Array}
   */

  async geocode(_address, _limit = 5, _type) {
    const url = this.base_url.geocode;
    const q = `q=${_address.toLowerCase()}`;
    let result;

    try {
      result = await this.apiCall<any>(url, [q]);
    } catch (e) {
      throw e;
    }
    // ritorna un oggetto con le coordinate, altrimenti null
    return this.filterBy(result.items, _type)?.slice(0, _limit) || [];
  },

  /**
   * data una stringa ritorna una lista di indirizzi
   *
   * @async
   * @method
   * @param {string} _longitude
   * @param {string} _latitude
   * @param {string} _query
   * @param {number} _limit
   * @param {string} _type
   * @returns {Promise}
   */

  async autosuggest(_longitude, _latitude, _query, _limit = 5, _type) {
    // avvio la ricerca con almeno 2 caratteri per evitare risultati troppo generici
    if (_query.length < 2) return [];
    _query = _query.toLowerCase();
    _type && (_type = _type.toLowerCase());
    const url = this.base_url.autosuggest;
    const q = `q=${_query}`;
    const at = `at=${_longitude},${_latitude}`;
    let result = [];

    try {
      result = await this.apiCall<any>(url, [q, at]);
    } catch (e) {
      throw e;
    }

    let localities = result.items;
    // ritorno risultato filtrato
    return this.filterBy(localities, _type)?.slice(0, _limit) || [];
  },

  /**
   * data una stringa ritorna una lista di indirizzi
   *
   * @async
   * @method
   * @param {string} _query - chiave di ricerca
   * @param {number} _limit - (default: 5) numero massimo di risultati
   * @param {string} _type - Limita i risultati al tipo specifico
   * @returns {Array}
   */

  async autocomplete(_query, _limit = 5, _type) {
    // avvio la ricerca con almeno 2 caratteri per evitare risultati troppo generici
    if (_query.length < 2) return [];
    _query = _query.toLowerCase();
    _type && (_type = _type.toLowerCase());
    const url = this.base_url.autocomplete;
    const type = typeof _type === "string" ? `type=${_type}` : "";
    const q = `q=${_query}`;
    let result;

    try {
      result = await this.apiCall<Here.AutocompleteResponse>(url, [q, type]);
    } catch (e) {
      throw e;
    }

    const localities = _.uniqBy(result.items, 'id');
    // ritorno risultato filtrato
    return this.filterBy(localities, _type)?.slice(0, _limit) || [];
  },

  /**
   * Dato un id, restituisce un indirizzo completo di coordinate
   *
   * @async
   * @method
   * @param {string} _id Here ID (es: here:pds:place:276u33db-8097f3194e4b411081b761ea9a366776)
   * @returns {Promise}
   */

  async lookupByID(_id) {
    const url = this.base_url.lookup_by_id;
    const id = `id=${_id}`;
    let result;

    try {
      result = await this.apiCall(url, [id]);
    } catch (e) {
      throw e;
    }

    // ritorna un oggetto con le coordinate, altrimenti null
    return result;
  },

  /**
   * ritorna array di oggetti filtrato e ordinato secondo i parametri ricevuti
   *
   * @method
   * @param {Array} _array Array da filtrare
   * @param {string} _localityType chiave a cui applicare il filtro
   * @return {Array}
   */

  filterBy(_array, _localityType) {
    // se non presente il valore 'type' ritorno l'array coì com'è
    if (typeof _localityType !== "string" || _.isEmpty(_array)) return _array;
    // se presente resultType applico relativo filtro e ordino array

    /*_array = _array.filter(
      ({ localityType }) => localityType === _localityType
    );

    _array.sort((a, b) =>
      a.highlights.address[_localityType][0].start >
      b.highlights.address[_localityType][0].start
        ? 1
        : b.highlights.address[_localityType][0].start >
          a.highlights.address[_localityType][0].start
        ? -1
        : 0
    );*/

    return _array;
  },
};

Object.defineProperty(HereApi, "_apiKey", { enumerable: false });

export default HereApi;
