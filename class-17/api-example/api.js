var title = "";

$('#submit').click(function(e){
	title = $('#title').val();
	getMovie(title);
    e.preventDefault();
});

function getMovie(movieName){
    $.getJSON("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json", function(json) {
         console.log(json.Director); 
         $('#title_output').text(json.Title);
         $('img').attr("src",json.Poster);
         $('#starring_output').append("<br/>"+json.Actors);
         $('#plot_output').text(json.Plot);
         $('#title').val('');
    });
}



