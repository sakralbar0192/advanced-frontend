import { type Decorator } from '@storybook/react'

export const LightThemeDecorator: Decorator = (Story) => <div className='app light'><Story /></div>
