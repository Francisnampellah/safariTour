import React, { useEffect, useState } from 'react';
import Header from "~/component/header";
import PackageDescription from '~/component/package/PackageDescription';
import PackageImage from "~/component/package/PackageImage"
import PackageOffer from '~/component/package/PackageOffer';
import { useParams } from 'react-router-dom';
import Packages from "../asserts/packages.json";

export default function packageDetail() {

  const [Package, setPackage] = useState<any>();
  const { id } = useParams();

  if (id) {

  }

  useEffect(() => {
    function findTourPackageById(id: number) {
      return Packages.find(packag => packag.id === id);
    }
    if (id) {
      setPackage(findTourPackageById(+id));
    }
  }, [id]);



  if (!Package) {
    return (<div>No package</div>)
  }




  return (
    <div className='flex flex-col w-full'>
      <div className='flex h-auto flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]'>
        <div className="relative w-full shadow-sm bg-cover h-[20vh] md:h-[30vh] rounded-3xl overflow-hidden bg-center" style={{ backgroundImage: `url(${Package.banner})` }} >
          <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-40 ">
            <Header />
          </div>
        </div>

      </div>
      <PackageImage item={Package} />
      <PackageDescription item={Package} />
      <PackageOffer item={Package} />

    </div>
  );
}
