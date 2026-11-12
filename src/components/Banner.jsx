
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "EXCLUSIVE",
    subtitle: "COLLECTION",
    discount: "70%",
    offer: "OFF",
    button: "ORDER NOW",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800",
    bg: "#b89b6b",
  },
  {
    title: "SPECIAL",
    subtitle: "FASHION SALE",
    discount: "50%",
    offer: "OFF",
    button: "SHOP NOW",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800",
    bg: "#8c9b83",
  },
];

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="group relative mx-1 mt-3 h-40 overflow-hidden bg-white sm:h-47.5 md:h-55">

      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative flex h-full w-full shrink-0 overflow-hidden"
            style={{ backgroundColor: slide.bg }}
          >

            <div className="relative z-10 flex h-full w-[46%] flex-col items-center justify-center bg-white text-center [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]">

              <h2 className="text-sm font-extrabold text-black sm:text-2xl md:text-3xl">
                {slide.title}
              </h2>

              <h1 className="text-base font-black text-[#b89b6b] sm:text-3xl md:text-4xl">
                {slide.subtitle}
              </h1>

              <div className="mt-2 flex gap-1">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className="h-1.5 w-1.5 bg-black sm:h-2 sm:w-2"
                  />
                ))}
              </div>

            </div>

            <div className="z-10 flex w-[25%] flex-col items-center justify-center text-center text-white">

              <h1 className="text-3xl font-black sm:text-5xl md:text-6xl">
                {slide.discount}
              </h1>

              <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
                {slide.offer}
              </h2>

              <button className="mt-2 flex items-center gap-1 border-2 border-white px-2 py-1 text-[8px] font-bold text-white transition hover:bg-white hover:text-black sm:text-xs">
                {slide.button}
                <ArrowRight size={12} />
              </button>

            </div>

            <div className="h-full w-[29%] overflow-hidden">
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white opacity-0 transition group-hover:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/30 p-1.5 text-white opacity-0 transition group-hover:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      <div className="absolute bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-2">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-5 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}

      </div>

    </section>
  );
}

export default Banner;