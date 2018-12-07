
var main = document.querySelector("main");
var header = document.querySelector("header");
var footer = document.querySelector("footer");

header.innerHTML = templates.header 
footer.innerHTML = templates.footer
main.innerHTML = templates.frontpage

var posters = [ // array of objects, myndir í bíó
    {   
        title: "Ralf Rústar Internetinu",
        photo: "img/veggspjold/ralph.jpg",
        cover: "img/cover/ralph.jpeg",
        iframeSource: "https://www.youtube.com/embed/_BcYBFC6zfY",
        about:"Myndin gerist sex árum eftir atburði fyrri myndarinnar. Sugar Ruch spilasalurinn er nú í rúst, og Ralph og Vanellope þurfa að bregða sér á internetið í gegnum þráðlausa netið í Litwak spilasalnum, til að endurheimta hlut sem nauðsynlegur er til að bjarga leiknum.",
        director:"Rich Moore, Phol Johnston",
        actors:" John C. Reilly, Sarah Silverman, Kristen Bell, Auli'i Cravalho, Mandy Moore, Kelly Macdonald, Alan Tudyk, Jane Lynch, Idina Menzel",
        technical:"Lengd: 1h 52min <br> Frumsýnd: 30.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Gamanmynd, Ævintýri, Teiknimynd <br> Aldurstakmark: leyfð öllum",
    },
    {   
        title: "Creed II",
        photo: "img/veggspjold/creed2.jpg",
        cover: "img/cover/creed2.jpg",
        iframeSource: "https://www.youtube.com/embed/ovFpFtZ2Tvk",
        about:"Hinn nýkrýndi heimsmeistari í léttþungavigt, Adonis Creed, berst við Viktor Drago, son Ivan Drago, og nýtur leiðsagnar og þjálfunar Rocky Balboa.",
        director:"Steven Caple Jr",
        actors:" Michael B. Jordan, Sylvester Stallone, Tessa Thompson, Dolph Lundgren, Wood Harris, Florian Munteanu",
        technical:"Lengd: 2h 10min <br> Frumsýnd: 30.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Drama <br> Aldurstakmark: Bönnuð innan 12 ára",
    },
    { 
        title: "Fantastic Beasts:<br>The Crimes of Grindelwald",
        photo: "img/veggspjold/Fantasticbeasts.jpg",
        cover: "img/cover/grindelwald.png",
        iframeSource: "https://www.youtube.com/embed/8bYBOVWLNIs",
        about: "Þegar galdramaðurinn og ógnvaldurinn Gellert Grindelwald sleppur úr haldi og byrjar að safna liði til að geta komið valdasjúkum áformum sínum í framkvæmd fær Albus Dumbledore Newt Scamander til að fara í málið ásamt vinum sínum því fyrirætlanir Gellerts verður að stöðva – hvað sem það kostar.",
        director: "David Yates",
        actors: "Eddie Redmayne, Katherine Waterston, Dan Fogler, Johnny Depp, Jude Law, Ezra Miller, Zoe Kravitz, Ólafur Darri Ólafsson, Ingvar Eggert Sigurðsson",
        technical:"Lengd: 2h 13min <br> Frumsýnd: 16.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Ævintýri, Fantasía <br> Bönnuð innan 9 ára"
    },
    { 
        title: "The Grinch",
        photo: "img/veggspjold/Grinch.jpg",
        cover: "img/cover/grinch.png",
        iframeSource: "https://www.youtube.com/embed/Bf6D-i8YpHg",
        about:"Trölli býr í fjalli fyrir ofan Hver-bæ sem eitt sinn var heimabær hans og lætur það fara alveg sérstaklega í taugarnar á sér þegar fyrrverandi nágrannar hans byrja að skreyta fyrir jólin, kaupa gjafir og gleðjast. Hann ákveður því að taka til sinna ráða, læðast inn í bæinn að næturlagi og hreinlega stela öllum gjöfunum og skreytingunum þannig að íbúarnir nái ekki að halda upp á jólin og verði jafnfúllyndir og hann er sjálfur.", 
        director:"Yarrow Cheney, Scott Mosier",
        actors:"Benedict Cumberbatch, Rashida Jones, Angela Lansbury",
        technical:"Lengd: 1h 30min <br> Frumsýnd: 9.11.2018 <br> Dreifingaraðili: Myndform <br> Tegund: Gamanmynd, Teiknimynd, Fjölskyldumynd <br> Aldurstakmark: Leyfð öllum"
    },
    { 
        title: "Widows",
        photo: "img/veggspjold/Widows.jpg",
        cover: "img/cover/widows.jpg",
        iframeSource: "https://www.youtube.com/embed/nN2yBBSRC78",
        about:"Myndin er samtímasaga úr Chicago og fjallar um fjórar konur sem fátt eiga sameiginlegt. Þær taka á sig skuldir sem orðið hafa til vegna glæpaverka eiginmanna þeirra, og taka síðan málin í sínar hendur og byggja upp nýja framtíð.",
        director:"Steve McQueen",
        actors:" Viola Davis, Michelle Rodriguez, Elizabeth Debicki, Colin Farrell, Daniel Kaluuya, Carrie Coon, Robert Duvall, Liam Neeson",
        technical:"Lengd: 2h 08min <br> Frumsýnd: 23.11.2018 <br> Dreifingaraðili: Sena <br> Tegund: Drama, Þriller <br> Aldurstakmark: Bönnuð innan 16 ára"
    },
    { 
        title: "Bohemian Rhapsody",
        photo: "img/veggspjold/bohemianrhapsody.jpg",
        cover: "img/cover/bohemian.png",
        iframeSource: "https://www.youtube.com/embed/mP0VHJYFOAU",
        about:"Sagan um Freddie Mercury og árin fram að Live Aid tónleikunum árið 1985.",
        director:"Bryan Singer",
        actors:"Rami Malek, Joseph Mazzello, <br> Mike Myers, Aidan Gillen",
        technical:"Lengd: 2h 14min <br> Frumsýnd 2.11.2018 <br> Dreifingaraðili: Sena <br> Tegund: Drama, Ævisaga <br> Aldurstakmark: Bönnuð innan 12 ára",
    },   
    { 
        title: "The Nutcracker and the Four Realms",
        photo: "img/veggspjold/Nutcracker.jpg",
        cover: "img/cover/crack.png",
        iframeSource: "https://www.youtube.com/embed/a2vmAttpgrg",
        about:"Það eina sem Clara vill er lykill - einstakur lykill sem mun opna kassa með ómetanlegri gjöf frá móður hennar heitinni. Gullþráður, sem henni er gefinn í afmælisveislu guðföður hennar, Drosselmeyer, leiðir hana að lyklinum, sem fljótlega hverfur inní dularfullan hliðarheim. Þar hittir Clara hermann að nafni Philip, músaher, og verði hinna þriggja heima, Snjókornalands, Blómalands og Sælgætislands.",
        director:"Joe Johnston, Lasse Hallström",
        actors:"Keira Knightley, Mackenzie Foy, Helen Mirren, Morgan Freeman",
        technical:"Lengd: 1h 39min <br> Frumsýnd: 2.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Ævintýri, Fantasía <br> Aldurstakmark: Bönnuð innan 9 ára",
    },    
    {
        title: "Overlord",
        photo: "img/veggspjold/Overlord.jpg",
        cover: "img/cover/overlord.jpg",
        iframeSource: "https://www.youtube.com/embed/USPd0vX2sdc",
        about:"Bandarískir fallhlífahermenn fara á bakvið víglínuna til að styrkja innrás bandamanna í Normandy. En þegar þeir nálgast skotmarkið, þá átta þeir sig á því að í þorpinu er eitthvað gruggugt á seiði. Þeir lenda þar í bardaga við ofurnáttúrulegar verur, sem eru hluti af tilraunamennsku Nasista.",
        director:"Julius Avery",
        actors:"Pilou Asbæk, Bokeem Woodbine, Wyatt Russell, Iain De Caestecker",
        technical:"Lengd: 1h 49min <br> Frumsýnd: 9.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Hasar, Þriller <br> Aldurstakmark: Bönnuð innan 16 ára",
    },    
    {
        title: "Hunter Killer",
        photo: "img/veggspjold/Hunterkiller.jpg",
        cover: "img/cover/hunterkiller.jpg",
        iframeSource: "https://www.youtube.com/embed/QAhcDHRZOak",
        about:"Lítt reyndur bandarískur kafbátaskipstjóri vinnur með bandarískum sérsveitarmönnum við björgum forseta Rússlands, sem hefur verið rænt af uppreisnarmanni.",
        director:"Donovan Marsh",
        actors:"Gerard Butler, Gary Oldman, Michael Nyqvist, Linda Cardellini",
        technical:"Lengd: 2h <br> Frumsýnd: 26.10.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Hasar, Þriller <br> Aldurstakmark: Bönnuð innan 12 ára",
    },
    {
        title: "A Star is Born",
        photo: "img/veggspjold/Astarisborn.jpg",
        cover: "img/cover/astar.jpg",
        iframeSource: "https://www.youtube.com/embed/nSbzyEJ8X9E",
        about:"Frægur tónlistamaður hjálpar ungri hæfileikaríkri söngkonu og að slá í gegn, þó svo að ferill hans sé á hraðri niðurleið vegna aldurs og áfengisneyslu.",
        director:"Bradley Cooper",
        actors:"Bradley Cooper, Lady Gaga, Sam Elliott, Dave Chappelle",
        technical:"Lengd: 2h 15min <br> Frumsýnd: 5.10.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Drama, Tónlistarmynd <br> Aldurstakmark: Bönnuð innan 12 ára",
    },
    {
        title: "Small Foot",
        photo: "img/veggspjold/Smallfoot.jpg",
        cover: "img/cover/smallfootjpg.jpg",
        iframeSource: "https://www.youtube.com/embed/rGFJHElc5VU",
        about:"Snjómaðurinn Migo fer að segja sögur af kynnum sínum af áður óþekktri goðsagnakenndri dýrategund, manninum Percy. Uppgötvun Migo færir honum frægð og frama og draumastúlkuna, en um leið fer tilveran öll í hálfgerða óreiðu.",
        director:"Karey Kirkpatrick",
        actors:"Channig Tatum, Danny DeVito, James Corden",
        technical:"Lengd: 1h 36min <br> Frumsýnd: 28.9.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Gamanmynd, Teiknimynd, Fjölskyldumynd <br> Aldurstakmark: Leyfð öllum", 
    },
    {   
        title: "Ralf Rústar Internetinu",
        photo: "img/veggspjold/ralph.jpg",
        cover: "img/cover/ralph.jpeg",
        iframeSource: "https://www.youtube.com/embed/_BcYBFC6zfY",
        about:"Myndin gerist sex árum eftir atburði fyrri myndarinnar. Sugar Ruch spilasalurinn er nú í rúst, og Ralph og Vanellope þurfa að bregða sér á internetið í gegnum þráðlausa netið í Litwak spilasalnum, til að endurheimta hlut sem nauðsynlegur er til að bjarga leiknum.",
        director:"Rich Moore, Phol Johnston",
        actors:" John C. Reilly, Sarah Silverman, Kristen Bell, Auli'i Cravalho, Mandy Moore, Kelly Macdonald, Alan Tudyk, Jane Lynch, Idina Menzel",
        technical:"Lengd: 1h 52min <br> Frumsýnd: 30.11.2018 <br> Dreifingaraðili: SAMfilm <br> Tegund: Gamanmynd, Ævintýri, Teiknimynd <br> Aldurstakmark: leyfð öllum",
    }    
];
/******************************* 
  koma arrayinu fyrir á forsíðu
 ******************************/

