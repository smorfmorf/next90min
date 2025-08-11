"use client";
import fetchData from "@/serverAction/post-tweet";
import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

interface Props {
    className?: string;
}

const Page: React.FC<Props> = ({ className }) => {
    const router = useRouter();

    // вытаскиваем параметры после ?tag=fofo
    const searchParams = useSearchParams();
    const tag = searchParams.get("tag");
    console.log("tag: ", tag);

    async function getData() {
        const data = await fetchData();
        console.log("data: ", data);
    }

    return (
        // Suspense нужен для searchParams
        <Suspense>
            <div className="flex flex-col gap-2 text-left">
                <h2>
                    Профиль: <br /> tag: #{Boolean(tag) && tag}
                </h2>

                <button onClick={getData}>Получить данные</button>

                <button onClick={() => router.push("/")}>Назад на главную</button>
            </div>
        </Suspense>
    );
};
export default Page;

//* серверый вариант searchParams
// interface Props {
//     tag?: string;
// }

// export async function TestPage({ searchParams }: { searchParams: Promise<Props> }) {
//     const { tag } = await searchParams;
//     return <div></div>;
// }

//* серверый вариант params /user/[username]
// interface Props {
//     username?: string;
// }

// export async function TestPage({ params }: { params: Promise<Props> }) {
//     const { params } = await searchParams;
//     return <div></div>;
// }
