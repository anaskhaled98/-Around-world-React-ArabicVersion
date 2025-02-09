import CountryCard from "./CountryCard";
import { useTranslation } from "react-i18next";

const CountriesList = ({ filteredCountries: countries }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <div className="countreis">
      <div className="mt-8 grid gap-x-[32px] gap-y-12 sm:grid-cols-2 md:mt-12 md:grid-cols-3 md:justify-between lg:grid-cols-4 lg:gap-y-[70px]">
        {countries &&
          countries.map((country) => (
            <CountryCard
              key={country.cca2}
              name={
                isArabic
                  ? country.translations?.ara?.common || country.name.common
                  : country.name.common
              }
              population={
                isArabic
                  ? country.population.toLocaleString("ar-EG")
                  : country.population
              }
              region={t(`regions.${country.region.toLowerCase()}`)}
              capital={country.capital?.[0]}
              flag={country.flags?.svg}
              routingParameter={country.name.common}
            />
          ))}
      </div>
    </div>
  );
};

export default CountriesList;
