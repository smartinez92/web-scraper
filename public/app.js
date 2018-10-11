$.getJSON('/scrape', function(data){
	console.log("data=", data);
	for (var i = 0; i < data.length; i++){
		if(data[i].note){
			noteExists = '<span style="color"><sup> *note attached*</sup></span>'
		} else {
		noteExists = "";	
		}
		$('#articles').append('<h2><p data-id="' + data[i]._id + '">' + data[i].title + noteExists + '</p></h2>' + '<a href=' + data[i].link + ' target = "_blank"' + data[i].link + "<br />");
		 $('#articles').append("____________________________________________________________________________________________________________________");
	}
	 $('#articles').append("____________________________________________________________________________________________________________________");
});

$(document).on('click', 'p', function(){
	$('#notes').empty();
	var thisID = $(this).attr('data-id');

	$.ajax({
		method: "GET",
		url: "/articles/" + thisID,
	})

	.done(function( data ){
		$('#notes').append('<h2>' + data.title + '</h2>');
		$('#notes').append('<input id="titleinput" name="title" >');
      	$('#notes').append('<textarea id="bodyinput" name="body"></textarea>');

      	if(data.note){
      		$('#titleinput').val(data.note.title);
      		$('#bodyinput').val(data.note.body);
        	$('#notes').append('<button data-id="' + data._id + '" id="deletenote">Delete Note</button>');
        	$('#bodyinput,#titleinput').css('background-color', '#99ddff');
      	} else {
      		$('#notes').append('<button data-id="' + data._id + '" id="savenote">Save Note</button>');
        	$('#bodyinput,#titleinput').css('background-color', '#99ddff');
      	}
	});
});

$(document).on('click', '#savenote', function(){
	var thisID = $(this).attr('data-id');

	$.ajax({
		method: "POST",
		url: "/savenote/" + thisID,
		data: {
			title: $('#titleinput').val(),
			body: $('#bodyinput').val()
		}
	})
	.done(function( data ){
		console.log(data);
		$('#notes').empty();
	});
	location.reload();
	$('#titleinput').val("");
	$('#bodyinput').val("");
});

$(document).on('click', '#deletenote', function(){
	var thisID = $(this).attr('data-id');

	$.ajax({
		method: "POST",
		url: "/deletenote/" + thisID,
	})
	.done(function( data ){
		console.log(data);
		$('#notes').empty();
	});
	location.reload();
	$('#titleinput').val("");
	$('#bodyinput').val("");
});

$(document).on('click', '#cnnlogo', function(){
	$('#head').css("color", "white");
	$.ajax({
		method: "POST",
		url: "/dropdb/"
	})
	.done(function( data ){
		console.log("back from drop");
		$('#head').css("color", "black");
		location.reload();
	});
});



