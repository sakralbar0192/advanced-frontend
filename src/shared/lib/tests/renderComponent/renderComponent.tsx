import { render, type RenderResult } from '@testing-library/react'
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nextTest from 'shared/configurations/i18next/i18nextTest'
import { type DeepPartial } from 'shared/types'

interface renderComponentProps {
    route?: string
    initialState?: DeepPartial<StateSchema>
}

export function renderComponent(component: ReactNode, { route = '/', initialState }: renderComponentProps = {}): RenderResult {
    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nextTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
