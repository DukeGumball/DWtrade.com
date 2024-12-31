// Settings //

enableAnnouncement = false
announcementTxt = "Welcome!!"

// Vars //

const owner = "DukeGumball";
const repo = "DWtrade.com";
const folderPath = "Doodles";

const doodleURL = `https://api.github.com/repos/DukeGumball/DWtrade.com/contents/Doodles`;

window.onload = function () {

  const addDoodle = document.getElementById("AddTrade");
  const announcementBar = document.getElementById("MessageBoard");
  const createUI = document.getElementById("DoodleCreate");
  const doodleList = document.getElementById("DoodleSelection_List");

  async function displayItems() {
  
    try {
      const response = await fetch(doodleURL);
      const data = await response.json();
  
      if (Array.isArray(data)) {
        const doodleList = document.getElementById('DoodleSelection_List');

        data.forEach((item, index) => {
          if (item.type === 'file' && item.download_url) {
            const newDoodle = document.createElement("li");
            newDoodle.id = "Doodle_ListItem"
            doodleList.appendChild(newDoodle);
  
            const doodleImage = document.createElement("img");
            doodleImage.src = item.download_url;
            doodleImage.id = "DoodleImage";
            doodleImage.onerror = function() {
              console.error('Error loading image:', doodleImage.src);
              doodleImage.alt = 'Image not available';
            };
  
            newDoodle.appendChild(doodleImage);
  
            console.log(`Path of item ${index}: ${item.path}`);
          }
        });
  
        console.log(`Number of items in the folder: ${data.length}`);
      } else {
        console.error('Error: Unexpected response format');
      }
    } catch (error) {
      console.error('Error fetching images from repo:', error);
    }
  }
  

  if (enableAnnouncement == true) {

    announcementBar.style.display = "Block"

    announcementBar.innerHTML = "WELCOME!!!!"


  }

  addDoodle.onclick = function () {

    createUI.style.display = "flex"

    displayItems()

  }

}


