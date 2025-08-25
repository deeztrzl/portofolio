'use client'

import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="light" 
      enableSystem={false}
      disableTransitionOnChange={false}
      storageKey="portfolio-theme"
      forcedTheme={mounted ? undefined : "light"}
    >
      {mounted ? children : <div style={{ visibility: 'hidden' }}>{children}</div>}
    </ThemeProvider>
  )
}
