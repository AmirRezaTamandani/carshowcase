"use client";
import SearchManufacturer from "./SearchManufacturer";
import { useState } from "react";
import Image from "next/image";
import SearchButton from "./SearchButton";
import { updateSearchParamsProps } from "@/types";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const updateSearchParams = ({
    model,
    manufacturer,
  }: updateSearchParamsProps) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }
    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathName);
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (manufacturer === "" && model === "") {
      return alert("please fill the search bar");
    }
    updateSearchParams({
      model: model.toLowerCase(),
      manufacturer: manufacturer.toLowerCase(),
    });
  };
  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <div className="search-bar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="search-bar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          value={model}
          type="text"
          name="model"
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Golf R"
          className="search-bar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
