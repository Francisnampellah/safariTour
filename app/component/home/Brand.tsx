import React from 'react';
import { ArrayOurPartner } from '../OurPartners';

export default function Brand() {
    return (
        <section
            id="section-3"
            className="w-full overflow-hidden py-16 flex flex-col justify-center items-center md:gap-8 "
        >

            <h1 className='text-3xl md:text-4xl font-black'>Our Partner</h1>
            <div className="flex w-full gap-8 justify-around md:px-16">

                {
                    ArrayOurPartner.map((item, index) => (
                        <div key={index} className='flex justify-center items-center' >
                            <img src={item} alt='logo' className={`w-[30%]`} />
                        </div>
                    ))
                }

                {/* {[...logoArray, ...logoArray].map((item, index) => (
                    <div key={index} className="flex-shrink-0">
                        <span className={`${Object.values(item.className)[0]}`}>{item.name}</span>
                    </div>
                ))} */}
            </div>
        </section>
    );
}

const logoArray = [
    {
        name: "Ariel",
        className: {
            Ariel1: "text-4xl font-bold text-blue-600 uppercase tracking-wider shadow-md bg-gray-100 p-2 rounded-lg",
        },
    },
    {
        name: "MONGOL",
        className: {
            MONGOL1: "text-5xl font-extrabold text-red-500 italic underline decoration-wavy tracking-tight bg-black text-white p-3 rounded-full",
        },
    },
    {
        name: "TECHBLAST",
        className: {
            TECHBLAST1: "text-4xl font-semibold text-green-700 uppercase tracking-wide shadow-lg bg-yellow-100 p-4 border border-green-700 rounded-md",
        },
    },
    {
        name: "Safari",
        className: {
            Safari1: "text-3xl font-medium text-yellow-600 italic border-b-4 border-yellow-300 tracking-widest bg-white p-2 rounded-lg",
        },
    },
    {
        name: "Ariel",
        className: {
            Ariel2: "text-6xl font-black text-pink-500 uppercase shadow-2xl tracking-widest bg-blue-50 p-5 rounded-full",
        },
    },
    {
        name: "MONGOL",
        className: {
            MONGOL2: "text-4xl font-light text-purple-600 italic underline decoration-dashed bg-gray-200 p-3 rounded-md border border-purple-500",
        },
    },
    {
        name: "TECHBLAST",
        className: {
            TECHBLAST2: "text-5xl font-medium text-orange-500 uppercase tracking-tighter shadow-xl bg-gray-900 text-white p-6 rounded-lg",
        },
    },
    {
        name: "Safari",
        className: {
            Safari2: "text-3xl font-bold text-green-500 italic border-b-4 border-green-400 tracking-wider bg-gray-50 p-3 rounded-md",
        },
    },
    {
        name: "Ariel",
        className: {
            Ariel3: "text-4xl font-thin text-indigo-600 uppercase tracking-wide shadow-sm bg-yellow-50 p-4 rounded-lg",
        },
    },
    {
        name: "MONGOL",
        className: {
            MONGOL3: "text-6xl font-bold text-teal-600 italic underline decoration-dotted tracking-wider bg-pink-100 p-5 rounded-full",
        },
    },
    {
        name: "TECHBLAST",
        className: {
            TECHBLAST3: "text-3xl font-extrabold text-blue-800 uppercase shadow-inner bg-red-100 p-4 border border-blue-800 rounded-md",
        },
    },
    {
        name: "Safari",
        className: {
            Safari3: "text-4xl font-medium text-red-600 italic border-b-4 border-gray-500 tracking-wide bg-green-50 p-3 rounded-lg",
        },
    },
];



