export function DashboardIcon({ active }: { active: boolean }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 18 18"
            fill="none"
            className={active ? "text-(--light)" : "text-(--dark)"}
        >
            <path
                d="M9.98438 0H18V6H9.98438V0ZM9.98438 18V8.01562H18V18H9.98438ZM0 18V12H8.01562V18H0ZM0 9.98438V0H8.01562V9.98438H0Z"
                fill="currentColor"
            />
        </svg>
    );
}
