document.getElementById('summarizeButton').addEventListener('click', async () => {
    // const title = document.getElementById('wikiTitle').value;
    // const summary = await getWikipediaSummary(title);
    const summary = "placeholder text" // replace with summarized text
    document.getElementById('summary').innerText = summary || 'Unable to summarize.';
  });
  

  // replace with call to backend endpoint
//   async function getWikipediaSummary(title) {
//     const response = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`);
//     const data = await response.json();
//     return data.extract;
//   }