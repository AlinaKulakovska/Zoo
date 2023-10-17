function burgerMenu() {
    var element = document.getElementById("burger");
    var list = document.getElementById("navlist");

    if(element.classList.contains("cross") ){
        element.classList.remove("cross");
        list.classList.remove("mobile_list")
    }else{
        element.classList.add("cross");
        list.classList.add("mobile_list")
    };

  }