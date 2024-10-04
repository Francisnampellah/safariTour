import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { destinations } from "~/utils/toursController";

interface Destination {
  name: string;
  alt: string;
  details: string;
  price: string;
  imageUrl: string;
}

const PackagesHeader = () => {
  const [result, setResult] = useState<Destination[]>([]);

  const loadTours = () => {
    setResult(destinations);
  };

  const handleChange = (e: any) => {
    const { value } = e.target;
    handleSearch(destinations, value);
  };

  const handleSearch = (data: any, search: any) => {
    const item = data.filter((location: any) => {
      const searchTerm = search.trim().toLowerCase();
      const nameMatches = location.name.toLowerCase().includes(searchTerm);
      const priceMatches = +location.price <= +searchTerm;
      return nameMatches || priceMatches;
    });

    setResult(item);
  };

  useEffect(() => {
    loadTours();
  }, []);

  return (
    <div className="w-[90%] mx-auto my-5">
      <h5 className="font-normal mb-3 text-sm">TOP PLACES</h5>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl text-center">Popular Destination</h2>
        <span className="text-xs text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          pariatur, dolor nobis possimus magni recusandae atque, sed odio harum
        </span>
      </div>
      <div className="my-5 flex flex-col md:flex-row justify-between">
        <button className="border border-s outline-none text-sm p-3 bg-gray-600 m-2 text-gray-300 rounded-3xl">
          Discover More
        </button>

        <div className="flex justify-center">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow p-2"
              placeholder="Budget or Destination"
              onChange={(e) => handleChange(e)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 justify-center">
        {result.map((result, index) => (
          <div key={index} className="h-full flex justify-center">
            <div className="card bg-base-100 w-full md:w-[90%] shadow rounded-3xl">
              <figure>
                <img
                  src={result.imageUrl}
                  alt={result.alt}
                  className="rounded-tl-3xl h-[30vh] w-full object-cover rounded-tr-3xl"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between px-4 py-3">
                  <h2 className="card-title text-lg">{result.name}</h2>
                  <div className="badge badge-primary text-gray-50 font-black p-3">
                    <span className="tracking-widest">${result.price}</span>
                  </div>
                </div>
                <div className="flex flex-col w-full h-[35%] justify-between items-center px-4  gap-2 ">
                  <div className="text-sm line-clamp-7">{result.details}</div>
                  <div className="flex justify-between items-center w-full">
                    {[...Array(4)].map((_, index) => (
                      <FontAwesomeIcon
                        key={index}
                        icon={faStar}
                        className="text-yellow-500 w-3 h-3"
                      />
                    ))}
                    <button className="ml-auto border border-s outline-none text-sm w-[25%] py-2 bg-gray-600 m-2 text-gray-300 rounded-3xl">
                      Action
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesHeader;
