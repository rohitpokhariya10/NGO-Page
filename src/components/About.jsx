const About = () => (
  <section id="about" className="py-20 px-6 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full mb-4">
          Our Story
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Empowering Communities Since 2010
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl text-gray-600 leading-relaxed">
            We are a non-profit organization dedicated to creating sustainable change through 
            education, healthcare, and women's empowerment initiatives in underserved communities.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-blue-600 text-4xl font-bold mb-4">12+</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Years of Service</h3>
          <p className="text-gray-600">
            Continuously working to bridge gaps in rural development since our founding.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-blue-600 text-4xl font-bold mb-4">25K+</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Lives Impacted</h3>
          <p className="text-gray-600">
            Direct beneficiaries across our education and healthcare programs.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-blue-600 text-4xl font-bold mb-4">6</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">States Reached</h3>
          <p className="text-gray-600">
            Expanding our footprint to serve more communities each year.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            To break the cycle of poverty through sustainable interventions in education, 
            healthcare access, and economic empowerment, with special focus on women 
            and children in rural communities.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Community-led development models</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Evidence-based program design</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">Partnerships with local stakeholders</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-200 rounded-xl overflow-hidden aspect-video">
          {/* Placeholder for an image or video - in practice you would use next/image or similar */}
          <div className="w-full h-full flex items-center justify-center bg-blue-50 text-blue-400">
          <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-20 h-20 text-red-500"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
  />
</svg>

              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;