import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MdAdd, MdAddCircle, MdAddCircleOutline } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";

const Nav = () => {
    return (
        <Flex
            sx={{
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <Flex alignItems="center">
                <Image
                    src="/assets/logo.svg"
                    width={100}
                    height={100}
                    alt="Logo"
                />
                <Text
                    sx={{
                        ml: 5,
                        fontSize: 90,
                        fontWeight: 900,
                        "-webkit-text-stroke-width": "3px",
                        "-webkit-text-stroke-color": "white",
                        color: "rgba(0, 0, 0, 0)",
                    }}
                >
                    terrader
                </Text>
            </Flex>

            <Flex alignItems="center">
                <Box mr={16} fontWeight="bold" fontSize={18}>
                    theVedanta
                    <br />
                    Lvl. 11
                    <br />
                    <Flex mt={2} alignItems="center">
                        <SiWebmoney />
                        &nbsp;200&nbsp;&nbsp;&nbsp;
                        <Box cursor="pointer">
                            <MdAddCircleOutline />
                        </Box>
                    </Flex>
                </Box>
                <Image
                    src="/assets/avatar.svg"
                    alt="avatar"
                    width={100}
                    height={100}
                />
            </Flex>
        </Flex>
    );
};

export default Nav;
