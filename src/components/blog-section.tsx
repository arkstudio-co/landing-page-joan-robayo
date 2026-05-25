import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

type BlogCardProps = (typeof BLOG_POSTS)[number];

function BlogCard({ title, image, slug }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden mb-6 border border-primary/10">
        <Image
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0 rounded-[15px]"
          src={image}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <h3 className="text-white text-xl leading-relaxed">
        {title}
      </h3>
    </Link>
  );
}

export function BlogSection() {
  return (
    <section id="blog" className="py-20 textured-bg">
      <div className="max-w-[85%] mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-8">
          <h2 className="text-2xl md:text-4xl text-on-surface uppercase main-title">
            BLOG
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <div className="text-center pt-8">
          <p className="main-title text-2xl md:text-4xl text-on-surface">
            Transformemos tu idea en un tattoo increíble
          </p>
        </div>
      </div>
    </section>
  );
}
