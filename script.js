document.getElementById('generate').onclick = function () {
	var element = document.getElementById('invoice');
	html2pdf(element);
};

$(function(){
	$("#invoice").load("../templates/invoice.html"); 
});