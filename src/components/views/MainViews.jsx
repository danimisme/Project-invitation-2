import MainLayout from '../../layouts/MainLayout';
import Gallery from '../fragments/sections/Gallery';
import Gifts from '../fragments/sections/Gifts/indes';
import Home from '../fragments/sections/Home';
import Info from '../fragments/sections/Info';
import RSVP from '../fragments/sections/RSVP/indes';
import Story from '../fragments/sections/Story';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MainViews = () => {
    const rootElement = document.querySelector(':root');
    const [open, setOpen] = useState(false);
    // const scroll = useSelector((state) => state.scroll.scroll);
    // console.log(scroll);
    const disableScroll = () => {
        setOpen(true);
        window.onscroll = () => {
            window.scrollTo(0, 0);
            rootElement.scrollIntoView({ behavior: 'instant' });
        };
    };

    const enableScroll = () => {
        window.onscroll = () => {};
        setOpen(true);
        rootElement.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (!open) {
            disableScroll();
        }
    }, [!open]);

    return (
        <MainLayout onClick={() => enableScroll()}>
            <Home />
            <Info />
            <Story />
            <Gallery />
            <RSVP />
            <Gifts />
        </MainLayout>
    );
};

export default MainViews;
