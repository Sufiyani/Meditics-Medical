import React, { useState } from 'react';
import { ChevronRight, Search, Calendar, User, MessageCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Role of Physical Therapy in Recovery",
      author: "Admin",
      readTime: "04 Min Read",
      comments: 0,
      date: "May 12, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg",
      description: "Physical therapy plays a crucial role in helping patients recover from injuries and surgeries. Learn about the latest techniques and how they can accelerate your healing process.",
      category: "Health & Wellness"
    },
    {
      id: 2,
      title: "The Power of Volunteers in Patient Recovery",
      author: "Dr. Sarah Johnson",
      readTime: "06 Min Read",
      comments: 3,
      date: "May 10, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg",
      description: "Experience the daily challenges and rewards of nursing in a modern hospital setting. From patient care to emergency response, discover what makes nursing one of the most fulfilling healthcare professions.",
      category: "Medical Education & Tips"
    },
    {
      id: 3,
      title: "Meet the Team Interviews with Our Medical",
      author: "Dr. Michael Chen",
      readTime: "05 Min Read",
      comments: 1,
      date: "May 8, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg",
      description: "Learn why preventive healthcare is crucial for long-term wellness and how to implement it in your routine. Discover the benefits of regular check-ups and early detection.",
      category: "Preventive Care"
    },
  ];

  const categories = [
    { name: "Health & Wellness", count: 8 },
    { name: "Preventive Care", count: 11 },
    { name: "Nutrition & Lifestyle", count: 13 },
    { name: "Senior & Geriatric Care", count: 11 },
    { name: "Medical Education & Tips", count: 7 },
    { name: "Surgery & Recovery", count: 7 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: "A Day in the Life of a Hospital Nurse",
      date: "May 12, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-1.jpg"
    },
    {
      id: 2,
      title: "Understanding Mental Health in Modern Times",
      date: "May 10, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-2.jpg"
    },
    {
      id: 3,
      title: "Technology in Modern Healthcare",
      date: "May 8, 2025",
      image: "https://meditics.temptics.com/assets/img/blog-wide-3.jpg"
    },
  ];

  const BlogPostCard = ({ post }) => (
    <article className="bg-white rounded-xl shadow-md overflow-hidden mb-6 sm:mb-8 hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Metadata */}
        <div className="flex flex-col xs:flex-row xs:items-center xs:space-x-4 space-y-2 xs:space-y-0 text-xs text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MessageCircle className="w-3 h-3" />
            <span>{post.comments} Comments</span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg sm:text-xl md:text-xl font-bold text-gray-900 mb-4 hover:text-primary-600 transition-colors duration-200 line-clamp-2 min-h-[3rem]">
          {post.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-sm line-clamp-3 min-h-[4.5rem]">
          {post.description}
        </p>

        {/* Read More Button */}
        <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm w-full sm:w-auto justify-center sm:justify-start">
          <span>Read More</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </article>
  );

  const Sidebar = () => (
    <div className="space-y-6 sm:space-y-8">
      {/* Search */}
      <div className="bg-gray-200 rounded-2xl shadow-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Search Here</h3>
        <div className="relative">
          <div className="flex rounded-full overflow-hidden border border-gray-200 bg-gray-50">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none text-sm"
            />
            <button className="px-3 sm:px-4 flex items-center justify-center text-[#0f2851] hover:opacity-80">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-200 rounded-2xl shadow-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Categories</h3>
        <ul className="space-y-2 sm:space-y-3">
          {categories.map((category, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex items-center justify-between text-gray-600 hover:text-[#0f2851] transition-colors duration-200 group py-1"
              >
                <span className="group-hover:text-primary-600 transition-transform duration-200 text-sm sm:text-base">
                  {category.name}
                </span>
                <span className="bg-gray-100 text-gray-500 text-xs sm:text-sm px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-gray-200 rounded-2xl shadow-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Recent Posts</h3>
        <div className="space-y-3 sm:space-y-4">
          {recentPosts.map((post) => (
            <div key={post.id} className="flex space-x-3 sm:space-x-4 group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex-shrink-0 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-1 text-xs sm:text-sm text-gray-500 mb-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-[#0f2851]">
        {/* Background decoration */}
        <div className="absolute inset-0">
          {/* Medical cross decoration - upper right */}
          <div className="absolute top-8 sm:top-16 right-1/4 text-white/10 transform rotate-12">
            <svg className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,12V3A1,1 0 0,0 16,2H8A1,1 0 0,0 7,3V12H2V14H7V21A1,1 0 0,0 8,22H16A1,1 0 0,0 17,21V14H22V12H17Z" />
            </svg>
          </div>

          {/* Medical cross decoration - lower left */}
          <div className="absolute bottom-8 sm:bottom-20 left-1/4 text-white/10 transform -rotate-12">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17,12V3A1,1 0 0,0 16,2H8A1,1 0 0,0 7,3V12H2V14H7V21A1,1 0 0,0 8,22H16A1,1 0 0,0 17,21V14H22V12H17Z" />
            </svg>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
            Blog Standard
          </h1>

          {/* Breadcrumb Navigation */}
          <nav className="flex items-center justify-center space-x-2 text-white/90">
             <Link to="/" className="hover:text-blue-300">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" />
            <span className="text-white font-medium text-sm sm:text-base">Blog Standard</span>
          </nav>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
            {/* Left Column - Blog Posts */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;