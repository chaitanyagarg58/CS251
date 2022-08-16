function hobby() {
    var text = "The following hobbies have been selected: \n";
    var t = [3];
    t[0] = "Coding \n";
    t[1] = "Table Tennis \n";
    t[2] = "Walk \n";
    
    var para = [3];
    para[0] = document.getElementById("code-para");
    para[1] = document.getElementById("tt-para");
    para[2] = document.getElementById("walk-para");
    
    let check = [3];
    check[0] = document.querySelector('#coding:checked') != null;
    check[1] = document.querySelector('#tt:checked') != null;
    check[2] = document.querySelector('#walk:checked') != null;

    for (let i = 0; i < 3; i++) {
        if (check[i]) text += t[i];
    }
    if (confirm(text)) {
        for (let i = 0; i < 3; i++) {
            if (check[i]) para[i].style.display = "block";
            else para[i].style.display = "none";
        }
    }
}