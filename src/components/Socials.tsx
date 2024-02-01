"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
  RiSpotifyFill,
} from "react-icons/ri";

import Link from "next/link";

interface Icon {
  path: string;
  icon: JSX.Element;
}

const icons: Icon[] = [
  {
    path: "https://www.youtube.com/@GranRah",
    icon: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/titan-dev/",
    icon: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/TITANRAH",
    icon: <RiGithubFill />,
  },
  {
    path: "https://facebook.com/GranRah1",
    icon: <RiFacebookFill />,
  },
  {
    path: "https://instagram.com/granrah",
    icon: <RiInstagramFill />,
  },
  {
    path: "https://open.spotify.com/intl-es/artist/6JjrF0EnCW3Ylj9gj3FXWZ?si=32ZNKFtiQ4qE-2Ccqns6JQ&nd=1&dlsi=c47e65f68518414a",
    icon: <RiSpotifyFill />,
  },
];

interface Props {
  containerStyles?: string;
  iconStyles?: string;
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
