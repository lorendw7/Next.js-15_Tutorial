import { auth, currentUser } from "@clerk/nextjs/server"


export default async function DashBoardPage() {
    const authObj = await auth();
    const useObj = await currentUser();
    
    return <h1>DashBoard</h1>
}