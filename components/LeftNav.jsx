import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
    MdAccountCircle,
    MdManageAccounts,
    MdQuestionMark,
    MdSettings,
    MdSupport,
} from "react-icons/md";

const LeftNav = () => {
    const router = useRouter();
    const links = {
        "/friends": <MdManageAccounts />,
        "/": <MdQuestionMark />,
        "/support": <MdSupport />,
        "/profile": <MdSettings />,
    };

    return (
        <Flex
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            position="fixed"
            bottom={20}
            left={20}
        >
            {Object.keys(links).map((link) => (
                <Link key={link} href={link}>
                    <Box
                        bg={router.route === link ? "brandBlack.200" : "glass"}
                        p={3}
                        rounded="xl"
                        mt={8}
                        fontSize={28}
                        color={router.route === link ? "green.400" : "white"}
                        transition="all 0.3s"
                        _hover={{ bg: "brandBlack.100" }}
                    >
                        {links[link]}
                    </Box>
                </Link>
            ))}
        </Flex>
    );
};

export default LeftNav;
