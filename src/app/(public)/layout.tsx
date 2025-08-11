import { Header } from "@/components/Header";
import React from "react";

interface Props {
    className?: string;
    children?: React.ReactNode;
}

const Layout: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return (
        <div className="min-h-screen  flex justify-center px-4 py-8">
            <div className="w-full max-w-xl ">
                <Header />
                {children}
            </div>
        </div>
    );
};

export default Layout;
