import LeftNav from "@/components/LeftNav";
import Nav from "@/components/Nav";
import Image from "next/image";
import { IoAddCircleOutline, IoLeaf } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
import {
    Box,
    Input,
    Flex,
    Tag,
    Heading,
    Text,
    Divider,
} from "@chakra-ui/react";
import { RxClock } from "react-icons/rx";

const Profile = () => {
    const powers = [
        {
            icon: <RxClock />,
            cost: 15,
        },
        {
            icon: <RxClock />,
            cost: 15,
        },
        {
            icon: <RxClock />,
            cost: 15,
        },
        {
            icon: <RxClock />,
            cost: 15,
        },
    ];

    return (
        <Box px={20} pt={10}>
            <Nav />
            <LeftNav />

            <Box px={72} mt={20}>
                <Box p={10} bg="glass" rounded="xl" shadow="lg">
                    <Flex>
                        <Flex alignItems="center" w="50%">
                            <Image
                                src="/assets/avatar2.svg"
                                alt="avatar"
                                width={52}
                                height={52}
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Input
                                readOnly
                                value="theVedanta"
                                size="lg"
                                disabled
                                border="2px"
                                fontWeight="medium"
                                fontSize={20}
                            />
                        </Flex>
                        <Flex alignItems="center" justifyContent="end" w="50%">
                            <Tag px={6} py={3} fontSize={24}>
                                Level: 42
                            </Tag>
                        </Flex>
                    </Flex>

                    <Flex mt={10}>
                        <Tag p={3} fontSize={24} mr={6}>
                            <SiWebmoney />
                            &nbsp;:&nbsp;&nbsp;&nbsp;240&nbsp;&nbsp;&nbsp;&nbsp;
                            <Box>
                                <IoAddCircleOutline />
                            </Box>
                        </Tag>
                        <Tag p={3} fontSize={24}>
                            <IoLeaf />
                            &nbsp;:&nbsp;&nbsp;&nbsp;240
                        </Tag>
                    </Flex>

                    <Heading mt={10}>Power-ups</Heading>
                    <br />
                    <Flex
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {powers.map((power, i) => (
                            <Flex
                                key={i}
                                direction="column"
                                alignItems="center"
                                bg="brandBlack.200"
                                w="22%"
                                py={6}
                                px={6}
                                rounded="xl"
                            >
                                <Text fontSize={72} color="green.400">
                                    {power.icon}
                                </Text>
                                <Divider my={4} />
                                <Flex alignItems="center" fontSize={28}>
                                    {power.cost}&nbsp;&nbsp;&nbsp;
                                    <SiWebmoney />
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
