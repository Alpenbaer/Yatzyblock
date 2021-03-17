function zwischentotal() {
   //Zwischentotal berechnen
    var einer = document.getElementsByName('einer_1')[0].value;
    var zweier = document.getElementsByName('zweier_2')[0].value;
    var dreier = document.getElementsByName('dreier_3')[0].value;
    var vierer = document.getElementsByName('vierer_4')[0].value;
    var fünfer = document.getElementsByName('fünfer_5')[0].value;
    var sechser = document.getElementsByName('sechser_6')[0].value;
    var zwischentotal = einer*1 + zweier*1 + dreier*1 + vierer*1 + fünfer*1 + sechser*1;
    document.getElementsByName('zwischentotal')[0].value= zwischentotal;
    //Bonus
    if (zwischentotal >= 63) {
    document.getElementsByName('bonus')[0].value= 25;
    }else{
    document.getElementsByName('bonus')[0].value= 0;
    }
}
function total() {
   //total berechnen
    var zwischentotal = document.getElementsByName('zwischentotal')[0].value;
    var bonus = document.getElementsByName('bonus')[0].value;
    var paar1 = document.getElementsByName('1_paar')[0].value;
    var paar2 = document.getElementsByName('2_paar')[0].value;
    var gleiche3 = document.getElementsByName('3_gleiche')[0].value;
    var gleiche4 = document.getElementsByName('4_gleiche')[0].value;
    var grossestrasse = document.getElementsByName('grosse_strasse')[0].value;
    var kleinestrasse = document.getElementsByName('kleine_strasse')[0].value;
    var fullhouse = document.getElementsByName('full_house')[0].value;
    var chance = document.getElementsByName('chance')[0].value;
    var yatzy = document.getElementsByName('yatzy')[0].value;
    var total = zwischentotal*1 + bonus*1 + paar1*1 + paar2*1 + gleiche3*1 + gleiche4*1 + grossestrasse*1 + kleinestrasse*1 + fullhouse*1 + chance*1 + yatzy*1;
    document.getElementsByName('total')[0].value= total;
