
console.log("reaction")
$("button").on("click", function() {
  $("#gifsshowup").empty();
  // Grabbing and storing the data-sports
  var sports = $(this).attr("data-sports");

  // Constructing a queryURL using sports
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    sports + "&api_key=fT5taTdZgP83PLlEUQRMNTYSi02g4tOR&limit=10";

  // Performing an AJAX request with the queryURL
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // After data comes back from the request
    .then(function(response) {
      console.log(queryURL);

      console.log(response);
      // storing data
      var results = response.data;

    
      for (var i = 0; i < results.length; i++) {

        // Creating div tag
        var sportsDiv = $("<div>");

        // need to create paragraph for rating
        var p = $("<p>").text("Rating: " + results[i].rating);
        console.log(results[i].rating);

        var sportsImage = $("<img>");
       
        sportsImage.attr("src", results[i].images.fixed_height.url);

        //creating the image and sports together
        sportsDiv.append(p);
        sportsDiv.append(sportsImage);
        console.log(sportsDiv);
        //final update
        $("#gifsshowup").prepend(sportsDiv);
      }
    });
});

  console.log("working")

  //deleting existing GIFS from page

  
  



  