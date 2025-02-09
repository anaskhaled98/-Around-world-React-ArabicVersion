import { Switch } from "antd";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";
import { useEffect, useRef } from "react";

const ThemeSwitcher = () => {
  const htmlElementRef = useRef(document.documentElement);

  const switchTheme = (state) => {
    // ANT Switcher toggles true and false in each clicks
    if (state === true) {
      htmlElementRef.current.classList.remove("dark");
      localStorage.setItem("theme", "white");
    } else {
      htmlElementRef.current.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    const applyTheme = (theme) => {
      if (theme === "dark") {
        htmlElementRef.current.classList.add("dark");
      } else {
        htmlElementRef.current.classList.remove("dark");
      }
    };

    if (theme) applyTheme(theme);
  }, []);

  return (
    <Switch
      checkedChildren={<MoonOutlined />}
      unCheckedChildren={<SunOutlined />}
      defaultChecked={localStorage.getItem("theme") !== "dark"}
      className="justify-self-end bg-black"
      onChange={switchTheme}
    />
  );
};

export default ThemeSwitcher;
