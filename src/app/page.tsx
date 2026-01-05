import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="mb-3 text-2xl font-bold">
          Welcome to Home Page
        </h1>

        <Link
          href="/product"
          className="inline-block bg-blue-500 text-white rounded-full px-6 py-2 mt-2 hover:bg-blue-600 transition"
        >
          Go to Products List 
        </Link>
      </div>
    </div>
  )
}
