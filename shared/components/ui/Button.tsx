import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    iconLeft?: ReactNode | string;
    iconRight?: ReactNode | string;
};

function renderIcon(
    icon: ButtonProps["iconLeft"] | ButtonProps["iconRight"] | undefined
) {
    if (icon == null) return null;

    return (
        <span aria-hidden="true" className="inline-flex items-center">
            {icon}
        </span>
    );
}

export function Button({
    variant = "primary",
    iconLeft,
    iconRight,
    className,
    children,
    type,
    ...props
}: ButtonProps) {
    const base =
        "cursor-pointer h-12 inline-flex items-center justify-center gap-2.5 rounded-lg px-5 transition-colors disabled:opacity-50 disabled:pointer-events-none";

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-[var(--primary)] text-[var(--light)] hover:opacity-90",
        secondary:
            "bg-transparent text-[var(--primary)] hover:opacity-90 border border-[var(--primary)]",
    };

    const cls = [base, variants[variant], className].join(" ");

    return (
        <button className={cls} type={type ?? "button"} {...props}>
            {renderIcon(iconLeft)}
            <span className="inline-flex items-center">{children}</span>
            {renderIcon(iconRight)}
        </button>
    );
}
