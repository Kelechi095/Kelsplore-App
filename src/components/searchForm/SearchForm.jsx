import { FaSearch } from "react-icons/fa";
import "./searchForm.css";

const SearchForm = ({ searchValue, setSearchValue }) => {
  return (
    <div className="search">
      <FaSearch className="icon" />
      <input
        type="text"
        placeholder="search movies..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
