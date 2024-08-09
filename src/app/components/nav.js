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
        fontSize={['12px', '12px', '16px', '16px']}
        pt={'56px'}
        justifyContent={'right'}
        pb={'40px'}
        >
            <Link href={'/'}><Text textDecoration={'underline'}>Work</Text></Link>
            <Link href={'/'}><Text>About</Text></Link>
            <Link href={'/'}><Text>Contact</Text></Link>
        </Box>
    )
}

