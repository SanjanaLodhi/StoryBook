// src/stories/Accordion.stories.tsx

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Accordion } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    isOpen: { control: 'boolean' },
    onToggle: { action: 'toggled' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const SingleAccordion: Story = {
  args: {
    title: 'What is an accordion?',
    children: (
      <p>
        An accordion is a vertically stacked set of interactive headings that each contain a title,
        content snippet, or thumbnail representing a section of content. The headings function as
        controls that enable users to reveal or hide their associated sections of content.
      </p>
    ),
  },
};

export const ControlledAccordion: Story = {
  args: {
    ...SingleAccordion.args,
    isOpen: true,
  },
};

export const GroupExample: StoryObj<typeof AccordionGroup> = {
  render: () => (
    <AccordionGroup
      items={[
        {
          title: 'How do I create an account?',
          content: 'Click on the "Sign Up" button and fill out the registration form.',
        },
        {
          title: 'What payment methods do you accept?',
          content: 'We accept credit cards, PayPal, and bank transfers.',
        },
        {
          title: 'Can I cancel my subscription?',
          content: 'Yes, you can cancel anytime from your account settings.',
        },
      ]}
      allowMultiple
      defaultOpenIndex={0}
    />
  ),
};