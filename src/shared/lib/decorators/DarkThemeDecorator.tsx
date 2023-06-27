import { type Decorator } from '@storybook/react'

export const DarkThemeDecorator: Decorator = (Story) => <div className='app dark'><Story /></div>
