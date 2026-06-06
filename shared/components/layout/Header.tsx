import { NavItem } from "@/shared/types";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui";
import {
    SearchIcon,
    HomeIcon,
    CartIcon,
    OrdersIcon,
    ProfileIcon,
} from "@/shared/components/icons";

const navItems: NavItem[] = [
    {
        label: "Início",
        href: "#",
        active: true,
        icon: <HomeIcon />,
    },
    {
        label: "Carrinho",
        href: "#",
        icon: <CartIcon />,
        badgeCount: 3,
    },
    {
        label: "Pedidos",
        href: "#",
        icon: <OrdersIcon />,
    },
    {
        label: "Perfil",
        href: "#",
        icon: <ProfileIcon />,
    },
] as const;

export function Header() {
    return (
        <header className="border-b border-(--dark)/10 bg-(--light) hidden md:block">
            <div className="mx-auto w-full hidden md:flex max-w-365 items-center justify-between px-5 py-5">
                <Link
                    href="/"
                    aria-label="Ir para início"
                    className="shrink-0 transition-opacity hover:opacity-90"
                >
                    <Image
                        src="/logo/Logo.png"
                        alt="PizzaStack"
                        width={204}
                        height={50}
                        priority
                    />
                </Link>

                {/* <Input
                    placeholder="Pesquise por pizzas, bebidas e etc"
                    id="header-search"
                    iconLeft={<SearchIcon />}
                    type="search"
                /> */}

                <div className="hidden h-[50px] w-full max-w-[600px] items-center gap-2.5 rounded-[10px] border border-black/5 bg-(--light) px-5 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] lg:flex">
                    <SearchIcon />
                    <input
                        type="search"
                        placeholder="Pesquise por pizzas, bebidas e etc"
                        className="w-full bg-transparent text-small text-(--gray) outline-none placeholder:text-[#a1aec0]"
                    />
                </div>

                <nav
                    aria-label="Navegação principal"
                    className="hidden items-center gap-[30px] lg:flex"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="relative flex w-[50px] flex-col items-center gap-[5px] transition-opacity hover:opacity-80"
                        >
                            {item.icon}
                            {item.badgeCount ? (
                                <span className="absolute -top-2 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-(--primary) text-[15px] font-bold leading-none text-(--light)">
                                    {item.badgeCount}
                                </span>
                            ) : null}
                            <span
                                className={
                                    item.active
                                        ? "text-small font-medium text-(--primary) [&_svg]:text-(--primary)"
                                        : "text-small font-medium text-(--dark)"
                                }
                            >
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </div>

            <div className="flex justify-center px-5 py-3 md:hidden">
                <Link
                    href="/"
                    aria-label="Ir para início"
                    className="transition-opacity hover:opacity-90"
                >
                    <Image
                        src="/logo/Logo.png"
                        alt="PizzaStack"
                        width={204}
                        height={50}
                    />
                </Link>
            </div>
        </header>
    );
}
