
const firebaseConfig = {
      apiKey: "AIzaSyCIjShu0jnIgDdQC9AFvqct5QKeVT6ygTA",
      authDomain: "kwitter-95bf4.firebaseapp.com",
      databaseURL: "https://kwitter-95bf4-default-rtdb.firebaseio.com",
      projectId: "kwitter-95bf4",
      storageBucket: "kwitter-95bf4.appspot.com",
      messagingSenderId: "704669394139",
      appId: "1:704669394139:web:8b9469f36cb66d38be98fe",
      measurementId: "G-TYHRCZJJBS"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
