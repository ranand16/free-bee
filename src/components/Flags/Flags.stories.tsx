import * as React from "react";
import { Meta } from "@storybook/react";
import Flags from "./Flags";

export default {
    title: "Components/Flags",
    component: Flags,
} as Meta<typeof Flags>;

// export const DefaultFlag = () => (
//     <Flags variant={"default"} closebtn>
//         <>
//             <p className="dark:text-btnactive">
//                 <strong>This is a Default flag</strong>
//                 <div className="text-md">
//                     This is a default flag for notification. Any default
//                     notification will appear in this format.
//                 </div>
//             </p>
//         </>
//     </Flags>
// );

export const PrimaryFlag = () => (
    <Flags variant={"primary"} closebtn>
        <>
            <p className="dark:text-btnactive">
                <strong>This is a Default flag</strong>
                <div className="text-md">
                    This is a default flag for notification. Any default
                    notification will appear in this format.
                </div>
            </p>
        </>
    </Flags>
);

export const SuccessFlag = () => (
    <Flags variant={"success"} closebtn>
        <>
            <p className="dark:text-btnactive">
                <strong>This is a Default flag</strong>
                <div className="text-md">
                    This is a default flag for notification. Any default
                    notification will appear in this format.
                </div>
            </p>
        </>
    </Flags>
);
export const DangerFlag = () => (
    <Flags variant={"danger"} closebtn>
        <>
            <p className="dark:text-btnactive">
                <strong>This is a Default flag</strong>
                <div className="text-md">
                    This is a default flag for notification. Any default
                    notification will appear in this format.
                </div>
            </p>
        </>
    </Flags>
);

export const WarningFlag = () => (
    <Flags variant={"warning"} closebtn>
        <>
            <p className="dark:text-btnactive">
                <strong>This is a Default flag</strong>
                <div className="text-md">
                    This is a default flag for notification. Any default
                    notification will appear in this format.
                </div>
            </p>
        </>
    </Flags>
);
