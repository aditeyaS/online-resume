import { useEffect, useState } from "react";
import themes from "../../util/theme.config";

const Theme = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    const previousTheme = localStorage.getItem("data-theme") || "light";
    if (previousTheme) {
      setCurrentTheme(previousTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("data-theme", currentTheme);
  }, [currentTheme]);

  return (
    <div className="flex justify-center">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="text-accent">Theme</span>
        </div>
        <select
          className="select select-primary select-bordered"
          value={currentTheme}
          onChange={(e) => setCurrentTheme(e.target.value)}
        >
          {themes.map((theme, index) => (
            <option key={index} disabled={theme == currentTheme}>
              {theme}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Theme;