var postersContainer = document.querySelector('.body-content');

for (var i = 0; i<posters.length; i++){
  
    postersContainer.innerHTML += `
        <div onclick="renderModal(${i})" class="poster">
            <img style="border-radius: 5px" src="${posters[i].photo}"/> 
            <div class="upplysingarUmBio" img src="img/uppl.png"></div>
            <div class="kaupaMidaHover">Kaupa Miða</div>                     
            <div class="col-text">
                <h3 class="poster-text">${posters[i].title}</h3>
            </div>
        </div>
    `
}
/******************************* 
 modal gluggi - tenging við veggspjöld, youtube og lista
 ******************************/

var closeModal = function(e){

    if(!e || e.target.classList.contains("modal")){
        var modal = document.getElementById('myModal');

        document.body.removeChild(modal)

        document.body.style.overflow = "auto";
    }
}
var renderSingleMovie = function(index) {

    var main = document.querySelector("main");

    var singlePoster = posters[index];

    main.innerHTML = templates.greidslusida(singlePoster)

    closeModal()
}
var renderSingleCover = function(index) {
    
    var main = document.querySelector("main");

    var singleCover = cover[index];

    main.innerHTML = templates.greidslusida(singleCover)
    console.log("fer yfir á greiðslusíðu")
}

var renderModal = function(index) {
   console.log(index); 
    var poster = posters[index]
    
    document.body.innerHTML += `
    <div id="myModal" class="modal">
        <div class="modal-content">
            <dic class="container">    
                <div class="movie-buttons">
                    <button type="button" class="allarmyndir">${poster.title}
                        <img src="img/sort-down-wh.png"class="sort-down-wh">
                    </button>
                    <button type="button" class="kaupa-mida" onclick="renderSingleMovie(${index})">Kaupa miða</button>
                    <span onClick="closeModal()" class="close">X</span>
                </div>
                <div class="player">
                    <div class="previous" onclick="changeModalDown(${index})"><</div>    
                    <div class="spilari"> 
                        <div class="youtube">                       
                            <iframe src="${poster.iframeSource}" frameborder="0" allow="accelerometer"; autoplay; allowfullscreen;></iframe>                        
                        </div>
                    </div>
                    <div class="next" onclick="changeModal(${index})">></div>
                </div>               
                <div class="movie-info">${poster.about}</div>
                <div class="line"></div>
                <div class="more-info">
                    <p>${poster.technical}</p>   
                    <p>Leikarar:<br> ${poster.actors}</p> 
                    <p>Leikstjóri:<br> ${poster.director}</p>                
                </div>
                <div class="share" ><img src="img/share.png alt=""deila"/></div> 
            </div>
        </div>
    </div> 
    `
    document.body.style.overflow = "hidden";

    var myModal = document.getElementById("myModal");

    myModal.addEventListener("click", (e) => closeModal(e))
}
var changeModalDown = function (i) {
    document.getElementById("myModal").remove();
    renderModal(--i);
}
var changeModal = function (i) {
    document.getElementById("myModal").remove();
    renderModal(++i);
}
var photosDiv = document.querySelector('#moveable');

