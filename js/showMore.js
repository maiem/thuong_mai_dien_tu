var numberOfItems=12;

$('#myList li:lt('+numberOfItems+')').show();

$('#loadMore').click(function () {
    numberOfItems = numberOfItems+4;
    $('#myList li:lt('+numberOfItems+')').show();
    //$('#loadMore').css("display", "none");
});
