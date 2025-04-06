import {cookies, headers} from "next/headers"

export async function GET() {

    const headList = await headers();
    console.log(headList.get("Authorization"));

    const cookieStore = await cookies();
    cookieStore.set("resultsPerPage", "20");
    console.log(cookieStore.get("resultsPerPage"));
    
    return new Response("<h1>Profile Data</h1>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    });
}