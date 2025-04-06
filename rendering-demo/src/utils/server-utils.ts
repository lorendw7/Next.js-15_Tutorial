import "server-only"



export const serverSideFunction = () => {
    console.log(`use mulitiple libraries,
                    use enviroment variables
                    interact with a database
                    process confidential information`);
    return "server result";
}