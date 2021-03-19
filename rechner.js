function zwischentotal(var spalte) {
   //Zwischentotal berechnen
    var einer = document.getElementsByName('einer_1')[spalte].value;
    var zweier = document.getElementsByName('zweier_2')[spalte].value;
    var dreier = document.getElementsByName('dreier_3')[spalte].value;
    var vierer = document.getElementsByName('vierer_4')[spalte].value;
    var fünfer = document.getElementsByName('fünfer_5')[spalte].value;
    var sechser = document.getElementsByName('sechser_6')[spalte].value;
    var zwischentotal = einer*1 + zweier*1 + dreier*1 + vierer*1 + fünfer*1 + sechser*1;
    document.getElementsByName('zwischentotal')[spalte].value= zwischentotal;
    //Bonus
    if (zwischentotal >= 63) {
    document.getElementsByName('bonus')[spalte].value= 25;
    }else{
    document.getElementsByName('bonus')[spalte].value= 0;
    }
    total();

}
function total(var spalte) {
   //total berechnen
    var zwischentotal = document.getElementsByName('zwischentotal')[spalte].value;
    var bonus = document.getElementsByName('bonus')[spalte].value;
    var paar1 = document.getElementsByName('1_paar')[spalte].value;
    var paar2 = document.getElementsByName('2_paar')[spalte].value;
    var gleiche3 = document.getElementsByName('3_gleiche')[spalte].value;
    var gleiche4 = document.getElementsByName('4_gleiche')[spalte].value;
    var grossestrasse = document.getElementsByName('grosse_strasse')[spalte].value;
    var kleinestrasse = document.getElementsByName('kleine_strasse')[spalte].value;
    var fullhouse = document.getElementsByName('full_house')[spalte].value;
    var chance = document.getElementsByName('chance')[spalte].value;
    var yatzy = document.getElementsByName('yatzy')[spalte].value;
    var total = zwischentotal*1 + bonus*1 + paar1*1 + paar2*1 + gleiche3*1 + gleiche4*1 + grossestrasse*1 + kleinestrasse*1 + fullhouse*1 + chance*1 + yatzy*1;
    document.getElementsByName('total')[spalte].value= total;
}
