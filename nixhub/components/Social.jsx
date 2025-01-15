'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const ThreadsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    color="inherit"
    fill="none"
  >
    <path
      d="M19.25 8.50488C17.6729 2.63804 12.25 3.00452 12.25 3.00452C12.25 3.00452 4.75 2.50512 4.75 12C4.75 21.4949 12.25 20.9955 12.25 20.9955C12.25 20.9955 16.7077 21.2924 18.75 17.0782C19.4167 15.2204 19.25 11.5049 12.75 11.5049C12.75 11.5049 9.75 11.5049 9.75 14.0049C9.75 14.9812 10.75 16.0049 12.25 16.0049C13.75 16.0049 15.4212 14.9777 15.75 13.0049C16.75 7.00488 11.25 6.50488 9.75 9.00488"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/Nixwzy' },
  { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/glopesgl/' },
  { icon: <FaInstagram />, path: 'https://www.instagram.com/jazzygui/' },
  { icon: <ThreadsIcon />, path: 'https://www.threads.net/@jazzygui' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
