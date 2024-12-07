// Settings //

enableAnnouncement = true
announcementTxt = "Welcome!!"

// Vars //

const addDoodle = document.getElementById("AddTrade");
const announcementBar = document.getElementById("MessageBoard");
const createUI = document.getElementById("DoodleCreate");

console.log(announcementBar)
console.log(addDoodle)

addDoodle.onclick = function() {
  
  createUI.style.display = "Block"
  
}

window.onload = function() {
  
  
    if (enableAnnouncement == true) {
      
        announcementBar.style.display = "Block"
       
      announcementBar.innerHTML = "WELCOME!!!!"
        
    
    }

}     


