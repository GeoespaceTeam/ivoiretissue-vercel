"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import en from "../locales/en.json";
import fr from "../locales/fr.json";

type Locale = "en" | "fr";

type TranslationContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
};

const translations = {
  en,
  fr,
};

const TranslationContext = createContext<TranslationContextValue | null>(null);

function getCookieLocale(): Locale {
  if (typeof document === "undefined") return "en";

  const value = document.cookie
    .split("; ")
    .find((row) => row.startsWith("NEXT_LOCALE="))
    ?.split("=")[1];

  return value === "fr" || value === "en" ? value : "en";
}

export function TranslationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(getCookieLocale());
  }, []);

  const setLocale = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    setLocaleState(newLocale);
  };

  const t = useMemo(() => {
    return (key: string) => {
      const currentTranslations = translations[locale] as Record<
        string,
        string
      >;
      const fallbackTranslations = translations.en as Record<string, string>;

      return currentTranslations[key] || fallbackTranslations[key] || key;
    };
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t,
    }),
    [locale, t],
  );

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslationContext() {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used inside TranslationProvider");
  }

  return context;
}
