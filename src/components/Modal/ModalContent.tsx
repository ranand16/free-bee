import { FC } from "react";
import { cn } from "../../utility/functions";

interface ModalContentProps extends React.HTMLAttributes<HTMLElement> {}

const ModalContent: FC<ModalContentProps> = ({ className }) => {
    return (
        <section
            className={cn(
                className,
                "bg-white w-1/3 m-auto border border-solid border-accent-yellow-subtle p-4"
            )}
        >
            <header>This is modal header</header>
            <div>This is the modal body</div>
            <footer>This is modal footer</footer>
        </section>
    );
};

export default ModalContent;
