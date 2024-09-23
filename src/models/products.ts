import { FetchMessage } from '@/services/products';
import { Effect, Reducer } from 'umi';

export interface ProdType {
  message?: any;
}

export interface ModelType {
  state: ProdType;
  effects: {
    fetchMessage: Effect;
  };
  reducers: {
    save: Reducer<ProdType>;
  };
}

const Model: ModelType = {
  state: {
    message: null,
  },
  effects: {
    *fetchMessage({ payload }, { call, put }): any {
      const data = yield call(FetchMessage, payload);
      if (data) {
        yield put({
          type: 'save',
          payload: {
            message: data.message.value,
            curChat: payload,
          },
        });
      }
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default Model;
