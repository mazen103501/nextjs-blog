import { Inter } from 'next/font/google'
import { Container, ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@/hooks/useAuth'
import Navbar from '@/components/Navbar'
import NextTopLoader from 'nextjs-toploader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Blog',
	description: 'A personal blog sharing insights on web development, programming, and technology trends.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className} style={{ paddingBottom: '24px' }}>
				<NextTopLoader />
				<AuthProvider>
					<ChakraProvider>
						<Container maxWidth={1200} as='main'>
							<Navbar></Navbar>
							{children}
						</Container>
					</ChakraProvider>
				</AuthProvider>
			</body>
		</html>
	)
}
