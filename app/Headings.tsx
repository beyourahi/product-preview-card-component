import { Montserrat } from "@next/font/google";
import { Fraunces } from "@next/font/google";
import { fetchData } from "./fetchData";

const montserrat = Montserrat();
const fraunces = Fraunces();

const Headings = async () => {
    const data = await fetchData();
    const { mainHeading, subHeading } = data;

    return (
        <>
            {/*//// Sub Heading */}
            <h2
                className={`text-[#6c7289] text-base font-medium tracking-[0.4rem] ${montserrat.className}`}
            >
                {subHeading}
            </h2>

            {/*//// Main Heading */}
            <h1
                className={`text-[#1c232b] text-4xl font-extrabold ${fraunces.className}`}
            >
                {mainHeading}
            </h1>
        </>
    );
};
export default Headings;
