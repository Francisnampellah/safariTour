import React from 'react'
import { BsFillPatchQuestionFill } from "react-icons/bs";
import AccordionItem from '../Accordion';


export const Question = ({ openIndex, handleToggle }: { openIndex: any, handleToggle: any }) => (
    <section id="section-4" className="px-6 md:px-32 lg:px-20 flex flex-col justify-center">

        <h2 className="text-2xl md:text-4xl font-semibold text-start text-blue-500 mb-6 flex gap-4 md:gap-8 items-center">
            <BsFillPatchQuestionFill className="h-10 w-10 md:h-16 md:w-16" /> FQA's
        </h2>

        <div className="flex flex-col lg:flex-row w-full justify-center items-start gap-6 lg:gap-4">

            <div className="flex flex-col gap-4 flex-1 px-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl">
                    Frequently Asked <br /> Questions
                </h1>
                <span className="md:text-lg mb-4 text-gray-600">
                    We are a passionate team of travel enthusiasts dedicated to making your travel dreams come true. <br />
                    Our mission is to provide you with the best travel experiences.
                </span>
            </div>

            <div className="flex flex-col justify-center items-start flex-1 px-4 md:px-6 lg:px-8">
                {accordionData.map((item, index) => (
                    <AccordionItem
                        key={index}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                ))}
            </div>
        </div>

    </section>
);


const accordionData = [
    {
        title: 'Section 1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet.',
    },
    {
        title: 'Section 2',
        content:
            'Pellentesque tincidunt et lectus vel efficitur. Curabitur interdum tincidunt velit.',
    },
    {
        title: 'Section 3',
        content:
            'Aliquam erat volutpat. Nullam ut nunc vitae turpis fermentum efficitur.',
    },
];




