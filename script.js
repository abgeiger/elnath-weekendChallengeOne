console.log('js');

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    $('#addEmployeeButton').on('click', addEmployeeButtonClick);
} // end of doc ready

function addEmployeeButtonClick() {
    console.log('in addEmployeeButtonClick');
} // in addEmployeeButtonClick