const Insights = () => {
  const posts = [
    {
      title: "The Meta Ads Library: 5 Competitive Advantages for Advertisers",
      excerpt: "Our Media Buyer, Rebecca Flynn, goes over five competitive advantages for advertisers using the Meta Ads Library",
      link: "#",
    },
    {
      title: "Five Tips to Help Your LinkedIn Ad Campaigns",
      excerpt: "Our Media Buyer, Rebecca Flynn, covers five tips on how to help your LinkedIn ad campaigns.",
      link: "#",
    },
    {
      title: "SEO versus SEM: What's the Difference?",
      excerpt: "In this article we dive into the differences between SEO and SEM and how both benefit your business in different ways. Our team of Digital Marketing experts use SEO and SEM best practices and data analytics to help you grow your bottom line. Ready to learn more?",
      link: "#",
    },
  ];

  return (
    <section className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic uppercase mb-16 text-foreground text-center">
          Insights
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="p-8 bg-card border-l-4 border-foreground hover:border-accent hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group flex flex-col"
            >
              <h3 className="font-display text-xl font-bold italic mb-4 text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                {post.excerpt}
              </p>
              <a 
                href={post.link}
                className="font-display text-accent hover:underline text-sm font-bold italic inline-block"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
