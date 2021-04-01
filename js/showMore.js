$(document).ready(function () {
    // Load the first 3 list items from another HTML file
    //$('#myList').load('externalList.html li:lt(3)');
    $('#myList li:lt(12)').show();
    $('#loadMore').click(function () {
        $('#myList li:lt(4)').show();
    });
    $('#showLess').click(function () {
        $('#myList li').not(':lt(4)').hide();
    });
});