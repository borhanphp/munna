"use client";

import { blogPosts } from "@/data/blog";
import { HiCalendar, HiClock, HiArrowRight } from "react-icons/hi";

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title">Latest Blog Posts</h2>
        <p className="section-subtitle">
          Thoughts, tutorials, and insights about software development
        </p>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 bg-gray-200 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/600x400?text=${encodeURIComponent(post.category)}`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-600 text-white rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <HiCalendar size={16} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HiClock size={16} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>

                <a
                  href={post.url}
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                >
                  Read More
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
          >
            View All Posts
            <HiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}

