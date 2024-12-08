document.getElementById('summarizeButton').addEventListener('click', async () => {
    
    // Get the URL of the page
    (async () => {
      // currentWindow to get current tab's URL
      const [tab] = await chrome.tabs.query({active: true, currentWindow : true});
      // Regex for reddit comment thread
      const redditThreadURL = /^https:\/\/www\.reddit\.com\/r\/[^/]+\/comments\/[^/]+\/.+/;
      
      // console.log(tab.url)
      
      // If the URL is a reddit comment thread, then send the url to the backend
      if (redditThreadURL.test(tab.url)){
        try {
          const response = await fetch("http://127.0.0.1:5000/api/get-url", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: tab.url }),
          });
          const data = await response.json();
          console.log(data)
        }
        catch (error) {
          document.getElementById('summary').innerText = "Error sending URL to backend.";
        }
      }
      else{
        document.getElementById('summary').innerText = "Invalid URL: Not a Reddit comment thread.";
      }
    })();


    // const title = document.getElementById('wikiTitle').value;
    // const summary = await getWikipediaSummary(title);
    // const summary = "placeholder text" // replace with summarized text
    // document.getElementById('summary').innerText = summary || 'Unable to summarize.';
  });
  

  // replace with call to backend endpoint
//   async function getWikipediaSummary(title) {
//     const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
//     const data = await response.json();
//     return data.extract;
//   }

