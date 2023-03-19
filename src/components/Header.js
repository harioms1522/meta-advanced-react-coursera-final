import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const [scroll, setScroll] = useState(window.scrollY)
  const [showNav, setShowNav] = useState(true)
  const scrollRef = useRef(0)
  const headerRef = useRef(null)

  useEffect(()=>{
    scrollRef.current = scroll
    const handleScroll = (prev)=>{
      setShowNav(scrollRef.current > window.scrollY)
      setScroll(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=>{
      window.removeEventListener("scroll", handleScroll)
    }
  },[scroll])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={showNav ? 'translateY(0px)': 'translateY(-200px)'}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {
                socials.map((link)=>{
                  return <a key={link.url} href={link.url}><FontAwesomeIcon icon={link.icon} size="2x"/></a>
                })
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="#contact-me" onClick={handleClick("contactme")}>Contact Me</a>
              <a href="#projects" onClick={handleClick("projects")}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
