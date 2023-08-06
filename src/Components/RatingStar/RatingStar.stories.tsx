import RatingStar from "./RatingStar";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Rating",
  component: RatingStar,
} as Meta<typeof RatingStar>;

export const Default = () => <RatingStar />;
