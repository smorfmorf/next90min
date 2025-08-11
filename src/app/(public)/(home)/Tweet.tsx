import { ITweet } from "@/interface/tweet";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
    tweet: ITweet;
}

class PagesConfig {
    PROFILE(username: string) {
        return `/user/${username}`;
    }
}
export const PAGES = new PagesConfig();

export const Tweet: React.FC<Props> = ({ tweet, className }) => {
    return (
        <div className="border rounded-xl p-4 shadow-md shadow-red-400">
            <div className="flex flex-col gap-2">
                {/* <Image src='' width={24} height={24} /> */}
                <Link href={PAGES.PROFILE(tweet.author)}>@{tweet.author}</Link>
                <p>{tweet.text}</p>
            </div>
        </div>
    );
};
