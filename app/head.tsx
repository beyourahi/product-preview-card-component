import { fetchData } from "./fetchData";

const Head = async () => {
    const data = await fetchData();
    const { appTitle, appDesc } = data;

    return (
        <>
            <title>{appTitle}</title>

            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={appDesc} />

            <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/images/favicon-32x32.png"
            />
        </>
    );
};
export default Head;
