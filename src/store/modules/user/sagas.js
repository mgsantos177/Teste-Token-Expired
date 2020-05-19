import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { email, ...rest } = payload.data;

    const profile = Object.assign(
      { email, rest },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, 'users', profile);
    console.log('Perfil Atualiazado');

    yield put(updateProfile(response.data));
  } catch (error) {
    console.log('Erro ao atualizar');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
