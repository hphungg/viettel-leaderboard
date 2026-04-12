import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
    title: "Leaderboard | Viettel Codev Hub",
    description: "Viettel Codev Hub Leaderboard",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="light">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&family=Inter:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-surface font-body text-on-surface flex min-h-screen flex-col">
                {children}
            </body>
        </html>
    )
}
