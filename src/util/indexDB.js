
const dbName = 'vueTest';
const dbVersion = '1.0';
const tableName = 'user';
//实例化IndexDB数据上下文，这边根据浏览器类型来做选择
if (!window.indexedDB) {
  window.indexedDB = window.mozIndexedDB || window.webkitIndexedDB;
}

let db;

const request = indexedDB.open(dbName, dbVersion);

request.onsuccess = function(e) {
  console.log("success to open DB: " + dbName);
}


request.onerror = function(event){
  console.log("打开DB失败", event);
}


request.onupgradeneeded   = function(event){
  console.log("Upgrading");
  db = event.target.result;
  var objectStore = db.createObjectStore("students", { keyPath : "rollNo" });
};
request.onsuccess  = function(event){
  console.log("成功打开DB");
  db = event.target.result;
}


