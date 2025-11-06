import de from "./locales/de.json";
import en from "./locales/en.json";

const translations = { de, en };

let currentLang = "en";  

export const setLang = (lang) => {
  currentLang = lang;
};

export const t = (key) => {
  const parts = key.split(".");
  let result = translations[currentLang];

  for (let i = 0; i < parts.length; i++) {
    result = result[parts[i]];
    if (!result) break;
  }

  return result || key;
};
