//create variables referencing html elements

var headerTime = $('#header-time');
var projectList = $('.projects');
var formModal = $('.form-modal');
var nameInput = $('#name');
var typeInput = $('#type');
var rateInput = $('#rate');
var dueDateInput = $('#duedate');
var addButton = $('.add-btn');
var projectForm = $('.project-form')
var submitButton = $('#submitbtn')
var deleteButton = $('.deletebtn');

function currentTime() {
    var now = moment().format('MMMM Do YYYY, h:mm:ss a');
    headerTime.text(now);
    console.log(now);
}

//call current time function with 1 sec interval, update dom every second
setInterval(currentTime, 1000)

// function to display the project info in the table
function displayProject(name, type, rate, duedate) {
    var projectRow = $('<tr>');

    var projectName = $('<td>').text(name);
    var projectType = $('<td>').text(type);
    var projectRate = $('<td>').text(rate);
    var projectDueDate = $('<td>').text(duedate);

    var daysLeft = moment(duedate, 'YYYY/MM/DD').diff(moment(), 'days');
    var daysLeftElement = $('<td>').text(daysLeft);
    var earnings = calcTotal(rate, daysLeft);

    var totalEarnings = $('<td>').text('$' + earnings);
    var deleteProjectBtn = $('<td>').text('X').addClass('deletebtn text-center');

    //append all new table elements to the new table row
    projectRow.append(projectName, projectType, projectRate, projectDueDate, daysLeftElement, totalEarnings, deleteProjectBtn);

    //append table row to the table
    projectList.append(projectRow);
    formModal.modal('hide');
}

// calc total earnings
function calcTotal(rate, days) {
    var totalDay = rate * 8;
    var totalPay = totalDay * days;
    return totalPay;
};

//delete button function

function deleteProject(event) {
    var clicked = $(event.target);
    clicked.parent('tr').remove();
}

//form submission function

function formSubmit(event) {
    event.preventDefault();

    var name = nameInput.val();
    var type = typeInput.val();
    var rate = rateInput.val();
    var duedate = dueDateInput.val();

    displayProject(name,type,rate,duedate);
    console.log(duedate);
}

//event handlers

//handle submitting form
submitButton.on('click', formSubmit);

//handle deleting rows from table (had to look up how to use multiple arguments)

projectList.on('click', '.deletebtn', deleteProject);




