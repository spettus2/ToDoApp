//start by adding the event listeners

//check off done items by clicks

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed")
});

//click on x to delete
 $("ul").on("click", "span", function(event){
	 $(this).parent().fadeOut(500, function(){
		 $(this).remove();
	 });
	 event.stopPropagation();
 });

//add listener to the input to add to list
$("input[type='text']").keypress(function(event){
	
	if(event.which === 13) {
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
		//validate the entry
		if(todoText.length === 0){
		alert("You can't do nothing all day..");
			
	} else{
		//create a new li and add to ul				
		$("ul").append("<li> <span><i class='fa fa-trash'></i></span> " + todoText + "</li>")	
		
	}}
	
	
});

//toggle input box
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});



