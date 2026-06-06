import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/shared/components/ui";
import {
    DashboardIcon,
    OrdersIcon,
    MenuIcon,
    SettingsIcon,
} from "@/shared/components/icons";

type AsideItem = "dashboard" | "pedidos" | "cardapio" | "ajustes";

type AsideProps = {
    activeItem?: AsideItem;
    onLogout?: () => void;
    className?: string;
};

const navItems: Array<{
    key: AsideItem;
    label: string;
    href: string;
    icon: (active: boolean) => ReactNode;
}> = [
    {
        key: "dashboard",
        label: "Dashboard",
        href: "#",
        icon: (active) => <DashboardIcon active={active} />,
    },
    {
        key: "pedidos",
        label: "Pedidos",
        href: "#",
        icon: (active) => <OrdersIcon active={active} />,
    },
    {
        key: "cardapio",
        label: "Cardápio",
        href: "#",
        icon: (active) => <MenuIcon active={active} />,
    },
    {
        key: "ajustes",
        label: "Ajustes",
        href: "#",
        icon: (active) => <SettingsIcon active={active} />,
    },
];

export function Aside({
    activeItem = "dashboard",
    onLogout,
    className,
}: AsideProps) {
    return (
        <aside
            className={[
                "h-screen w-72 flex-col bg-(--light) hidden md:flex",
                className,
            ].join(" ")}
        >
            <div className="px-6 py-6">
                <Image
                    src="/logo/Logo.png"
                    alt="PizzaStack"
                    width={204}
                    height={50}
                    priority
                />
            </div>

            <nav
                className="flex flex-1 flex-col px-4 pt-4"
                aria-label="Menu lateral"
            >
                <ul className="flex flex-col gap-2">
                    {navItems.map((item) => {
                        const isActive = item.key === activeItem;

                        return (
                            <li key={item.key}>
                                <Link
                                    href={item.href}
                                    className={[
                                        "flex h-12 items-center gap-3 rounded-full px-4 text-paragraph-1 font-medium transition-colors",
                                        isActive
                                            ? "bg-(--primary) text-(--light)"
                                            : "text-(--dark) hover:bg-(--secondary)/50",
                                    ].join(" ")}
                                >
                                    {item.icon(isActive)}
                                    <span>{item.label}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="border-t border-(--dark)/10 px-5 py-5">
                <Button className="w-full" onClick={onLogout}>
                    Sair
                </Button>
            </div>
        </aside>
    );
}

export default Aside;
