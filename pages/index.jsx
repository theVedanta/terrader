import db from "@/db";
import { CheckIcon } from "@chakra-ui/icons";
import {
    Button,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    InputGroup,
    Input,
    InputRightElement,
    FormLabel,
    FormControl,
    Text,
    useToast,
} from "@chakra-ui/react";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { useRouter } from "next/router";

const Home = ({ authed, setAuthed, setUser }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [passMatch, setPassMatch] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConf, setPasswordConf] = useState("");
    const [loading, setLoading] = useState("");
    const toast = useToast();
    const router = useRouter();

    const signUpUser = async () => {
        if (!passMatch) return setLoading(false);
        const docsWithName = await getDocs(
            query(collection(db, "users"), where("username", "==", username))
        );
        if (docsWithName.size > 0) {
            setLoading(false);
            return toast({ title: "Username exists", status: "error" });
        }

        const userToAdd = {
            username,
            password: await hash(password, 10),
        };
        const userDoc = await addDoc(collection(db, "users"), userToAdd);

        const access_token = sign(
            { id: userDoc.id.toString() },
            process.env.NEXT_PUBLIC_TOKEN_SECRET,
            { expiresIn: "30d" }
        );
        localStorage.setItem("auth-token", access_token);
        setAuthed(true);
        setUser({ id: userDoc.id.toString(), ...userToAdd });

        router.push("/dash");
    };

    const loginUser = async () => {
        if (password === "") {
            setLoading(false);
            return setPassMatch(false);
        }
        const userArr = await getDocs(
            query(collection(db, "users"), where("username", "==", username))
        );

        if (userArr.docs.length === 0) {
            setLoading(false);
            return toast({ title: "Some error occurred", status: "error" });
        }

        if (await compare(password, userArr.docs[0].data().password)) {
            const access_token = sign(
                {
                    id: userArr.docs[0].id.toString(),
                },
                process.env.NEXT_PUBLIC_TOKEN_SECRET,
                { expiresIn: "30d" }
            );
            localStorage.setItem("auth-token", access_token);
            setAuthed(true);
            setUser({
                id: userArr.docs[0].id.toString(),
                ...userArr.docs[0].data(),
            });

            router.push("/dash");
        } else {
            setLoading(false);
            return toast({ title: "Incorrect Password", status: "error" });
        }
    };

    useEffect(
        () =>
            password === passwordConf
                ? setPassMatch(true)
                : setPassMatch(false),
        [password, passwordConf]
    );

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
                    <Button>Dashboard</Button>
                </Link>
                &nbsp;
                {!authed && <Button onClick={onOpen}>Auth</Button>}
            </Flex>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent bg="brandBlack.200" w="40%">
                    <ModalHeader>
                        <Heading>Login/Sign Up</Heading>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs
                            isFitted
                            variant="solid-rounded"
                            colorScheme="green"
                        >
                            <TabList mb="1em">
                                <Tab rounded="md" mx={2}>
                                    Login
                                </Tab>
                                <Tab rounded="md" mx={2}>
                                    Register
                                </Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setLoading(true);
                                            loginUser();
                                        }}
                                    >
                                        <FormControl isRequired>
                                            <FormLabel>Username</FormLabel>
                                            <InputGroup>
                                                <Input
                                                    placeholder="thevedanta_123"
                                                    onChange={(e) =>
                                                        setUsername(
                                                            e.target.value
                                                                .trim()
                                                                .toLowerCase()
                                                        )
                                                    }
                                                    name="username"
                                                />
                                                <InputRightElement>
                                                    <CheckIcon color="green.400" />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>

                                        <FormControl isRequired>
                                            <FormLabel mt={4} name="password">
                                                Password
                                            </FormLabel>
                                            <InputGroup>
                                                <Input
                                                    placeholder="p@ssw0rd"
                                                    type="password"
                                                    onChange={(e) => {
                                                        setPassword(
                                                            e.target.value.trim()
                                                        );
                                                        setPasswordConf(
                                                            e.target.value.trim()
                                                        );
                                                    }}
                                                />
                                                <InputRightElement>
                                                    <CheckIcon color="green.400" />
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>

                                        <Button
                                            colorScheme="green"
                                            isLoading={loading}
                                            size="md"
                                            mt={10}
                                            type="submit"
                                            w="100%"
                                        >
                                            Login
                                        </Button>
                                    </form>
                                </TabPanel>

                                <TabPanel>
                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            setLoading(true);
                                            signUpUser();
                                        }}
                                    >
                                        <FormLabel>Username</FormLabel>
                                        <InputGroup>
                                            <Input
                                                required
                                                placeholder="thevedanta_123"
                                                onChange={(e) =>
                                                    setUsername(
                                                        e.target.value
                                                            .trim()
                                                            .toLowerCase()
                                                    )
                                                }
                                                name="username"
                                            />
                                            <InputRightElement>
                                                <CheckIcon color="green.400" />
                                            </InputRightElement>
                                        </InputGroup>

                                        <FormLabel mt={4} name="password">
                                            Password
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                onChange={(e) =>
                                                    setPassword(
                                                        e.target.value.trim()
                                                    )
                                                }
                                                required
                                                type="password"
                                                placeholder="p@ssw0rd"
                                            />
                                            <InputRightElement>
                                                <CheckIcon color="green.400" />
                                            </InputRightElement>
                                        </InputGroup>

                                        <FormLabel mt={4}>
                                            Confirm password
                                        </FormLabel>
                                        <InputGroup>
                                            <Input
                                                required
                                                placeholder="p@ssw0rd"
                                                onChange={(e) =>
                                                    setPasswordConf(
                                                        e.target.value.trim()
                                                    )
                                                }
                                                name="password-conf"
                                                type="password"
                                            />
                                            <InputRightElement>
                                                <CheckIcon color="green.400" />
                                            </InputRightElement>
                                        </InputGroup>

                                        <Button
                                            colorScheme="green"
                                            isLoading={loading}
                                            size="md"
                                            mt={10}
                                            type="submit"
                                            w="100%"
                                        >
                                            Sign Up
                                        </Button>
                                    </form>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>

                    <ModalFooter>
                        {!passMatch && (
                            <Text color="red.400" w="100%" textAlign="left">
                                Passwords dont match
                            </Text>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Home;
