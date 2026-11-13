
const products = [
  {
    id: 1,
    name: "Pulvinar augue",
    oldPrice: "",
    price: "$89.00",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500",
  },
  {
    id: 2,
    name: "Marius ligula",
    oldPrice: "$55.00",
    price: "$27.00",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500",
  },
  {
    id: 3,
    name: "Rorbi pulvina",
    oldPrice: "",
    price: "$79.00",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
  },
  {
    id: 4,
    name: "Morbi varius",
    oldPrice: "$65.00",
    price: "$45.00",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
  },
  {
    id: 5,
    name: "Fusce nec",
    oldPrice: "$100.00",
    price: "$99.00",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500",
  },
];

function PremiumProducts() {
  return (
    <section className="w-full overflow-hidden bg-gray-100 px-2 py-4 sm:px-4 sm:py-5 md:px-6">

      {/* Component Animations */}
      <style>{`
        @keyframes productEnter {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bannerEnter {
          from {
            opacity: 0;
            transform: translateX(25px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .product-card {
          animation: productEnter 0.7s ease-out both;
          -webkit-tap-highlight-color: transparent;
        }

        .ad-card {
          animation: bannerEnter 0.8s ease-out both;
        }

        /* Desktop Hover Animation */
        @media (hover: hover) and (pointer: fine) {
          .product-card:hover {
            transform: translateY(-6px);
            border-color: #93c5fd;
            box-shadow: 0 10px 25px rgba(0,0,0,0.10);
          }

          .product-card:hover img {
            transform: scale(1.12);
          }

          .ad-card:hover {
            transform: scale(1.02);
          }
        }

        /* Mobile Touch Animation */
        @media (hover: none) {
          .product-card:active {
            transform: scale(0.96);
            border-color: #93c5fd;
            box-shadow: 0 8px 18px rgba(0,0,0,0.12);
          }

          .product-card:active img {
            transform: scale(1.08);
          }

          .ad-card:active {
            transform: scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .product-card,
          .ad-card {
            animation: none;
            transition: none;
          }
        }
      `}</style>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_155px] xl:grid-cols-[minmax(0,1fr)_170px]">

        {/* Products Container */}
        <div className="min-w-0 rounded-lg bg-white p-3 sm:p-4">

          {/* Heading */}
          <div className="mb-4 flex items-center justify-between sm:mb-5">
            <h2 className="text-base font-bold text-gray-800 sm:text-lg">
              Premium Products
            </h2>

            <button className="text-xs font-semibold text-blue-700 transition-colors duration-300 hover:text-blue-900 active:scale-95 sm:text-sm">
              See All →
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-5">

            {products.map((product, index) => (
              <div
                key={product.id}
                style={{ animationDelay: `${index * 150}ms` }}
                className="product-card group min-w-0 cursor-pointer rounded-lg border border-gray-200 bg-white p-2 text-center transition-all duration-300 sm:p-3"
              >

                {/* Product Image */}
                <div className="flex h-28 items-center justify-center overflow-hidden sm:h-36 md:h-40 lg:h-32 xl:h-40">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-500 ease-out"
                  />

                </div>

                {/* Product Name */}
                <h3 className="mt-2 truncate text-xs font-medium text-gray-700 sm:mt-3 sm:text-sm">
                  {product.name}
                </h3>

                {/* Product Price */}
                <div className="mt-2 flex flex-wrap items-center justify-center gap-1 text-xs sm:gap-2 sm:text-sm">

                  {product.oldPrice && (
                    <span className="text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                  )}

                  <span className="font-bold text-blue-700">
                    {product.price}
                  </span>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* Flight Ticket Advertisement */}
        <div className="ad-card flex min-h-48 items-center justify-center overflow-hidden rounded-lg bg-blue-900 p-3 transition-transform duration-300 sm:min-h-56 lg:min-h-full">

          <div className="flex min-h-44 w-full flex-col items-center justify-center border border-blue-400 bg-blue-800 px-3 py-4 text-center text-white sm:min-h-52 lg:min-h-64">

            <p className="text-[10px] font-semibold tracking-widest sm:text-xs">
              SPECIAL OFFER
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-3xl xl:text-4xl">
              FLIGHT
              <br />
              TICKET
            </h2>

            <p className="mt-4 bg-yellow-400 px-3 py-2 text-base font-bold text-blue-950 sm:text-lg">
              40% OFF
            </p>

            <button className="mt-4 rounded-full border border-white px-4 py-2 text-xs font-semibold transition-all duration-300 hover:bg-white hover:text-blue-900 active:scale-95 sm:text-sm">
              BOOK NOW
            </button>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PremiumProducts;

