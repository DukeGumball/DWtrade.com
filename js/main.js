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

      if (!response.ok) {
        throw new Error('Failed to fetch folder contents');
      }

      const data = await response.json();

      const numberOfItems = data.length;

      doodleList.innerHTML = ''

      console.log(data)

      for (let x = 0; x < numberOfItems; x++) {

        console.log(data[x])

        newDoodle = document.createElement("li");
        newDoodle.id = "Doodle_ListItem"
        doodleList.appendChild(newDoodle)
        doodleImage = document.createElement("img")
        doodleImage.src = data[x].download_url

        doodleImage.onerror = function() {
          console.error('Error loading image:', doodleImage.src);
          doodleImage.alt = 'Image not available';
        };
      
        newDoodle.appendChild(doodleImage);

        
      }

      console.log(`Number of items in the folder "${folderPath}": ${numberOfItems}`);

    } catch (error) {
      console.error('Error:', error);
    }
  }

  if (enableAnnouncement == true) {

    announcementBar.style.display = "Block"

    announcementBar.innerHTML = "WELCOME!!!!"


  }

  addDoodle.onclick = function () {

    createUI.style.display = "Block"

    displayItems()

  }

}


