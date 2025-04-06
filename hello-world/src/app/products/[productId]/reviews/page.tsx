export default async function productReviewList({
    params,
}: {
    params: Promise<{ productId: string }>
}) {
    const productId = (await params).productId;
    return <>
        <h1>product {productId}</h1>
        <h2>review 1</h2>
        <h2>review 2</h2>
        <h2>review 3</h2>
    </>
}