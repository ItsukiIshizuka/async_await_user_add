// DOM
const addUsersBtn = document.getElementById("addUsersBtn"); // Button
const userList = document.getElementById("userList");   // List

// API URL
const USERS_API = "https://jsonplaceholder.typicode.com/users"; // Users

// ここからしまぶーさんの動画の通り実装したコード
// メソッド
// id:lists に ユーザー名が入った li を追加する
// function addListUser(user) {
//   const add_list = document.createElement("li");
//   add_list.innerText = user.name;
//   lists.appendChild(add_list);
// }
// // UsersApiからユーザーリストを取得する
// async function getUsers() {
//   const res = await fetch(USERS_API);
//   const users = await res.json();
//   return users;
// }
// // 取得したユーザーリストを、id:listsに li で追加する
// async function appendUsersToList() {
//   const users = await getUsers();
//   users.forEach(addListUser);
// }

// // イベント
// window.addEventListener("load", appendUsersToList); //サイト読み込み時
// button.addEventListener("click", appendUsersToList); //もっとボタン押下時
//ここまで

// ここから、自分で作成 → しまぶーさんの動画を見た後でリファクタリングしたコード
function appendUser(user) {
  const  li_users = `<li>${user.name}</li>`;
  userList.insertAdjacentHTML("beforeend", li_users);
}
async function callAsyncAwaitApi() {
  const res = await fetch(USERS_API);
  const users = await res.json();
  return users;
}
async function  appendUsersToLists() {
  const users = await callAsyncAwaitApi();
  users.forEach(appendUser);
}
window.addEventListener("load", appendUsersToLists);
addUsersBtn.addEventListener("click", appendUsersToLists)
// ここまで

// 以下はasync await以外でのapi取得処理

// fetch then
// function callFetchThenApi() {
//   fetch(USERS_API)
//     .then(function(res) {
//       return res.json();
//     })
//     .then(function(users) {
//       console.log(users);
//     });
// }
// callFetchThenApi();

// XMLHttpRequest
// function callXhrApi() {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", USERS_API);
//   xhr.responseType = "json";
//   xhr.send();

//   xhr.onload = function () {
//     console.log(xhr.response);
//   }
// }
// callXhrApi();