document.getElementById("shicost").addEventListener("change", myFunction);
document.getElementById("custcost").addEventListener("change", myFunction2);
var shi = 0;
var cust = 0;

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
  var x = document.getElementById("custcost");
  if (x.value =="" || x.value == null){
    cust=0;
  }
  else{
    x.value = x.value.replace('$','');
    x.value =x.value.trim();
    cust=1
  }
  marginCalc();
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
        // (shi)/(1-%) = cust
        // shi = cust - % * cust
        // % * cust = cust - shi
        // % = (cust - shi)/cust
    }
    else{
        var m = document.getElementById("calcMargin");
        m.innerHTML="";
    }
}