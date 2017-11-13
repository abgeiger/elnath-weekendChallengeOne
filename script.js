console.log('js');
var employees = [];

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#addEmployeeButton').on('click', addEmployeeButtonClick);
    $(document).on('click', '.removeButton', function() {
        // get the value of data-index on this button
        var myIndex = $(this).data('index');
        console.log('in document on click .removeButton', myIndex);
        employees.splice(myIndex, 1);
        calculateSalaries();
    }) // end document on click .removeButton
} // end of doc ready

function addEmployeeButtonClick() {
    console.log('in addEmployeeButtonClick');
    // get user input
    // put input into an object
    var newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        employeeId: $('#employeeIdIn').val(),
        jobDescription: $('#jobDescriptionIn').val(),
        salary: $('#salaryIn').val()
    } // end newEmployee object
    console.log('adding:', newEmployee);
    // push new object into an array
    employees.push(newEmployee);
    console.log(employees);
    // clear inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#employeeIdIn').val('');
    $('#jobDescriptionIn').val('');
    $('#salaryIn').val('');
    calculateSalaries();
} // in addEmployeeButtonClick

function calculateSalaries() {
    // loop through employees array
    var totalSalaries = 0;
    for (var i = 0; i < employees.length; i++) {
        // convert each salary to a number
        // add salary to total salaries
        totalSalaries += Number(employees[i].salary);
    } // end for each employee
    console.log('total salaries:', totalSalaries);
    var monthlySalaryCost = totalSalaries / 12;
    console.log('monthly salary cost:', monthlySalaryCost);
    displayOutput(totalSalaries, monthlySalaryCost);
} // calculateSalaries

function displayOutput(salaries, monthly) {
    console.log('in displayOutput', salaries);
    // total salaries
    $('#totalSalaryOut').empty();
    $('#totalSalaryOut').append('Total Salaries:', salaries.toFixed(2));
    // monthly salary cost
    $('#monthlySalaryOut').empty();
    $('#monthlySalaryOut').append('Monthly Salary Cost:', monthly.toFixed(2));
    // all employees
    // loop through employees array
    // append to unordered list
    for (var i = 0; i < employees.length; i++) {
        var appendString = '';
        // <li><strong>lastName, firstName</strong>: id, job description, $salary</li>
        appendString += '<li>';
        appendString += '<strong>' + employees[i].lastName + ', ' + employees[i].lastName + '</strong> : ';
        appendString += employees[i].employeeId + ', ' + employees[i].jobDescription + ', $' + employees[i].salary;
        appendString += '<button data-index="' + i + '" class="removeButton">Remove</button>';
        appendString += '</li>';        
        $('#employeesOut').append(appendString);
    } // end all employees
} // end displayOutput