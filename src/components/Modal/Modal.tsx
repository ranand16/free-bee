import { FC } from "react";
import ModalContent from "./ModalContent";
import BlanketComponent from "../BlanketComponent/BlanketComponent";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {}

const Modal: FC<ModalProps> = () => {
    return (
        <BlanketComponent>
            <ModalContent className="bg-slate-700" />
        </BlanketComponent>
    );
};

export default Modal;
