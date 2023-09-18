// import React from "react";
// export function BlanketComponent({ children }) {
//     return (
//         <div
//             className={
//                 "d-block fixed z-1 top-0 left-0 w-full h-full overflow-auto bg-blanket-primary"
//             }
//         >
//             <div className="relative w-full h-full">
//                 <div className="absolute bg-white m-auto w-1/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
//             </div>
//         </div>
//     );
// }

import { FC } from "react";

interface BlanketComponentProps {
    children: React.ReactNode;
}

const BlanketComponent: FC<BlanketComponentProps> = ({ children }) => {
    return (
        <div className="d-block fixed z-1 top-0 left-0 w-full h-full overflow-auto bg-blanket-primary">
            <div className="relative w-full h-full">
                <div className="absolute w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BlanketComponent;
