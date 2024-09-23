import { FcAbout } from "react-icons/fc";
import { IoMdArrowRoundForward } from "react-icons/io";

const PopularPackage = ({}) => (
    <section
      id="section-1"
      className="flex flex-col justify-start py-20 md:py-40 gap-4 md:gap-8 h-screen px-6 md:px-16 scrollSnap"
    >
  
      <div className="flex justify-between">
  
        <h2 className="text-3xl md:text-4xl font-semibold text-start text-blue-500 mb-6 md:mb-8 flex gap-4 md:gap-8 items-center">
          <FcAbout className="h-12 md:h-16 w-12 md:w-16" /> POPULAR PACKAGES
        </h2>
        <IoMdArrowRoundForward className="w-8 h-8 cursor-pointer" />
      </div>
  
      <div>
        <p className="text-2xl text-gray-600">
          We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true.
        </p>
      </div>
  
      <div className="flex flex-col md:flex-row w-full gap-4">
  
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-1 flex-col items-center h-[60vh] bg-contain rounded-3xl overflow-hidden m-2" style={{ backgroundImage: `url(${""})` }}>
            <div className="w-full h-full gap-2 bg-black flex flex-col justify-end items-start bg-opacity-40 px-4 md:px-8 py-4">
              <div className="border border-white rounded-full px-4 py-2 text-white">
                Explore Here
              </div>
              <div className="flex flex-col bottom-4 left-4 text-white w-full">
                <h3 className="text-lg md:text-xl font-semibold">Expert Travel Advice</h3>
                <p className="text-xs md:text-sm mt-1">Tips and guides to enhance your travel experience.</p>
              </div>
            </div>
          </div>
        ))}
  
      </div>
    </section>
  );


  export default PopularPackage