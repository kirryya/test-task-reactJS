import { all, call, fork, put, select, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { getMessageFromError } from 'utils/app_helper';
import { WrapResponseGetListJudicialCases } from './types';
import { setActionStatus } from '../actions';
import { getAreaId } from '../selectors';

import {
  ActionType,
  IAddJudicialCases,
  IDeleteJudicialCases,
  ILoadJudicialCases,
} from './actionTypes';
import { setJudicialCases } from './actions';
import JudicialCases from './services';

function* fetchJudicialCases({ payload }: ILoadJudicialCases) {
  try {
    const response: AxiosResponse<WrapResponseGetListJudicialCases> =
      yield call(JudicialCases.getJudicialCases, payload);

    yield put(setJudicialCases(response.data.data));
  } catch (error) {
    yield put(setJudicialCases([]));
    yield put(
      setActionStatus({
        message: getMessageFromError(error),
        status: 'error',
      }),
    );
  }
}
//
function* deleteJudicialCases({ payload }: IDeleteJudicialCases) {
  try {
    const areaId = yield select(getAreaId);
    yield call(JudicialCases.deleteJudicialCases, payload);
    const fetchData = yield call(JudicialCases.getJudicialCases, areaId);

    yield put(setJudicialCases(fetchData.data.data));
  } catch (error) {
    yield put(
      setActionStatus({
        message: getMessageFromError(error),
        status: 'error',
      }),
    );
  }
}

function* addJudicialCase({ payload }: IAddJudicialCases) {
  try {
    const areaId = yield select(getAreaId);
    yield call(JudicialCases.addJudicialCases, payload);
    const fetchData = yield call(JudicialCases.getJudicialCases, areaId);

    yield put(setJudicialCases(fetchData.data.data));
  } catch (error) {
    console.log(error);
    yield put(
      setActionStatus({
        message: getMessageFromError(error),
        status: 'error',
      }),
    );
  }
}

export function* watchLoadJudicialCases() {
  yield takeEvery(ActionType.LOAD_JUDICIAL_CASES, fetchJudicialCases);
}
export function* watchDeleteJudicialCases() {
  yield takeEvery(ActionType.DELETE_JUDICIAL_CASES, deleteJudicialCases);
}
export function* watchAddJudicialCases() {
  yield takeEvery(ActionType.ADD_JUDICIAL_CASES, addJudicialCase);
}

function* LayoutSaga() {
  yield all([fork(watchLoadJudicialCases)]);
  yield all([fork(watchDeleteJudicialCases)]);
  yield all([fork(watchAddJudicialCases)]);
}

export default LayoutSaga;
