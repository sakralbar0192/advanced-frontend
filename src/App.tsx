import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss';
import { MainPageAsync } from './pages/MainPage/MainPageAsync';
import { AboutPageAsync } from './pages/AboutPage/AboutPageAsync';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { UseTheme } from './theme/UseTheme';
import { ClassNames } from './helpers/ClassNames/ClassNames';

const App = () => {
    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={ClassNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>ToggleTheme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;