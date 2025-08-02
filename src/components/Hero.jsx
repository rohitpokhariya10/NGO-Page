const Hero = () => (
  <section 
    id="home" 
    className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-24 px-4 md:py-32"
  >
    <div className="max-w-4xl mx-auto">
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Empowering Communities for a <span className="text-yellow-300">Brighter Future</span>
        </h1>
        
        <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          We're dedicated to creating sustainable change through education, environmental conservation, 
          and community empowerment initiatives worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="#volunteer" 
            className="px-8 py-3 bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold rounded-lg shadow-md transition duration-300 transform hover:scale-105"
          >
            Join Our Volunteers
          </a>
          <a 
            href="#donate" 
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg shadow-md transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </div>
    </div>
    
    {/* Decorative elements */}
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-10"></div>
  </section>
);

export default Hero;