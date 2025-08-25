"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Debug logging
  useEffect(() => {
    if (mounted) {
      console.log('Theme Debug:', { theme, resolvedTheme, systemTheme });
      console.log('HTML classes:', document.documentElement.classList.toString());
    }
  }, [theme, resolvedTheme, systemTheme, mounted]);

  if (!mounted) {
    return (
      <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center">
        <div className="w-5 h-5 bg-gray-300 rounded-full animate-pulse"></div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    const newTheme = isDark ? "light" : "dark";
    console.log('Switching theme to:', newTheme);
    setTheme(newTheme);
    
    // Force apply class immediately as fallback
    setTimeout(() => {
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 100);
  };

  return (
    <button
      onClick={handleThemeToggle}
      className="p-2 rounded-full text-slate-900 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 border border-gray-300 dark:border-gray-600"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Current: ${resolvedTheme || theme} - Click to switch`}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
