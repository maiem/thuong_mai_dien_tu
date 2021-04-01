// function open_searchBar() {
// 	document.getElementById("#toggle").style.height = "100%";
//   }
  
//   function close_searchBar() {
// 	document.getElementById("#toggle").style.height = "0%";
//   }


// $(document).ready(function($){
// 	$('#btn-search').on('click', function() {
// 		$('form').toggle();
// 	});
// });

$('#btn-search').click(function (e) { 
	e.preventDefault();
	$('.search-bar').toggle('visibility: visible',
	'opacity: 1');
});


