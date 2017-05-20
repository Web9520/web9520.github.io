window.fbAsyncInit = function() {
  FB.init({
    appId      : '1130946710343434',
    xfbml      : true,
    version    : 'v2.9'
  });
  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

var mainText= document.getElementById("mainText");
var SubmitButton= document.getElementById("SubmitButton");
var firebaseRef = firebase.database().ref();


firebaseRef.on("value", function(snapshot) {  
	var a = snapshot.exists();
	if(a){ 
         var post = snapshot.val(); 
         var keys= Object.keys(post);
          for(var i=0;i< keys.length;i++){
                   var k= keys[i];
                   var mypost= post[k].title;
            }
            mainText.innerText= mypost;
            
            
     }
});

function submitfn(){
	var firebaseRef = firebase.database().ref();
	var message= mainText.value;
	//firebaseRef.child("Text").set(message);
	firebaseRef.push().set({title: message});
    FB.api("/me/feed","POST",{"message":hey I am Shruti Singh },
                   function (response) {
                      
                       console.log('Welcome! your status is posted now.');
                      
                    });
	window.alert("Your text is posted.");
    
}