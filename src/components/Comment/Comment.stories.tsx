import * as React from "react";
import { Meta } from "@storybook/react";
import Comment from "./Comment";
import Avatar from "../Avatar/Avatar";

export default {
  title: "Components/Comment",
  component: Comment,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Comment>;

export const Standard = () => (
  <Comment
    avatar={
      <Avatar
        size={"md"}
        src={
          "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
        }
      />
    }
    content={<p>Lorem ipsum dolor sit amet</p>}
  />
);

export const Full = () => (
  <Comment
    avatar={
      <Avatar
        size={"md"}
        src={
          "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
        }
      />
    }
    author={"Sujit Samal"}
    type={"AUTHOR"}
    time={"Mar 14, 2022"}
    edited={"Edited"}
    restrictedTo={"Restricted to Admins Only"}
    action={true}
    content={
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    }
  />
);
