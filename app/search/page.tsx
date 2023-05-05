import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const fetchRestaurantByCity = (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  if (!city) return prisma.restaurant.findMany({ select });
  return prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export const metadata = {
  title: "Search | OpenTable",
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city: string };
}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  const location = await fetchLocations();
  const cuisine = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start ">
        <SearchSideBar locations={location} cuisines={cuisine} />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} key={restaurant.id} />
              ))}
            </>
          ) : (
            <p>Sorry, we found no restaurant in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
