'use_strict';

var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ','total']
function Loction(name,minC,maxC,AvgC,array){
    this.name  = name;
    this.minC = minC;
    this.maxC=maxC;
    this.AvgC=AvgC;
    this.array= array;
    this.total=0;
}

    Loction.prototype.sailes= function(){

        for (var i=0;i<hour.length;i++){
        var customersPerHour = Math.floor(Math.random() * (this.maxC - this.minC + 1)) + this.minC;
        var mul=Math.round(customersPerHour*this.AvgC);
        this.array.push(mul);
        this.total=this.total+mul;

    }
}  
      

    var seattle = new Loction("seattle",23, 65, 6.3,[]);
    var tokyo = new  Loction( "tokyo",3, 24, 1.2,[]);
    var dubai = new  Loction("dubai",11, 38, 3.7,[]);
    var paris = new Loction("paris",20 ,38,2.3,[]);
    var lima = new Loction("lima",2,16,4.6,[]); 
   var allcityes=[seattle,tokyo,dubai,paris,lima]
 for (let index = 0; index < allcityes.length; index++) {
     allcityes[index].sailes();
     console.log(allcityes[index].array);
     
 }


 
  function creatTable(){
     var bella= document.getElementById("bella")
     
    var newTable = document.createElement("table");
    bella.appendChild(newTable);
    var tableHead = document.createElement('thead')
    var tr = document.createElement('tr');
    newTable.appendChild(tableHead)
    tableHead.appendChild(tr);
     var boyOfTable = document.createElement("tbody");
    newTable.appendChild(boyOfTable);
    for (let index = 0; index < hour.length+1; index++) {
        var th = document.createElement('th');
        if (index == 0){
            th.textContent='    '
        }else{
            th.textContent = hour[index]
            
        }
        tr.appendChild(th);
        
    }
    for (let index = 0; index < allcityes.length; index++) {
        
        var row = document.createElement("tr");
        row.textContent = allcityes[index].name
        boyOfTable.appendChild(row);
        for (let index2 = 0; index2 < hour.length; index2++) {
            var td = document.createElement('td')
           
            row.appendChild(td)
            if (index2 == hour.length-1){
                td.textContent=allcityes[index].total

            }else{
                td.textContent = allcityes[index].array[index2]
            }
        }
        
    }

}
 creatTable();

//    for(i=0 ; i <allcityes.length ;i++){
//        for (index=0; index < hour.length; index++){
//         var headercell = document.createElement("th");
//          headercell.textContent = hour[index];
       

    
    
// }

// row.appendChild(headercell);

// }
// newTable.appendChild(tableHead);

// }












// // var table = document.createElement('table');
// // table.setAttribute('border','1')
// // table.setAttribute('class','table-style');
// // var tr =document.createElemet('tr');
// // var th1 =document.createElement('th');
// // th1.textContent='seattle';
// // tr.append(th1);




// var th2 =document.createElement('th');
// var td =document.createElement('td');
// td.textContent='tokyo';
// tr.append(td);


// var th3 =document.createElement('th');
// var td1 =document.createElement('td');
// td1.textContent='dubai';
// tr.append(td1);


// var th4 =document.createElement('th');
// var td2 =document.createElement('td');
// th2.textContent='paris';
// tr.append(td2);


// var th5 =document.createElement('th');
// var td3 =document.createElement('td');
// th3.textContent='lima';
// tr.append(td3);


// var th5 =document.createElement('th');
// var td4 =document.createElement('td');
// th4.textContent='lima';
// tr.append(td4);









// // var seattle = {
// //     min_cust: 23,
// //     max_cust: 65,
// //     Avg_cookie_sale: 6.3,
    // list: function () {
    //     var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

    //     var parentElement = document.getElementById('bella');
    //     var article = document.createElement('article');
    //     article.textContent = "List of Hour and purchases in Seattle";
    //     parentElement.appendChild(article);
//         var ul = document.createElement('ul');
//         ul.textContent = "";
//         article.appendChild(ul);

