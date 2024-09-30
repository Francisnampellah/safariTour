import { GiConvergenceTarget } from "react-icons/gi";

const AboutUsSection = () => (
  <section
    id="section-1"
    className="flex flex-col justify-center gap-8 md:gap-16 sm_pd md:px-32 lg:py-[110px]"
  >
    <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-6 md:mb-8 flex gap-4 md:gap-8 items-center">
      <GiConvergenceTarget className="h-12 md:h-16 w-12 md:w-16" /> Who Are We
    </h2>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="flex flex-1 flex-col">
        <p className="text-xl md:text-5xl text-gray-600">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
          <span className="text-gray-300 block mt-2 md:mt-4">
            Our mission is to provide you with the best travel experiences.
          </span>
        </p>
        <button className="flex md:self-start  justify-center items-center gap-4 border sm_pd font-bold text-2xl border-blue-500 text-blue-500 rounded-full mt-4 md:mt-8">
          Learn More
        </button>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center rounded-lg p-4 m-2">
            <span className="text-3xl md:text-4xl text-blue-600 font-extrabold">{item.count}</span>
            <span className="text-lg md:text-xl text-gray-400">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutUsSection



const data = [
  { id: 1, count: '+620', description: 'Passionate team' },
  { id: 2, count: '+450', description: 'Successful projects' },
  { id: 3, count: '+800', description: 'Happy clients' },
  { id: 4, count: '+1,200', description: 'Innovative solutions' },
];