import * as React from "react";
import { FC, HTMLAttributes } from "react";

interface MenuGroupProps extends HTMLAttributes<HTMLDivElement> {}

const MenuGroup: FC<MenuGroupProps> = ({ children }) => {
    return (
        <div className="block text-default my-4 bg-white rounded-[4px] max-w-[320px] shadow-menu dark:bg-input-hovered dark:text-subtlest-old">
            <div className="flex static flex-col overflow-auto">{children}</div>
        </div>
    );
};

export default MenuGroup;
