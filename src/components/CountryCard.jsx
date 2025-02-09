import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital,
  routingParameter,
}) => {
  const { t } = useTranslation();

  return (
    <Link to={routingParameter}>
      <div className="flex h-full flex-col gap-6 truncate rounded-lg bg-gray-50 pb-9 text-custom-black shadow-md dark:bg-gray-800 dark:text-custom-gray">
        <div className="h-40">
          <img
            className="h-full w-full object-cover"
            src={flag || "https://placehold.co/400"}
            alt="country flag"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="mb-0 ms-3 text-lg font-extrabold text-inherit">
            {name}
          </h2>
          <div className="ms-3 flex flex-col gap-2">
            <p className="mb-0 flex items-center gap-1">
              <span className="font-semibold">{t("population")}:</span>
              {population.toLocaleString()}
            </p>
            <p className="m-0 flex items-center gap-1">
              <span className="font-semibold">{t("region")}:</span>
              {region}
            </p>
            <p className="m-0 flex items-center gap-1">
              <span className="font-semibold">{t("capital")}:</span>
              {capital || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
