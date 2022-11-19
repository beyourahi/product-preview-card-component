import { Montserrat } from "@next/font/google";
import { fetchData } from "./fetchData";

const montserrat = Montserrat();

const Paragraph = async () => {
    const data = await fetchData();
    const { paragraph } = data;

    return (
        <p
            className={`text-[#6c7289] text-base font-medium tracking-wide ${montserrat.className}`}
        >
            {paragraph}
        </p>
    );
};

export default Paragraph;
