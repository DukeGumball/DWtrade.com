// Settings //

enableAnnouncement = false
announcementTxt = "Welcome!!"

// Vars //

window.onload = function() {
  
    const addDoodle = document.getElementById("AddTrade");
    const announcementBar = document.getElementById("MessageBoard");
    const createUI = document.getElementById("DoodleCreate");
    if (enableAnnouncement == true) {
      
      announcementBar.style.display = "Block"
       
      announcementBar.innerHTML = "WELCOME!!!!"
        
    
    }

    addDoodle.onclick = function() {
  
        createUI.style.display = "Block"
        
      }

}     


