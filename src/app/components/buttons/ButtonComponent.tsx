import React from "react";

interface ButtonProps {
    name: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({ name }) => {
    return (
        <div>
            <button>{name}</button>
        </div>
    );
};

export default ButtonComponent;
