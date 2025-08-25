// Theme fallback script - harus dijalankan sebelum React hydration
(function() {
  try {
    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Determine theme to apply
    let themeToApply = 'light'; // default
    
    if (savedTheme) {
      themeToApply = savedTheme;
    } else if (systemPrefersDark) {
      themeToApply = 'dark';
    }
    
    // Apply theme immediately
    const html = document.documentElement;
    
    if (themeToApply === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    
    console.log('Theme fallback applied:', themeToApply);
    
  } catch (error) {
    console.error('Theme fallback error:', error);
  }
})();
