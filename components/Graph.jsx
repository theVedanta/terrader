import { Box } from "@chakra-ui/react";
import { Chart } from "chart.js/auto";
import { useEffect } from "react";

const Graph = () => {
    useEffect(() => {
        new Chart(document.querySelector("#chart-canvas"), {
            type: "line",
            data: {
                labels: [
                    "0 Mins.",
                    "1.5 Mins.",
                    "1 Mins.",
                    "1.5 Mins.",
                    "2 Mins.",
                    "2.5 Mins",
                    "3 Mins.",
                    "3.5 Mins.",
                    "4 Mins.",
                    "4.5 Mins.",
                    "5 Mins",
                ],
                datasets: [
                    {
                        label: "Price",
                        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                        borderWidth: 2,
                        borderColor: "#1CC880",
                        backgroundColor: "#1CC880",
                    },
                ],
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, []);

    return (
        <Box px={20} pt={10} w="74%" h="69vh">
            <canvas id="chart-canvas"></canvas>
        </Box>
    );
};

export default Graph;