for(var i = 0; i<posters.length; i++){
    var coverTemplate=`
    <div class="hero-item" alt="veggspjöld, auglýsingar sem snúast" style="background-image: url(${posters[i].cover})">
               <div class="hero-text">
            <a href="#" onclick="${renderSingleCover}">Kaupa miða</a>
        </div>  
    </div>    
`
photosDiv.innerHTML += coverTemplate
}

var moveLeftNumber = 0;
photosDiv.style.left = "0px";
var change = function(direction){
    var w = window.innerWidth;
    moveLeftNumber += w * direction;
    photosDiv.style.left = moveLeftNumber + "px";
    
    if(moveLeftNumber <= posters.length*w*-1){
        photosDiv.style.transition = "all 0s";
        photosDiv.style.left = "0px";
        moveLeftNumber=0;
        
        setTimeout(() => {
            photosDiv.style.transition = "all 2s"; 
             moveLeftNumber += w * direction;
            photosDiv.style.left = moveLeftNumber + "px";
        }, 20);    
    }
}
setInterval(function() {
    change(-1);
}, 7000);
console.log("virkar ennþá! ")


/******************************* 
    VÆNTANLEGAR MYNDIR 
 ******************************/

var comingSoon = [ 
    {
        date:"14.des",
        title:"Mortal Engines",
        iframeSource: "https://www.youtube.com/embed/cuL5yXsOAIA",
        about:"Mörgum árum eftir Sextíu mínútna stríðið, þá lifir borgarbúar á eyðilegri Jörðinni, með því að færa sig á mili staða á risastórum farartækjum, og ráðast á smærri þorp.",
        director:"Christian Rivers",
        actors:"Hera Hilmarsdóttir, Hugo Weaving, <br> Stephen Lang, Jihae Kim",
        technical:"Lengd:2h 08min <br> Frumsýnd: 14.12.2008 <br> Dreifingaraðili: Myndform <br> Tegund: Hasar, Ævintýri, Fantasía<br> Aldurstakmark: Bönnuð innan 12 ára"
    },
    {
        date:"19.des",
        title:"Aquaman",
        iframeSource: "https://www.youtube.com/embed/WDkg3h8PCVU",
        about:"Arthur Curry kemst að því að hann er erfingi neðansjávarríkisins Atlantis, og þarf að stíga fram og verða leiðtogi þjóðar sinnar, og drýgja hetjundáðir fyrir allan heiminn.",
        director:"James Wan",
        actors:"Jason Momoa, Amber Heard,<br> Patrick Wilson, Nicole Kidman, <br>Willem Dafoe",
        technical:"Lengd: 2h 23min<br> Frumsýnd: 19.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Hasar, Vísindaskáldskapur, Ævintýri<br> Aldurstakmark: Bönnuð innan 12 ára"
    },
    {
        date:"26 des",
        title:"Mary Poppins Returns",
        iframeSource: "https://www.youtube.com/embed/-3jsfXDZLIY",
        about:"Mary snýr aftur til Banks fjölskyldunnar í London á tímum kreppunnar miklu. Börnin sem hún passaði í fyrstu myndinni, þau Jane og Michael, eru nú vaxin úr grasi. Michael á nú sjálfur þrjú börn, en þau þurfa öll aðstoð við að finna gleðina í lífinu á nýjan leik, eftir að hafa orðið fyrir persónulegum missi.",
        director:"Rob Marshall",
        actors:"Emily Blunt, Lin-Manuel Miranda, <br> Meryl Streep, Ben Whishaw,<br> Colin Firth",
        technical:"Lengd: 2h 19min<br> Frumsýnd: 26.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Fantasía, Tónlistarmynd, Fjölskyldumynd<br> Aldurstakmark: Leyfð öllum"
    },
    {
        date:"26.des",
        title:"Bumblebee",
        iframeSource: "https://www.youtube.com/embed/RoyuzCVJWEQ",
        about:"Árið 1987 leitar vélmennið Bumblebee skjóls í ruslahaug í litlum strandbæ í Kaliforníu. Charlie, sem er að verða 18 ára gömul og leitar að sínum stað í heiminum, finnur hinn baráttulúna og bilaða Bumblebee og nær að blása lífi í fyrirbærið og kemsta að því að þarna er enginn venjulegur gulur Volkswagen bíll á ferðinni.",
        director:"Travis Knight",
        actors:"Hailee Steinfeld, John Cena, <br>Martin Short",
        technical:"Lengd: 1h 54min<br> Frumsýnd: 26.12.2018<br> Dreifingaraðili: SAMfilm<br> Tegund: Hasar, Vísindaskáldskapur, Ævintýri <br> Aldurstakmark: Bönnuð innan 12 ára"
    }
]    
    var tab = document.querySelector('.vaentanlegt-tab')
    // var dropDown = getElementById('#dropdown-frontpage')

    tab.onclick = function(e) {
    
        postersContainer.classList.remove('body-background')
        // dropDown.classList.hide('dropdown-frontpage')
    postersContainer.innerHTML = `
        <h2 class="fyrirsogn"> 
            Væntanlegar kvikmyndir á leiðinni í bíóhús <br> <span style="color:#0E82C5; display: inline-block;">SAM</span><span style="color:#EB1026; display: inline-block;">BÍÓANNA
        </h2>
        <div class="soon-tainer">       
    `
    var comingSoonContainer = document.querySelector('.soon-tainer');

    for (var i = 0; i<comingSoon.length; i++) {  
        comingSoonContainer.innerHTML += `
        <div class="comingSoonContainer">   
            <div class="headline">
                <div class="date">${comingSoon[i].date}</div>
                <h1>${comingSoon[i].title}</h1>  
                <div class="star" ><img src="img/star.png" alt="stjörnumerkja"/></div>               
            </div>
            <div class="youtube">
                 <iframe src="${comingSoon[i].iframeSource}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
                <div class="textabox"> 
                   <div class="tech">
                        <p>${comingSoon[i].technical}</p>   
                        <p>Leikarar:<br> ${comingSoon[i].actors}</p> 
                        <p>Leikstjóri:<br> ${comingSoon[i].director}</p>
                    </div>
                    <div class="about">${comingSoon[i].about}</div>
                    <img src="img/strip.png"/>    
                 </div>
            </div>
    `;
    }
}