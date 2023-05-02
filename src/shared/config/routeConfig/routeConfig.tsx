import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { PageNotFound } from 'pages/PageNotFound/ui/PageNotFound'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PAGE_NOT_FOUND = 'pageNotFound'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PAGE_NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />
    },
    [AppRoutes.PAGE_NOT_FOUND]: {
        path: RoutePaths.pageNotFound,
        element: <PageNotFound />
    }
}
