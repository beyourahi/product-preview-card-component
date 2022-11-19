import Image from "next/image";
import preview_mobile from "@public/images/image-product-mobile.jpg";
import preview_desktop from "@public/images/image-product-desktop.jpg";

const PreviewImage = () => (
    <>
        <Image
            src={preview_mobile}
            alt="preview image"
            className="rounded-t-xl object-contain object-center md:hidden"
        />

        <Image
            src={preview_desktop}
            alt="preview image"
            priority={true}
            className="rounded-l-xl object-contain hidden md:flex md:w-[50%]"
        />
    </>
);

export default PreviewImage;
