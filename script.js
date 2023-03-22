document.getElementById('generate').onclick = function () {
	var element = document.getElementById('invoice');
	html2pdf(element);
};

//$(function(){
//	$("#invoice").load("../templates/invoice.html"); 
//});

// $(function() {
// 	$("#pageSelect").on("change", function() {
// 	  var pageUrl = $(this).val();
// 	  $("#invoice").load("../templates/template2.html"); 
// 	});
	
// 	$("#invoice").load("../templates/template1.html"); 
//   });


// jQuery(function() {
// 	jQuery("#pageSelect").on("change", function() {
// 	  var pageUrl = jQuery(this).val();
// 	  console.log(pageUrl);
// 	  jQuery("#invoice").load(pageUrl);
// 	});
  
// 	jQuery("#invoice").load("../templates/template1.html");
//   });
  
jQuery($ => {
	$('#pageSelect').on('change', function(e) {
	  var pageUrl = $(this).val(); 
	  console.log(pageUrl)
	  $('#invoice').load(pageUrl);
	});
  
	$("#invoice").load("../templates/template1.html");
  });