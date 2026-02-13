'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'

type ThemeContextType = {
    colorTheme: string
    setColorTheme: (arg: string) => void
}

// Create a context for color theme provider
export const ColorThemeContext = createContext<ThemeContextType | {}>({})

// This is exported for other things to use and can be cast
export const useColorThemeContext = () => useContext(ColorThemeContext) as ThemeContextType

interface Props {
    children: React.ReactNode
}

export const ColorThemeProvider = ({ children }: Props) => {
    const [colorTheme, setColorTheme] = useState<ThemeContextType['colorTheme']>('dark')

    const colors = ['light', 'dark']

    // Set the color theme based on the user preference
    useEffect(() => {
        setColorTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    }, [])

    // Client-side-only code
    const darkMode = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)') : null

    useEffect(() => {
        if (darkMode) {
            darkMode.onchange = () => {
                setColorTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
            }
        }
    }, [])

    useEffect(() => {
        if (colorTheme === 'light') {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    }, [colorTheme])

    return (
        <ColorThemeContext.Provider value={{ colorTheme, setColorTheme, colors }}>
            {children}
        </ColorThemeContext.Provider>
    )
}
