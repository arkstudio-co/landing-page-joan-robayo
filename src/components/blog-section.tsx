import { BLOG_POSTS } from "@/lib/constants";

function BlogCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="aspect-square overflow-hidden mb-6 border border-primary/10">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 rounded-[15px]"
          src={image}
        />
      </div>
      <h3 className="subtitle text-xl leading-relaxed">
        {title}
      </h3>
    </div>
  );
}

export function BlogSection() {
  return (
    <section className="py-32 textured-bg">
      <div className="max-w-[85%] mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-8">
          <h2 className="text-6xl text-on-surface uppercase main-title">
            BLOG
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.title} title={post.title} image={post.image} />
          ))}
        </div>
        <div className="text-center pt-8">
          <p className="main-title text-5xl md:text-6xl text-on-surface">
            Transformemos tu idea en un tattoo increíble
          </p>
        </div>
      </div>
    </section>
  );
}
