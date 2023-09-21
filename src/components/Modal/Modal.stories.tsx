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

// const [default]

const defaultModalPrimaryBtnCB = () => {
    console.log("defaultModalPrimaryBtnCB :: ");
};
const smallModalPrimaryBtnCB = () => {
    console.log("smallModalPrimaryBtnCB :: ");
};
const mediumModalPrimaryBtnCB = () => {
    console.log("mediumModalPrimaryBtnCB :: ");
};
const largeModalPrimaryBtnCB = () => {
    console.log("largeModalPrimaryBtnCB :: ");
};
const extraLargeModalPrimaryBtnCB = () => {
    console.log("extraLargeModalPrimaryBtnCB :: ");
};

const defaultModalCloseBtnCB = () => {
    console.log("defaultModalCloseBtnCB :: ");
};
const smallModalCloseBtnCB = () => {
    console.log("smallModalCloseBtnCB :: ");
};
const mediumModalCloseBtnCB = () => {
    console.log("mediumModalCloseBtnCB :: ");
};
const largeModalCloseBtnCB = () => {
    console.log("largeModalCloseBtnCB :: ");
};
const extraLargeModalCloseBtnCB = () => {
    console.log("extraLargeModalCloseBtnCB :: ");
};

export const DefaultModal = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal
                    size="md"
                    primaryButtonCb={defaultModalPrimaryBtnCB}
                    closeButtonCb={defaultModalCloseBtnCB}
                >
                    <p>This is modal body</p>
                </Modal>
            </div>
        </div>
    );
};

export const SmallModal = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal
                    size="sm"
                    primaryButtonCb={smallModalPrimaryBtnCB}
                    closeButtonCb={smallModalCloseBtnCB}
                >
                    <p>This is modal body</p>
                </Modal>
            </div>
        </div>
    );
};

export const MediumModal = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal
                    size="md"
                    primaryButtonCb={mediumModalPrimaryBtnCB}
                    closeButtonCb={mediumModalCloseBtnCB}
                >
                    <p>This is modal body</p>
                </Modal>
            </div>
        </div>
    );
};

export const LargeModal = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal
                    size="lg"
                    primaryButtonCb={largeModalPrimaryBtnCB}
                    closeButtonCb={largeModalCloseBtnCB}
                >
                    <p>This is modal body</p>
                </Modal>
            </div>
        </div>
    );
};

export const ExtraLargeModal = () => {
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal
                    size="xl"
                    primaryButtonCb={extraLargeModalPrimaryBtnCB}
                    closeButtonCb={extraLargeModalCloseBtnCB}
                >
                    <p>This is modal body</p>
                </Modal>
            </div>
        </div>
    );
};
