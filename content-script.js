const link = window.location.search.slice(6); // Grab link login location

// Function to grab JWT stored in local JSON
function getResourceContent(fileName) {
  return fetch(chrome.runtime.getURL(`resources/${fileName}`))
  .then(resp => resp.json());
}

// Grabs JSON with JWT and then logs in automacitally
getResourceContent("file.json").then(content => {
  jwt = content.jwt
  if (link == null) {
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?jwt="+jwt
    );
  } else { // For going back to previous page upon login rather than home
    window.location.replace(
      "https://skcportal.stkevins.vic.edu.au/api/session?redirect="+link+"&jwt="+jwt
    );
  }
});