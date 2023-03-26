document.getElementById('generate').onclick = function () {
	var element = document.getElementById('invoice');
	html2pdf(element);
};
  
jQuery($ => {
	$('#pageSelect').on('change', function(e) {
	  var pageUrl = $(this).val(); 
	  console.log(pageUrl)
	  $('#invoice').load(pageUrl);
	});
  
	$("#invoice").load("../templates/template1.html");
});