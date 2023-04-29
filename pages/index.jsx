import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";

const Home = () => {
    return (
        <>
            <Flex
                sx={{
                    w: "100vw",
                    h: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link href="/dash">
                    <Button size="lg">Dashboard</Button>
                </Link>
            </Flex>
        </>
    );
};

export default Home;
