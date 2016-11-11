function rechne()
{
	var zahl = document.getElementById("zahl").value;
	zahl *= 1;
	var ausgabe = "";
	if ( !isNaN( zahl ) ) {
		ausgabe.innerHTML = "";
		for(var i = 2; i <= 9; i++)
		{
			ausgabe += "<tr"+((i%2==0)?" bgcolor=#8888ff":"")+"><td align=right>" + zahl + "</td><td>* "+i+"</td></tr>";
			zahl *= i;
		}
		for(var i = 2; i <= 9; i++)
		{
			ausgabe += "<tr"+((i%2==0)?" bgcolor=#8888ff":"")+"><td align=right>" + zahl + "</td><td>/ "+i+"</td></tr>";
			zahl /= i;
		}
		ausgabe += "<tr bgcolor=#8888ff><td align=right>" + zahl + "</td><td>&nbsp;</td></tr>"
	} else {
		ausgabe = "Eingabe ung&uuml;ltig";
	}
	document.getElementById("ausgabe").innerHTML = ausgabe;
}
