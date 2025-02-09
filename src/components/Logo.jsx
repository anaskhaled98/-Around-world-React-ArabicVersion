import ProjectLogo from "../assets/Logo.svg?react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Logo = () => {
  const { t } = useTranslation();
  return (
    <Link
      to="/"
      className="flex items-center gap-[14px] font-bold text-custom-black dark:text-custom-gray"
    >
      <ProjectLogo />
      <span>{t("slogan")}</span>
    </Link>
  );
};

export default Logo;
