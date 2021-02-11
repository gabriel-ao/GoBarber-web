import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  console.tron.log('action.type ==>>', action.type);
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }

      default:
        if (!action.type.includes('@redux')) {
          throw new Error('unknow redux action');
        }
    }
  });
}
