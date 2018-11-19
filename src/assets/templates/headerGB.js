document.write('\
<!DOCTYPE html>\
<!--\
To change this license header, choose License Headers in Project Properties.\
To change this template file, choose Tools | Templates\
and open the template in the editor.\
-->\
\
<html>\
    <head>\
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">\
        <title>Header</title>\
        <meta charset="windows-1252">\
        <meta name="viewport" content="width=device-width, initial-scale=1.0">\
    </head>\
    <body>\
      <div class="row" style="background-color:#d3e1af">\
        <div class="col-3 text-center" style=" padding-top:10px">\
          <a href="header.html"><img src="../img/button_back.png"  width=30px height=30px style="" /></a>\
        </div>\
        <div class="h1 col-6  text-center"  style="">\
          Insomn\'IF\
        </div>\
      </div>\
        <div class="container">\
            <div class="row align-middle">\
                <div class="col-4 text-center pl-0 align-middle" >\
                    <button onclick="window.location=\'RecapGlobal.html\';" class="border-right-0 border-top-0 border-left-0 bg-white" style="border-bottom: 2px solid grey;" >Recap Global</button>\
                </div>\
                <div class="col-4 text-center pl-0 pr-0 align-middle">\
                    <button  onclick="window.location=\'RecapSemaine.html\';"class="border-right-0 border-top-0 border-left-0 bg-white" style="border-bottom: 2px solid white;">Recap Semaine</button>\
                </div>\
                <div class="col-4 text-center pr-0 align-middle">\
                    <button  onclick="window.location=\'ListeArchetypes.html\';"class="border-right-0 border-top-0 border-left-0 bg-white" style="border-bottom: 2px solid white;">Archetype</button>\
                </div>\
            </div>\
        </div>\
    </body>\
</html>\
');
