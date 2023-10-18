function burgerMenu() {
    let element = document.getElementById("burger");
    let list = document.getElementById("navlist");

    if(element.classList.contains("cross") ){
        element.classList.remove("cross");
        list.classList.remove("mobile_list")
    }else{
        element.classList.add("cross");
        list.classList.add("mobile_list")
    };

  }

  function show(title){
    let text = document.getElementById(title);
    if(text.classList.contains("show") ){
        text.classList.remove("show");
    }else{
        text.classList.add("show");
    };

  }


  