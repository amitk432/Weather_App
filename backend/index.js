const express = require("express");

var request = require("request");
const app = express();
const port = 3001;


// Hello World
app.get('/', (req, res) => {
    res.send("This is a Weather App for Delhi")

});

app.get('/weather', (req, res) => {
    request(
        "http://api.weatherstack.com/current?access_key=893c2b8799d200b818d30442eefc4cf9&query=Delhi",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                var parsedBody = JSON.parse(body);
                var temperature = parsedBody["current"]["temperature"];
                var region = parsedBody["location"]["region"];
                res.send({ temperature, region });
            }
        }
    );
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})