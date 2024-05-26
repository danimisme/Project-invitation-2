import MainLayout from '../../layouts/MainLayout';
import Home from '../fragments/sections/Home';
import Info from '../fragments/sections/Info';

const MainViews = () => {
    return (
        <MainLayout>
            <Home />
            <Info />
        </MainLayout>
    );
};

export default MainViews;
