$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.


    var markup = "Current Conditions: " + data.currently.summary + " with a temperature of " + data.currently.temperature + " degrees. "
    + "The Forecast: " + data.daily.summary
    + " Today: " + data.daily.data[0].summary + " High temperature of " + data.daily.data[0].temperatureMax + " degrees."
    + " Tomorrow: " + data.daily.data[1].summary + " High temperature of " + data.daily.data[1].temperatureMax + " degrees."
    + " The Next Day: " + data.daily.data[2].summary + " High temperature of " + data.daily.data[2].temperatureMax + " degrees.";



    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
