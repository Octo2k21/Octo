var idEvent=sessionStorage.getItem("evenenement");//variable qui contient l'indice de l'évènement précedemment cliqué

/*initialisation des éléments HTML dont le contenu doit être changé*/
var contenuTitre=document.getElementsByClassName("titreArticle")[0];//nom de l'évènement
var imageEvenement=document.getElementsByClassName("imageEvenement")[0];//illustration de l'évènement/du groupe
var contenuArticle=document.getElementsByClassName("contenuArticle")[0];//contenu de l'article de l'évènement
var videoEvenement=document.getElementsByTagName("video")[0];//extraits des groupes et évènements

var contenuTitres=new Array("FRANCOIS JUNO","FLOBOTS","RAP BATTLES","STEVE'N SEAGULLS","SUICIDE BOYS","WEEN","ALKPOTE","DAYS N DAZE","VILK");

var cheminsImages=new Array("images/FRANCOIS JUNO no color.jpg","images/FLOBOTS no color.jpg","images/RAP BATTLE affiche.jpg","images/STEVE'N SEAGULLS no color.jpg",
"images/SUICIDE BOYS no color.jpg","images/WEEN no color.jpg","images/ALKPOTE no color.jpg","images/DAYS N DAZE no color.jpg","images/VILK no color.jpg");

var contenuEvenements=new Array("Pour les fêtes de fin d’année, François Juno, la flamme de la musique française vous prépare un show inoubliable avec ses plus grands tubes en compagnie du comédien Benzaie et de ses groupies.<br> Il espère un retour grandiose de sa fanbase et souhaite voir d'avantage de visages."
,"De passage en France, ce groupe de hip-hop sous fond de rock alternatif nous fait l’honneur de venir jouer ses chansons aux textes engagés sur la  scène de l'Octo, cherchant toujours à faire évoluer les mentalités.<br>Venant de Denver et avec ses 2 chanteurs, Jonny 5 et Brer Rabbit, Flobots fait bouger les foules depuis déjà 20 ans et vient montrer que ce n’est pas prêt de s’arrêter.<br>Leurs thèmes phares : dénoncer les inégalités sociales, le refus d’écouter le peuple chez les politiciens, les guerres qui ravagent des pays et font d’innocentes victimes, en bref leur musique."
,"Retrouvez du 1 au 2 octobre 2020 vos meilleurs clash inter-MC pour des punchlines extrêmes et intenses.<br> Un tournoi entre les meilleurs rappeurs francophones sur la légendaire scène de l’Octo où de nombreux rappeurs ont perdu leur honneur mais où d’autres sont devenus des légendes.<br> Le tout avec en main event un clash entre la légende Wojtek et le challenger Taipan.<br> En résumé : du flow, de la vanne, et beaucoup de talent sur deux soirées anthologiques."
,"Ce groupe tout droit venu de Finlande au charme unique passe dans notre petite salle.<br>Connus au départ sur le net, leurs reprises de grandes musiques rock, punk et métal à la sauce “campagnarde” ne laissera personne indifférent.<br>En plus de leurs savoureuses reprises, ces Finlandais sont des bêtes de scène qui sauront faire bouger n’importe quel public !<br>D'aerosmith à The Offsprings en passant par ACDC, laissez-vous transporter par la passion dégagée par leur concert."
,"Les deux cousins américains se retrouve à l’Octo.<br> Leurs morceaux dépressifs et suicidaires leur ont entraîné une grande vague de popularité en 2015.<br> Le 10 octobre 2020, ils reviennent sur la scène avec leur dernier album “Stop Staring at the Shadows”, et préparent une surprise pour leurs plus grands fans de “Kill Yourself” avec un featuring avec Ghostemane, l’autre grand rappeur qui s’est révélé en 2015."
,"Le petit groupe américain de rock alternatif revient après 10 ans de silence.<br> Seront-ils à la hauteur de leur ancienne réputation ?<br> Ils ont préparé leurs meilleurs tubes des années 90 mais aussi de nouvelles chansons pour un plaisir musical universel et inter-générationnel."
,"Le rappeur controversé rejoint l’Octo pour un concert démesurément insultant et provocateur, la base du rap.<br> L’empereur du rap game français cite en effet récemment : “c’est dans les vieilles paumes qu’on fait les meilleures branlettes”.<br>Il prépare un flow décadent et des punchlines en abondance pour un spectacle de folie !<br>  Il mettra en scène son dernier album “Monument” en featuring avec le chanteur de l’Eurovision Bilal Hassani."
,"Les sales gosses de Houston sont en tournée en Europe, ils profitent donc d’un passage pour mettre le boxon dans la salle.<br> Profondément punk et débrouillard, ce groupe atypique à la sonorité particulière, avec sa guitare acoustique, sa trompette, sa planche à laver ou encore sa contrebassine (si si, ça existe), ne manquera pas de faire un show profondément électrisant.<br> Leur dernier album, show me the blue print, aborde des sujets tels que la dépendance, l’environnement, ou la tristesse du quotidien."
,"Le jeune chanteur hip-hop rejoint enfin la grande scène pour un premier concert sur la scène de l’Octo.<br> Il prépare ses meilleures balades et prods afin de nous faire rêver et planer à travers son univers féerique et extraordinaire.<br> Son premier album a fait un carton ce qui lui a valu un disque d’or et une grande montée dans le rap game." );

var cheminsVideos=new Array("video/FRANCOIS JUNO video.mp4","video/FLOBOTS video.mp4","video/RAP BATTLES video.mp4","video/STEVE'N SEAGULLS video.mp4",
"video/SUICIDE BOYS video.mp4","video/WEEN video.mp4","video/ALKPOTE video.mp4","video/DAYS N DAVE video.mp4","video/VILK video.mp4");

/*mise à jour des contenus en fonction de l'évènement cliqué*/
contenuTitre.innerHTML=contenuTitres[idEvent];
imageEvenement.src=cheminsImages[idEvent];
contenuArticle.innerHTML+=contenuEvenements[idEvent];
videoEvenement.src=cheminsVideos[idEvent];
