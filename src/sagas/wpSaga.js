import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  console.log("**SAGA");
  const json = yield fetch('https://newsapi.org/v2/everything?q=bitcoin&from=2019-11-09&sortBy=publishedAt&apiKey=4ff0f42c41c04a0396aeef7cb6d98233')

        .then(response => response.json(), );
        console.log("Res.." , json);
  yield put({ type: "REGISTERED_USER", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('REGISTER_USER', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}
