import className from 'classnames/bind';
import styles from './MainLayout.module.scss';
import Header from '@/components/Layout/components/Header';
import Sidebar from './Sidebar';

const cx = className.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                <Sidebar></Sidebar>
                <div className={cx('content')}> {children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
