
import { FooterAdmin } from "@/shared/components/layout";
import { FooterClient } from "@/shared/components/layout";

export function Footer({isAdmin = false}: {isAdmin?: boolean}) {
    return (
        <footer className="border-t border-(--dark)/10 bg-(--background) text-(--dark)">
            {isAdmin ? <FooterAdmin /> : <FooterClient />}
        </footer>
    );
}
