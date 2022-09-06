document.getElementById("shicost").addEventListener("change", myFunction);
document.getElementById("custcost").addEventListener("change", myFunction2);
document.getElementById("shicost2").addEventListener("change", myFunction3);
document.getElementById("SHIMargin").addEventListener("change", myFunction4);
var shi = 0;
var cust = 0;

var shi2 = 0;
var desired_margin = 0;

function myFunction() {
  var x = document.getElementById("shicost");
  if (x.value =="" || x.value == null){
      shi=0;
  }
  else{
    x.value = x.value.replace('$','');
    x.value =x.value.trim();
    shi=1
  }
  marginCalc();
}

function myFunction2() {
  var y = document.getElementById("custcost");
  if (y.value =="" || y.value == null){
    cust=0;
  }
  else{
    y.value = y.value.replace('$','');
    y.value = y.value.trim();
    cust=1
  }
  marginCalc();
}

function myFunction3() {
  var a = document.getElementById("shicost2");
  if (a.value =="" || a.value == null){
    shi2=0;
  }
  else{
    a.value = a.value.replace('$','');
    a.value = a.value.trim();
    shi2=1
  }
  marginDollarCalc();
}
function myFunction4() {
  var b = document.getElementById("SHIMargin");
  if (b.value =="" || b.value == null){
    desired_margin=0;
  }
  else{
    b.value = b.value.replace('%','');
    b.value = b.value.trim();
    desired_margin=1
  }
  marginDollarCalc();
}


function marginCalc(){
    if (shi == 1 && cust ==1){
        var m = document.getElementById("calcMargin");
        var s = document.getElementById("shicost").value;
        var c = document.getElementById("custcost").value;
        var marg = 0
        var marg_dol =0
        s = parseFloat(s.replace(/,/g,''));
        c = parseFloat(c.replace(/,/g,''));
        marg_dol = c-s
        marg_dol = marg_dol.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        marg = 100*(c-s)/c;
        m.innerHTML="<h2>SSL Margin: " + parseFloat(marg).toFixed(2) + "%</h2>" +"<h2>SSL Margin: " + marg_dol + "</h2>"
    }
    else{
        var m = document.getElementById("calcMargin");
        m.innerHTML="";
    }
}


function marginDollarCalc(){
    if (shi2 == 1 && desired_margin ==1){
        var m1 = document.getElementById("custprice");
        var s1 = document.getElementById("shicost2").value;
        var c1 = document.getElementById("SHIMargin").value;
        var marg1 = 0
        var marg_dol =0
        s1 = parseFloat(s1.replace(/,/g,''));
        c1 = parseFloat(c1)/100;
        marg1 = s1/(1-c1);
        marg_dol = marg1-s1
        marg_dol = marg_dol.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        marg1 = marg1.toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
        });
        m1.innerHTML="<h2>Customer Price: " + marg1 + "</h2>" +"<h2>SSL Margin: " + marg_dol + "</h2>";
    }
    else{
        var m1 = document.getElementById("custprice");
        m1.innerHTML="";
    }
}