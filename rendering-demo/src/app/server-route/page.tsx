import { serverSideFunction } from "@/utils/server-utils"
import { ImageSlider } from "@/components/imageSlider";
import { ClientSideFunction } from "@/utils/client-utils";


export default function serverRoutePage() {
    const result = serverSideFunction();
    // const clientResult = ClientSideFunction()
    return (
        <>
            <ImageSlider />
            <h1>Server Route {result}</h1>
        </>
    );
}