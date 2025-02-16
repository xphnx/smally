import { RouteProps } from "react-router-dom"
import {LazyAbout, LazyMain} from '@pages'

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
}

export const routes: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: { 
        element: <LazyMain />,
        path: RoutePath[AppRoute.MAIN] 
    },
    [AppRoute.ABOUT]: { 
        element: <LazyAbout />,
        path: RoutePath[AppRoute.ABOUT] 
    },
}
