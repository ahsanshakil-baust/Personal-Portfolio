import React from "react";
import { navlists } from "./navbar";
import NavList from "./NavList";

const NavLinks = () => {
    return (
        <ul>
            {navlists.map((el: any, index: number) => (
                <NavList
                    key={index}
                    link={el?.link}
                    img={el?.img}
                    name={el?.name}
                />
            ))}
        </ul>
    );
};

export default NavLinks;
