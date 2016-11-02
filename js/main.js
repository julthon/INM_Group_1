function navSelector(topic, obj)
{
	var lis = document.querySelectorAll("li > a[class=' selected']");
	var selected = obj;

	// should be faster than a for loop
	index = lis.length;
	while(index--) {
    	lis[index].className = "";
	}

	selected.className += " selected";

	window.location.hash = topic;
}