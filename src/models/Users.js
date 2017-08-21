import { hashHistory } from 'dva/router';

export default {

  namespace: 'users',

  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出窗的显示状态
    modalType: 'create', // 弹出窗的类型（添加用户，编辑用户）
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname === '/users') {
          dispatch({
            type: 'querySuccess',
            payload: {},
          });
        }
      });
    },
  },

  effects: {
    * query() {
    },
    * create() {
    },
    * delete() {
    },
    * update() {
    },
  },

  reducers: {
    showLoading() {
    }, // 控制加载状态的 reducer
    showModal() {
    }, // 控制 Modal 显示状态的 reducer
    hideModal() {
    },
    // 使用静态数据返回
    querySuccess(state) {
      const mock = {
        total: 3,
        current: 1,
        loading: false,
        list: [
          {
            id: 1,
            name: '张三',
            age: 23,
            address: '成都',
          },
          {
            id: 2,
            name: '李四',
            age: 24,
            address: '杭州',
          },
          {
            id: 3,
            name: '王五',
            age: 25,
            address: '上海',
          },
        ],

      };
      return {...state, ...mock, loading: false};
    },
    createSuccess() {
    },
    deleteSuccess() {
    },
    updateSuccess() {
    },
  },

};
