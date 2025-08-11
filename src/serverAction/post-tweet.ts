"use server";

export async function postTweet(formData: FormData) {
    const content = formData.get("content");
    console.log("content: ", content);
}

export default async function fetchData() {
    const res = await fetch("http://localhost:3000/api", {
        cache: "no-store",
    });
    const data = await res.json();
    return data;
}
