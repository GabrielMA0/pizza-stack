type CategoryProps = {
    name: string,
    selectedCategory: boolean, 
    index?: number, 
    onClick: () => void
}

export function Category({name, selectedCategory, onClick, ...props}: CategoryProps){
    return(
        <button
              key={props.key}
              className={`capitalize hover:border border-(--primary) cursor-pointer shadow-(--shadow) w-30 h-8.75 rounded-[10px] whitespace-nowrap ${
                selectedCategory
                  ? "bg-(--primary) text-white"
                  : "bg-white text-(--dark)"
              }`}
              onClick={onClick}
              {...props}
            >
              {name}
            </button>
    )
}