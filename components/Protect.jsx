import { Flex, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Protect = ({ authed, children }) => {
    const router = useRouter();

    return authed === "check" ? (
        <Flex w="100vw" h="100vh" justifyContent="center" alignItems="center">
            <Spinner size="lg" />
        </Flex>
    ) : authed ? (
        children
    ) : (
        router.back()
    );
};

export default Protect;
