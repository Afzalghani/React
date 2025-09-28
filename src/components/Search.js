const SearchComponent = ({ searchText, setSearchText, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);}
        }
        className="search-input"
      />
      <button className="search-button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchComponent;
