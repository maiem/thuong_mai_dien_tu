// $(document).ready(function () {
//     // Load the first 4 list items from another HTML file
//     //$('#myList').load('externalList.html li:lt(4)');

//     $('#myList li:lt(12)').show();
//     $('#showLess').hide();

//     let items =  22;
//     let shown =  4;

//     $('#loadMore').click(function () {
//         $('#loadMore').show();
//         shown = $('#myList li:visible').size()+4;

//         if(shown< items) {
//             $('#myList li:lt('+shown+')').show();
//         }
//         else {
//             $('#myList li:lt('+items+')').show();
//              $('#loadMore').hide();
//         }
//     });

//     $('#showLess').click(function () {
//         $('#myList li').not(':lt(4)').hide();
//     });
// });



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