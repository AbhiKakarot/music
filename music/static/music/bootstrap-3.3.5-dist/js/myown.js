function search()
{
	var a=document.getElementById("search").value;	
alert(a+" is not available right now");
}

$(document).ready(function(){
	$("address").mouseenter(function(){
        $("address").hide("slow");
       });
    $("address").mouseleave(function(){
    	$("address").show("slow");
    });	
    
});
