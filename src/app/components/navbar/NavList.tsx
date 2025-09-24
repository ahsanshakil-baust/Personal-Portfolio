import Link from "next/link";
import React from "react";

interface NavListProps {
    link: string;
    img: string;
    name: string;
}

const NavList: React.FC<NavListProps> = ({ link, img, name }) => {
    return (
        <Link href={link}>
            <img src={img} alt="no-image" />
            <span>{name}</span>
        </Link>
    );
};

export default NavList;
