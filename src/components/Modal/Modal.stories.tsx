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
    return (
        <div className="h-16 w-20">
            <div className="relative">
                <Button
                    variant={"primary"}
                    label="Open Modal"
                    className={"peer"}
                    id={"modal-btn-trigger"}
                />
                <Modal />
            </div>
        </div>
    );
};
