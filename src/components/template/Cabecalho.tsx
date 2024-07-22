import Carrinho from "./Carrinho";
import Logo from "./Logo";

export default function Cabecalho() {
    return (
        <header className="
        flex justify-between items-center
            px-10 bg-zinc-800 h-20"
        >
            <Logo />
            <Carrinho />
        </header>
    );
}