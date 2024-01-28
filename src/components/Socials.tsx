"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

interface Icon {
  path: string;
  icon: JSX.Element;
}

const icons: Icon[] = [
  {
    path: "/",
    icon: <RiYoutubeFill />,
  },
  {
    path: "/",
    icon: <RiLinkedinFill />,
  },
  {
    path: "/",
    icon: <RiGithubFill />,
  },
  {
    path: "/",
    icon: <RiFacebookFill />,
  },
  {
    path: "/",
    icon: <RiInstagramFill />,
  },
];

interface Props {
  containerStyles: string;
  iconStyles: string;
}

const Socials = ({ containerStyles, iconStyles }: Props) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((i, index) => {
        return (
          <Link href={i.path} key={index}>
            <div className={`${iconStyles}`}>{i.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
