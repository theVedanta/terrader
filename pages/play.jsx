import {
    Box,
    Button,
    Divider,
    Flex,
    FormLabel,
    Heading,
    Input,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Text,
} from "@chakra-ui/react";
import { IoCloudyNight, IoLeaf } from "react-icons/io5";
import Chart from "chart.js/auto";
import { getRelativePosition } from "chart.js/helpers";
import { useEffect } from "react";
import Protect from "@/components/Protect";

const Play = ({ authed }) => {
    const news = ["Hello World", "Hello World", "Hello World", "Hello World"];

    useEffect(() => {
        new Chart(document.getElementById("chart-canvas"), {
            type: "line",
            data: {
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                    {
                        label: "# of Votes",
                        data: [12, 19, 3, 5, 2, 3],
                        borderWidth: 2,
                        borderColor: "#1CC880",
                        backgroundColor: "#1CC880",
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    });

    return (
        <Protect authed={authed}>
            {/* NAV */}
            <Flex px={20} pt={10}>
                <Box>
                    <Text fontWeight="medium" fontSize={28}>
                        Opponent profit
                    </Text>
                    <Heading fontSize={44}>$1400</Heading>
                </Box>
            </Flex>

            {/* RIGHT BAR */}
            <Box
                sx={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    w: "26%",
                    h: "100vh",
                    zIndex: 10,
                }}
                bg="glass"
                pt={10}
                px={10}
            >
                <Heading textAlign="center" fontSize={56} fontWeight="medium">
                    Timer
                </Heading>
                <Heading textAlign="center" fontSize={72} mb={10}>
                    04:01
                </Heading>

                <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                    px={10}
                    mb={10}
                >
                    <Box>
                        <Text
                            textAlign="center"
                            fontWeight="medium"
                            fontSize={20}
                        >
                            Money left
                        </Text>
                        <Heading fontSize={38}>$500</Heading>
                    </Box>
                    <Box>
                        <Text
                            textAlign="center"
                            fontWeight="medium"
                            fontSize={20}
                        >
                            Money left
                        </Text>
                        <Heading fontSize={38}>$500</Heading>
                    </Box>
                </Flex>

                <FormLabel>Quantity</FormLabel>
                <NumberInput defaultValue={0} variant="filled" size="lg" mb={4}>
                    <NumberInputField border="2px solid white" />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <Flex
                    w="100%"
                    justifyContent="center"
                    alignItems="center"
                    mb={10}
                >
                    <Button mx={1} w="100%" colorScheme="green">
                        Buy
                    </Button>
                    <Button mx={1} w="100%" colorScheme="red">
                        Sell
                    </Button>
                </Flex>

                <Divider border="1px" rounded="xl" />

                <Box mt={6} w="100%">
                    {news.map((n, i) => (
                        <Box
                            rounded="xl"
                            bg="brandBlack.100"
                            px={5}
                            py={4}
                            key={i}
                            mb={3}
                            fontWeight="medium"
                        >
                            {n}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* BOTTOM BAR */}
            <Flex w="37%" ml="18.5%" sx={{ position: "fixed", bottom: 10 }}>
                <Flex
                    w="50%"
                    px={8}
                    py={4}
                    mx={3}
                    bg="brandBlack.100"
                    rounded="2xl"
                    fontSize={44}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IoCloudyNight />
                    <IoCloudyNight />
                    <IoCloudyNight />
                    <IoCloudyNight />
                </Flex>

                <Flex
                    px={8}
                    py={4}
                    mx={3}
                    bg="rgba(20, 150, 100, 0.3)"
                    rounded="2xl"
                    fontSize={44}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IoLeaf />
                    &nbsp;&nbsp;&nbsp;&nbsp;<Heading>400</Heading>
                </Flex>
            </Flex>

            <Box px={20} pt={10} w="74%" h="69vh">
                <canvas id="chart-canvas"></canvas>
            </Box>
        </Protect>
    );
};

export default Play;
