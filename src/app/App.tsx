import { ClassNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect, type FC } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch])

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
