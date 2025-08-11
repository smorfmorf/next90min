"use client";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({ className }) => {
    //получаем значение из [username] в url
    const params = useParams<{ username: string }>();

    return <div className={className}>username: {params.username}</div>;
};

export default Page;
