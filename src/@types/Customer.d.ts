import { UserInfo } from "firebase/auth";

interface Customer extends Omit<UserInfo, "phoneNumber" | "providerId"> {}