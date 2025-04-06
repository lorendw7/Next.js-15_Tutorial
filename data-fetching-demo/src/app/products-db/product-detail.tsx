"use client";


import { removeProduct } from "@/actions/product";
import Link from "next/link";
import { useOptimistic } from "react";

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string | null;
};



export const ProductsDetail = ({ products }: {
    products: Product[]
}) => {
    const [optimisticProducts, setOptimisticProducts] = useOptimistic(products, (currentProducts, productId) => {
        return currentProducts.filter((product) => product.id !== productId)
    });

    const removeProductById = async (productId: number) => {
        setOptimisticProducts(productId);
        await removeProduct(productId);
    }

    return (
        <ul className="space-y-4 p-4">
            {
                optimisticProducts.map((product) => (
                    <li key={product.id} className="bg-black rounded-md px-2 py-4">
                        <Link href={`/products-db/${product.id}`}><h2 className="text-white">{product.title}</h2></Link>
                        <p className="text-white">{product.description}</p>
                        <p className="text-white">${product.price}</p>
                        <form action={removeProductById.bind(null, product.id)}>
                            <button
                                type="submit"
                                className="px-4 py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-700">
                                Delete
                            </button>
                        </form>
                    </li>
                ))
            }
        </ul>
    );
}