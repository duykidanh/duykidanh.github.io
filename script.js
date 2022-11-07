var form = document.getElementById('form1')

form.onsubmit = function(a){
    var email = document.getElementById('email').value
    var mes = document.getElementById('mes').value
    var name = document.getElementById('name').value
    var sub = document.getElementById('sub').value
    if( mes.length === 0 || name.length === 0 || email.length === 0 || sub.length === 0){
        alert("Vui lòng nhập đầy đủ thông tin")
    }
    else{
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!mailformat.test(email))
           alert("Email sai dinh dang")
        else
            alert("Đã tiếp nhận thông tin") 
    }
}