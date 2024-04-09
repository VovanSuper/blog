import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

type ButtonStory = StoryObj<typeof Button>;


export const Primary: ButtonStory = {
	args: {
		primary: true,
		label: 'Button',
	}
};


export const Secondary: ButtonStory = {
	args: {
		label: 'Secondary Button',
	}
};

export const Large: ButtonStory = {
	args: {
		size: 'large',
		label: 'Large Button',
	}
};

export const Small: ButtonStory = {
	args: {
		size: 'small',
		label: 'Button',
	}
};
