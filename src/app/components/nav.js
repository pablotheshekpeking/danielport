'use client'

import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Nav(){
    return (
        <Box
        w={'full'}
        display={'flex'}
        gap={'64px'}
        fontSize={['12px', '12px', '18px', '18px']}
        pt={'56px'}
        justifyContent={['center', 'center', 'right', 'right']}
        pb={'40px'}
        textDecoration={'underline'}
        >
            <Link href={'/'}><Text>Work</Text></Link>
            <Link href={'/'}><Text>About</Text></Link>
            <Link href={'/'}><Text>Contact</Text></Link>
        </Box>
    )
}

