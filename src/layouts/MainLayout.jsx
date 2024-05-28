import Footer from '../components/fragments/Footer';
import Navbar from '../components/fragments/Navbar';
import MainHero from '../components/fragments/sections/Hero';
import Audio from '../components/ui/Audio';

const MainLayout = (prop) => {
    const { children, onClick } = prop;
    return (
        <div>
            <MainHero onClick={onClick} />
            <Navbar />
            {children}
            <Footer />
            <Audio />
        </div>
    );
};

export default MainLayout;
