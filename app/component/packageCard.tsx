import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from '@remix-run/react'

export default function PackageCard({result}:{result:any}) {
  return (
    <NavLink to={`/${result.id}`}  className="h-full flex justify-center">
    <div className="absolute top-0 z-20 left-0 right-0 text-white">
      <div className="main-container p-4"> {/* Added padding for spacing */}
        <div className="kontainer">
          <div className="itemCard">
            <span className="text-xl font-black text-black">Service</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="card bg-base-100 w-full md:w-[90%] shadow rounded-3xl relative"> {/* Added relative class */}
      <figure>
        <img
          src={result.banner}
          // alt={result.alt}
          className="rounded-tl-3xl h-[30vh] w-full object-cover rounded-tr-3xl"
        />
      </figure>
      
      <div className="card-body">
        <div className="flex justify-between px-4 py-3">
          <h2 className="card-title text-lg">{result.title}</h2>
          <div className="badge badge-primary text-gray-50 font-black p-3">
            <span className="tracking-widest">${result.basePrice}</span>
          </div>
        </div>
        
        <div className="flex flex-col w-full h-[35%] justify-around items-center px-4 gap-2 py-4">
          <div className="text-sm line-clamp-3">{result.description}</div>
          <div className="flex items-start ">
            {[...Array(4)].map((_, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className="text-yellow-500 w-3 h-3"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </NavLink>
  
  )
}
