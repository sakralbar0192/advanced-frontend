import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nextTest from 'shared/configurations/i18next/i18nextTest'

interface renderComponentProps {
    route?: string
}

export function renderComponent(component: ReactNode, { route = '/' }: renderComponentProps = {}): RenderResult {
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nextTest}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
