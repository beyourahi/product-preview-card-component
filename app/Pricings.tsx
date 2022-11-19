import { Fraunces } from "@next/font/google";
import { fetchData } from "./fetchData";

const fraunces = Fraunces();

const Pricings = async () => {
    const data = await fetchData();
    const { oldPrice, newPrice } = data;

    return (
        <div className={`flex items-center space-x-6 ${fraunces.className}`}>
            <div className="text-[#3c8067] font-extrabold text-4xl">
                {newPrice}
            </div>
            <div className="line-through text-[#6c7289]">{oldPrice}</div>
        </div>
    );
};
export default Pricings;
