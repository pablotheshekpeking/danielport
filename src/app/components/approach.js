'use client'

import { Box, Image, Text } from "@chakra-ui/react"

export default function Approach() {
    return (
        <Box
            w={'full'}
            h={['auto', 'auto', 'auto', 'auto']}
            display={'flex'}
            flexDirection={['column', 'column', 'column', 'column']}
            gap={'0px'}
        >
            <Text fontSize={['16px', '16px', '18px', '24px']}>Approach</Text>
            <Box
                w={['full', 'full', 'full', '90%']}
                h={'500px'}
                display={['flex', 'flex', 'flex', 'grid']}
                overflowX={'scroll'}
                gridTemplateColumns={'repeat(3, 1fr)'}
                gridTemplateRows={'repeat(3, 1fr)'}
                gap={['12px', '12px', '12px', '0px']}
                borderBottom={'1px solid #B0A7A7A3'}
                borderRight={'1px solid #B0A7A7A3'}
                borderTop={'1px solid #B0A7A7A3'}
                borderTopRightRadius={'24px'}
                borderBottomRightRadius={'24px'}
                alignItems={'center'}
                color={'#6F6E6E'}
            >
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>1</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Assess Client Needs and Goals</span> Start by thoroughly
                        understanding my client's requirements, objectives, and expectations for the project.
                    </Text>
                </Box>


                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>2</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Brainstorm and Ideation</span><br />
                        Generating creative ideas and concepts that address the client's needs and goals.
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>3</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Concept Development </span><br />
                        Refining and developing the most promising ideas into tangible concepts.
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>4</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Design Research </span><br />
                        This step helps ensure that your design decisions are informed by data and user feedback.
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>5</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Evaluate Concepts </span><br />        
                        Evaluating the design concepts against the client's criteria, considering necessary factors. 
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>6</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Prototype Development </span><br />
                        Create prototypes to test and refine my selected design concepts. 
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>7</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Iterative Refinement </span><br /> 
                        Iterate on the design based on feedback received during the prototyping phase. 
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>8</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Finalize Design </span><br />                         
                        This involves finalizing design and creating documentation which includes implementation. 
                    </Text>
                </Box>

                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    gap={'16px'}
                    _hover={{
                        backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 80%)',
                    }}
                >
                    <Text>9</Text>

                    <Text w={'250px'}>
                        <span style={{ fontWeight: 700, color: 'white' }}>Product Delivery </span><br />                 
                        Present the final design to the client for approval, incorporating any feedback as necessary. 
                    </Text>
                </Box>
            </Box>

            <Box
                w={['full', 'full', 'full', '10%']}
                h={'full'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'flex-end'}
                justifyContent={'center'}
                gap={'56px'}
            >

            </Box>
        </Box>
    );
}