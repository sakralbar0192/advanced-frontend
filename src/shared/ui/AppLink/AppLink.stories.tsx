import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs']
} satisfies Meta<typeof AppLink>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        children: 'link',
        to: '',
        theme: AppLinkTheme.PRIMARY
    }
}

export const PrimaryDark: Story = {
    args: {
        children: 'link',
        to: '',
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [DarkThemeDecorator]
}

export const Inverted: Story = {
    args: {
        children: 'link',
        to: '',
        theme: AppLinkTheme.INVERTED
    }
}

export const InvertedDark: Story = {
    args: {
        children: 'link',
        to: '',
        theme: AppLinkTheme.INVERTED
    },
    decorators: [DarkThemeDecorator]
}
