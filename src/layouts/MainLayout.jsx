import Footer from '../components/fragments/Footer';
import Navbar from '../components/fragments/Navbar';
import MainHero from '../components/fragments/sections/Hero';

const MainLayout = (prop) => {
    const { children, onClick } = prop;
    return (
        <div>
            <MainHero onClick={onClick} />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
