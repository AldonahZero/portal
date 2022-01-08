export interface IFMenuBase {
    key: string;
    title: string;
    icon?: string;
    component?: string;
    query?: string;
    requireAuth?: string;
    route?: string;
    /** 是否登录校验，true不进行校验（访客） */
    login?: boolean;
}

export interface IFMenu extends IFMenuBase {
    subs?: IFMenu[];
}

const menus: {
    menus: IFMenu[];
    others: IFMenu[] | [];
    [index: string]: any;
} = {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' }, 
        {
            key: "/subs4", 
            title: "页面", 
            icon: "switcher", 
            subs: [
            {
                key: "/login", 
                title: "登录"
            }, 
            {
                key: "/404", 
                title: "404"
            }
        ]
    },
    ],
    others: [], // 非菜单相关路由
};

export default menus;
