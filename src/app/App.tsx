import './styles/index.scss'
import { ClassNames } from 'shared/lib/classNames/classNames'
import { UseTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, type FC } from 'react'

const App: FC = () => {
    const { theme } = UseTheme()

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <Suspense fallback="loading">
                <Navbar />
                <div className='content-page'>
                    <SideBar />
                    <div className="page-wrapper">
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default App
