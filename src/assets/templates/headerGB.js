document.write(`
<!DOCTYPE html>
<html>
    <body>
      <div class="row bg-primary">
        <div class="col-3 text-center" style=" padding-top:10px">
          <a href="header.html"><img src="../img/button_back.png" width=30px height=30px style="" /></a>
        </div>
        <div class="h1 col-6 text-center">
          Insomn'IF
        </div>
      </div>
        <div class="container">
            <div class="row align-middle">
                <div class="col-4 text-center pl-0 align-middle" >
                    <button onclick="window.location='RecapGlobal.html'" class="border-0 bg-secondary head-button-size w-100">Recap Global</button>
                </div>
                <div class="col-4 text-center pl-0 pr-0 align-middle">
                    <button  onclick="window.location='RecapSemaine.html'"class="border-0 bg-white head-button-size w-100">Recap Semaine</button>
                </div>
                <div class="col-4 text-center pr-0 align-middle">
                    <button  onclick="window.location='ListeArchetypes.html'"class="border-0 bg-white head-button-size w-100">Archetype</button>
                </div>
            </div>
        </div>
    </body>
</html>
`);
