import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const FilterSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenreParams = searchParams.getAll("genre");
  const initialSortParams = searchParams.get("sortBy");
  const [category, setCategory] = useState(initialGenreParams || []);
  const [sortBy, setSortBy] = useState(initialSortParams || "");

  const handleGenreChange = (e) => {
    const option = e.target.value;
    let newCategory = [...category];
    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (category || sortBy) {
      setSearchParams({ genre: category, sortBy: sortBy });
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <div>
      <h3>Filter</h3>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("K-Pop")}
          value="K-Pop"
          onChange={handleGenreChange}
        />
        <label>K-Pop</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Country")}
          value="Country"
          onChange={handleGenreChange}
        />
        <label>Country</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Pop")}
          value="Pop"
          onChange={handleGenreChange}
        />
        <label>Pop</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Holiday")}
          onChange={handleGenreChange}
          value="Hard Rock"
        />
        <label>Hard Rock</label>
      </div>
  
      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Holiday")}
          onChange={handleGenreChange}
          value="Holiday"
        />
        <label>Holiday</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Heavy Metal"
        />
        <label>Heavy Metal</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Classical Crossover"
        />
        <label>Classical Crossover</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Singer/Songwriter"
        />
        <label>Singer/Songwriter</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Rock"
        />
        <label>Rock</label>
      </div>

      <div>
        <input
          type="checkbox"
          defaultChecked={category.includes("Heavy Metal")}
          onChange={handleGenreChange}
          value="Christmas"
        />
        <label>Christmas</label>
      </div>
{/* ===================================SORTING==================== */}
      <h3>Sort</h3>
      <div onChange={handleSortBy}>
        <div>
          <input
            type="radio"
            value="asc"
            name="sortBy"
            defaultChecked={sortBy === "asc"}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sortBy"
            value="desc"
            defaultChecked={sortBy === "desc"}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
}

export default FilterSort