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

var planTitle = document.getElementById("planTitle")
var planDescription = document.getElementById("planDescription")
var planPrice = document.getElementById("planPrice")
var subtotal = document.getElementById("subtotal")
var amountPaid = document.getElementById("amountPaid")
var subscriptionSelected = document.getElementById("subscriptionSelect")

subscriptionSelected.addEventListener("change", updateSubscription)

function updateSubscription() {
  if (subscriptionSelected.value == "monthly") {
    planTitle.innerHTML = "Monthly"
    planDescription.innerHTML = "Monthly USD"
    planPrice.innerHTML = "$10.00"
    subtotal.innerHTML = "$10.00"
    amountPaid.innerHTML = "$10.00"
  }

  if (subscriptionSelected.value == "annual") {
    planTitle.innerHTML = "Annual"
    planDescription.innerHTML = "Annual USD"
    planPrice.innerHTML = "$90.00"
    subtotal.innerHTML = "$90.00"
    amountPaid.innerHTML = "$90.00"
  }
}