import { useSWR, fetcher } from "../helpers/swrConfig";
import { useEffect, useState } from "react";

export const useFetchCountires = () => {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  const { data, isLoading, error } = useSWR(
    "https://restcountries.com/v3.1/all",
    fetcher,
  );

  useEffect(() => {
    setCountriesList(data);
    setFilteredCountries(data);
  }, [data]);

  return {
    isLoading,
    error,
    countriesList,
    setFilteredCountries,
    filteredCountries,
  };
};
