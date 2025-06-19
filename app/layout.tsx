import '../app/globals.css'
// Importing layout components using relative paths
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// Metadata used by Next.js
export const metadata = {
  title: 'My Website',
  description: 'Basic structure with Next.js and Tailwind CSS',
}

// This is the main layout component that wraps all pages
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1">
          <main className="flex-1 p-4 bg-white">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}