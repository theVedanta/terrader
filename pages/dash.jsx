import LeftNav from "@/components/LeftNav";
import Nav from "@/components/Nav";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RxTimer } from "react-icons/rx";
import { IoChevronForward, IoLeaf } from "react-icons/io5";
import Link from "next/link";
import Protect from "@/components/Protect";

const Dash = ({ authed }) => {
    const games = [
        {
            ranking: "56/79",
            score: 100,
            ago: "36m",
            win: true,
        },
        {
            ranking: "56/79",
            score: 100,
            ago: "36m",
            win: false,
        },
    ];

    return (
        <Protect authed={authed}>
            <Box px={20} pt={10}>
                <Nav />
                <LeftNav />

                <Box mt={20} px={44}>
                    {games.map((game, i) => (
                        <Flex
                            key={i}
                            px={10}
                            py={7}
                            bg="brandBlack.100"
                            rounded="xl"
                            mb={6}
                            alignItems="center"
                            justifyContent="space-between"
                            fontSize={32}
                        >
                            <Box color={game.win ? "green.400" : "blue.300"}>
                                <RxTimer fontSize={40} />
                            </Box>
                            <Text>Ranking: {game.ranking}</Text>
                            <Text display="flex" alignItems="center">
                                <Box color="green.400">
                                    <IoLeaf />
                                </Box>
                                &nbsp;:&nbsp;&nbsp;{game.score}
                            </Text>
                            <Text>{game.ago} ago</Text>
                            <IoChevronForward cursor="pointer" />
                        </Flex>
                    ))}
                    <Flex
                        px={10}
                        py={7}
                        bg="glass"
                        rounded="xl"
                        mb={6}
                        alignItems="center"
                        justifyContent="space-between"
                        fontSize={32}
                    >
                        <Text>Events</Text>
                        <Text>Christmas: 00:01:26</Text>
                        <IoChevronForward cursor="pointer" />
                    </Flex>

                    <Link href="/play">
                        <Text
                            align="center"
                            mt={14}
                            fontSize={44}
                            fontWeight="medium"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            transition="all 0.2s"
                            _hover={{ transform: "scale(1.1)" }}
                        >
                            Click to&nbsp;<Text fontWeight="bold">PLAY</Text>
                        </Text>
                    </Link>
                </Box>
            </Box>
        </Protect>
    );
};

export default Dash;
