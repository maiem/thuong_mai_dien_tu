$(function () {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('a');
    const menuLenght = menuItem.length;

    for (let i = 0; i < menuLenght; i++) {
        if(menuItem[i] .href === currentLocation)
        {
            menuItem[i].className = 'active';
        }
    }
});

// $(document).ready(function(){
//         $('.container .main-menu nav ul li a').click(function(){
//           $('li a').removeClass("active");
//           $(this).addClass("active");
//       });
//       });

