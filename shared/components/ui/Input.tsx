import type { ReactNode } from "react";

type InputIcon = ReactNode | string;

export type InputProps = {
    label?: string;
    iconLeft?: InputIcon;
    iconRight?: InputIcon;
    placeholder?: string;
    onIconLeftClick?: () => void;
    onIconRightClick?: () => void;
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
    ...props
}: InputProps) {
    const inputId = label
        ? `input-${label
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^a-z0-9-]/g, "")}`
        : id;

    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label className="text-h5" htmlFor={inputId}>
                    {label}
                </label>
            )}

            <div className="relative flex w-full items-center">
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
                        "w-full rounded-md border border-(--neutral-100) bg-(--background) px-3 py-2",
                        "text-body placeholder:text-(--neutral-400) placeholder-(-gray)",
                        "outline-none transition-colors",
                        iconLeft ? "pl-10" : "",
                        iconRight ? "pr-10" : "",
                        "focus:border-(--primary) focus:ring-2 focus:ring-(--primary)/20",
                        className ?? "",
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
                            className="absolute right-3 flex items-center text-(--foreground) hover:opacity-80"
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
        </div>
    );
}
