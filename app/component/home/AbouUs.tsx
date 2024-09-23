
const AboutUsSection = () => (
  <section
    id="section-1"
    className="flex flex-col justify-start my-4 py-20 md:py-40 gap-8 md:gap-16 h-screen px-6 md:px-16 "
  >
    <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-6 md:mb-8 flex gap-4 md:gap-8 items-center">
      <FcAbout className="h-12 md:h-16 w-12 md:w-16" /> ABOUT US
    </h2>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="flex flex-1">
        <p className="text-2xl md:text-5xl text-gray-600">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
          <span className="text-gray-300 block mt-2 md:mt-4">
            Our mission is to provide you with the best travel experiences.
          </span>
        </p>
      </div>

      <div className="flex flex-1 flex-col md:flex-row gap-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="flex flex-1 flex-col items-center rounded-lg p-4 m-2">
            <span className="text-3xl md:text-4xl font-extrabold">+620</span>
            <span className="text-lg md:text-xl text-gray-400">Passionate team</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUsSection