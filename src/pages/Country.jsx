import { Link, useParams } from "react-router";
import { useFetchCountry } from "../hooks/useFetchCountry";
import { useTranslation } from "react-i18next";
import LeftArrow from "../assets/LeftArrow.svg?react";

const Country = () => {
  const { country } = useParams();
  const { countryInfo, isLoading, error } = useFetchCountry(country);
  const { i18n, t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading data</p>}
      {!error && !isLoading && (
        <div>
          <Link to="/" className="mb-10 inline-block p-3">
            {isArabic ? (
              <LeftArrow style={{ transform: "rotate(180deg)" }} />
            ) : (
              <LeftArrow />
            )}
          </Link>
          <div className="grid gap-11 lg:grid-cols-2 lg:gap-36">
            <img
              className="w-8/12 justify-self-center"
              src={countryInfo?.flags?.svg}
              alt={countryInfo?.flags?.alt}
            />
            <div>
              <h1 className="mb-4 text-3xl font-extrabold text-inherit lg:mb-7">
                {isArabic
                  ? countryInfo.translations?.ara?.common ||
                    countryInfo.name.common
                  : countryInfo.name.common}
              </h1>
              <div className="flex flex-col gap-8 md:gap-32 lg:flex-row">
                <div className="flex flex-col gap-5">
                  <p className="<p mb-0 flex items-center gap-1">
                    <span className="font-semibold">{t("population")}: </span>
                    <span className="font-light">
                      {isArabic
                        ? countryInfo.population.toLocaleString("ar-EG")
                        : countryInfo.population}
                    </span>
                  </p>
                  <p className="<p mb-0 flex items-center gap-1">
                    <span className="font-semibold">{t("region")}: </span>
                    <span className="font-light">
                      {t(`regions.${countryInfo.region}`)}
                    </span>
                  </p>
                  <p className="<p mb-0 flex flex-col items-center gap-1 self-start">
                    <span className="self-start font-semibold">
                      {t("subRegion")}:
                    </span>
                    <span className="self-start font-light">
                      {countryInfo?.subregion}
                    </span>
                  </p>
                  <p className="<p mb-0 flex items-center gap-1">
                    <span className="font-semibold">{t("capital")}: </span>
                    <span className="font-light">{countryInfo?.capital}</span>
                  </p>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="<p mb-0 flex items-center gap-1">
                    <span className="font-semibold">
                      {t("topLevelDomain")}:{" "}
                    </span>
                    <span className="font-light">
                      {countryInfo?.tld?.join(", ")}
                    </span>
                  </p>
                  <p className="<p mb-0 flex flex-col items-center gap-1 self-start">
                    <span className="self-start font-semibold">
                      {t("currencies")}:{" "}
                    </span>
                    <span className="block self-start font-light">
                      {countryInfo?.currencies &&
                        Object.values(countryInfo?.currencies)
                          .map((currency) => `${currency.name}`)
                          .join(", ")}
                    </span>
                  </p>
                  <p className="<p mb-0 flex flex-col items-center gap-1 self-start">
                    <span className="self-start font-semibold">
                      {t("languages")}:
                    </span>
                    <span className="self-start font-light">
                      {countryInfo?.languages &&
                        Object.values(countryInfo?.languages)
                          .map((lang) => `${lang}`)
                          .join(", ")}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Country;
