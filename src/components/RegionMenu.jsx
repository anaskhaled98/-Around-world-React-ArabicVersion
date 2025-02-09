import { Select } from "antd";
import "./RegionMenu.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const RegionMenu = ({ setFilteredCountries, countriesList }) => {
  const [label, setLabel] = useState("Filter all Region");
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleChange = (value) => {
    let result = "";
    const selectedRegion = value;

    if (value === "allRegions") {
      result = countriesList;
    } else {
      result = countriesList.filter(
        (country) =>
          country.region.toLowerCase() === selectedRegion.toLowerCase(),
      );
    }

    setFilteredCountries(result);
    setLabel(t(`regions.${value}`));
  };

  useEffect(() => {
    setLabel(isArabic ? "ابحث حسب القارة" : "Filter all Region");
  }, [isArabic]);

  return (
    <Select
      value={label}
      onChange={handleChange}
      className="w-40 self-start"
      options={[
        { value: "allRegions", label: t("regions.allRegions") },
        { value: "africa", label: t("regions.africa") },
        { value: "asia", label: t("regions.asia") },
        { value: "europe", label: t("regions.europe") },
        { value: "occeania", label: t("regions.oceania") },
      ]}
    />
  );
};

export default RegionMenu;
