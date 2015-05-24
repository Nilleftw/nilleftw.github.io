$(document).ready(function(){
    // Hides upgrade when clicked on


        $("ul li ul").click(function(){
            $(this).slideUp();

        });



    // Adds one upgrade to the total of owned upgrades

    var upgrades = 0;


        $("ul li ul").click(function(){
            upgrades++;
            document.getElementById("counter").innerHTML = upgrades + "/28";
        });



    // Adds the upgraded DPS to your total DPS

    var dps = 100;
    var gold = 100;
    document.getElementById("dps").innerHTML = dps + "%";
    document.getElementById("gold").innerHTML = gold + "%";

        $("ul li ul").click(function(){

        var adder = ($(this).attr('id'));
          switch(adder) {
            case "10dps":
              dps += 10;
              break;
            case "20dps":
              dps += 20;
              break;
            case "25dps":
              dps += 25;
              break;
            case "25gold":
              gold += 25;
              break;
            case "50gold":
              gold += 50;
              break;
          }
          document.getElementById("dps").innerHTML = dps + "%";
          document.getElementById("gold").innerHTML = gold + "%";
        });



});
