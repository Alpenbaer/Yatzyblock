function zwischentotal() {
   var einer = document.getElementsByName('einer_1')[0];
   var zweier = document.getElementsByName('zweier_2')[0];
   var dreier = document.getElementsByName('dreier_3')[0];
   var vierer = document.getElementsByName('vierer_4')[0];
   var fünfer = document.getElementsByName('fünfer_5')[0];
   var sechser = document.getElementsByName('sechser_6')[0];
   document.getElementsByName('zwischentotal')[0].value=einer*1 + zweier*1 + dreier*1 + vierer*1 + fünfer*1 + sechser*1;
 }
