//create variables referencing html elements

var headerTime = $('#header-time');
var projectList = $('.projects');
var formModal = $('.form-modal');
var nameInput = $('#name');
var typeInput = $('#type');
var rateInput = $('#rate');
var dueDateInput = $('#duedate');
var addButton = $('.add-btn');


function currentTime() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    headerTime.text(now);
    console.log(now);
}

function displayProject(name, type, rate, duedate) {
    var projectRow = $('<tr>');

    var projectName = $('<td>').text(name);
    var projectType = $('<td>').text(type);
    var projectRate = $('<td>').text(rate);
    var projectDueDate = $('<td>').text(duedate);

    var daysLeft = moment(duedate, 'MM/DD/YY').diff(moment(), 'days');
    var daysLeftElement = $('<td>').text(daysLeft);
    var earnings = calcTotal(rate, daysLeft);

    var totalEarnings = $('<td>').text('$' + earnings);
}


function calcTotal(rate, days) {
    var totalDay = rate * 8;
    var totalPay = totalDay * days;
    return totalPay;
};

