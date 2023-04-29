import "@/styles/globals.css";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { verify } from "jsonwebtoken";
import { getDoc, doc } from "firebase/firestore";
import db from "@/db";

export default function App({ Component, pageProps }) {
    const [authed, setAuthed] = useState("check");
    const [user, setUser] = useState({});

    useEffect(() => {
        (async () => {
            if (!localStorage.getItem("auth-token")) return setAuthed(false);

            try {
                const token = localStorage.getItem("auth-token");
                const payload = verify(
                    token,
                    process.env.NEXT_PUBLIC_TOKEN_SECRET
                );

                if (payload) {
                    const userDoc = await getDoc(doc(db, "users", payload.id));
                    if (userDoc.exists()) {
                        setAuthed(true);
                        return setUser({
                            username: userDoc.data().username,
                            id: userDoc.id,
                        });
                    }

                    localStorage.removeItem("auth-token");
                    return setAuthed(false);
                }

                localStorage.removeItem("auth-token");
                return setAuthed(false);
            } catch (err) {
                localStorage.removeItem("auth-token");
                return setAuthed(false);
            }
        })();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Component
                {...pageProps}
                authed={authed}
                setAuthed={setAuthed}
                user={user}
                setUser={setUser}
            />
        </ChakraProvider>
    );
}
