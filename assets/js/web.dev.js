"use strict";

(function () {
  var UserCard = document.querySelector("#user-card");
  var UserExtra = document.querySelector("#user-card > .user-extra");
  var UserImage = document.querySelector("#user-card .user-image > img");
  UserCard.addEventListener("click", function (e) {
    if (UserExtra.style.visibility === "visible") {
      UserExtra.style.visibility = "hidden";
      UserCard.style.height = "110px";
      UserImage.style.borderRadius = "20px 0 0 20px";
      UserExtra.style.opacity = 0;
    } else {
      UserImage.style.borderRadius = "20px 0 0 0";
      UserCard.style.height = "230px";
      setTimeout(function () {
        UserExtra.style.opacity = 1;
        UserExtra.style.visibility = "visible";
      }, 300);
    }
  });
  var HeaderBtn = document.querySelectorAll("header ul > li > a");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var hBtn = _step.value;
      hBtn.addEventListener("mousedown", function (e) {
        e.preventDefault();
        hBtn.classList.toggle("active");
        var data = e.currentTarget.dataset;
        console.log(data.link);
      }, false);
    };

    for (var _iterator = HeaderBtn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
})();