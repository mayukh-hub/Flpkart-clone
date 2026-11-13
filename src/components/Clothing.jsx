
const products = [
  {
    id: 1,
    name: "Dignissim",
    oldPrice: "$100.00",
    price: "$80.00",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=500",
  },
  {
    id: 2,
    name: "Eratcelerisque",
    oldPrice: "$150.00",
    price: "$142.00",
    image:
      "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
  },
  {
    id: 3,
    name: "Red Justo",
    oldPrice: "",
    price: "$300.00",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=500",
  },
  {
    id: 4,
    name: "Paque",
    oldPrice: "",
    price: "$89.00",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500",
  },
  {
    id: 5,
    name: "Acelerisqu",
    oldPrice: "$119.00",
    price: "$99.00",
    image:
      "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=500",
  },
  {
    id: 6,
    name: "Rectus Femaur",
    oldPrice: "",
    price: "$22.00",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
  },
];

function Clothing() {
  return (
    <section className="bg-white px-4 py-8 md:px-6">

      {/* Component Animations */}
      <style>{`
        @keyframes clothingEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .clothing-card {
          animation: clothingEnter 0.7s ease-out both;
          -webkit-tap-highlight-color: transparent;
        }

        /* Desktop Hover Animation */
        @media (hover: hover) and (pointer: fine) {
          .clothing-card:hover {
            transform: translateY(-6px);
            border-color: #93c5fd;
            box-shadow: 0 10px 25px rgba(0,0,0,0.10);
          }

          .clothing-card:hover img {
            transform: scale(1.12);
          }
        }

        /* Mobile Touch Animation */
        @media (hover: none) {
          .clothing-card:active {
            transform: scale(0.96);
            border-color: #93c5fd;
            box-shadow: 0 8px 18px rgba(0,0,0,0.12);
          }

          .clothing-card:active img {
            transform: scale(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .clothing-card {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      {/* Section Heading */}
      <h2 className="mb-6 text-lg font-semibold text-gray-700">
        Clothing and Girls Collections
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">

        {products.map((product, index) => (
          <div
            key={product.id}
            style={{ animationDelay: `${index * 150}ms` }}
            className="clothing-card group cursor-pointer border border-gray-200 bg-white p-3 text-center transition-all duration-300"
          >

            {/* Product Image */}
            <div className="flex h-40 items-center justify-center overflow-hidden sm:h-48">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-contain transition-transform duration-500 ease-out"
              />
            </div>

            {/* Product Name */}
            <h3 className="mt-3 truncate text-sm text-gray-600">
              {product.name}
            </h3>

            {/* Product Price */}
            <div className="mt-2 flex flex-wrap items-center justify-center gap-2 text-sm">
              {product.oldPrice && (
                <span className="text-gray-400 line-through">
                  {product.oldPrice}
                </span>
              )}

              <span className="font-semibold text-gray-900">
                {product.price}
              </span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Clothing;
