// ACTIVE MENU //
const currentLocation = location.href;
const menuItem = document.querySelectorAll('nav ul li a');
const menuLenght = menuItem.length;

for (let i = 0; i < menuLenght; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className = 'active';
    }
}

// ACTIVE BG IMAGE //
// $(document).ready(function() {
//     $(".owl-prew .owl-next").click(function () {
//         $("a img").removeClass("active");
//         $("a img").addClass("active");        
//     });
//     });

