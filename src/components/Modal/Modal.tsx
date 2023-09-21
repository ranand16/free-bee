import { FC } from "react";
import BlanketComponent from "../BlanketComponent/BlanketComponent";
import { VariantProps, cva } from "class-variance-authority";
import Button from "../Button";
import { cn } from "../../utility/functions";

const modalVariants = cva(
    "bg-white rounded-[3px] w-1/3 m-auto border border-solid border-accent-yellow-subtle max-h-500:min-h-[200px] min-h-[238px]",
    {
        variants: {
            size: {
                sm: "w-[400px]",
                md: "w-[600px]",
                lg: "w-[800px]",
                xl: "w-[980px]",
            },
        },
    }
);

// height md 300px{
// ialog-overflow-with-both-buffers = 62+52+ 2*100
//     headerheight: 62px
//     footerheight: 52px

// }

// height md 500px{
// ialog-overflow-with-both-buffers = 62+52+ 2*100
//     headerheight: 62px
//     footerheight: 52px

// }

type IModalSize = "sm" | "md" | "lg" | "xl";

interface Modal
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof modalVariants> {
    size?: IModalSize;
    primaryButtonCb?: any;
    defaultButtonCb?: any;
    closeButtonCb?: any;
}

const Modal: FC<Modal> = ({
    className,
    size,
    children,
    primaryButtonCb,
    defaultButtonCb,
    closeButtonCb,
    ...props
}) => {
    return (
        <BlanketComponent>
            <section
                className={cn(
                    modalVariants({
                        size,
                    })
                )}
                {...props}
            >
                <header className="prose flex items-center justify-between px-5 h-[62px] border-t-0 border-b-2 rounded-[3px] font-normal w-full text-default">
                    <h1 className="font-medium transform-none text-2xl leading-5 tracking-[-0.01rem]">
                        The modal dialog title
                    </h1>
                </header>
                <div className="p-5 min-h-[186px] text-default text-sm max-h-500:min-h-[86px] flex-1 max-h-[calc(100vh-314px)]">
                    {children}
                </div>
                <footer className="border-b-0 border-t-2 rounded-[3px] border-t-shadow1 py-[10px] px-5 h-[52px] w-full">
                    <div className="float-right gap-3 flex flex-row h-full">
                        {primaryButtonCb && (
                            <Button
                                className="min-w-0"
                                label="Okay"
                                variant={"primary"}
                                onClick={primaryButtonCb}
                            />
                        )}
                        {defaultButtonCb && (
                            <Button
                                className="min-w-0"
                                label="Next"
                                variant={"default"}
                                onClick={defaultButtonCb}
                            />
                        )}
                        {closeButtonCb && (
                            <Button
                                className="min-w-0"
                                label="Close"
                                variant={"link"}
                                onClick={closeButtonCb}
                            />
                        )}
                    </div>
                    <div className="text-subtlest text-sm pr-[10px] overflow-hidden overflow-ellipsis whitespace-nowrap leading-8 ">
                        This is a hint.
                    </div>
                </footer>
            </section>
        </BlanketComponent>
    );
};

export default Modal;
