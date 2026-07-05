
// FilterButton.tsx
// This interface defines the expected props for the FilterButton component.
interface FilterButtonProps {
    onClick: () => void;
    label: string;
}


// filter button which filters the tasks based on the selected filter.
// It takes two props: onClick, which is a function that will be called when the 
// button is clicked, and label, which is a string that will be displayed 
// inside the button.


function FilterButton({ onClick, label }: FilterButtonProps) {
    return (
        <button className="filter-button" onClick={onClick}>
            {label}
        </button>
    );
}

export default FilterButton;