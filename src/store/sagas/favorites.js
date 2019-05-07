import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';

// funcao generator - funciona com async await
export function* addFavorites(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repository}`);

    // eslint-disable-next-line max-len
    const isDuplicated = yield select(state => state.favorites.data.find(favorite => favorite.id === data.id));

    if (isDuplicated) {
      yield put(FavoriteActions.addFavoritesFailure('Repositorio duplicado'));
    } else {
      const respositoryData = {
        id: data.id,
        name: data.full_name,
        description: data.description,
        url: data.html_url,
      };

      yield put(FavoriteActions.addFavoritesSucess(respositoryData));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoritesFailure('Erro ao adiconar repositorio'));
  }
}
