import CountriesList from "../components/CountriesList";
import RegionMenu from "../components/RegionMenu";
import SearchBar from "../components/SearchBar";
import { useFetchCountires } from "../hooks/useFetchCountires";

const Home = () => {
  const {
    isLoading,
    error,
    countriesList,
    filteredCountries,
    setFilteredCountries,
  } = useFetchCountires();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {!isLoading && !error && (
        <>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <SearchBar
              setFilteredCountries={setFilteredCountries}
              countriesList={countriesList}
            />
            <RegionMenu
              setFilteredCountries={setFilteredCountries}
              countriesList={countriesList}
            />
          </div>
          <CountriesList filteredCountries={filteredCountries} />
        </>
      )}
    </>
  );
};

export default Home;
