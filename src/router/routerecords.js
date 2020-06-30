const routes = [
    //主页
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "index" */ '@/views/Home.vue')
    },
    //登录页
    {
      path: '/usermanager/login',
      name: 'LogIn',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Users" */ '@/views/LogIn/LogIn.vue')
    },
    //注册页
    {
      path: '/usermanager/regist',
      name: 'Regist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Users" */ '@/views/LogIn/Regist.vue')
    },
    //菜品详细信息页
    {
      path: '/dishmanager/dishdetail',
      name: 'DishManager',
      component: () => import(/* webpackChunkName: "menu" */ '@/views/DishManager/DishDetail.vue')
    },
    //菜单列表页
    {
      path: '/menumanager/menulist',
      name: 'MenuList',
      component: () => import(/* webpackChunkName: "menu" */ '@/views/MenuManager/MenuList.vue')
    },
    //菜单详细页
    {
      path: '/menumanager/menudetail',
      name: 'MenuDetail',
      component: () => import(/* webpackChunkName: "menu" */ '@/views/MenuManager/MenuDetail.vue')
    },
    //用户列表页
    {
      path: '/usermanager/userlist',
      name: 'UserList',
      component: () => import(/* webpackChunkName: "users" */ '@/views/UserManager/UserList.vue')
    },
    //用户详细页
    {
      path: '/usermanager/userdetail',
      name: 'UserDetail',
      component: () => import(/* webpackChunkName: "users" */ '@/views/UserManager/UserDetail.vue')
    }
]
export default routes;