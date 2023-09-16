import { FC } from "react";
import { cn } from "../../utility/functions";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Modal: FC<ModalProps> = () => {
    return (
        <div
            className={
                "d-block fixed z-1 top-0 left-0 w-full h-full overflow-auto bg-blanket-primary"
            }
        >
            <div className="relative w-full h-full">
                <div className="absolute bg-white m-auto p-4 border border-solid border-accent-yellow-subtle w-1/3 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    Hey this is a modal{" "}
                </div>
            </div>
        </div>
    );
};

export default Modal;
