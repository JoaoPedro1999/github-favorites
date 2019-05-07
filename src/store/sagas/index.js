import { all, takeLatest } from 'redux-saga/effects';
import { addFavorites } from './favorites';
import { Types as FavoriteTypes } from '../ducks/favorites';

export default function* rootSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorites)]);
}
