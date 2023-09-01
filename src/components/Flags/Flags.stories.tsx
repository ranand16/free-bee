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

export const PrimaryFlag = () => {
    return (
        <div>
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
        </div>
    );
};

export const SuccessFlag = () => (
    <div>
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
    </div>
);
export const DangerFlag = () => (
    <div>
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
    </div>
);

export const WarningFlag = () => (
    <div>
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
    </div>
);
