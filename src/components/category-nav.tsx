import { CATEGORIES } from "@/lib/constants";

function CategoryCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="relative group overflow-hidden aspect-[4/5]">
      <img
        alt={`${title} Section`}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={image}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
      <div className="absolute inset-0 flex items-end justify-center pb-12">
        <div className="bg-white w-[70%] text-center shadow-2xl py-2">
          <h3 className="text-black main-title text-2xl tracking-[0.2em]">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}

export function CategoryNav() {
  return (
    <section id="gallery" className="bg-black pt-24 pb-0">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {CATEGORIES.map((cat) => (
          <CategoryCard key={cat.title} title={cat.title} image={cat.image} />
        ))}
      </div>
    </section>
  );
}
