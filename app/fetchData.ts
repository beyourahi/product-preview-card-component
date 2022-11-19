import { Data } from "types";

export const fetchData = async () => {
    let URL;

    if (process.env.NODE_ENV === "development") {
        URL = "http://localhost:3000";
    } else if (process.env.NODE_ENV === "production") {
        URL = "https://product-preview-card-component-beyourahi.vercel.app";
    }

    const res = await fetch(`${URL}/api/data`);
    const data: Data = await res.json();

    return data;
};
