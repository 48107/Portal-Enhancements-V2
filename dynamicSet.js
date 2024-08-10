async function sendMes(mes) {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  });
  chrome.tabs.sendMessage(tab.id, mes);
}

// Listens for button click and passes it to a function that messages homepage to change
document.getElementById('btn').addEventListener('click', function () {
  sendMes({ greeting: '#000000' });
});

document.getElementById('btn2').addEventListener('click', function () {
  sendMes({ greeting: '#FFFFFF' });
});
