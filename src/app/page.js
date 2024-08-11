import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import HeroDesktop from "./components/hero";
import HeroMobile from "./components/heromobile";
import ReadyDesktop from "./components/ready";
import About from "./components/about";
import Skill from "./components/skill";
import Approach from "./components/approach";
import Emploment from "./components/employment";

export default function Home() {
  return (
    <Box
      w={'full'}
      h={'auto'}
      bg={'black'}
      px={['12px', '12px', '64px', '64px']}
      color={'white'}
      scrollBehavior={'smooth'}
      display={'flex'}
      flexDirection={'column'}
      gap={'48px'}
      fontFamily="Work Sans"
    >
      <Box display={['flex', 'flex', 'flex', 'none']}>
        <Nav />
      </Box>

      <Box display={['none', 'none', 'none', 'flex']} id="work">
        <HeroDesktop />
      </Box>

      <Box display={['flex', 'flex', 'flex', 'none']} id="work">
        <HeroMobile />
      </Box>

      <Box id="about" display={'flex'} flexDirection={'column'} gap={'48px'}>
        <About />
        <Skill />
        <Approach />
        <Emploment />
      </Box>
    </Box>
  );
}
