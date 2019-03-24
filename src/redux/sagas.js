import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import patientsSagas from './patients/saga';
import surveyDetailSagas from './surveyDetail/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    patientsSagas(),
    surveyDetailSagas()
  ]);
}
