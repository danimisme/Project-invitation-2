import MainLayout from '../../layouts/MainLayout';
import Gallery from '../fragments/sections/Gallery';
import Gifts from '../fragments/sections/Gifts/indes';
import Home from '../fragments/sections/Home';
import Info from '../fragments/sections/Info';
import RSVP from '../fragments/sections/RSVP/indes';
import Story from '../fragments/sections/Story';

const MainViews = () => {
    return (
        <MainLayout>
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
