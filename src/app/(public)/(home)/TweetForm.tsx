import { postTweet } from "@/serverAction/post-tweet";
import React from "react";

interface Props {
    className?: string;
}

export const TweetForm: React.FC<Props> = ({ className }) => {
    return (
        <form action={postTweet} className="border p-2 mb-2 rounded-lg grid gap-10 ">
            <input
                placeholder="What's happening"
                type="text"
                name="content"
                className=" rounded-2xl p-4 w-full outline-none"
            />

            <button className="justify-self-end">Tweet</button>
        </form>
    );
};
