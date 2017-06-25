//реализация направления сортировки на js
// function clickSortingItem() {
//   var sortingItems = document.querySelectorAll('.page-header__sorting-item');
//
//   for (var i = 0; i < sortingItems.length; i++) {
//     sortingItems[i].onclick = function () {
//       if (this.classList.contains('page-header__sorting-item--bottom')) {
//         this.classList.remove('page-header__sorting-item--bottom');
//         this.classList.add('page-header__sorting-item--top');
//       }
//       else {
//         this.classList.add('page-header__sorting-item--bottom');
//         this.classList.remove('page-header__sorting-item--top');
//       }
//     }
//   }
// }
//
// clickSortingItem();

//реализация направления сортировки на jQuery (для ie8, ie9)
function clickSortingItem() {
  $('.page-header__sorting-item').on("click", function (e) {
    if ($(this).hasClass("page-header__sorting-item--bottom")) {
      $(this).removeClass("page-header__sorting-item--bottom");
      $(this).addClass("page-header__sorting-item--top");
    }
    else {
      $(this).addClass("page-header__sorting-item--bottom");
      $(this).removeClass("page-header__sorting-item--top");
    }
  });
}

clickSortingItem($);


//реализация скролла вверх на jQuery
function scrollTop($) {
  var buttonScrollUp = $(".button--scroll-up"),
    body = $('body, html')

  if (buttonScrollUp.length > 0) {
    buttonScrollUp.on("click", function (e) {
      eventScrollTop();
      e.preventDefault();
    });
  }

  function eventScrollTop() {
    body.animate({
      scrollTop: 0
    }, 600);
  }
}

scrollTop($);


//валидация формы email на jQuery
$(document).ready(function () {
  $("#email").keyup(function () {

    var email = $("#email").val();

    if (email != 0) {
      if (isValidEmailAddress(email)) {
        $(".form-signup__email-error").css({
          "display": "none"
        });
      } else {
        $(".form-signup__email-error").css({
          "display": "inline-block"
        });
      }
    } else {
      $(".form-signup__email-error").css({
        "display": "none"
      });
    }
  });
});

function isValidEmailAddress(emailAddress) {
  var pattern = new RegExp(/^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i);
  return pattern.test(emailAddress);
}
