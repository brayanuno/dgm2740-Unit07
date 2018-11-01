
function toggleMenu() {
	let y=document.getElementById("primaryNav");//getting the value and storage in y var
    
	if (y.className==="closed") {
		y.className="open";
	} else {
		y.className="closed";
	} // end if
} // end function

var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

