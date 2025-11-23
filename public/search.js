async function renderSearchResult() {
  const params = new URLSearchParams(document.location.search);
  const keyword = params.get("keyword");
  const sessionCode = Cookies.get('sessionCode');

  try {
    const response = await fetch('/api/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionCode, keyword })
    });
    const jsonData = await response.json();
    document.querySelector('code').innerHTML = JSON.stringify(jsonData.data);
  }
  catch (error) {
    console.log(`error when perform search: ${JSON.stringify(error)}`);
  }
}

renderSearchResult();