import { extendTheme } from "@chakra-ui/react";

const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        glass: "rgba(218, 218, 218, 0.25)",
        brandBlack: { 100: "rgba(58, 58, 58, 0.4)", 200: "#383A3A" },
    },
    fonts: {
        heading: `'Chakra Petch', sans-serif`,
        body: `'Chakra Petch', sans-serif`,
    },
    components: {
        Button: {
            defaultProps: {
                size: "lg",
            },
        },
    },
});

export default theme;
