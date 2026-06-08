import type { ReactNode } from "react";

type InputIcon = ReactNode | string;

export type InputProps = {
    label?: string;
    iconLeft?: InputIcon;
    iconRight?: InputIcon;
    placeholder?: string;
    onIconLeftClick?: () => void;
    onIconRightClick?: () => void;
    errors?: boolean | string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({
    label,
    iconLeft,
    iconRight,
    placeholder,
    onIconLeftClick,
    onIconRightClick,
    id,
    className,
    type = "text",
    errors,
    ...props
}: InputProps) {
    const inputId = label
        ? `input-${label
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "")}`
        : id;

    return (
        <div className={type === "radio" || type === "checkbox" ? "flex w-full flex-row-reverse gap-2 justify-end" : "flex w-full flex-col gap-1.25"}>
            {label && (
                <label className={type === "radio" || type === "checkbox" ? "text-small" : "text-h5" + (errors ? " text-(--primary)" : "")} htmlFor={inputId}>
                    {label}
                </label>
            )}

            <div className="flex flex-col gap-1.25">

                <div className={`relative flex items-center ${type === "radio" || type === "checkbox" ? "" : "w-full"}`}>
                    {iconLeft ? (
                    onIconLeftClick ? (
                        <button
                            type="button"
                            onClick={onIconLeftClick}
                            className="absolute left-3 flex items-center text-(--foreground) hover:opacity-80"
                            aria-label={`${label} left icon action`}
                        >
                            {iconLeft}
                        </button>
                    ) : (
                        <div className="absolute left-3 flex items-center">
                            {iconLeft}
                        </div>
                    )
                    ) : null}

                    <input
                        id={inputId}
                        type={type}
                        className={[
                            "rounded-md border bg-(--background) px-3 py-2",
                            "text-body placeholder:text-[#6B7280]",
                            "outline-none transition-colors",
                            iconLeft ? "pl-10" : "",
                            iconRight ? "pr-10" : "",
                            "focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20",
                            className ?? "",
                            type === "radio" || type === "checkbox" ? "accent-(--primary) w-auto" : "w-full",
                            errors ? "border-(--primary)" : "border-[#E0E0E0] ",
                        ]
                            .filter(Boolean)
                            .join(" ")}
                        placeholder={placeholder}
                        {...props}
                    />

                    {iconRight ? (
                        onIconRightClick ? (
                            <button
                                type="button"
                                onClick={onIconRightClick}
                                className="absolute right-3 cursor-pointer flex items-center text-(--foreground) hover:opacity-80"
                                aria-label={`${label} right icon action`}
                            >
                                {iconRight}
                            </button>
                        ) : (
                            <div className="absolute right-3 flex items-center">
                                {iconRight}
                            </div>
                        )
                    ) : null}
                </div>
                

                {errors && typeof errors === "string" && <span className="text-(--primary) text-small">{errors}</span>}

            </div>
        </div>
    );
}
