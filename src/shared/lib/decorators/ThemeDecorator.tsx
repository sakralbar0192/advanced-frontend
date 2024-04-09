import { type StoryFn } from '@storybook/react'
import { ThemeProvider, type Theme } from 'app/providers/ThemeProvider'
import { type FC } from 'react'

interface ThemeDecoratorProps {
    Story: StoryFn
    theme: Theme
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ Story, theme }) => <ThemeProvider initialTheme={theme}><div className={`app ${theme}`}><Story /></div></ThemeProvider>
