import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

const SwitchTheme = () => {
  //we store the theme in localStorage to preserve the state on next visit with an initial theme of dark.
  const [theme, setTheme] = useLocalStorage("theme", "winter");

  //toggles the theme
  const toggleTheme = () => {
    setTheme(theme === "winter" ? "dark" : "winter");
  };

  //modify data-theme attribute on document.body when theme changes
  useEffect(() => {
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button className=" btn btn-sm lg:btn-lg lg: btn-circle mx-1  text-accent  " onClick={toggleTheme}>
      {theme === "winter" ? (
        <FiMoon className="w-5 h-5  " />
      ) : (
        <FiSun className="w-5 h-5" />
      )}
    </button>
  );
};

export default SwitchTheme;
