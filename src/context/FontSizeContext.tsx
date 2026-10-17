import React, { createContext, useContext, useEffect, useState } from "react";

type FontSize = "small" | "medium" | "large";

interface FontSizeContextType {
  fontSize: FontSize;
  setSmall: () => void;
  setMedium: () => void;
  setLarge: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined
);

export function FontSizeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [fontSize, setFontSize] = useState<FontSize>(() => {
    return (localStorage.getItem("font-size") as FontSize) || "medium";
  });

  useEffect(() => {
    localStorage.setItem("font-size", fontSize);

    const root = document.documentElement;

    switch (fontSize) {
      case "small":
        root.style.fontSize = "14px";
        break;
      case "medium":
        root.style.fontSize = "16px";
        break;
      case "large":
        root.style.fontSize = "18px";
        break;
    }
  }, [fontSize]);

  return (
    <FontSizeContext.Provider
      value={{
        fontSize,
        setSmall: () => setFontSize("small"),
        setMedium: () => setFontSize("medium"),
        setLarge: () => setFontSize("large"),
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);

  if (!context) {
    throw new Error("useFontSize must be used inside FontSizeProvider");
  }

  return context;
}