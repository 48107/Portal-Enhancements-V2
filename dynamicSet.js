options = {};
setDropdown();

// Function to send message to content-scripts
async function sendMes(mes) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, mes);
}

// Function to preselect dropdown option to last selected on popup load
async function setDropdown() {
  const data = await chrome.storage.sync.get('options');
  Object.assign(options, data.options);

  // Checks if preset colour is a predfined on
  let included = false
  for (let i = 0; i < colourDropdown.options.length; i++) {
    if (colourDropdown.options[i].value == options.colour) {
      included = true
    }
  }

  // Auto populates the dropdown(/colourpicker if in use)
  if (included) {
    colourDropdown.value = options.colour;
  } else {
    colourDropdown.value = 'other';
    document.getElementById('colour-div').hidden = false;
    colourPicker.value = options.colour
  }
}

// Listens for the dropdown to change and passes it to a function that messages homepage.js to change duework colours
const colourDropdown = document.getElementById('oolour');
const colourPicker = document.getElementById('colourPicker');
colourDropdown.addEventListener('change', function () {
  if (colourDropdown.value !== 'other') {
    document.getElementById('colour-div').hidden = true;
    sendMes({ greeting: colourDropdown.value });
    options.colour = colourDropdown.value;
    chrome.storage.sync.set({ options }); // Sets the colour to be persistent for the future
  } else {
    document.getElementById('colour-div').hidden = false;
  }
});
colourPicker.addEventListener('change', () => {
  // Listener for the colour picker to change and update due work colour same as above
  sendMes({ greeting: colourPicker.value });
  options.colour = colourPicker.value;
  chrome.storage.sync.set({ options }); // Sets the colour to be persistent for the future
});
