"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SearchManufacturer } from "./SearchManufacturer";
import { SearchButton } from "./SearchButton";

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState<string>("");
  const [model, setModel] = useState<string>("");

  const router = useRouter();

  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase())
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
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

      const newPathname = `${
        window.location.pathname
      }?${searchParams.toString()}`;

      router.push(newPathname);
    };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>

      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] ml-4"
          alt="car model"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
          placeholder="Tiguan..."
          className="searchbar__input"
        />

        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};
