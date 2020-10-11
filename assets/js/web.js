(() => {
  const UserCard = document.querySelector("#user-card")
  const UserExtra = document.querySelector("#user-card > .user-extra")
  const UserImage = document.querySelector("#user-card .user-image > img")

  UserCard.addEventListener("click", (e) => {
    if(UserExtra.style.visibility === "visible"){
      UserExtra.style.visibility = "hidden"
      UserCard.style.height = "110px"
      UserImage.style.borderRadius = "20px 0 0 20px"
      UserExtra.style.opacity = 0
    }else{
      UserImage.style.borderRadius = "20px 0 0 0"
      UserCard.style.height = "230px"
      setTimeout(() => {
        UserExtra.style.opacity = 1
        UserExtra.style.visibility = "visible"
      }, 300)
    }

  })


  const HeaderBtn = document.querySelectorAll("header ul > li > a")

  for(let hBtn of HeaderBtn){
    hBtn.addEventListener("mousedown", (e) => {
      e.preventDefault()
      hBtn.classList.toggle("active")

      const data = e.currentTarget.dataset;
      console.log(data.link)
    }, false)
  }

})();