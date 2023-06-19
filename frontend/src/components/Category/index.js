import ContainerHeading from '../Common/ContainerHeading';
import Heading from '../Common/Heading';
import CategoryItem from './CategoryItem';
import Slider from 'react-slick';
import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const cx = classNames.bind({ ...styles, container: 'container' });

function Category({ content }) {
    const categories = [
        {
            content: 'Trà nóng',
            imageUrl: 'https://bizweb.dktcdn.net/100/415/010/themes/894852/assets/sec_category_1.jpg?1676274744913',
        },
        {
            content: 'Trà hoa quả',
            imageUrl: 'https://bizweb.dktcdn.net/100/415/010/themes/894852/assets/sec_category_2.jpg?1676274744913',
        },
        {
            content: 'Smoothies',
            imageUrl: 'https://bizweb.dktcdn.net/100/415/010/themes/894852/assets/sec_category_3.jpg?1676274744913',
        },
        {
            content: 'Bánh ngọt',
            imageUrl: 'https://bizweb.dktcdn.net/100/415/010/themes/894852/assets/sec_category_4.jpg?1676274744913',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
    };

    return (
        <div className={cx('category')}>
            <ContainerHeading center>
                <Heading content={'Danh mục sản phẩm'} />
            </ContainerHeading>
            <div className={cx('category-item-wrapper', 'container')}>
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} content={category.content} imageUrl={category.imageUrl} />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Category;