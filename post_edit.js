var mainText= document.getElementById("mainText");
var DeleteButton= document.getElementById("DeleteButton");
var firebaseRef = firebase.database().ref();

firebaseRef.on("value",function(snapshot) {
       var post= snapshot.val();
       var keys= Object.keys(post);
       for(var i=0;i< keys.length;i++){
       	var k= keys[i];
       	var mypost= post[k].title;
       	console.log(mypost);
       	mainText.innerText= mypost;
       }
});
function deletefn(){
	var firebaseRef = firebase.database().ref();
	  firebaseRef.remove();
	   mainText.innerText= null; 
	   window.alert("Post Deleted");
	 
}

/*Following is for learing purpose

firebaseRef.on("value",function(snapshot) {
       var post= snapshot.val(); (This gives objects)
       var keys= Object.keys(post); (this gives array of keys)
       console.log(keys);
       console.log(snapshot.val());
       for(var i=0;i< keys.length;i++){
       	var k= keys[i];             (Extracting the value of each key)
       	var mypost= post[k].title;
       	console.log(mypost);
       	mainText.innerText= mypost;
       }
});
*/