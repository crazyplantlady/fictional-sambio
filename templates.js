var templates = {

    header: `
    <div class="logo">
        <a href="index.html" class="sambio-logo"><img src="img/sambio-mainlogo.png" alt="sambíó lógó"></a>
    </div>
    <div class="english">English</div>
    <nav role="navigation" class="navContainer">
        <ul>
            <li class="nav-click"><a href="#" class="vaentanlegt-tab" id="tab">Væntanlegt</a></li>
            <li class="nav-click"><a href="#">Upplýsingar</a></li>
            <li class="nav-click"><a href="#">Gjafabréf</li>
            <li class="nav-click"><a href="#"><span style="color:#EB1026; display: inline-block;">SAM</span>klúbburinn</li>	
            <li class="nav-click"><a href="#">Verðskrá</li>
        </ul>
    </nav>
    `,
    main: `
    
    `,
    footer: `
    <div class= "footerinfo">
    <div class="simi">Sími 5758900</div>
    <div class="address">
        <p>Sambíóin Álfabakka 8</p><br>
        <p>Kennitala 4301695059</p><br>
        <p>VSK Númer: 9586</p>
    </div>
    <div class ="netfang">sambio@sambio.is</div>
    </div>
    <div class ="socialMedia">
        <img src="img/facebook.png" alt="facebook logo"class="facebook"/>
        <img src="img/instagram.png" alt="instagram logo"class="instagram"/>
        <img src="img/twitter.png" alt="twitter logo"class="twitter"/>
    </div>				
    
    `,
    frontpage: `
    <div class="hero" alt="veggspjöld, auglýsingar sem snúast">
    <div id="moveable"></div>
</div>
<div class="forsida">
    <div class ="dropdown-frontpage">
        <button type="button" class="biohus">Raða eftir bíóhúsi
            <img src="img/sort-down.png" class="sort-down">
        </button>
        <button type="button" class="dagsetning">Raða eftir dagsetningu
            <img src="img/sort-down.png"class="sort-down">
        </button> 
          </div>
    <div class="body-content body-background">
    </div>
    <div class="filmstrip"alt="auglýsingar, tilboð, afmælisbíó"></div>	
    `,
    greidslusida: function(singlePoster){
        return `<div id="midakaup">
        <div class="greidslu-container">
            <div class="grid">
                <div class="grid1"> 
                    <div class="head-payment">
                        <H1>${singlePoster.title}</H1>
                        <h3>Mánudagur 6. desember</h3>
                    </div>   
                    <div class="drdowns">
                        <div class="tab">
                            <h4>Bíóhús:</h4>
                            <button type="button" class="btn-long">Veldu Bíóhús
                                <img src="img/sort-down.png" class="sort-down">
                            </button>
                        </div>
                        <div class="tab">
                            <h4>Sýning hefst:</h4>
                            <button type="button" class="btn-long">Tímasetningar
                                <img src="img/sort-down.png" class="sort-down">
                            </button>
                        </div>
                        <div class="tab">
                            <h4>2D/3D/VIP:</h4>
                            <button type="button" class="btn-long">Tegund
                                <img src="img/sort-down.png" class="sort-down">
                            </button>
                        </div>
                        <div class="tab">
                            <h4>Tegund miða:</h4>
                            <button type="button" class="btn-long">Veldu Miða
                                <img src="img/sort-down.png" class="sort-down">
                            </button>
                        </div>
                        <div class="tab">
                            <h4>Fjöldi:</h4>
                            <button type="button" class="btn-long">- 2 Miðar +</button>
                        </div>
                        <div class="tab">
                            <h4>Popp & Gos:</h4>
                            <div class="tvofaldur">
                                <button type="button" class="btn-small">Lítill 
                                <img src="img/sort-down.png" class="sort-down">
                                <button type="button" class="btn-small">-&nbsp;&nbsp;2&nbsp;&nbsp;+</button>
                            </div>
                        </div>
                        <div class="total">
                            <div class="lina1"></div>
                            <div class="lastflex">
                                <div class="samtals">SAMTALS:</div>
                                <div class="totalPayment">4.520kr</div>
                            </div>
                            <div class="lina2"></div>
                        </div>
                    </div>                    
                </div>   
                <div class="grid2"> 
                    <div class="purchasePoster"><img src="${singlePoster.photo}"></div>
                    <div class="last-btns">
                        <div class="payment-buttons">
                            <button type="button" class="karfa">Setja í körfu</button>
                            <button type="button" class="karfa">Kaupa sem gjafabréf</button>
                        </div>
                        <button type="button" class="midakaup">Kaupa miða</button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }
}