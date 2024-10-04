import React, { useState } from "react";
import { RxDoubleArrowRight } from "react-icons/rx";
import { FaStar, FaInstagram, FaFacebookF, FaTwitter, FaRegStarHalfStroke } from "react-icons/fa6";

const Package = () => {
  // State to track selected image
  const [selectedImage, setSelectedImage] = useState("https://images.unsplash.com/photo-1529245276044-5d989655f07e?q=80&w=3125&auto=format&fit=crop");
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

  // Function to handle smooth scrolling
  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="package-section" className="h-auto mx-auto my-8 px-6 md:px-32">
      <Breadcrumb onScrollToSection={handleScrollToSection} />
      <div className="flex gap-8 mt-8">
        <ProductImageList onImageClick={handleImageChange} />
        <MainProductImage selectedImage={selectedImage} />
        <ProductDetails
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

const Breadcrumb = ({ onScrollToSection }: { onScrollToSection: (sectionId: string) => void }) => (
  <div className="flex items-center space-x-2 text-gray-500">
    <BreadcrumbItem name="HOME" onClick={() => onScrollToSection("home-section")} />
    <RxDoubleArrowRight />
    <BreadcrumbItem name="SHOP" onClick={() => onScrollToSection("shop-section")} />
    <RxDoubleArrowRight />
    <BreadcrumbItem name="I LOVE MY PET CHARM BRACELET" onClick={() => onScrollToSection("package-section")} />
  </div>
);

const BreadcrumbItem = ({ name, onClick }: { name: string, onClick: () => void }) => (
  <h1 className="text-sm md:text-base cursor-pointer" onClick={onClick}>{name}</h1>
);

const ProductImageList = ({ onImageClick }: { onImageClick: (url: string) => void }) => {
  const imageUrls = [
    "https://plus.unsplash.com/premium_photo-1677002240252-af3f88114efc?q=80&w=2925&auto=format&fit=crop",
    "https://plus.unsplash.com/premium_photo-1679865372673-8d1655a73b50?q=80&w=2970&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1543746746-46047c4f4bb0?q=80&w=2970&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542560453-88e10bdc429f?q=80&w=3174&auto=format&fit=crop"
  ];

  return (
    <div className="flex flex-col space-y-4">
      {imageUrls.map((url, index) => (
        <div key={index} className="w-24 h-24">
          <img 
            src={url} 
            alt={`Product preview ${index + 1}`} 
            className="w-full h-full object-cover rounded-md shadow-md cursor-pointer"
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
      className="w-full h-full object-cover rounded-md shadow-md"
    />
  </div>
);

interface ProductDetailsProps {
  selectedDog: string;
  selectedColor: string;
  handleAnimalChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleColorChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

const ProductDetails = ({
  selectedDog,
  selectedColor,
  handleAnimalChange,
  handleColorChange,
  count,
  handleIncrement,
  handleDecrement,
}: ProductDetailsProps) => (
  <div className="flex-1 p-6 bg-white rounded-md shadow-lg">
    <h1 className="text-gray-500">JEWELRY</h1>
    <h2 className="text-2xl font-extrabold text-black mt-2">I LOVE MY PET CHARM BRACELET</h2>

    <div className="flex items-center space-x-2 mt-4">
      <div className="flex text-yellow-500">
        <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
      </div>
      <span className="text-gray-600">5 reviews</span>
    </div>

    <p className="text-3xl font-bold text-gray-800 mt-4">$25</p>

    <div className="mt-6">
      <ProductOption label="Bracelet Animal" value={selectedDog} handleChange={handleAnimalChange} options={["Dog", "Labrador", "Poodle", "Bulldog", "Beagle"]} />
      <ProductOption label="Color" value={selectedColor} handleChange={handleColorChange} options={["red", "blue", "black", "green", "white"]} />
    </div>

    <div className="flex justify-between items-center mt-4">
      <p className="text-gray-500">Availability: 10 in stock</p>
      <p className="text-gray-500">SKU: ILMPT-C</p>
    </div>

    <div className="flex items-center mt-6 space-x-4">
      <QuantitySelector count={count} handleIncrement={handleIncrement} handleDecrement={handleDecrement} />
      <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Add to Cart</button>
    </div>

    <ShareButtons />
  </div>
);

const ProductOption = ({ label, value, handleChange, options }: { label: string, value: string, handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void, options: string[] }) => (
  <div className="flex justify-between items-center mt-4">
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
  <div className="mt-6 flex items-center space-x-4">
    <h3 className="text-gray-500">SHARE ON:</h3>
    <div className="flex space-x-4 text-gray-500">
      <FaFacebookF />
      <FaTwitter />
      <FaInstagram />
    </div>
  </div>
);

export default Package;