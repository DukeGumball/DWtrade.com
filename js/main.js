// Settings //

enableAnnouncement = true
announcementTxt = "Welcome!!"

// Vars //

const addDoodle = document.getElementById("AddTrade");
const announcementBar = document.getElementById("MessageBoard");
const createUI = document.getElementById("DoodleCreate");

window.onload = function() {
  
  
    if (enableAnnouncement == true) {
      
      announcementBar.style.display = "Block"
       
      announcementBar.innerHTML = "WELCOME!!!!"
        
    
    }

    addDoodle.onclick = function() {
  
        createUI.style.display = "Block"
        
      }

}     


