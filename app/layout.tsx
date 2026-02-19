import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
    title: 'Gemini Wrapper - AI Chat Platform',
    description: 'Powerful AI chat powered by Google Gemini',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
          <html lang="ko">
                <body>{children}</body>body>
          </html>html>
        )
}</html>
