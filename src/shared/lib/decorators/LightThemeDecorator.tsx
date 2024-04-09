import { type Decorator } from '@storybook/react'
import { ThemeDecorator } from './ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export const LightThemeDecorator: Decorator = (Story) => <ThemeDecorator Story={Story} theme={Theme.LIGHT} />
