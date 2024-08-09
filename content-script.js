const link = window.location.search.slice(6); // Grab link login location

// Function to grab JWT stored in local JSON
function getResourceContent(fileName) {
  return fetch(chrome.runtime.getURL(`resources/${fileName}`))
  .then(resp => resp.json());
}

// Grabs JSON
getResourceContent("file.json").then(content => {
  jwt = content.jwt
  if (link == null) {
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?jwt="+jwt
    );
  } else {
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?redirect="+link+"&jwt="+jwt
    );
  }
});