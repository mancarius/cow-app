import { UserInfo } from "firebase/auth";
import { Booking } from "./Booking";

interface Customer extends UserInfo {
  bookings: Booking.Info[]
}