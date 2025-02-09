import Logo from "./Logo";
import LangSwitcher from "./LangSwicther";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 mb-6 flex justify-center bg-gray-50 px-9 py-6 shadow md:mb-12 dark:bg-gray-800">
      <div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Logo />
        <div className="grid grid-cols-3 items-center gap-2">
          <LangSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
