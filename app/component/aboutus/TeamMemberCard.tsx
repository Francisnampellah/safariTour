import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

type SocialMediaIcon = {
  icon: typeof FaFacebook | typeof FaInstagram | typeof FaTwitter;
  color: string;
};

type TeamMember = {
  id: number;
  name: string;
  position: string;
  imageUrl: string;
  socialMedia: SocialMediaIcon[];
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Maria John',
    position: 'Tourist Guider',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialMedia: [
      { icon: FaFacebook, color: 'blue' },
      { icon: FaInstagram, color: 'pink' },
      { icon: FaTwitter, color: 'skyblue' },
    ],
  },
  {
    id: 2,
    name: 'Hannah Smith',
    position: 'Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialMedia: [
      { icon: FaFacebook, color: 'blue' },
      { icon: FaInstagram, color: 'pink' },
      { icon: FaTwitter, color: 'skyblue' },
    ],
  },
  {
    id: 3,
    name: 'Hannah Smith',
    position: 'Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialMedia: [
      { icon: FaFacebook, color: 'blue' },
      { icon: FaInstagram, color: 'pink' },
      { icon: FaTwitter, color: 'skyblue' },
    ],
  },
  {
    id: 4,
    name: 'Hannah Smith',
    position: 'Manager',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    socialMedia: [
      { icon: FaFacebook, color: 'blue' },
      { icon: FaInstagram, color: 'pink' },
      { icon: FaTwitter, color: 'skyblue' },
    ],
  },
  // Add more team members as needed
];


const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="bg-white p-2 w-fit rounded-2xl flex items-center justify-center flex-col shadow-lg">
      <div className="">
        <img src={member.imageUrl} alt={member.name} className="rounded-2xl  w-48" />
      </div>
      <div className=" w-full p-2">
        <div className="font-bold">
          <h1>{member.name}</h1>
        </div>
        <div className="flex justify-between space-x-10">
          <div className='w-fit '>
            <p className='text-sm flex flex-wrap w-8'>{member.position.split(' ').pop()}</p>
          </div>
          <div className="flex flex-row gap-1">
            {member.socialMedia.map(({ icon: Icon, color }, index) => (
              <Icon key={index} size={20} color={color} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
export { teamMembers };