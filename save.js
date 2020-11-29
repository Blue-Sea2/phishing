function submit(){
  var input = getElementById("email");
  var address = input.text;
  var database = firebase.database();
  database.ref("/emails").set(email: address);
}
