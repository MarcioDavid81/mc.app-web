import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho() {
    return (
        <Link href="/carrinho">
            <div className="relative">
                <IconShoppingCart size={32}  stroke={1}/>
                <span className="
                    absolute -top-3 -right-3
                    bg-red-500 w-6 h-6
                    flex justify-center items-center
                    rounded-full text-white text-xs
                "
                >99
                </span>
            </div>
        </Link>
    );
}