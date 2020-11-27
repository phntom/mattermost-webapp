import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import IconButton, { IconButtonProps } from './IconButton';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: [
          'xsmall',
          'small-compact',
          'small',
          'medium',
          'large',
        ]
      }
    },
  }
} as Meta;


export const Default: Story<IconButtonProps> = (args) => <><IconButton {...args} /><IconButton label="425" {...args} /></>;
Default.args = {
  iconGlyph: 'icon-alien-outline'
};