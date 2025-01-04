// Settings //

enableAnnouncement = false
announcementTxt = "Welcome!!"

// Vars //

const owner = "DukeGumball";
const repo = "DWtrade.com";
const folderPath = "Doodles";

const doodleURL = `https://api.github.com/repos/DukeGumball/DWtrade.com/contents/Doodles`;

const doodlepedia = 'https://doodle-world.fandom.com/wiki/Doodlepedia'

window.onload = function () {

  const addDoodle = document.getElementById("AddDoodle_Button");
  const announcementBar = document.getElementById("MessageBoard");
  const createUI = document.getElementById("DoodleCreate");
  const doodleList = document.getElementById("DoodleSelection_List");
  const doodleIcon = document.getElementById("DoodleImage")

  const doodleName = document.getElementById("DoodleName")

  async function displayItems() {
  
    try {

      const response = await fetch(doodleURL);
      const data = await response.json();
  
      if (Array.isArray(data)) {

        const doodleList = document.getElementById('DoodleSelection_List');

        data.forEach((item, index) => {

          if (item.type === 'file' && item.download_url) {


            doodleList.innerHTML = "";
            const newDoodle = document.createElement("li");
            newDoodle.id = "Doodle_ListItem"
            doodleList.appendChild(newDoodle);
  
            const doodleImage = document.createElement("img");
            doodleImage.src = item.download_url;
            doodleImage.id = "DoodleImage";

            const doodleImageButton = document.createElement("button");
            doodleImageButton.id = "DoodleImageButton";

            doodleImageButton.onclick = function() {
              doodleIcon.src = item.download_url;
              doodleName.innerText = item.name;

            }
            doodleImage.onerror = function() {
              console.error('Error loading image:', doodleImage.src);
              doodleImage.alt = 'Image not available';
            };

            newDoodle.appendChild(doodleImageButton);

            newDoodle.appendChild(doodleImage);

          }
        });
      }
    } catch (error) {
      console.error('Error fetching images from repo:', error);
    }
  }
  
  async function getDoodles() {

    try {

      const response = await fetch(doodleURL);
      const data = await response.json();

      console.log(data)

    } catch (error) {
      console.error('Error fetching images from repo:', error);
    }

  }

  getDoodles()

  if (enableAnnouncement == true) {

    announcementBar.style.display = "Block"

    announcementBar.innerHTML = "WELCOME!!!!"


  }

  addDoodle.onclick = function () {

    createUI.style.display = "flex"

    displayItems()

  }

}


