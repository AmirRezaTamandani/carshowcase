import { CostumeFilter, Header, SearchBar } from "@/components";

export default function Home() {
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
            <CostumeFilter title="fuel" />
            <CostumeFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
