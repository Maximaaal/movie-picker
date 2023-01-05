var storedColors = JSON.parse(localStorage.getItem("colors"));
var test;
document.getElementById('bg').style.background = "linear-gradient(-200deg, " + storedColors[0]+ " 0%, " + storedColors[1]+" 100%)"
var adultCheck = localStorage.getItem('adultRating')


// var storedPosterName1 = JSON.parse(localStorage.getItem("posterName1"));
// console.log(storedPosterName1)
// document.getElementById('movieTitle').innerHTML = storedPosterName1

// var storedPosterYear = JSON.parse(localStorage.getItem("posterYear"));
// console.log(storedPosterYear)
// document.getElementById('movieYear').innerHTML = storedPosterYear

window.onload = loadInfo()
// test = JSON.parse(httpGet("https://www.omdbapi.com/?t=So%20It%27s%20You&apikey=5081437d"))
// console.log(test.Plot)
// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//
//     return xmlHttp.responseText;
// }

function loadInfo() {
  // XMLHttpRequest GET
    
    const xhr = new XMLHttpRequest();
    var storedResult = (localStorage.getItem("result"))
    var storedTitle = (localStorage.getItem("title"))
    var storedImg = (localStorage.getItem("img"))
    var storedGenre = (localStorage.getItem("genre"))
    title = encodeURIComponent(storedTitle);
    const url = "https://www.omdbapi.com/?t="+title+"&apikey=5081437d";
    // console.log(url)
    // xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
          var response = JSON.parse(xhr.responseText)
          console.log(localStorage.getItem('storedLoadingStatus'))
          console.log(storedResult)
          console.log(storedTitle)
          console.log(storedImg)
          console.log(response)
          console.log(localStorage.getItem('adultRating'))
          document.getElementById('movieTitle').innerHTML = storedTitle
          document.getElementById('moviePoster').src = storedImg
          document.getElementById('genre').innerHTML = storedGenre
          document.getElementById('plot').innerHTML = response.Plot
          document.getElementById('movieYear').innerHTML = response.Released + "&nbsp;&#x2022;&nbsp;" + response.Language + "&nbsp;&#x2022;&nbsp;" + response.Runtime + "&nbsp;&#x2022;&nbsp;" + "Rated: " + response.Rated
          document.getElementById('ratingNumber').innerHTML = response.imdbRating
          document.getElementById('director').innerHTML = "Director: &nbsp;&nbsp;" + response.Director
          document.getElementById('starring').innerHTML = "Starring: &nbsp;&nbsp;" + response.Actors
          if (adultCheck == 1 && response.Rated == "R" ){
            document.getElementById('movieTitle').style.display = 'none'
            document.getElementById('moviePoster').style.display = 'none'
            document.getElementById('genre').style.display = 'none'
            document.getElementById('rating').style.display = 'none'
            document.getElementById('movieYear').style.display = 'none'
            document.getElementById('plot').innerHTML = "<b>Parental accompaniment required for younger audiences:</b><br> Sorry this movie is rated 'R'! Please go back to the results overview to pick another title."
            document.getElementById('movieInfo').style.width  = '800px'
            console.log("adult")
          }
        }
    }

    xhr.open('GET', url);
    xhr.send();

    // document.getElementById('plot').innerHTML = test.Plot
}
