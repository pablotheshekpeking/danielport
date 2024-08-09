'use client'
import { Box, Heading, Text } from "@chakra-ui/react"
import Nav from "./nav"
import TypewriterEffect from "./typing"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import HoverBox from "./hoverBox"

export default function HeroDesktop() {
    const [isHovered, setIsHovered] = useState(false)
    return (
        <Box
            w={'full'}
            h={'100vh'}
            display={'flex'}
            justifyContent={'center'}
            flexDirection={'column'}
        >
            <Nav />
            <Heading
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
                display={['none', 'none', 'flex', 'flex']}
                justifyContent={'center'}
                gap={'20px'}
                pt={'86px'}
            >
                <HoverBox
                    imageSrc="Juice.png"
                    title="JUICYWAY."
                    position="Product Design Intern"
                    description="Work under Tomasz Zastawny, using the design system in place to make new product UI."
                    hoverImageSrc="/juicy.png"
                />

                <HoverBox
                    imageSrc="bel1.png"
                    title="BELONWU STUDIO."
                    position="Product Design Intern"
                    description="Work under Dare Ogunnaike, contributing to studio work and all-round studio design."
                    hoverImageSrc="/bel.png"
                />

                <HoverBox
                    imageSrc="mana1.png"
                    title="MANA"
                    position="Product Designer"
                    description="Freelance commissioned UI/UX for a self-checkout service app in Nigeria."
                    hoverImageSrc="/mana.png"
                />
            </Box>
        </Box>
    )
}