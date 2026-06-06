import Link from "next/link";
import Image from "next/image";
import { NavItem } from "@/shared/types";
import {
    HomeIcon,
    OrdersIcon,
    ProfileIcon,
} from "@/shared/components/icons";
import { InstagramIcon, FacebookIcon, XIcon } from "@/shared/components/icons";

export function FooterClient() {
    const year = new Date().getFullYear();

    const footerSections = [
        {
            title: "Explorar",
            links: [
                { label: "Cardápio", href: "#" },
                { label: "Ofertas", href: "#" },
                { label: "Lojas Próximas", href: "#" },
                { label: "Franquias", href: "#" },
            ],
        },
        { 
            title: "Suporte",
            links: [
                { label: "Minha conta", href: "#" },
                { label: "Contato", href: "#" },
                { label: "Meus pedidos", href: "#" },
                { label: "Ajuda & FAQ", href: "#" },
                { label: "Conta", href: "#" },
            ],
        },
        {
            title: "Horário de Funcionamento",
            links: [
                { label: "Seg - Qui: 18:00 às 23:00", href: "#" },
                { label: "Sex - Sab: 18:00 as 01:00", href: "#" },
                { label: "Dom: 17:00 as 23:30", href: "#" },
            ],
        },
    ] as const;

    const navItems: NavItem[] = [
        {
            label: "Início",
            href: "#",
            active: true,
            icon: <HomeIcon />,
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
    ]

    return (
        <footer className="border-t border-(--dark)/10 bg-(--background) text-(--dark)">
            <div className="mx-auto w-full max-w-360 md:pt-10 md:pb-5 md:px-5">
                {/* Mobile */}
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

                {/* Desktop */}
                <div className="hidden md:flex flex-col gap-12.5">
                    <div className="flex gap-2.5">
                        <div>
                            <Image
                                src="/logo/Logo.png"
                                alt="PizzaStack"
                                width={204}
                                height={50}
                            />
                            <p className="mt-2 max-w-sm text-paragraph-2 text-(--gray)">
                                Sua pizzaria favorita com entrega ultra-rápida e
                                os melhores ingredientes.
                            </p>
                        </div>
                        <div className="flex justify-between w-full">
                            {footerSections.map((section) => (
                                <div key={section.title} className="w-full">
                                    <h2 className="text-(--dark)">
                                        {section.title}
                                    </h2>
                                    <ul className="mt-4 flex flex-col gap-2.5">
                                        {section.links.map((item) => (
                                            <li key={item.label}>
                                                <Link
                                                    href={item.href}
                                                    className="text-paragraph-2 text-(--gray) transition-colors hover:text-(--primary)"
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-6 border-t border-(--dark)/10 pt-5 items-center justify-between">
                        <p className="text-small text-(--gray)">
                            © {year} PizzaStack. Todos os direitos reservados.
                        </p>
                        <div className="flex items-center gap-1">
                            <Link href="#"  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-(--gray) transition-colors hover:bg-[rgba(29,30,34,0.06)] hover:text-(--primary)">
                                <InstagramIcon />
                            </Link>
                            <Link href="#"  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-(--gray) transition-colors hover:bg-[rgba(29,30,34,0.06)] hover:text-(--primary)">
                                <FacebookIcon />
                            </Link>
                            <Link href="#"  className="inline-flex h-9 w-9 items-center justify-center rounded-md text-(--gray) transition-colors hover:bg-[rgba(29,30,34,0.06)] hover:text-(--primary)">
                                <XIcon />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
