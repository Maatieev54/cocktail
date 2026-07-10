import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id) => favorites.some((f) => f.id === id);

  const toggleFavorite = (cocktail) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === cocktail.id)
        ? prev.filter((f) => f.id !== cocktail.id)
        : [...prev, { id: cocktail.id, name: cocktail.name, img: cocktail.img, cat: cocktail.cat, alc: cocktail.alc }]
    );
  };

  return (
    <FavoritesContext value={{ favorites, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext>
  );
}

export const useFavorites = () => useContext(FavoritesContext);
