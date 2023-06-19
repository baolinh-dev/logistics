import classNames from 'classnames/bind';
import styles from './Navi.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '~/assets/images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind({ ...styles, container: 'container' });
const active = cx('active'); 

function Navigation() {
    return (
        <div className={cx('navi', 'container')}>
            <div className={cx('navi-left')}>
                <ul>
                    <li>
                        <a className={active}>Trang chủ</a>
                    </li>
                    <li>
                        <a>Giới thiệu</a>
                    </li>
                    <li className={cx('item-product')}>
                        <a>
                            Sản phẩm
                            <FontAwesomeIcon icon={faCaretDown} />
                        </a>
                        <div className={cx('dropdown')}>
                            <a href="/"> Sản phẩm 1</a>
                            <a href="/"> Sản phẩm 1</a>
                            <a href="/"> Sản phẩm 1</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={cx('logo-center')}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cx('navi-right')}>
                <ul>
                    <li>
                        <a>Tin tức</a>
                    </li>
                    <li>
                        <a>Thực đơn</a>
                    </li>
                    <li>
                        <a>Liên hệ</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;
