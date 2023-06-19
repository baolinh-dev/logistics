import './Home.module.scss';
import Category from '~/components/Category';
import Header from '~/components/Header';
import Slider from '~/components/Slider';
import SlickSlider from '~/components/Common/SlickSlider';
import Footer from '~/components/Footer';

import classNames from 'classnames/bind';
import styles from './Home.module.scss';

// col-4 col-lg-4 col-md-12 col-12
const cx = classNames.bind({
    ...styles,
    container: 'container',
    row: 'row',
    'col-4': 'col-4',
    'col-lg-4': 'col-lg-4',
    'col-md-12': 'col-md-12 ',
    'col-12': 'col-12',
    'col-xl-12': 'col-xl-12',
});
function Home() {
    return (
        <>
            <Header />
            <Slider />
            <div className={cx('home')}>
                <SlickSlider />
            </div>
            <Footer />
        </>
    );
}

export default Home;
