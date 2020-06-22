var logo=document.getElementById("logo");

logo.addEventListener("mouseover",onLogo);
logo.addEventListener("mouseout",outLogo);

function onLogo()
{
	logo.src="images/LogoAnime.gif";
}

function outLogo()
{
	logo.src="images/logo-octo-transparent.png";
}