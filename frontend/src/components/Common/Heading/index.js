import classNames from 'classnames/bind';
import styles from './Heading.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '~/assets/images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind({ ...styles, container: 'container' });

function Heading({content}) {
    return (   
        <div className={cx('heading')}> 
            <h2>{content}</h2>
        </div>
    );
}

export default Heading 
