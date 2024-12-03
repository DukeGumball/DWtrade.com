// Settings //

enableAnnouncement = false
announcementTxt = "Welcome!!"

// Vars //

const addDoodle = document.getElementById("AddTrade")

window.onload = function() {
  
    if (enableAnnouncement == true) {
    
        const announcementBar = document.getElementById("MessageBoard");
      
        announcementBar.style.display = "Block"
       
      announcementBar.innerHTML = "WELCOME!!!!"
        
    
    }

}     


