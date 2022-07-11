// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const errorModal = document.querySelector("#modal")

// Your JavaScript code goes here!
// Add the `.hidden` class to the error modal in the HTML so it does not appear when the page first loads
document.addEventListener("DOMContentLoaded", () => {
  errorModal.className = "hidden"
//   // findLikes()
//   //clickListener()
})

  // When a user clicks on an empty heart invoke `mimicServerCall` to simulate making a server request
//Need an event listener on all the hearts

//function findLikes(){ //this was also works but the second way has a 
  //reduced amount of event listeners-- Ask Rahul which was is better
  const heartClicker = document.querySelectorAll('.like-glyph')
  console.log(heartClicker)
  // heartClicker.for 
  for (const button of heartClicker) {
    button.addEventListener('click', clickListener)
  }
  // }((like) => {
  //   like.addEventListener('click', clickListener)

  //   })
  
  // function hideError(){
  //   
  // }

  function clickListener(e){
    const activatedHeart = e.target
    //document.addEventListener('click', (e) => {
      //if(e.target.classList.value === 'like-glyph'){
      // have to invole the server call 
      console.log(e)
        mimicServerCall('hello world')
        .then(() => {
          // console.log(response)
          
          if(activatedHeart.innerHTML === FULL_HEART){
            e.target.className = ''
            e.target.innerHTML = EMPTY_HEART
          } else {
           e.target.className = 'activated-heart'
           e.target.innerHTML = FULL_HEART
          }
        })
        .catch((error) => {
          console.log(error)
          errorModal.className = ''
          errorModal.innerText = error
           // when the promise fails, the .catch executes and removes the error modal which leads to an error message 
          setTimeout(() => errorModal.className = 'hidden', 3000)
  
        })
      }
  






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
