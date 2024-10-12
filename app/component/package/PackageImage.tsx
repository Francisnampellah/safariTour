import React, { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaStar, FaInstagram, FaFacebookF, FaTwitter, FaRegStarHalfStroke } from "react-icons/fa6";
import TourParticular from "../TourParticular";

const Package = ({ item }: { item: any }) => {
  const [selectedImage, setSelectedImage] = useState(item.banner);
  const [selectedDog, setSelectedDog] = useState("Dog");
  const [selectedColor, setSelectedColor] = useState("red");
  const [count, setCount] = useState(0);




  const handleAnimalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDog(event.target.value);
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(event.target.value);
  };

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => count > 0 && setCount(count - 1);

  // Handler to change the main image
  const handleImageChange = (newImageUrl: string) => {
    setSelectedImage(newImageUrl);
  };





  return (
    <section id="package-section" className="h-auto mx-auto my-8 px-4 md:px-32">
      <Breadcrumb item={item} />
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <ProductImageList item={item} onImageClick={handleImageChange} />
        <MainProductImage selectedImage={selectedImage} />
        <ProductDetails
          item={item}
          selectedDog={selectedDog}
          selectedColor={selectedColor}
          handleAnimalChange={handleAnimalChange}
          handleColorChange={handleColorChange}
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </div>
    </section>
  );
};

const Breadcrumb = ({ item }: { item: any }) => (
  <div className="flex items-center space-x-2 text-gray-500 text-sm md:text-base">
    <BreadcrumbItem name="HOME" />
    <RxDoubleArrowRight />
    <BreadcrumbItem name="PACKAGES" />
    <RxDoubleArrowRight />
    <BreadcrumbItem name={capitalizeString(item.title)} />
  </div>
);

const BreadcrumbItem = ({ name }: { name: string }) => (
  <h1 className="cursor-pointer">{name}</h1>
);

const ProductImageList = ({ onImageClick, item }: { onImageClick: (url: string) => void, item: any }) => {
  const imageUrls = [];

  // Add the banner image
  if (item.banner) {
    imageUrls.push(item.banner);
  }

  // Add images from day itineraries
  if (item.dayItineraries && Array.isArray(item.dayItineraries)) {
    item.dayItineraries.forEach((itinerary: any) => {
      if (itinerary.image) {
        imageUrls.push(itinerary.image);
      }
    });
  }

  return (
    <div className="flex md:flex-col space-x-4 md:space-y-4">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-16 h-16 md:w-24 md:h-24">
          <img
            src={url}
            alt={`Product preview ${index + 1}`}
            className="w-full h-full object-contain rounded-md shadow-md cursor-pointer"
            onClick={() => onImageClick(url)} // Call onImageClick when clicked
          />
        </div>
      ))}
    </div>
  );
};

const MainProductImage = ({ selectedImage }: { selectedImage: string }) => (
  <div className="flex-1">
    <img
      src={selectedImage}
      alt="Main product"
      className="w-full h-64 md:h-full object-contain rounded-md shadow-md"
    />
  </div>
);

interface ProductDetailsProps {
  item: any,
  selectedDog: string;
  selectedColor: string;
  handleAnimalChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ProductDetails = ({
  item,
  selectedDog,
  selectedColor,
  handleAnimalChange,
  handleColorChange,
  count,
  handleIncrement,
  handleDecrement,
}: ProductDetailsProps) => (
  <div className="flex-1 p-6 bg-white rounded-md shadow-lg">
    <h1 className="text-gray-500 text-sm md:text-base">{item.tourFocus}</h1>
    <h2 className="text-xl md:text-2xl font-extrabold text-black mt-2">{item.title}</h2>

    <div className="flex items-center space-x-2 mt-4">
      <div className="flex text-yellow-500">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
      </div>
      <span className="text-gray-600 text-sm">5 reviews</span>
    </div>

    <p className="text-xl md:text-3xl font-bold text-gray-800 mt-4 px-8">$ USD {item.basePrice}</p>

    {/* <div className="mt-6">
      <ProductOption label="Bracelet Animal" value={selectedDog} handleChange={handleAnimalChange} options={["Dog", "Labrador", "Poodle", "Bulldog", "Beagle"]} />
      <ProductOption label="Color" value={selectedColor} handleChange={handleColorChange} options={["red", "blue", "black", "green", "white"]} />
    </div> */}

    <div className="flex px-8 py-5 gap-8">

      <div>

        <TourParticular title="Tour level" content={item.tourLevel} />
        <TourParticular title="Tour Focus" content={item.tourFocus} />


      </div>

      <div>
        <TourParticular title="Start At" content={item.tourStartCity} />
        <TourParticular title="End At" content={item.tourEndCity} />

      </div>

    </div>

    {/* <div className="flex justify-between items-center mt-4 text-sm md:text-base">
      <p className="text-gray-500">Availability: 10 in stock</p>
      <p className="text-gray-500">SKU: ILMPT-C</p>
    </div>

    <div className="flex flex-col md:flex-row items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
      <QuantitySelector count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <button className="w-full md:w-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
    </div> */}

    <ShareButtons />
  </div>
);

const ProductOption = ({ label, value, handleChange, options }: { label: string, value: string, handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[] }) => (
  <div className="flex justify-between items-center mt-4 text-sm md:text-base">
    <p>{label}</p>
    <select value={value} onChange={handleChange} className="bg-transparent border-b border-gray-300 focus:outline-none">
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const QuantitySelector = ({ count, handleIncrement, handleDecrement }: { count: number, handleIncrement: () => void, handleDecrement: () => void }) => (
  <div className="flex items-center border px-4 py-2 rounded-md space-x-4">
    <button onClick={handleDecrement} className="text-gray-500">-</button>
    <span className="text-black">{count}</span>
    <button onClick={handleIncrement} className="text-gray-500">+</button>
  </div>
);

const ShareButtons = () => (
  <div className="mt-6 flex items-center space-x-4 text-sm md:text-base">
    <h3 className="text-gray-500">SHARE ON:</h3>
    <div className="flex space-x-4 text-gray-500">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
    </div>
  </div>
);

export default Package;

function capitalizeString(str: string): string {
  if (!str) return str; // Return the original string if it's empty or undefined
  return str.toUpperCase();
}