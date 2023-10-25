import { Meta } from "@storybook/react";
import * as React from "react";
import Modal from "./Modal";
import Button from "../Button";

export default {
    title: "Components/Modal",
    components: Modal,
    tags: ["autodocs"],
    argTypes: {},
} as Meta<typeof Modal>;

export const DefaultModal = () => {
    const defaultModalRef = React.useRef<any>(null);
    const [defaultToggle, setDefaultToggle] = React.useState(false);

    const defaultModalPrimaryBtnCB = () => {
        console.log("defaultModalPrimaryBtnCB :: ");
    };

    const defaultModalCloseBtnCB = () => {
        setDefaultToggle((prev) => !prev);
    };
    const handler = (event: MouseEvent) => {
        if (!defaultModalRef.current) return;
        if (!defaultModalRef.current.contains(event.target))
            setDefaultToggle(false);
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);

    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                    onClick={() => setDefaultToggle((prev) => !prev)}
                />
                {defaultToggle && (
                    <Modal
                        size="md"
                        primaryButtonCb={defaultModalPrimaryBtnCB}
                        closeButtonCb={defaultModalCloseBtnCB}
                        ref={defaultModalRef}
                    >
                        <p>This is modal body</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export const SmallModal = () => {
    const smallModalRef = React.useRef<any>(null);
    const [smallModalToggle, setSmallModalToggle] = React.useState(false);

    const smallModalPrimaryBtnCB = () => {
        console.log("smallModalPrimaryBtnCB :: ");
    };

    const smallModalCloseBtnCB = () => {
        setSmallModalToggle((prev) => !prev);
    };
    const handler = (event: MouseEvent) => {
        if (!smallModalRef.current) return;
        if (!smallModalRef.current.contains(event.target))
            setSmallModalToggle(false);
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                    onClick={() => setSmallModalToggle((prev) => !prev)}
                />
                {smallModalToggle && (
                    <Modal
                        size="sm"
                        primaryButtonCb={smallModalPrimaryBtnCB}
                        closeButtonCb={smallModalCloseBtnCB}
                        ref={smallModalRef}
                    >
                        <p>This is modal body</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export const MediumModal = () => {
    const mdModalRef = React.useRef<any>(null);
    const [mdModalToggle, setMdModalToggle] = React.useState(false);

    const mediumModalPrimaryBtnCB = () => {
        console.log("mediumModalPrimaryBtnCB :: ");
    };

    const mediumModalCloseBtnCB = () => {
        setMdModalToggle((prev) => !prev);
    };
    const handler = (event: MouseEvent) => {
        if (!mdModalRef.current) return;
        if (!mdModalRef.current.contains(event.target)) setMdModalToggle(false);
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                    onClick={() => setMdModalToggle((prev) => !prev)}
                />
                {mdModalToggle && (
                    <Modal
                        size="md"
                        primaryButtonCb={mediumModalPrimaryBtnCB}
                        closeButtonCb={mediumModalCloseBtnCB}
                        ref={mdModalRef}
                    >
                        <p>This is modal body</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export const LargeModal = () => {
    const largeModalRef = React.useRef<any>(null);
    const [largeModalToggle, setLargeModalToggle] = React.useState(false);

    const largeModalPrimaryBtnCB = () => {
        console.log("largeModalPrimaryBtnCB :: ");
    };

    const largeModalCloseBtnCB = () => {
        setLargeModalToggle((prev) => !prev);
    };
    const handler = (event: MouseEvent) => {
        if (!largeModalRef.current) return;
        if (!largeModalRef.current.contains(event.target))
            setLargeModalToggle(false);
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                    onClick={() => setLargeModalToggle((prev) => !prev)}
                />
                {largeModalToggle && (
                    <Modal
                        size="lg"
                        primaryButtonCb={largeModalPrimaryBtnCB}
                        closeButtonCb={largeModalCloseBtnCB}
                        ref={largeModalRef}
                    >
                        <p>This is modal body</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};

export const ExtraLargeModal = () => {
    const xlModalRef = React.useRef<any>(null);
    const [xlModalToggle, setXlModalToggle] = React.useState(false);

    const xlModalPrimaryBtnCB = () => {
        console.log("xlModalPrimaryBtnCB :: ");
    };

    const xlModalCloseBtnCB = () => {
        setXlModalToggle((prev) => !prev);
    };
    const handler = (event: MouseEvent) => {
        if (!xlModalRef.current) return;
        if (!xlModalRef.current.contains(event.target)) setXlModalToggle(false);
    };

    React.useEffect(() => {
        // the key is using the `true` option
        // `true` will enable the `capture` phase of event handling by browser
        document.addEventListener("click", handler, true);
        return () => {
            document.removeEventListener("click", handler, true);
        };
    }, []);
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                    onClick={() => setXlModalToggle((prev) => !prev)}
                />
                {xlModalToggle && (
                    <Modal
                        size="xl"
                        primaryButtonCb={xlModalPrimaryBtnCB}
                        closeButtonCb={xlModalCloseBtnCB}
                        ref={xlModalRef}
                    >
                        <p>This is modal body</p>
                    </Modal>
                )}
            </div>
        </div>
    );
};
