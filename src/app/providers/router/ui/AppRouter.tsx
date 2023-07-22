import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'shared/configurations/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        element={element}
                        path={path}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
