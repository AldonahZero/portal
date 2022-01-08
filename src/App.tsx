import React, { useState, useEffect } from 'react';
import { Layout, notification } from 'antd';
import umbrella from 'umbrella-storage';
import { useAlita } from 'redux-alita';
import Routes from './routes';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { ThemePicker, Copyright } from './components/widget';
import { checkLogin } from './utils';
import { fetchMenu,devFetchMenu } from './service';
import classNames from 'classnames';
import { SmileOutlined } from '@ant-design/icons';

const { Content, Footer } = Layout;

type AppProps = {};

// 移动端和pc端检测
function checkIsMobile() {
    const clientWidth = window.innerWidth;
    return clientWidth <= 992;
}

let _resizeThrottled = false;
function resizeListener(handler: (isMobile: boolean) => void) {
    const delay = 250;
    if (!_resizeThrottled) {
        _resizeThrottled = true;
        const timer = setTimeout(() => {
            handler(checkIsMobile());
            _resizeThrottled = false;
            clearTimeout(timer);
        }, delay);
    }
}
function handleResize(handler: (isMobile: boolean) => void) {
    window.addEventListener('resize', resizeListener.bind(null, handler));
}

function openFNotification() {
    const openNotification = () => {
        let user = umbrella.getLocalStorage('user');
        let nikeName = user!=null ? user.nikeName:'';
        // console.log(user)
        notification.open({
            message: '尊敬的用户 '+nikeName+' ,欢迎回来!',
            description: (
                <div>
                    <p>
                        在您离开的这段时间里,发生了如下变化:
                    </p>
                    <p>
                        提交的拼接任务完成进度：
                        <a
                            href="点击快速切换到拼接页面"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            30%
                        </a>
                    </p>
                    <p>
                        制导情况：
                        <a
                            href="点击快速切换到制导页面"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                           [已完成]
                        </a>
                    </p>
                </div>
            ),
            icon: <SmileOutlined style={{ color: 'green' }} />,
            duration: 0,
        });
        umbrella.setLocalStorage('hideBlog', true);
    };
    const storageFirst = umbrella.getLocalStorage('hideBlog');
    if (!storageFirst) {
        openNotification();
    }
}

/**
 * 获取服务端异步菜单
 * @param handler 执行回调
 */
function fetchSmenu(handler: any) {
    const setAlitaMenu = (menus: any) => {
        handler(menus);
        // this.props.setAlitaState({ stateName: 'smenus', data: menus });
    };
    setAlitaMenu(umbrella.getLocalStorage('smenus') || []);

    // 鉴权动态加载菜单
    let user = umbrella.getLocalStorage('user');
    let userRoleType = user!=null ? user.roleType:2;
    // console.log(userRoleType)
    if (userRoleType === 2){
        fetchMenu().then((smenus) => {
            setAlitaMenu(smenus);
            umbrella.setLocalStorage('smenus', smenus);
        });
    }
    else{
        devFetchMenu().then((smenus) => {
            setAlitaMenu(smenus);
            umbrella.setLocalStorage('smenus', smenus);
        });
    }
    
}

const App = (props: AppProps) => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [auth, responsive, setAlita] = useAlita(
        { auth: { permissions: null } },
        { responsive: { isMobile: false } },
        { light: true }
    );

    useEffect(() => {
        let user = umbrella.getLocalStorage('user');
        user && setAlita('auth', user);
        setAlita('responsive', { isMobile: checkIsMobile() });

        handleResize((isMobile: boolean) => setAlita('responsive', { isMobile }));
        openFNotification();
        fetchSmenu((smenus: any[]) => setAlita('smenus', smenus));
    }, [setAlita]);

    function toggle() {
        setCollapsed(!collapsed);
    }
    return (
        <Layout>
            {!responsive.isMobile && checkLogin(auth.permissions) && (
                <SiderCustom collapsed={collapsed} />
            )}
            <ThemePicker />
            <Layout
                className={classNames('app_layout', { 'app_layout-mobile': responsive.isMobile })}
            >
                <HeaderCustom toggle={toggle} collapsed={collapsed} user={auth || {}} />
                <Content className="app_layout_content">
                    <Routes auth={auth} />
                </Content>
                <Footer className="app_layout_foot">
                    <Copyright />
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
