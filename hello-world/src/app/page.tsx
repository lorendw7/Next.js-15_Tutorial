import Link from "next/link";



export default function Home() {

    return <>
        <h1>Welcome Home!</h1>
        <Link href="/blog">Blog</Link>
        <Link href="/products">Products</Link>
        <Link href="articles/breaking-news-123?lang=en">Reading in English</Link>
        <Link href="articles/breaking-news-123?lang=fr">Reading in French</Link>
    </>
}

