import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'

import './shared/config/i18next/i18next'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { ErrorPage } from 'pages/ErrorPage'

render(
    <ErrorBoundary fallback={<ErrorPage />}>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)
