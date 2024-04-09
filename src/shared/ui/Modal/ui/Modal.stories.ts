import type { Meta, StoryObj } from '@storybook/react'
import { DarkThemeDecorator } from 'shared/lib/decorators/DarkThemeDecorator'
import { Modal } from './Modal'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    args: {
        children: 'Ok',
        isOpen: true
    }
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj

export const LightTheme: Story = {}

export const DarkTheme: Story = {
    decorators: [DarkThemeDecorator]
}
