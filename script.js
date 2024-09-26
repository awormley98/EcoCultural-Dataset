document.getElementById('submit').onclick = function() {
    const query = document.getElementById('query').value;
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const results = handleQuery(data, query);
            displayResults(results);
        });
};

function handleQuery(data, query) {
    // Example query: Find correlations based on user input
    // Implement your correlation logic here
    // For demonstration, just return data that matches the query
    return data.filter(item => item.category === query); // Adjust as needed
}

function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results
    if (results.length > 0) {
        results.forEach(item => {
            resultsDiv.innerHTML += `<p>${JSON.stringify(item)}</p>`;
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
