const AV_API_KEY = 'KM9G6CWI8KFXSQNY';
const functionName = 'TIME_SERIES_DAILY';
const symbolName = 'MSFT';
const apiUrl = `https://www.alphavantage.co/query?function=${functionName}&symbol=${symbolName}&apikey=${AV_API_KEY}`;

axios
  .get(apiUrl)
  .then(responseFromAPI => {console.log('API data', responseFromAPI.data); printTheChart(responseFromAPI.data)})
  .catch(err => console.log('Error while getting the data: ', err));

  function printTheChart(stockData) {
    const dailyData = stockData['Time Series (Daily)']; // {18-08-2022:....,17-08-2022:...}
   
    const stockDates = Object.keys(dailyData); //['18-08-2022', '17-08-2022'...etc]
    const stockPrices = stockDates.map(date => dailyData[date]['4. close']);// ["313.8600", "319.8600", "317.8600", "323.8600"]
   
    const ctx = document.getElementById('my-chart').getContext('2d'); // defining the context for canvas to be 2D
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: stockDates,
        datasets: [
          {
            label: 'Stock Chart',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: stockPrices
          }
        ]
      }
    }); // closes chart = new Chart()
  }