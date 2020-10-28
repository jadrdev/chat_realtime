import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAUw7JPdCUDU1n-cD6mW0n8YFGbXeVsSW8",
    authDomain: "chat-7ecbe.firebaseapp.com",
    databaseURL: "https://chat-7ecbe.firebaseio.com",
    projectId: "chat-7ecbe",
    storageBucket: "chat-7ecbe.appspot.com",
    messagingSenderId: "263557150217",
    appId: "1:263557150217:web:8f760611c9a1f96e972ad8"
};

  // Inicializamos y exportamos firebase
   export default firebase.initializeApp(firebaseConfig);