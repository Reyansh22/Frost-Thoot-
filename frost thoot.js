function addUser() {
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location= "Frost_thoot_room.html";
    firebase.database().ref("/").child(user_name).update({ purpose : "adding user" });
    }