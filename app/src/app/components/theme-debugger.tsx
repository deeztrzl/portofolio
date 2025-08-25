"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebugger() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme, themes } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading theme debugger...</div>;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm max-w-xs">
      <h3 className="font-bold mb-2 text-gray-900 dark:text-gray-100">Theme Debug</h3>
      <div className="space-y-1 text-gray-700 dark:text-gray-300">
        <div>Theme: {theme}</div>
        <div>Resolved: {resolvedTheme}</div>
        <div>System: {systemTheme}</div>
        <div>Available: {themes.join(', ')}</div>
        <div>HTML Classes: {document.documentElement.className}</div>
      </div>
      <div className="mt-2 space-x-2">
        <button 
          onClick={() => setTheme('light')}
          className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded text-xs"
        >
          Light
        </button>
        <button 
          onClick={() => setTheme('dark')}
          className="px-2 py-1 bg-gray-700 text-white rounded text-xs"
        >
          Dark
        </button>
      </div>
    </div>
  );
}
