'use client'

import React from 'react'
import GoUpButton from '../GoUpButton'
import Footer from './footer'
import Header from './header'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="flex flex-col bg-gray-200 dark:bg-gray-800 min-h-screen">
            <Header />

            <main className="text-gray-800 dark:text-gray-200 overflow-x-hidden max-w-screen-2xl xl:mx-auto">
                {children}
            </main>
            <GoUpButton />
            <Footer />
        </div>
    )
}

export default Layout
