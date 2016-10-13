
function blankOutText(theObj, thePlaceHolderText)
{
	if(theObj.value == thePlaceHolderText)
	{
		theObj.value = "";
	}
	/*var firstN_Obj = document.getElementById('frmFirstName');
	if (firstN_Obj.value == 'First Name')
	{
		firstN_Obj.value = "";  //Just blank it out
	}*/
}

function checkForBlankInput(theObj, thePlaceHolderText)
{
	//alert('here in checkForBlankInput check for blank field: ' + thePlaceHolderText);
	var currentValue = theObj.value;

	if(currentValue.length == 0) {
		theObj.value = thePlaceHolderText;
	}

	//alert('the current value is: |' + currentValue + '|.');
}

function validateForm()
{
	//alert('here in validateForm function');

	var firstN = document.getElementById('frmFirstName').value;
	if (firstN.length == 0 || firstN == 'First Name') {
		alert('We need your First Name please');
		return false;
	}
	var lastN = document.getElementById('frmLastName').value;
	if (lastN.length == 0 || lastN == 'Last Name') {
		alert('We need your Last Name please');
		return false;
	}
	var emailAdd = document.getElementById('frmEmailAddress').value;
	if (emailAdd.length == 0 || emailAdd == 'Email Address') {
		alert('We need your Email Address please');
		return false;
	}
	var emailAdd = document.getElementById('frmConfirmEmailAddress').value;
	if (emailAdd.length == 0 || emailAdd == 'Confirm Email Address') {
		alert('We need your Confirm Email Address please');
		return false;
	}

	alert('Thank you for requesting our product, one can is all you will need');
	return false;  // we will always return false since we are not really submitting
}