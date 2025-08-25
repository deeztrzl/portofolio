"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SimpleThemeTest() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [htmlClasses, setHtmlClasses] = useState("");

  useEffect(() => {
    setMounted(true);
    
    // Monitor HTML class changes
    const observer = new MutationObserver(() => {
      setHtmlClasses(document.documentElement.className);
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    setHtmlClasses(document.documentElement.className);
    
    return () => observer.disconnect();
  }, []);

  // Debug log theme changes
  useEffect(() => {
    if (mounted) {
      console.log("Theme Debug:", { theme, resolvedTheme, htmlClasses });
    }
  }, [theme, resolvedTheme, htmlClasses, mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed top-4 right-4 p-4 bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg shadow-lg text-sm max-w-sm z-50">
      <h3 className="text-black dark:text-white font-bold mb-2">🔍 Theme Debug</h3>
      <div className="space-y-1 text-black dark:text-white">
        <p><strong>Theme:</strong> {theme || 'undefined'}</p>
        <p><strong>Resolved:</strong> {resolvedTheme || 'undefined'}</p>
        <p><strong>HTML Classes:</strong> "{htmlClasses}"</p>
      </div>
      
      <div className="space-x-2 mt-3">
        <button 
          onClick={() => {
            console.log("Setting theme to light");
            setTheme('light');
          }}
          className="px-3 py-1 bg-yellow-400 text-black rounded text-xs hover:bg-yellow-500"
        >
          ☀️ Light
        </button>
        <button 
          onClick={() => {
            console.log("Setting theme to dark");
            setTheme('dark');
          }}
          className="px-3 py-1 bg-gray-800 text-white rounded text-xs hover:bg-gray-900"
        >
          🌙 Dark
        </button>
      </div>
      
      <div className="mt-3 p-3 bg-gray-100 dark:bg-gray-700 rounded transition-colors duration-300">
        <p className="text-gray-800 dark:text-gray-200 text-xs">
          ✨ This box should change color when theme toggles
        </p>
        <div className="mt-2 h-4 bg-blue-200 dark:bg-blue-800 rounded"></div>
      </div>
      
      <button 
        onClick={() => {
          // Manual DOM manipulation test
          const html = document.documentElement;
          const isDark = html.classList.contains('dark');
          if (isDark) {
            html.classList.remove('dark');
            console.log("Manually removed dark class");
          } else {
            html.classList.add('dark');
            console.log("Manually added dark class");
          }
        }}
        className="mt-2 w-full px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600"
      >
        🔧 Manual Toggle (Test)
      </button>
    </div>
  );
}
