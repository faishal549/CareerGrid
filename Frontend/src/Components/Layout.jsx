import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* This will render the current route's page */}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
