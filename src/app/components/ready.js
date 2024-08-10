'use client'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

export default function ReadyDesktop() {
    const images = ['/bel.png', '/Juice.png', '/mana.png']; // Add your image sources here
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);
    return (
        <Box
            w={'full'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
            alignItems={'center'}
            pt={'160px'}
        >
            <Box
                w={'744px'}
                maxW={'3xl'}
                h={'400px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-end'}
            >
                {/** top box */}
                <Box
                    h={'60%'}
                    w={'full'}
                    display={'flex'}
                >
                    <Box
                        w={'70%'}
                        h={'full'}
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Heading fontSize={'84px'} v>READY</Heading>
                        <Heading fontSize={'84px'}>HELP YOU</Heading>
                    </Box>

                    <Box
                        w={'30%'}
                        h={'full'}
                    >
                        <Heading fontSize={'84px'}>{" "}TO</Heading>
                        <Box
                            w={'240px'}
                            h={'180px'}
                            bg={'grey'}
                            position={'relative'}
                            bottom={44}
                            right={60}
                            zIndex={999}
                            overflow="hidden"
                        >
                            <Image
                                src={images[currentIndex]}
                                alt={`Image ${currentIndex + 1}`}
                                w="100%"
                                h="100%"
                                objectFit="cover"
                                transition="opacity 0.5s ease-in-out"
                            />
                        </Box>
                    </Box>
                </Box>

                {/** bottom box */}
                <Box
                    h={'40%'}
                    w={'full'}
                    bg={'black'}
                    display={'flex'}
                    alignItems={'flex-start'}
                >
                    <Text w={'100%'} fontSize={'16px'} fontWeight={400} color={'#DEDCDC8F'}>
                        Daniel Oluwatosin Johnson is a Nigerian Product Designer who aspires to build the best
                        UX the world has to offer. He is structured to evolve and also a quick learner with
                        enough passion and zeal to drive him up the way.
                    </Text>
                </Box>
            </Box>
            <Box
                w={'full'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'flex-end'}
                borderBottom={'1px solid #DEDCDC80'}
                pt={'140px'}
            >
                <Box>
                    <Text>Based In North Cyprus/Nigeria.</Text>
                    <Text>Available WorldWide</Text>
                </Box>
                <Text>(2024), All Rights Reserved.</Text>
            </Box>
        </Box>
    )
}