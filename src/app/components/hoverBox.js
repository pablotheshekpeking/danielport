import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const HoverBox = ({ imageSrc, hoverImageSrc, backgroundImage, title, position, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      w="448px"
      h="400px"
      bg={backgroundImage ? `url(${backgroundImage})` : '#151515'}
      bgSize="cover"
      display="flex"
      flexDirection="column"
      gap="40px"
      px={isHovered ? '0px' : '32px'}
      justifyContent="center"
      alignItems="center"
      borderRadius="24px"
      position="relative"
      overflow="hidden"
      transition="background-color 0.3s ease, transform 0.3s ease"
      transform={isHovered ? 'translateY(-50px)' : 'translateY(0)'}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      cursor="pointer"
    >
      {isHovered ? (
        <Image
          src={hoverImageSrc}
          alt="Hover Image"
          boxSize="full"
          objectFit="cover"
          transition="opacity 0.3s ease"
        />
      ) : (
        <>
          <Image
            src={imageSrc}
            alt="Main Image"
            boxSize="64px"
            objectFit="contain"
            mb="16px"
            transition="opacity 0.3s ease"
          />
          <Box
            display="flex"
            flexDirection="row"
            w="100%"
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection="column"
              fontSize="18px"
              gap="16px"
              w="300px"
              color="white"
            >
              <Text fontWeight={400}>{title}</Text>
              <Text color="#DEDCDC5C" fontWeight={700}>{position}</Text>
              <Text color="#EBEBEB" fontWeight={400}>{description}</Text>
            </Box>
            <Box w="100px" h="100px" display="flex" justifyContent="flex-end" alignItems="center">
              <Box
                w="50px"
                h="50px"
                borderRadius="25px"
                bg="black"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Text color="white" fontSize="20px">&rarr;</Text>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default HoverBox;
