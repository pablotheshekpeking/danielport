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
      h={'auto'}
      bg={'black'}
      px={['12px', '12px', '64px', '64px']}
      color={'white'}
    >
      <Box display={['flex', 'flex', 'none', 'none']} h={'100%'}>
        <Nav />
      </Box>

      <Box display={['none', 'none', 'flex', 'flex']} h={'100%'}>
        <HeroDesktop />
      </Box>

      <Box display={['flex', 'flex', 'none', 'none']} h={'100%'}>
        <HeroMobile />
      </Box>
    </Box>
  );
}
