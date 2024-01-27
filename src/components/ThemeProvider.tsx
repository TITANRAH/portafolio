'use client'

import { ThemeProvider as NextThemeProvider } from 'next-themes';


interface Props {
    attributes: string;
    defaultTheme: string;
}
export function ThemeProvider({
    children,
    attribute,
    defaultTheme
  }: {
    children: React.ReactNode;
    attribute: string;
    defaultTheme: string
  }, ) {

    
return <NextThemeProvider attribute={attribute} defaultTheme={defaultTheme}>
{children}

</NextThemeProvider>
  }