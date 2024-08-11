'use client'

import { Box, Image, Text } from "@chakra-ui/react"

export default function Emploment() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', '481px']}
            display={'flex'}
            flexDirection={['column', 'column', 'column', 'row']}
            gap={'40px'}
        >
            <Box
                w={['full', 'full', 'full', '40%']}
                h={'full'}
                display={'flex'}
                flexDirection={['column', 'column', 'column', 'row']}
                alignItems={'center'}
                justifyContent={'space-between'}
                gap={['12px', '12px', '12px', '0px']}
            >

            </Box>

            <Box
                w={['full', 'full', 'full', '60%']}
                h={'full'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                gap={'42px'}
                fontSize={['10px', '10px', '18px', '18px']}
            >
                <Text fontSize={['16px', '16px', '18px', '24px']}>Employment</Text>

                <Box
                    w={'full'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    color={'#6F6E6E'}
                    borderBottom={'1px solid #DEDCDC'}
                    pb={'24px'}
                >
                    <Box
                        display={'flex'}
                        gap={'8px'}
                    >
                        <Text>August 3rd </Text>
                        <Text> ---- </Text>
                        <Text>November 3rd</Text>
                    </Box>

                    {/** text with bover img */}
                    <Box position="relative" display="inline-block">
                        <Text fontWeight={500} color={'white'} _hover={{textDecoration: 'underline'}}>Juice</Text>
                        <Box
                            position="absolute"
                            top="-40px" // Adjust the position as needed
                            left="50%"
                            transform="translateX(-50%)"
                            opacity={0}
                            transition="opacity 0.3s ease"
                            _hover={{
                                opacity: 1,
                            }}
                        >
                            <Image
                                src="/Juice.png"
                                alt="Hover Image"
                                boxSize="40px" // Adjust the size as needed
                            />
                        </Box>
                    </Box>

                    <Text>Product Design Intern</Text>
                </Box>

                <Box
                    w={'full'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    color={'#6F6E6E'}
                    borderBottom={'1px solid #DEDCDC'}
                    pb={'24px'}
                >
                    <Box
                        display={'flex'}
                        gap={'8px'}
                    >
                        <Text>August 16th  </Text>
                        <Text> ---- </Text>
                        <Text>Present</Text>
                    </Box>

                    {/** text with bover img */}
                    <Box position="relative" display="inline-block">
                        <Text fontWeight={500} color={'white'} _hover={{textDecoration: 'underline'}}>Belonwu Studio</Text>
                        <Box
                            position="absolute"
                            bottom="-40px" // Adjust the position as needed
                            left="50%"
                            transform="translateX(-50%)"
                            opacity={0}
                            transition="opacity 0.3s ease"
                            _hover={{
                                opacity: 1,
                            }}
                        >
                            <Image
                                src="/bel1.png"
                                alt="Hover Image"
                                boxSize="60px" // Adjust the size as needed
                            />
                        </Box>
                    </Box>

                    <Text>Product Design Intern</Text>
                </Box>
            </Box>
        </Box>
    );
}