options = {};
setDropdown()

// Function to send message to content-scripts
async function sendMes(mes) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, mes);
}

async function setDropdown() {
  const data = await chrome.storage.sync.get("options");
  Object.assign(options, data.options);
  colourDropdown.value = options.colour;
}

// Listens for button click and passes it to a function that messages homepage to change
const colourDropdown = document.getElementById('oolour');
colourDropdown.addEventListener('change', function () {
  sendMes({ greeting: colourDropdown.value });
  options.colour = colourDropdown.value
  chrome.storage.sync.set({ options }); // Sets the colour to be persistent for the future
});
