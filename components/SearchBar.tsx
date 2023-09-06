"use client";

import { FormEvent, useState } from "react";
import { SearchManufacturer } from "./SearchManufacturer";

export const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState<string>("");
  const handleSearch = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
          <SearchManufacturer
            manufacturer={manufacturer}
            setManuFacturer={setManuFacturer}
          />
      </div>
    </form>
  );
};
