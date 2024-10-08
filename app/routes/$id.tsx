import React ,{ useEffect, useState } from 'react';
import Header from "~/component/header";
import PackageDescription from '~/component/package/PackageDescription';
import  PackageImage from "~/component/package/PackageImage"
import PackageOffer from '~/component/package/PackageOffer';
import { useParams } from 'react-router-dom';
import Packages from "../asserts/packages.json";

export default function packageDetail() {

  const [Package, setPackage] = useState<any>();

  const { id } = useParams();

  console.log(id);



  useEffect(() => {
    function findTourPackageById(id:number|string) {
      return Packages.find(packag => packag.id === id);
    }
    
    if(id){
      setPackage(findTourPackageById(id));
    }
  },[id]);







    const AllImages = {
        Heroimage: {
          imageUrl: "https://img.freepik.com/free-photo/group-colombian-male-friends-spending-time-together-having-fun_23-2151356469.jpg?t=st=1727858217~exp=1727861817~hmac=3f91fc96bef75d705338264363653ba6d49dc6dce7ee88da5c138a67e4a08290&w=1060",
          StyleClass: "bg-cover b-center",
          alt: "Banner Image"
        },
        BannerImages: {
          imageUrl: "https://images.unsplash.com/photo-1520124442480-b5c60b0f80c2?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          StyleClass: "bg-cover b-center",
          alt: "Banner Image"
        }
      }
    return (
      <div className='flex flex-col w-full'>
        <div className='flex h-auto flex-col px-4 pt-4 pb-8 gap-4 bg-[#fff]'>
          <div className="relative w-full shadow-sm bg-cover h-[20vh] md:h-[30vh] rounded-3xl overflow-hidden bg-center" style={{ backgroundImage: `url(${Package.banner})` }}>
            <div className="flex flex-col justify-between w-full h-full bg-black bg-opacity-40 ">
              <Header />
            </div>
          </div>
  
        </div>
        <PackageImage/>
      <PackageDescription/>
      <PackageOffer/>
     
      </div>
    );
  }
