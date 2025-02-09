import { Select } from "antd";
import "./RegionMenu.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const RegionMenu = ({ setFilteredCountries, countriesList }) => {
  const [firstValue, setFirstValue] = useState("Filter all Region");
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleChange = (value) => {
    let result = "";
    const selectedRegion = value;

    if (value === "all region") {
      result = countriesList;
    } else {
      result = countriesList.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase(),
      );
    }
    setFilteredCountries(result);
  };

  useEffect(() => {
    setFirstValue(isArabic ? "ابحث حسب القارة" : "Filter all Region");
  }, [isArabic]);

  return (
    <Select
      value={firstValue}
      onChange={handleChange}
      className="w-40 self-start"
      options={[
        { value: "all region", label: t("regions.AllRegion") },
        { value: "africa", label: t("regions.Africa") },
        { value: "asia", label: t("regions.Asia") },
        { value: "europe", label: t("regions.Europe") },
        { value: "occeania", label: t("regions.Oceania") },
      ]}
    />
  );
};

export default RegionMenu;
