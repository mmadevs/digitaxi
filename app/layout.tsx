import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'DigiTaxi',
	description: 'DigiTaxi - O transporte que você precisa!'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='pt-BR'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
