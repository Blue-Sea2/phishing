function submit(){
  var input = getElementById("email");
  var address = input.text;
  var database = firebase.database();
  database.set({email: address});
}
