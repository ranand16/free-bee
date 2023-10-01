import * as React from "react";
import { Meta } from "@storybook/react";
import Banner from "./Banner";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";

export default {
  title: "Components/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Banner>;

export const Success = () => (
  <div
    className="w-[32rem]"
  >
    <Banner
      variant={"success"}
      icon={<WarningRoundedIcon fontSize="small" color="inherit" />}
    >
      Bitbucket is experiencing an incident, but we’re on it. Check our status
      page for more details.{" "}
      <a href="http://www.bitbucket.com">Learn more about Bitbucket</a>
    </Banner>
  </div>
);

export const Warning = () => (
  <Banner
    variant={"warning"}
    icon={<WarningRoundedIcon fontSize="small" color="inherit" />}
  >
    Bitbucket is experiencing an incident, but we’re on it. Check our status
    page for more details.{" "}
    <a href="http://www.bitbucket.com">Learn more about Bitbucket</a>
  </Banner>
);

export const Announcement = () => (
  <Banner
    variant={"announcement"}
    icon={<WarningRoundedIcon fontSize="small" color="inherit" />}
  >
    Bitbucket is experiencing an incident, but we’re on it. Check our status
    page for more details.{" "}
    <a href="http://www.bitbucket.com">Learn more about Bitbucket</a>
  </Banner>
);

export const Error = () => (
  <Banner
    variant={"error"}
    icon={<WarningRoundedIcon fontSize="small" color="inherit" />}
  >
    Bitbucket is experiencing an incident, but we’re on it. Check our status
    page for more details.{" "}
    <a href="http://www.bitbucket.com">Learn more about Bitbucket</a>
  </Banner>
);
