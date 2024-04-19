import React from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Header } from 'widgets/Header';
import { Sidebar } from 'widgets/Sidebar';
import { Footer } from 'widgets/Footer';

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Header/>
            <div className="page">
                <Sidebar/>
                <AppRouter/>
            </div>
            <Footer/>
        </div>
    );
};

export default App;
