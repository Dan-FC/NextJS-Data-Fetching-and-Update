"use server";
 
export async function getSportsAction(url : string) {
    const res = await fetch(url + "/sports", { method: "GET" });

    if (!res.ok) {
        const text = await res.text();
        //! se utiliza throw
        throw new Error(`Error: ${res.status} - ${text}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
        const text = await res.text();
        throw new Error("Expected JSON but got: " + text.slice(0, 100));
    }

    const jsonResponse = await res.json();

    if (!jsonResponse.data) {
        throw new Error("Data property is missing in the response");
    }

    return jsonResponse.data;
}