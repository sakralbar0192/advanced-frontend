import 'app/styles/index.scss'
import { createRoot } from 'react-dom/client'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import './shared/configurations/i18next/i18next'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { Suspense } from 'react'

const rootElement = document.getElementById('root')

if (rootElement != null) {
    const root = createRoot(rootElement)

    root.render(
        <Suspense fallback="Loading...">
            <ErrorBoundary fallback={<p>Something went wrong</p>}>
                <BrowserRouter>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </BrowserRouter>
            </ErrorBoundary>
        </Suspense>
    )
}
