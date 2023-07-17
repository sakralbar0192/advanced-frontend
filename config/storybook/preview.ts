import { type Preview } from '@storybook/react'
import { LightThemeDecorator } from 'shared/lib/decorators/LightThemeDecorator'
import { RouterDecorator } from 'shared/lib/decorators/RouterDecorator'
import { StyleDecorator } from 'shared/lib/decorators/StyleDecorator'
import { LokiDecorator } from './LokiDecorator'

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    decorators: [
        LokiDecorator,
        StyleDecorator,
        LightThemeDecorator,
        RouterDecorator
    ]
}

export default preview
