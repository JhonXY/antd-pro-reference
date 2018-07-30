function sleep(numberMillis) {
  let now = new Date();
  let exitTime = now.getTime() + numberMillis;
  while (true) {
    now = new Date();
    if (now.getTime() > exitTime) {
      return { newpayload: 1 }
    }
  }
}

export default {
  namespace: 'testCycle',

  state: {
    test: 'one'
  },

  effects: {
    *fetch(_, { call, put }) {
      console.log('*fetch')
      const res = yield call(() => {sleep(1000)});
      yield put({
        type: 'getData',
        payload: res
      });
    }
  },

  reducers: {
    getData(state, action) {
      console.log('reducer: getData')
      return {
        ...state,
        newState: action.payload,
      };
    },
  },
};
