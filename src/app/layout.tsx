import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'AI Buddy',
    description: 'AI coding interview buddy',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className={"flex"}>
            {/*Sidebar*/}
            {/*ClientProvider*/}
            <div className="bg-[#343641] flex-1">
                {children}

            </div>

        </div>
        </body>
        </html>
    )
}
