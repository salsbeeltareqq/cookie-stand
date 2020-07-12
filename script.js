
'use strict';


var timeDay = ['6am', '7am', '8am', '9am', '10am', '11 am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores = ['Seattle','Tokyo','Dubai','Paris','Lima'];
var storesHtml = ['Seattle','Tokyo','Dubai','Paris','Lima'];

//Loop stores
function loopStores(){
  for(var o = 0; o < stores.length; o++){
    console.log(stores[i]);
  }
}

//LOOP THE HOURS OF DAY * loopAvgCookies();
function aDay(x){
  return x.avgHourly();
};

//Cookie store repo
function CookieStore(minCust, maxCust, avgSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
}
//Our Stores
var onePike = new CookieStore(23, 65, 6.3);
var seaTac = new CookieStore(3, 24, 1.2);
var seaCenter = new CookieStore(11, 38, 3.7);
var capHill = new CookieStore(20, 38, 2.3);
var alki = new CookieStore(2, 16, 4.6);

CookieStore.prototype.avgHourly = function(){
  return Math.floor(Math.random() * ((this.maxCust - this.minCust + 1) + this.minCust) * this.avgSale);
};

var mainTable = document.getElementById('main-table');
var cookieListEl = document.getElementById('cookie-list');
var bodyAppendEl = document.getElementById('main-table');

var z = document.createElement('thead');
 mainTable.appendChild(z);

// spacer block for thead
var spacerTh = document.createElement('th');
tableHead.appendChild(spacerTh);

for(var h = 0; h < timeDay.length; h++){
  var eHeaderItem = document.createElement('th');
  eHeaderItem.textContent = timeDay[h];
 z.appendChild(eHeaderItem);
}

//
for(var v = 0; v < stores.length; v++){
  var loopTr = document.createElement('tr');
  var storeTr = document.createElement('th');
  bodyAppendEl.appendChild(loopTr);
  storeTr.textContent = stores[v];
  loopTr.appendChild(storeTr);
  for(var h = 0; h < timeDay.length; h++){
    var storeTr = document.createElement('tr');
    var eRowItem = document.createElement('td');
    eRowItem.textContent = aDay(onePike, seaTac, seaCenter, capHill, alki);
    loopTr.appendChild(eRowItem);
  }
}










































































// // this.avgcusthour=0;
// // this.avgcookieshour =0;
// // this.custarray=[];
// // this.cookirsarray=[];
// // this.totalcookies=0;
// // this.avgcusthour=function(){
// //     for(var i=0;i<hours.length;i++){
// //         this.avgcusthour=(math.random() *( this.maxcust-this.macust+1)+this.mincust)
// //         this.custarray.push(this.avgcookieshour);
// //     }
// //     this.getTotalSold = function(){
// //         this.totalCookies = this.this.reduce(function (a,b) {
// //           return a + b;
// //         }, 0)
// //     }
// //     this.getAvgCustomersHour();
// //     this.getAvgCookiesHour();
// //     this.getTotalSold();
// //   allLocations.push(this);













