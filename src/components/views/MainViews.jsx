import MainLayout from '../../layouts/MainLayout';
import Gallery from '../fragments/sections/Gallery';
import Home from '../fragments/sections/Home';
import Info from '../fragments/sections/Info';
import Story from '../fragments/sections/Story';

const MainViews = () => {
    return (
        <MainLayout>
            <Home />
            <Info />
            <Story />
            <Gallery />
        </MainLayout>
    );
};

export default MainViews;
