import MainLayout from '../../layouts/MainLayout';
import Gallery from '../fragments/sections/Gallery';
import Gifts from '../fragments/sections/Gifts/indes';
import Home from '../fragments/sections/Home';
import Info from '../fragments/sections/Info';
import Story from '../fragments/sections/Story';
import { useEffect, useState } from 'react';
import Audio from '../ui/Audio';
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../redux/slice/openSlice';
import RSVP from '../fragments/sections/RSVP';
import Animation from '../../utils/aos';

const MainViews = () => {
    const rootElement = document.querySelector(':root');
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.open.open);

    const disableScroll = () => {
        dispatch(setOpen(false));
        window.onscroll = () => {
            window.scrollTo(0, 0);
            rootElement.scrollIntoView({ behavior: 'instant' });
        };
    };

    const enableScroll = () => {
        window.onscroll = () => {};
        rootElement.scrollIntoView({ behavior: 'smooth' });
        dispatch(setOpen(true));
    };

    useEffect(() => {
        if (!isOpen) {
            disableScroll();
        }
    }, [!isOpen]);

    return (
        <>
            <MainLayout onClick={() => enableScroll()}>
                <Home />
                <Info />
                <Story />
                <Gallery />
                <RSVP />
                <Gifts />
            </MainLayout>
            <Audio />
        </>
    );
};

export default MainViews;
