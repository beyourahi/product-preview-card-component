import PreviewImage from "./PreviewImage";
import Headings from "./Headings";
import Pricings from "./Pricings";
import Button from "./Button";
import Paragraph from "./Paragraph";

const Home = () => (
    <main className="bg-white flex flex-col rounded-xl md:flex-row md:justify-center md:items-center md:max-w-5xl">
        {/*//// Image */}
        <PreviewImage />

        <div className="p-6 space-y-6 md:p-10 md:w-[50%] lg:space-y-10">
            {/*//// Headings */}
            {/* @ts-ignore */}
            <Headings />

            {/*//// Paragraph */}
            {/* @ts-ignore */}
            <Paragraph />

            {/*//// Price */}
            {/* @ts-ignore */}
            <Pricings />

            {/*//// Button */}
            {/* @ts-ignore */}
            <Button />
        </div>
    </main>
);

export default Home;
