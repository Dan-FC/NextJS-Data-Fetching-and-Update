"use server"

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function postSportAction(formData: FormData) {
    const title = formData.get('namesport')

    // fetch(apiUrl + "endpoint")
}