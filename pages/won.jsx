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
    Button,
} from "@chakra-ui/react";
import { RxClock } from "react-icons/rx";
import Link from "next/link";

const Profile = () => {
    return (
        <Box px={20} pt={10}>
            <Nav />
            <LeftNav />

            <Box px={64} mt={20}>
                <Box p={10} px={20} bg="glass" rounded="xl" shadow="lg">
                    <Heading
                        color="green.300"
                        fontSize={72}
                        textAlign="center"
                        mb={10}
                    >
                        You Won!
                    </Heading>

                    <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        flexWrap="wrap"
                    >
                        <Box w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>
                        <Box w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>
                        <Box w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>

                        <Box mt={10} w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>
                        <Box mt={10} w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>
                        <Box mt={10} w="33%">
                            <Text fontWeight="semibold" fontSize={28}>
                                Ranking
                            </Text>
                            <Text fontWeight="bold" fontSize={48}>
                                #1/50
                            </Text>
                        </Box>
                    </Flex>

                    <Flex justifyContent="center" alignItems="center" mt={10}>
                        <Link href="/play">
                            <Button mx={3} size="lg" bg="green.500">
                                Play again
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button
                                mx={3}
                                variant="outline"
                                colorScheme="green"
                            >
                                Home
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Box>
    );
};

export default Profile;
