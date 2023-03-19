/*function popoluate(select1,select2)
{
	var s1=document.getElementById('select1');
	var s2=document.getElementById('select2');

	select2.innerHTML="";
	if(select1.value=="Icecream")
	{
		var optionArray=['vannila|Vannila','chocoIce|ChocoIce','stawberry|Stawberry'];
	}
	else if (select1.value=='Brownies')
	{
		var optionArray=['chocobrownie|Chocobrownie','brownie|Brownie'];
	}
	for (var option in optionArray)
	{
		var pair=optionArray[option].split("|");
		var newoption=document.createElement("option");
		newoption.value=pair[0];
		newoption.innerHTML=pair[1];
		select2.option.add(newoption);
	}
}*/
$(document).ready(function () {