// Settings //

enableAnnouncement = false
announcementTxt = "Welcome!!"

// Vars //

const owner = "DukeGumball";
const repo = "DWtrade.com"; 
const folderPath = "Doodles";

const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}`;

doodleList = document.getElementById("DoodleSelection_List");

async function displayItems() {
  try {
    const response = await fetch(apiUrl);
    
    // Check if the response is OK (status 200)
    if (!response.ok) {
      throw new Error('Failed to fetch folder contents');
    }

    const data = await response.json();

    // Count the number of items in the folder (this includes files and subfolders)
    const numberOfItems = data.length;

    for (let x = 1; x < numberOfItems; x++)


        newDoodle = document.createElement("li");
        newDoodle.id = "Doodle_ListItem"
        doodleList.appendChild(newDoodle);

        console.log(data[x])
      

    console.log(`Number of items in the folder "${folderPath}": ${numberOfItems}`);
  } catch (error) {
    console.error('Error:', error);
  }
}


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

        displayItems()
        
    }

}     


