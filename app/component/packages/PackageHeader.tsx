import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
const PackagesHeader = () => {
  return (
    <div className=" w-[88%]  my-5 mx-auto">
      <h5 className="font-normal mb-3 text-sm"> TOP PLACES</h5>
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl">Popular Destination</h2>
        <span className="text-xs text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
          pariatur, dolor nobis possimus magni recusandae atque, sed odio harum
        </span>
      </div>
      <div className=" my-5">
        <button className="border border-s outline-none text-sm p-3 bg-gray-600 m-2  text-gray-300 rounded-3xl">
          Discover More
        </button>
      </div>

      <div className="grid grid-cols-3 gap-y-10 justify-center">
        {destinations.map((destination, index) => (
          <div key={index} className="h-full flex justify-center">
            <div className="card bg-base-100  w-[90%] shadow rounded-3xl">
              <figure>
                <img
                  src={destination.imageUrl}
                  alt={destination.alt}
                  className="rounded-tl-3xl h-[30vh] w-full object-cover rounded-tr-3xl"
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between p-4">
                  <h2 className="card-title">{destination.name}</h2>
                  <div className="badge badge-secondary">
                    {destination.price}
                  </div>
                </div>
                <div className="flex flex-col w-full h-[35%]  justify-between items-center px-4 py-1 gap-2 mt-4">
                  <div className=" text-sm line-clamp-3">
                    {destination.details}
                  </div>
                  <div className=" flex justify-between items-center w-full">
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

const destinations = [
  {
    name: "Serengeti National Park",
    alt: "Zebras",
    price: "$1900",
    details:
      "Witness the Great Migration and diverse wildlife in Serengeti National Park. Explore the vast savannahs and spot the Big Five. Enjoy a hot air balloon safari over the plains.",
    imageUrl:
      "https://images.unsplash.com/photo-1580687774199-51c183723dd8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VyZW5nZXRpfGVufDB8fDB8fHww",
  },
  {
    name: "Mount Kilimanjaro",
    price: "$1650",
    alt: "Mountain",
    details:
      "Climb the highest peak in Africa, Mount Kilimanjaro. Experience the diverse climatic zones from base to summit. Enjoy breathtaking views from the top.",
    imageUrl:
      "https://images.unsplash.com/photo-1464560049566-0f334ba2e071?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bnQlMjBraWxpbWFuamFyb3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Zanzibar",
    price: "$1500",
    alt: "Man on the Shore",
    details:
      "Relax on the pristine beaches of Zanzibar. Explore the historic Stone Town and its rich culture. Enjoy water sports and the vibrant marine life.",
    imageUrl:
      "https://images.unsplash.com/photo-1627899314316-7cf3f106d969?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8emFuemliYXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Ngorongoro Crater",
    alt: "Zebras feeding",
    price: "$1750",
    details:
      "Discover the unique ecosystem of Ngorongoro Crater. Spot a variety of wildlife in this natural wonder. Enjoy the stunning views from the crater rim.",
    imageUrl:
      "https://images.unsplash.com/photo-1516494982030-fda424f96b59?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tarangire National Park",
    alt: "Elephants grazing",
    price: "$1600",
    details:
      "Explore the diverse landscapes and wildlife of Tarangire National Park. Witness the large elephant herds and ancient baobab trees. Enjoy bird watching and game drives.",
    imageUrl:
      "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFyYW5naXJlfGVufDB8fDB8fHww",
  },
  {
    name: "Selous Game Reserve",
    alt: "Girraffe ",
    price: "$1300",
    details:
      "Experience the vast wilderness of Selous Game Reserve. Enjoy boat safaris on the Rufiji River. Spot diverse wildlife and enjoy the remote, untouched landscapes.",
    imageUrl:
      "https://images.unsplash.com/photo-1541794178880-181eef696cd1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2Vsb3VzJTIwcmVzZXJ2ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];
