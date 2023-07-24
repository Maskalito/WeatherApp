import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (location: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [location, setLocation] = useState("");

  const handleSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch(location);
      setLocation("");
    }
  };

  return (
    <div className="search style={{}}">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={handleSearch}
        placeholder="Enter a location"
        type="text"
      />
    </div>
  );
};

export default SearchBar
