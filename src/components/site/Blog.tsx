import herbs from "@/assets/hero-herbs.jpg";
import lifestyle from "@/assets/hero-lifestyle.jpg";
import prep from "@/assets/hero-prep.jpg";

const posts = [
  { title: "5 Hidden Benefits of Ayurveda", date: "May 12, 2025", tag: "Wisdom", image: herbs, excerpt: "Discover ancient healing principles that still shape modern wellness." },
  { title: "Your Daily Herbal Skincare Routine", date: "Apr 28, 2025", tag: "Skincare", image: lifestyle, excerpt: "A simple morning ritual using natural botanicals for glowing skin." },
  { title: "Natural Healing Tips for Stress", date: "Apr 02, 2025", tag: "Wellness", image: prep, excerpt: "Calm your mind with time-tested herbal remedies and rituals." },
];

export function Blog() {
  return (
    <section className="py-24 container mx-auto px-6">
      <div className="flex items-end justify-between gap-6 mb-12">
        <div>
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-3">Journal</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium max-w-xl text-balance">
            Stories from the herbal world.
          </h2>
        </div>
        <a href="/blog" className="hidden md:inline-block text-sm font-medium text-primary hover:underline underline-offset-4">
          All articles →
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.title} className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-accent/30 text-primary font-medium">{post.tag}</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-display text-xl font-medium leading-snug group-hover:text-primary transition">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{post.excerpt}</p>
              <a href="/blog" className="inline-block mt-4 text-sm font-semibold text-primary">
                Read article →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
