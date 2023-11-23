import * as React from "react";
import { FC } from "react";

interface MenuGroupProps {}

const MenuGroup: FC<MenuGroupProps> = () => {
    return (
        <div className="text-default my-4 bg-white shadow-menu rounded-[4px] max-w-[320px]"></div>
    );
};

export default MenuGroup;
