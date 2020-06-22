sessionStorage.setItem("evenenement", "d");//création d'une variable de session

var evenements=document.getElementsByClassName("imageAgenda");//récupération des images des évènements

for(i=0;i<evenements.length;i++)
{
	evenements[i].id=i;//création de la propriété id à chaque image(de 0 à 8)
	evenements[i].onclick=function(){sessionStorage.setItem("evenenement", this.id);};//quand une image est cliquée, la variable de session enregistre son id avec sa propriété id
}

