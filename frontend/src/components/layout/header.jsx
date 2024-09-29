import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <div className="shadow-lg relative bg-white">
      <div className="xl:w-[1280px] h-[80px] mx-auto text-2xl font-bold p-4 flex items-center justify-between">
        <h1>{t("header.title")}</h1>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="border p-2 text-lg bg-blue-500 rounded-lg text-white hover:bg-blue-600"
          >
            {t("header.language")} ▽
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-[100px] text-xl bg-white border rounded-lg shadow-lg">
              <div
                onClick={() => changeLanguage("ko")}
                className="cursor-pointer p-2 hover:bg-gray-200 px-2"
              >
                한국어
              </div>
              <div
                onClick={() => changeLanguage("en")}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                English
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
