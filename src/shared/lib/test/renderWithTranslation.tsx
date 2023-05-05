import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18nextTest from 'shared/config/i18next/i18nextTest'

export function renderWithTranslation(component: ReactNode): RenderResult {
    return render(
        <I18nextProvider i18n={i18nextTest}>
            {component}
        </I18nextProvider>
    )
}
