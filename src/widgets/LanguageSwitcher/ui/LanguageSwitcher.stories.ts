import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { LanguageSwitcher } from './LanguageSwitcher'

const meta = {
    title: 'widgets/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs']
} satisfies Meta<typeof LanguageSwitcher>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
}

export const PrimaryDark: Story = {
    decorators: [DarkThemeDecorator]
}
