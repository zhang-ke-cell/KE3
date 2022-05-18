export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/ke',
    name: 'knowledgeExtraction',
    icon: 'crown',
    // component: './Ke',
    routes: [
      {
        path: '/ke/dataset1',
        name: 'dataSet1',
        icon: 'smile',
        component: './Ke/DataSet1',
      },
      {
        path: '/ke/dataset2',
        name: 'dataSet2',
        icon: 'smile',
        component: './Ke/DataSet2',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/kr',
    name: 'knowledgeReasoning',
    icon: 'crown',
    // component: './Kr',
    routes: [
      {
        path: '/kr/dataset1',
        name: 'dataSet1',
        icon: 'smile',
        component: './Kr/DataSet1',
      },
      {
        path: '/kr/dataset2',
        name: 'dataSet2',
        icon: 'smile',
        component: './Kr/DataSet2',
      },
      {
        component: './404',
      },
    ],
  },
  // {
  //   name: 'list.table-list',
  //   icon: 'table',
  //   path: '/list',
  //   component: './TableList',
  // },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
