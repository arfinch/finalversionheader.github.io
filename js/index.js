

$("#fAng").click(function(){
  $(".fAngD").toggle();
});

$("#fAngT").click(function(){
  $(".fAngDT").toggle();
});

function openSmall() {
  document.getElementById("smallTwo").style.width = "100%";
  document.getElementById("smallTwo").style.padding = "0px 15px";
  document.getElementById("smallTwo").style.overflow = "visible";
}

function closeSmall() {
  document.getElementById("smallTwo").style.width = "0%";
  document.getElementById("smallTwo").style.padding = "0px 0px";
  document.getElementById("smallTwo").style.overflow = "hidden";
}


$("#fAngF").click(function(){
  $(".fAngFT").toggle();
});

$("#sdropL").click(function(){
  $(".sDropC").toggle();
});



$("#ovrSear").click(function(){
  $(".ovrBlock").toggle();
});

$(".ovrDrop").click(function(){
  $(".ovrDropC").toggle();
});

/*Full Screen Overlay Starts from Here*/
function openOver() {
  document.getElementById("myFull").style.width = "100%";
  document.getElementById("myFull").style.padding = "0px 15px";
  document.getElementById("myMain").style.marginLeft = "100%";
}

function closeOver() {
  document.getElementById("myFull").style.width = "0%";
  document.getElementById("myFull").style.padding = "0px 0px";
  document.getElementById("myMain").style.marginLeft= "0%";
}
/*Full Screen Overlay Ends Here*/

/*Complicated Code*/
function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementById("myMain").style.marginLeft= "0";
  } else {
   document.getElementById("myMain").style.marginLeft= "0";
  }
}

var x = window.matchMedia("(min-width: 992px)")
myFunction(x)
x.addListener(myFunction)
/*Complicated Code*/

$(document).ready(function(){
  $(".ovrDrop").click(function(){
    $("#fl").toggleClass("filip");
  });
});

$(document).ready(function(){
  $("#compli").click(function(){
    $("#bFex").toggleClass("complicated");
  });
});

/*For First Input*/
$(document).ready(function(){
  $(".fAngDIT").click(function(){
    $("#input1").val("Jobs");
  });
});

$(document).ready(function(){
  $(".fAngDI").click(function(){
    $("#input1").val("Professionals and Agencies");
  });
});

$(document).ready(function(){
  $(".dclose").click(function(){
    $(".fAngD").hide();
  });
});
/*For First Input*/

/*For Second Input*/
$(document).ready(function(){
  $(".fAngDTII").click(function(){
    $("#input2").val("Jobs");
  });
});

$(document).ready(function(){
  $(".fAngDTI").click(function(){
    $("#input2").val("Professionals and Agencies");
  });
});

$(document).ready(function(){
  $(".dclose2").click(function(){
    $(".fAngDT").hide();
  });
});
/*For Second Input*/

/*For third Input*/
$(document).ready(function(){
  $(".in3").click(function(){
    $("#input3").val("Jobs");
  });
});

$(document).ready(function(){
  $("#ovrB").click(function(){
    $("#input3").val("Professionals and Agencies");
  });
});

$(document).ready(function(){
  $(".dclose3").click(function(){
    $(".ovrBlock").hide();
  });
});
/*For third Input*/