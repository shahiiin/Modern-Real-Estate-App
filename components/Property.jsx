import Link from "next/link"
import Image from "next/image"
import { Box, Flex, Avatar, Text } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/images/house.jpg'

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalId } }) => (
    <Link href={`/property/${externalId}`} passHref>
        <Flex flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="pointer">
            <Box>
                <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt="house" width={400} height={260} />
            </Box>
        </Flex>
    </Link>
)
export default Property