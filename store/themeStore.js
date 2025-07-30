import { create } from "zustand";

export const useThemeStore = create((set, get) => ({
  theme: "light",

  setTheme: (theme) => set({ theme }),
  getTheme: () => get().theme,
  toggleTheme: () => {
    const currentTheme = get().theme;
    set({ theme: currentTheme === "light" ? "dark" : "light" });
  },
}));
