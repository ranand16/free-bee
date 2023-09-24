import { Meta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
    title: "Components/Avatar",
    component: Avatar,
} as Meta<typeof Avatar>;

const avatarSrc =
    "https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg";

const projectSrc =
    "https://aui.atlassian.com/aui/latest/docs/images/avatar-project.svg";

//  offline #FF5630
//  online #36B37E

export const PersonAvatar = () => {
    // The avatar is full rounded by default
    return (
        <div className="flex items-end gap-1">
            <Avatar size={"xs"} src={avatarSrc} />
            <Avatar size={"sm"} src={avatarSrc} />
            <Avatar size={"md"} src={avatarSrc} />
            <Avatar
                size={"lg"}
                src={
                    "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                }
            />
            <Avatar size={"xl"} src={avatarSrc} />
            <Avatar size={"xxl"} src={avatarSrc} />
            <Avatar
                size={"xxxl"}
                src={
                    "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                }
            />
        </div>
    );
};

export const ProjectAvatar = () => {
    // The icon is sqaure by default
    return (
        <div className="flex items-end gap-1">
            <Avatar size={"xs"} rounded={"xs"} src={projectSrc} />
            <Avatar size={"sm"} rounded={"sm"} src={projectSrc} />
            <Avatar size={"md"} rounded={"md"} src={projectSrc} />
            <Avatar size={"lg"} rounded={"lg"} src={projectSrc} />
            <Avatar size={"xl"} rounded={"xl"} src={projectSrc} />
            <Avatar size={"xxl"} rounded={"xxl"} src={projectSrc} />
            <Avatar size={"xxxl"} rounded={"xxxl"} src={projectSrc} />
            <Avatar size={"xxxl"} rounded={"full"} src={projectSrc} />
        </div>
    );
};

export const PersonAvatarStatus = () => {
    return (
        <div className="flex items-end gap-1">
            <Avatar size={"xs"} src={avatarSrc} status />
            <Avatar size={"sm"} src={avatarSrc} status />
            <Avatar size={"md"} src={avatarSrc} status statusColor="#FF5630" />
            <Avatar size={"lg"} src={avatarSrc} status />
            <Avatar size={"xl"} src={avatarSrc} status statusColor="#FF5630" />
            <Avatar size={"xxl"} src={avatarSrc} status />
            <Avatar size={"xxxl"} src={avatarSrc} status />
        </div>
    );
};
