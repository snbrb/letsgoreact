
// PrimaryButton.tsx
import React from 'react';

// This interface defines the expected props for the PrimaryButton component.
// onClick is a function that will be called when the button is clicked.
// children is a ReactNode, which means it can be any valid React child (string, number, element, etc.)
// that will be displayed inside the button.
interface Props {
    onClick?: () => void;
    children: React.ReactNode;
    buttonType?: "button" | "submit" | "reset"; // Optional prop to specify the button type
}

export default function PrimaryButton(props: Props) {

    // Destructuring the props to extract onClick and children 
    // for easier use within the component.
    const { onClick, children } = props;

    // The button element is styled with Tailwind CSS classes to give it a primary button appearance.
    return (
        <button
            type={props.buttonType || "button"} // Default to "button" if buttonType is not provided
            onClick={onClick}
            className="primary-button"
        >
            {children}
        </button>
    );
}