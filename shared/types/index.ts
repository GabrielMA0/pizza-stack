import type { ReactNode } from "react";

export type NavItem = {
    label: string;
    href: string;
    icon: ReactNode;
    active?: boolean;
    badgeCount?: number;
};