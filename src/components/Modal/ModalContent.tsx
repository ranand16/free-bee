import { FC } from "react";
import { cn } from "../../utility/functions";
import Button from "../Button";

// @dialog-height-small: 200px;
// @dialog-height-medium: 300px;
// @dialog-height-large: 500px;

// @dialog-width-small: 400px;
// @dialog-width-medium: 600px;
// @dialog-width-large: 800px;
// @dialog-width-xlarge: 980px;

type IModalSize = "sm" | "md" | "lg" | "xl";

interface ModalContentProps extends React.HTMLAttributes<HTMLElement> {
    size?: IModalSize;
}

const ModalContent: FC<ModalContentProps> = ({ className, size, children }) => {
    return (
        <section
            className={cn(
                className,
                "bg-white rounded-[3px] w-1/3 m-auto border border-solid border-accent-yellow-subtle"
            )}
        >
            <header className="flex items-center justify-between px-5 h-[62px] border-t-0 border-b-2 rounded-[3px] font-normal w-full text-default">
                This is modal header
            </header>
            <div className="p-5">This is the modal body</div>
            <footer className="border-b-0 border-t-2 rounded-[3px] border-t-shadow1 py-[10px] px-5 h-[52px] w-full">
                <div className="float-right gap-2 flex flex-row h-full">
                    <Button
                        className="min-w-0"
                        label="Okay"
                        variant={"primary"}
                    />
                    <Button
                        className="min-w-0"
                        label="Next"
                        variant={"default"}
                    />
                    <Button
                        className="min-w-0"
                        label="Close"
                        variant={"link"}
                    />
                </div>
                <div className="text-subtlest pr-[10px] overflow-hidden overflow-ellipsis whitespace-nowrap leading-8 ">
                    This is a hint.This is a hint.This is a hint.This is a hint.
                    This is a hint.This is a hint. This is a hint.This is a
                    hint. This is a hint.This is a hint. This is a hint.This is
                    a hint.This is a hint.This is a hint.This is a hint.
                </div>
            </footer>
        </section>
    );
};

export default ModalContent;
