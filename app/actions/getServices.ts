import prisma from "@/app/libs/prismadb";

export async function getServices(listingId: string) {
  try {
    const services = await prisma.service.findMany({
      where: {
        listingId: listingId
      }
    });
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};
