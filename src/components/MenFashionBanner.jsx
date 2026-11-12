
import { useState, useEffect } from "react";

function MenFashionBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Multiple banner images
  const bannerImages = [
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1400",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1400",
    "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1400",
    "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1400",
  ];

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % bannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mx-2 my-4 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">

      <div className="grid grid-cols-1 md:grid-cols-[35%_65%]">

        {/* LEFT SIDE - MEN'S FASHION */}
        <div className="animate-[fadeUp_0.8s_ease-out_both] bg-white p-4">

          <h2 className="mb-4 text-lg font-semibold text-gray-700">
            Men's Fashion
          </h2>

          <div className="grid grid-cols-2 gap-3">

            {/* First Image */}
            <div className="group h-44 overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500"
                alt="Men's fashion"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Second Image */}
            <div className="group h-44 overflow-hidden border border-gray-200 bg-gray-50">
              <img
                src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=500"
                alt="Men's formal fashion"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - AUTOMATIC IMAGE SLIDER */}
        <div className="group relative min-h-57.5 overflow-hidden bg-gray-200">

          {/* Multiple Background Images */}
          {bannerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Fashion collection ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out group-hover:scale-105 ${
                activeSlide === index
                  ? "scale-100 opacity-100"
                  : "scale-105 opacity-0"
              }`}
            />
          ))}

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-white/15" />

          {/* Banner Text */}
          <div className="relative z-10 flex min-h-57.5 flex-col justify-center px-6 py-8 sm:px-10 md:px-12">

            <h1 className="max-w-lg animate-[fadeUp_1s_ease-out_both] text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
              Top Selling Products
            </h1>

            <p className="mt-3 animate-[fadeUp_1.2s_ease-out_both] text-sm font-medium text-gray-700 sm:text-base">
              Trending Now: Must-Have Styles for Every Occasion
            </p>

          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 right-5 z-20 flex gap-2">
            {bannerImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-7 bg-blue-600"
                    : "w-2.5 bg-white/80 hover:bg-white"
                }`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Custom Animation */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

    </section>
  );
}

export default MenFashionBanner;


