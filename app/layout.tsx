import { LayoutProps } from "types";
import "./globals.css";

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <html lang="en">
        <head />
        <body className="bg-[#f2ebe3] flex justify-center items-center h-screen p-7">
            {children}
        </body>
    </html>
);

export default Layout;
