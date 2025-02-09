import { Input } from "antd";
const { Search } = Input;
import "./SearchBar.css";
import { useTranslation } from "react-i18next";

const SearchBar = ({ setFilteredCountries, countriesList }) => {
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleSearch = (e) => {
    const trimmedSearch = e.target.value.trim().toLowerCase();
    console.log(countriesList);

    const searchResult = countriesList.filter((country) =>
      isArabic
        ? country.translations?.ara?.common
            .toLowerCase()
            .startsWith(trimmedSearch)
        : country.name.common.toLowerCase().startsWith(trimmedSearch),
    );

    setFilteredCountries(searchResult);
  };

  return (
    <Search
      className="custom-input w-full max-w-md self-start"
      placeholder={t("placeholder")}
      onChange={handleSearch}
      enterButton
    />
  );
};

export default SearchBar;
