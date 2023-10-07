import prisma from "@/app/libs/prismadb";
import { ServiceSlider } from "../components/inputs/ServiceSlider";

export async function getServices() {
  try {
    const services = await prisma.service.findMany(); // Adjust based on your Prisma schema
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
};

export default ServiceSlider;