//         var totalSum = 0;
//         for (var index = 0; index <= hour.length; index++) {

            // var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            // n = customersPerHour.toString();

//             var li = document.createElement('li');
//             li.textContent = hour[index] + n;
//             ul.appendChild(li);

//             var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
//             totalSum = totalSum + randomAvg;



//         }
//         li.textContent = "total sum" + totalSum;

//     },



// }
// // seattle.list();


// // var tokyo = {
// //     min_cust: 3,
// //     max_cust: 24,
// //     Avg_cookie_sale: 1.2,
//     list2: function () {
//         var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

//         var parentElement = document.getElementById('two');
//         var article = document.createElement('article');
//         article.textContent = "List of Hour and purchases in Tokyo";
//         parentElement.appendChild(article);
//         var ul = document.createElement('ul');
//         ul.textContent = "";
//         article.appendChild(ul);

//         var totalSum2 = 0;
//         for (var index = 0; index <= hour.length; index++) {

//             var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
//             n = customersPerHour.toString();

//             var li = document.createElement('li');
//             li.textContent = hour[index] + n;
//             ul.appendChild(li);

//             var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
//             totalSum2 = totalSum2 + randomAvg;



//         }
//         li.textContent = "total sum" + totalSum2;

//     },


// }

// tokyo.list2();


// // var dubai = {
// //     min_cust: 11,
// //     max_cust: 38,
// //     Avg_cookie_sale: 3.7,
//     list3: function () {
//         var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

//         var parentElement = document.getElementById('three');
//         var article = document.createElement('article');
//         article.textContent = "List of Hour and purchases in Dubai";
//         parentElement.appendChild(article);
//         var ul = document.createElement('ul');
//         ul.textContent = "";
//         article.appendChild(ul);

//         var totalSum3 = 0;
//         for (var index = 0; index <= hour.length; index++) {

//             var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
//             n = customersPerHour.toString();

//             var li = document.createElement('li');
//             li.textContent = hour[index] + n;
//             ul.appendChild(li);

//             var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
//             totalSum3 = totalSum3 + randomAvg;



//         }
//         li.textContent = "total sum" + totalSum3;

//     },
// }
// dubai.list3();

// // var paris = {
// //     min_cust: 20,
// //     max_cust: 38,
// //     Avg_cookie_sale: 2.3,
//     list4: function () {
//         var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

//         var parentElement = document.getElementById('four');
//         var article = document.createElement('article');
//         article.textContent = "List of Hour and purchases in Paris";
//         parentElement.appendChild(article);
//         var ul = document.createElement('ul');
//         ul.textContent = "";
//         article.appendChild(ul);

//         var totalSum4 = 0;
//         for (var index = 0; index <= hour.length; index++) {

//             var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
//             n = customersPerHour.toString();

//             var li = document.createElement('li');
//             li.textContent = hour[index] + n;
//             ul.appendChild(li);

//             var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
//             totalSum4 = totalSum4 + randomAvg;



//         }
//         li.textContent = "total sum" + totalSum4;

//     },
// }
// // paris.list4();
// // var lima = {
// //     min_cust: 2,
// //     max_cust: 16,
// //     Avg_cookie_sale: 4.6,
//     list5: function () {
//         var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

//         var parentElement = document.getElementById('five');
//         var article = document.createElement('article');
//         article.textContent = "List of Hour and purchases in Lima";
//         parentElement.appendChild(article);
//         var ul = document.createElement('ul');
//         ul.textContent = "";
//         article.appendChild(ul);

//         var totalSum5 = 0;
//         for (var index = 0; index <= hour.length; index++) {

//             var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
//             n = customersPerHour.toString();

//             var li = document.createElement('li');
//             li.textContent = hour[index] + n;
//             ul.appendChild(li);

//             var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
//             totalSum5 = totalSum5 + randomAvg;



//         }
//         li.textContent = "total sum" + totalSum5;

//     },
// }
// lima.list5();