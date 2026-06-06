type FlagVariant = "delivered" | "pending" | "preparation" | "onTheWay";

type FlagProps = {
    variant?: FlagVariant;
    className?: string;
};

const flagStyles: Record<
    FlagVariant,
    { label: string; bg: string; text: string }
> = {
    delivered: {
        label: "ENTREGUE",
        bg: "bg-[#F0FDF4]",
        text: "text-[#3AAA5C]",
    },
    pending: {
        label: "PENDENTE",
        bg: "bg-[#FCEBEC]",
        text: "text-(--primary)",
    },
    preparation: {
        label: "EM PREPARO",
        bg: "bg-[#FFE8D6]",
        text: "text-(--secondary)",
    },
    onTheWay: {
        label: "A CAMINHO",
        bg: "bg-[#DDE8FF]",
        text: "text-[#2563EB]",
    },
};

export function Flag({ variant = "delivered", className }: FlagProps) {
    const config = flagStyles[variant];

    return (
        <span
            className={[
                "inline-flex h-7.75 items-center justify-center rounded-[10px] px-2.5 py-1.25",
                "text-small font-bold leading-5.25 whitespace-nowrap",
                config.bg,
                config.text,
                className,
            ].join(" ")}
        >
            {config.label}
        </span>
    );
}
