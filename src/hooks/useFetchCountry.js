import { useSWR, fetcher } from "../helpers/swrConfig";

export const useFetchCountry = (country) => {
  const { data, isLoading, error } = useSWR(
    `https://restcountries.com/v3.1/name/${country}`,
    fetcher,
  );

  const countryInfo = data ? data[0] : {};

  return {
    countryInfo,
    isLoading,
    error,
  };
};
