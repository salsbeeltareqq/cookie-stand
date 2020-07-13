'use_strict';

var seattle = {
    min_cust: 23,
    max_cust: 65,
    Avg_cookie_sale: 6.3,
    list: function () {
        var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

        var parentElement = document.getElementById('bella');
        var article = document.createElement('article');
        article.textContent = "List of Hour and purchases in Seattle";
        parentElement.appendChild(article);
        var ul = document.createElement('ul');
        ul.textContent = "";
        article.appendChild(ul);

        var totalSum = 0;
        for (var index = 0; index <= hour.length; index++) {

            var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            n = customersPerHour.toString();

            var li = document.createElement('li');
            li.textContent = hour[index] + n;
            ul.appendChild(li);

            var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
            totalSum = totalSum + randomAvg;



        }
        li.textContent = "total sum" + totalSum;

    },



}
seattle.list();


var tokyo = {
    min_cust: 3,
    max_cust: 24,
    Avg_cookie_sale: 1.2,
    list2: function () {
        var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

        var parentElement = document.getElementById('two');
        var article = document.createElement('article');
        article.textContent = "List of Hour and purchases in Tokyo";
        parentElement.appendChild(article);
        var ul = document.createElement('ul');
        ul.textContent = "";
        article.appendChild(ul);

        var totalSum2 = 0;
        for (var index = 0; index <= hour.length; index++) {

            var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            n = customersPerHour.toString();

            var li = document.createElement('li');
            li.textContent = hour[index] + n;
            ul.appendChild(li);

            var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
            totalSum2 = totalSum2 + randomAvg;



        }
        li.textContent = "total sum" + totalSum2;

    },


}

tokyo.list2();


var dubai = {
    min_cust: 11,
    max_cust: 38,
    Avg_cookie_sale: 3.7,
    list3: function () {
        var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

        var parentElement = document.getElementById('three');
        var article = document.createElement('article');
        article.textContent = "List of Hour and purchases in Dubai";
        parentElement.appendChild(article);
        var ul = document.createElement('ul');
        ul.textContent = "";
        article.appendChild(ul);

        var totalSum3 = 0;
        for (var index = 0; index <= hour.length; index++) {

            var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            n = customersPerHour.toString();

            var li = document.createElement('li');
            li.textContent = hour[index] + n;
            ul.appendChild(li);

            var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
            totalSum3 = totalSum3 + randomAvg;



        }
        li.textContent = "total sum" + totalSum3;

    },
}
dubai.list3();

var paris = {
    min_cust: 20,
    max_cust: 38,
    Avg_cookie_sale: 2.3,
    list4: function () {
        var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

        var parentElement = document.getElementById('four');
        var article = document.createElement('article');
        article.textContent = "List of Hour and purchases in Paris";
        parentElement.appendChild(article);
        var ul = document.createElement('ul');
        ul.textContent = "";
        article.appendChild(ul);

        var totalSum4 = 0;
        for (var index = 0; index <= hour.length; index++) {

            var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            n = customersPerHour.toString();

            var li = document.createElement('li');
            li.textContent = hour[index] + n;
            ul.appendChild(li);

            var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
            totalSum4 = totalSum4 + randomAvg;



        }
        li.textContent = "total sum" + totalSum4;

    },
}
paris.list4();
var lima = {
    min_cust: 2,
    max_cust: 16,
    Avg_cookie_sale: 4.6,
    list5: function () {
        var hour = ['6 AM ', '7 AM ', '8 AM ', '9 AM ', '10 AM ', '11 AM ', '12 PM ', '1 PM ', '2 PM ', '3 PM ', '4 PM ', '5 PM ', '6 PM ', '7 PM ']

        var parentElement = document.getElementById('five');
        var article = document.createElement('article');
        article.textContent = "List of Hour and purchases in Lima";
        parentElement.appendChild(article);
        var ul = document.createElement('ul');
        ul.textContent = "";
        article.appendChild(ul);

        var totalSum5 = 0;
        for (var index = 0; index <= hour.length; index++) {

            var customersPerHour = Math.floor(Math.random() * (this.max_cust - this.min_cust + 1)) + this.min_cust;
            n = customersPerHour.toString();

            var li = document.createElement('li');
            li.textContent = hour[index] + n;
            ul.appendChild(li);

            var randomAvg = Math.floor(customersPerHour * this.Avg_cookie_sale);
            totalSum5 = totalSum5 + randomAvg;



        }
        li.textContent = "total sum" + totalSum5;

    },
}
lima.list5();