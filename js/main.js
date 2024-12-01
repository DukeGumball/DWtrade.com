// Settings //

enableAnnouncement = true
announcementTxt = "Welcome!!"

// Vars //

const addDoodle = document.getElementById("AddTrade")

window.onload = function() {

    if (enableAnnouncement == true) {
    
        const announcementBar = document.getElementById("MessageBoard");
    
        announcementBar.display = "Block"
        announcementBar.textContent = "WELCOME!!!!"
        
    
    }

}     



