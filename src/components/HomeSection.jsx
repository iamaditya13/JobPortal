import React from "react";

const HomeSection = () => {
  return (
    <>
      {/* Featured Companies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((company) => (
              <div
                key={company}
                className="h-24 bg-gray-50 border-2 border-gray-200 rounded-lg flex items-center justify-center hover:shadow-md transition-shadow duration-200 hover:border-gray-300"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs font-medium">
                    Logo
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Browse Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Technology", icon: "💻" },
              { name: "Healthcare", icon: "🏥" },
              { name: "Finance", icon: "💰" },
              { name: "Education", icon: "📚" },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-all duration-200 cursor-pointer hover:border-gray-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                10K
              </div>
              <div className="text-gray-700 font-medium text-lg">
                Jobs Posted
              </div>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                1K
              </div>
              <div className="text-gray-700 font-medium text-lg">Companies</div>
            </div>
            <div className="p-8 bg-gray-50 rounded-lg">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                5K
              </div>
              <div className="text-gray-700 font-medium text-lg">
                Applicants
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Testimonials
          </h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <div className="flex items-start space-x-1 mb-6">
              <svg
                className="w-8 h-8 text-gray-400 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>
            </div>
            <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </blockquote>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">John Doe</div>
                <div className="text-gray-500 text-sm">Software Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSection;
