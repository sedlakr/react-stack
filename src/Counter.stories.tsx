import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
  argTypes: {
    background: { control: "color" },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: "SMALL",
  unit: "EUR",
};
