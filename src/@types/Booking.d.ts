import { Host } from "./Host";

declare namespace Booking {
  interface Info {
    status: Status,
    host: Host.Info,
    space: Host.Space,
    startDate: number,
    endDate: number,
    timeSlot: {
      start: string,
      end: string,
    },
    spotsNumber: number,
    id: string,
  }

  enum Status {
    pending = "pending", // in attesa accettazione host
    confirmed = "confirmed", // confermata dall'host
    canceled = "canceled", // cancellata dal cliente
    refused = "refused", // rifiutata dall'host
    closed = "closed" // chiusa, completata
  }
}