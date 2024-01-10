import Image from "next/image";

const Hero = () => {
 return (
  <section className="bg-slate-100 p-8" style={{ backgroundColor: "#D4FCF9" }}>
      <div className="container flex flex-col md:flex-row items-center px-6 mx-auto mt-10 space-y-8 md:space-y-0">
        <div className="md:w-1/2 flex flex-col space-y-8">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          <span style={{ color: "#E86363" }}>Best</span> home health-care service <span style={{ color: "#E86363" }}>platform</span> in Vietnam
          </h1>
          <p className="max-w-sm text-center text-slate-500 md:text-left">
            Experience the future of healthcare with Lumos – connecting quality
            home-based medical services at your fingertips.
          </p>
          <div className="flex items-stretch justify-center mt-4">
            <input
              className="flex-shrink-0 h-full appearance-none bg-transparent border-b border-b-2 border-blue-500 w-2/3 md:w-1/2 text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <div>
            <Image
              alt="lumos"
              src="/doctor.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
 );
};

export default Hero;