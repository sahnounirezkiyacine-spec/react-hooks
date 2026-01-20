const Filter = ({ setTitleFilter, setRateFilter }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <input
        type="number"
        placeholder="Note minimale"
        onChange={(e) => setRateFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
