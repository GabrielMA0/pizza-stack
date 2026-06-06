import Link from "next/link";
import { NavItem } from "@/shared/types";
import { DashboardIcon, OrdersIcon, MenuIcon, SettingsIcon} from '@/shared/components/icons';

export function FooterAdmin() {

    const navItems: NavItem[] = [
        {
            label: "Dashboard",
            href: "admin/dashboard",
            icon: <DashboardIcon />,
        },
        {
            label: "Pedidos",
            href: "admin/pedidos",
            icon: <OrdersIcon />,
        },
        {
            label: "Cardápio",
            href: "admin/cardapio",
            icon: <MenuIcon />,
        },
        {
            label: "Ajustes",
            href: "admin/ajustes",
            icon: <SettingsIcon  />,
        },
    ]

    return (
        <footer className="border-t border-(--dark)/10 bg-(--background) text-(--dark)">
            <div className="mx-auto w-full max-w-360 md:pt-10 md:pb-5 md:px-5">
                    <div className="flex items-center justify-between p-5 md:hidden">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="flex gap-1.25 w-full flex-col items-center transition-opacity h-11.25"
                            >
                                {item.icon}

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
                    </div>
            </div>
        </footer>
    );
}
