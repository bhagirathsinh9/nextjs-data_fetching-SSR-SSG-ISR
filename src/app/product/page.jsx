import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";

export default async function ProductPage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="max-w-7xl mx-auto my-6 px-4">
      <h1 className="text-2xl font-bold mb-5">Product Listing</h1>

      <Link
        href="/"
        className="flex items-center gap-2 mb-6 hover:underline"
      >
        <IoMdArrowRoundBack />
        Go Back
      </Link>

      <div className="grid md:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Image
            width={200}
            height={200}
              src={item.image}
              alt={item.title}
              className="h-40 mx-auto object-contain mb-3 "
            />

            <h1 className="font-semibold text-sm line-clamp-2">
              {item.title}
            </h1>

            <h2 className="text-gray-600 mt-2">₹ {item.price}</h2>

            <Link
              href={`/product/${item.id}`}
              className="block mt-4 text-center bg-blue-600 hover:bg-blue-800 text-white py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
