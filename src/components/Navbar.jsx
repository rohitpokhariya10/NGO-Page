const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        {/* Logo/Brand */}
        <div className="flex-shrink-0 flex items-center">
          <h1 className="text-2xl font-bold text-blue-800">
            <span className="text-yellow-500">NGO</span> Mission
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:ml-6 md:flex md:space-x-8">
          <a 
            href="#home" 
            className="border-yellow-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:border-yellow-400 hover:text-blue-700 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#about" 
            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
          >
            About Us
          </a>
         
          <a 
            href="#volunteer" 
            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-300"
          >
            Volunteer
          </a>
         
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#donate"
            className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
          >
            Donate Now
          </a>
        </div>

        {/* Mobile menu button (would need state for functionality) */}
        <div className="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon would go here */}
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* Mobile menu (would need state to toggle) */}
    {/* <div className="md:hidden">
      <div className="pt-2 pb-3 space-y-1">
        Mobile navigation items would go here
      </div>
    </div> */}
  </nav>
);

export default Navbar;