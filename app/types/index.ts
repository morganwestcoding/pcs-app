import { Listing, Reservation, User } from "@prisma/client";

export type Service = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export type SafeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
  services: Service[];  // This line adds the services array to SafeListing
};

export type SafeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: SafeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
