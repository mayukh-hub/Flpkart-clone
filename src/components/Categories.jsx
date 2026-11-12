import {
  Watch,
  Headphones,
  Sparkles,
  Tags,
  Trophy,
  Camera,
  Armchair,
  Shirt,
  Laptop,
  Monitor
} from "lucide-react";


const categories = [
  { name: "Accessories", icon: Watch, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Audio", icon: Headphones, color: "text-orange-600", bg: "bg-orange-50" },
  { name: "Beauty", icon: Sparkles, color: "text-pink-600", bg: "bg-pink-50" },
  { name: "Best Deals", icon: Tags, color: "text-red-600", bg: "bg-red-50" },
  { name: "Best Seller", icon: Trophy, color: "text-yellow-600", bg: "bg-yellow-50" },
  { name: "Cameras", icon: Camera, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "Chair", icon: Armchair, color: "text-green-600", bg: "bg-green-50" },
  { name: "Clothing", icon: Shirt, color: "text-indigo-600", bg: "bg-indigo-50" },
  { name: "Computer & Laptop", icon: Laptop, color: "text-cyan-600", bg: "bg-cyan-50" },
  { name: "Electronics", icon: Monitor, color: "text-teal-600", bg: "bg-teal-50" },
];


function Categories() {
  return (
    <section className="bg-white px-4 py-4 shadow-sm">

      <div className="flex items-center justify-between gap-4 overflow-x-auto">

        {categories.map((category, index) => {
          const Icon = category.icon;

          return (
            <div
              key={index}
              className="flex min-w-90px cursor-pointer flex-col items-center gap-2 rounded-lg p-3 transition hover:bg-blue-50"
            >
              
<div className={`flex h-14 w-14 items-center justify-center rounded-xl ${category.bg} ${category.color} transition hover:scale-110`}>
  <Icon size={27} strokeWidth={1.8} />
</div>


              <p className="whitespace-nowrap text-xs font-medium text-gray-700">
                {category.name}
              </p>
            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Categories;