import Footer from '../components/fragments/Footer';
import Navbar from '../components/fragments/Navbar';
import MainHero from '../components/fragments/sections/Hero';

const MainLayout = (prop) => {
    const { children } = prop;
    return (
        <div>
            <MainHero />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
