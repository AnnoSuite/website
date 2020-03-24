import React from "react";
import { Box, SocialMediaLink, SocialMediaLinks } from "../atoms";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
  faProductHunt
} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram, faTwitter, faGithub, faDribbble, faProductHunt);

const socialMediaLinks = [
  {
    href: "https://www.instagram.com/annosuite/",
    title: "Instagram",
    icon: ["fab", "instagram"],
    size: "1x"
  },
  {
    href: "https://www.twitter.com/annosuite/",
    title: "Twitter",
    icon: ["fab", "twitter"],
    size: "1x"
  },
  {
    href: "https://www.github.com/annosuite/",
    title: "GitHub",
    icon: ["fab", "github"],
    size: "1x"
  },
  {
    href: "https://www.dribbble.com/annosuite",
    title: "Dribbble",
    icon: ["fab", "dribbble"],
    size: "1x"
  },
  {
    href: "https://www.producthunt.com/my/upcoming/annoread",
    title: "ProductHunt",
    icon: ["fab", "product-hunt"],
    size: "1x"
  }
];

export const SocialMediaBar = () => (
  <Box>
    <SocialMediaLinks>
      {socialMediaLinks.map(({ href, title, icon, size }) => (
        <SocialMediaLink
          href={href}
          title={title}
          target="_blank"
          key={`${href}:${title}`}
        >
          <FontAwesomeIcon icon={icon} size={size} />
        </SocialMediaLink>
      ))}
    </SocialMediaLinks>
  </Box>
);
