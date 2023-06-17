import { CarCard, CustomFilter, Header, SearchBar } from "@/components";
import { fetchCars } from "@/utils";

export default async function Home() {
  const allCars = await fetchCars();
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Header />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home___text-container">
          <h1 className="text-4x1 font-extrabold">car catalogue</h1>
          <p>Explore your options</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black' text-x1 font-bold">
              Something went wrong Or API is down
            </h2>
            <p>{allCars?.massage}</p>
          </div>
        )}
      </div>
    </main>
  );
}
