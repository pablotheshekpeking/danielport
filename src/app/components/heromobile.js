'use client'
import { Box, Heading, Text, Image } from "@chakra-ui/react"
import TypewriterEffect from "./typing"

export default function HeroMobile() {
    return (
        <Box
            w={'full'}
            h={'auto'}
            display={'flex'}
            flexDirection={'column'}
        >
            <Heading
                pt={'86px'}
                fontSize={['24px', '24px', '96px', '96px']}
                fontWeight={500}
            >
                DANIEL.O.JOHNSON
            </Heading>

            <Text
                fontWeight={400}
                fontSize={['12px', '12px', '24px', '24px']}
                display={'flex'}
                gap={'4px'}
            >
                😡 I am a  <TypewriterEffect />

            </Text>

            {/** boxes */}
            <Box
                h={'auto'}
                display={'flex'}
                overflowX={'scroll'} // Ensures horizontal scrolling
                gap={'20px'}
                pt={'86px'}
                maxW={'100%'}
                pb={'20px'} // Optional: Adds padding to the bottom for spacing
            >
                <Image
                    src={'/juicy.png'}
                    alt="Juicy Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />

                <Image
                    src={'/bel.png'}
                    alt="Bel Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />

                <Image
                    src={'/mana.png'}
                    alt="Mana Image"
                    boxSize="300px" // Fixed size for each image
                    objectFit="cover"
                    transition="opacity 0.3s ease"
                />
            </Box>
        </Box>
    )
}