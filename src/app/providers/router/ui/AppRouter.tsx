import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({path, element}) => (
                        <Route 
                            key={path}
                            element={element}
                            path={path}
                        />    
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}

export default AppRouter;