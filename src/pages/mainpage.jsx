import { useEffect, useState } from 'react';
import MainViews from '../components/views/MainViews';

const MainPage = () => {
    const rootElement = document.querySelector(':root');
    const home = document.querySelector('#home');
    const showInvitation = document.querySelector('#show-invitation');
    const [open, setOpen] = useState(false);
    const disableScroll = () => {
        if (window.scrollY >= 0) {
            rootElement.scrollIntoView({ behavior: 'instant' });
            setOpen(false);
            window.scrollTo(0, 0);
        }
    };

    const enableScroll = () => {
        rootElement.scrollIntoView({ behavior: 'smooth' });
        setOpen(true);
        window.removeEventListener('scroll', disableScroll);
        window.scrollTo(0, 200);
    };

    useEffect(() => {
        if (!open) {
            disableScroll();
            window.addEventListener('scroll', disableScroll);
        } else {
            rootElement.scrollIntoView({ behavior: 'smooth' });
            setOpen(true);
            window.removeEventListener('scroll', disableScroll);
            window.scrollTo(0, 200);
            enableScroll();
        }
    }, []);

    return <MainViews />;
};

export default MainPage;
