import { Host } from "./Host";

export namespace Booking {
  interface Info {
    status: Status;
    host: Host.Info | Host.Info['id'];
    space: Host.Space | Host.Space['id'];
    startDate: number;
    endDate: number;
    timeSlot: {
      start: string;
      end: string;
    };
    spotsCount: number;
    id: string;
  }

  export enum Status {
    pending = "pending", // in attesa accettazione host
    confirmed = "confirmed", // confermata dall'host
    canceled = "canceled", // cancellata dal cliente
    refused = "refused", // rifiutata dall'host
    closed = "closed", // chiusa, completata
  }
}
