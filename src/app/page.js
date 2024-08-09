import Image from "next/image";
import styles from "./page.module.css";
import { Box } from "@chakra-ui/react";
import Nav from "./components/nav";
import HeroDesktop from "./components/hero";
import HeroMobile from "./components/heromobile";

export default function Home() {
  return (
    <Box
      w={'full'}
      h={'100vh'}
      bg={'black'}
      px={['12px', '12px', '64px', '64px']}
      color={'white'}
    >
      <Box display={['flex', 'flex', 'none', 'none']}>
        <Nav />
      </Box>

      <Box display={['none', 'none', 'flex', 'flex']}>
        <HeroDesktop />
      </Box>

      <Box display={['flex', 'flex', 'none', 'none']}>
        <HeroMobile />
      </Box>
    </Box>
  );
}
