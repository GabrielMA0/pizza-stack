import Image from "next/image";
import {Button} from "@/shared/components/ui"

type Product = {
    name: string;
    price: string;
    description: string;
    image: string;
    tag?: string;
};

export function ProductCard({ product }: { product: Product }) {
    return (
        <div className="max-w-62.5 h-100 bg-white rounded-[30px] overflow-hidden shadow-(--shadow)">
            <div className="relative h-50">
                <Image width={250} height={200} alt={product.name} src={product.image} className="w-full h-full aspect-video object-cover" />

                {product.tag && (
                    <div className="p-2 absolute top-5 left-3 bg-(--secondary) text-white text-small font-semibold rounded-lg">
                        {product.tag}
                    </div>
                )}
            </div>

            <div className="flex flex-col justify-between p-5 h-50">
                <div className="h-full">
                    <div className="flex justify-between h-14">
                        <h3>{product.name}</h3>

                        <span className="text-(--primary) font-semibold whitespace-nowrap">{product.price}</span>
                    </div>

                    <p className="text-paragraph-3 text-(--gray)">{product.description}</p>
                </div>

                <Button className="w-full">
                    Adicionar
                </Button>
            </div>
        </div>
    );
}