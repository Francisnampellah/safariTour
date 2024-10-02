import React from 'react';
import TeamMemberCard, { teamMembers } from '../TeamMemberCard';


const OurTeam = () => {
  return (
    <section className="h-auto overflow-y-hidden flex w-full flex-col gap-16 my-8">
      <div>
        <div className="px-16 gap-8 my-8 flex flex-col">
          <h1 className="text-blue-600 text-3xl " > /// <span className="font-semibold">
            Our Team</span></h1>
          <h1 className="text-5xl text-start">
            We Are a World Famous Travel Agency
          </h1>
        </div>
        <div className="flex flex-row justify-center space-x-10">
          {/* Team Member  */}
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Background Image with Black Overlay and Text */}
        <div className="h-80 relative mt-10 rounded-3xl overflow-hidden mx-16">
          {/* Background image */}
          <img
            src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          {/* Centered text on top of the image and overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-20 flex-col">
            <h1 className="text-white text-4xl font-bold text-center">
              Don't wait any longer! Start your adventure and explore new
              experiences today
            </h1>
            <div className="mt-10 border h-14 w-1/2 rounded-full flex items-center justify-center text-white">
              <div className="flex items-center space-x-16">
                <div>
                  <p>Drop your email address here</p>
                </div>
                <div className="">|</div>
                <div className="pl-20">
                  <button className="bg-white text-black rounded-2xl h-10 w-24">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;