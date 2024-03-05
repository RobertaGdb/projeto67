import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDcJZKhE9rzwoKi0lJzST0OVU69cMdStvo",
    authDomain: "projeto67-61116.firebaseapp.com",
    projectId: "projeto67-61116",
    storageBucket: "projeto67-61116.appspot.com",
    messagingSenderId: "274364457116",
    appId: "1:274364457116:web:5d433775155cccd96a4d59"
  };
  
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();