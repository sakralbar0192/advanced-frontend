import { ClassNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, type FC } from 'react'

const App: FC = () => {
    return (
        <div className={ClassNames('app', {})}>
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
