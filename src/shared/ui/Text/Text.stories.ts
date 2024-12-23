import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Text, TextTheme } from './Text'

const meta = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.PRIMARY
    },
    argTypes: {
        title: {
            control: 'text'
        },
        text: {
            control: 'text'
        },
        theme: {
            options: [TextTheme.PRIMARY, TextTheme.ERROR],
            control: 'radio'
        }
    }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj

export const LightTheme: Story = {}

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator]
}
