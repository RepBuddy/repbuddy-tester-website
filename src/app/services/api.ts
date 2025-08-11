"use server";

export const addTester = async (email: string) => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    const AUTH_KEY = process.env.AUTH_KEY;

    const response = await fetch(`${API_URL}/add-tester`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
            "Content-Type": "application/json",
            "Authorization": AUTH_KEY!
        }
    });

    return {
        data: response.json(),
        status: response.status
    };
}