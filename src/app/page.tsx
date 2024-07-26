import { Hero } from "@/components";
import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import { fetchtCars } from "@/utils";
import Image from "next/image";

export default async function Home() {
  const allCars = await fetchtCars();
  // console.log(allCars);

  const isDataEmpty =
    allCars.length === 0 ||
    Array.isArray(allCars) === false ||
    allCars === null;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalog</h1>
          <p>Explore out cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        <div className="home__filter-container">
          <CustomFilter props="fuel" />
          <CustomFilter props="year" />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard key={car.year} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
