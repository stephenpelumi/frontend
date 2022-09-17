let featuresOne = document.getElementById("features")
let Company = document.getElementById("company")
let firstDown = document.getElementById("firstdown")
let TotalFeatures = document.getElementById("totalfeature")
let TotalCompany = document.getElementById("totalcompany")
let secondDown = document.getElementById("seconddown")

let FirstUp = document.getElementById("firstup")
let SecondUp = document.getElementById("secondup")

function Features(){
 featuresOne.style.display = 'block';
 featuresOne.style.display = 'flex';
 featuresOne.style.flexDirection = 'column';
 FirstUp.style.display = 'block';
 TotalFeatures.style.display = 'flex';
 TotalFeatures.style.gap = '10px';
 TotalFeatures.style.height = '7px';
 firstDown.style.display ='none';
}
function Featuresout() {
 featuresOne.style.display = 'none';
 FirstUp.style.display = 'none';
 firstDown.style.display ='block';
}

function company(){
 Company.style.display = 'block';
 Company.style.display = 'flex';
 Company.style.flexDirection = 'column';
 SecondUp.style.display = 'block';
 TotalCompany.style.display = 'flex';
 TotalCompany.style.gap = '10px';
 TotalCompany.style.height = '7px';
 secondDown.style.display ='none';
}
function companyout() {
 Company.style.display = 'none';
 SecondUp.style.display = 'none';
 secondDown.style.display ='block';
}


let mobileFeatures= document.getElementById("mobilefeature")
let mobileCompany = document.getElementById("mobilecompany")
let arrowDown = document.getElementById("ArrowDown")
let MobileFeaturescontent = document.getElementById("MobileFeatureContent")
let MobileCompanycontent = document.getElementById("MobileCompanyContent")
let secondArrowDown = document.getElementById("SecondArrowDown")

let arrowUp = document.getElementById("ArrowUp")
let secondArrowUp = document.getElementById("SecondArrowUp")

function mobilefeature(){
  if(MobileFeaturescontent ==="none"){
    MobileFeaturescontent.style.display = 'none';
    arrowUp.style.display = 'none';
    arrowDown.style.display ='block';
    location.reload()
  }else{
    MobileFeaturescontent.style.display = 'block';
    MobileFeaturescontent.style.display = 'flex';
    MobileFeaturescontent.style.flexDirection = 'column';
    arrowUp.style.display = 'block';
    mobileFeatures.style.display = 'flex';
    arrowDown.style.display ='none';
  }

}

function mobilecompany(){
  MobileCompanycontent.style.display = 'block';
  MobileCompanycontent.style.display = 'flex';
  MobileCompanycontent.style.flexDirection = 'column';
 secondArrowUp.style.display = 'block';
 mobileCompany.style.display = 'flex';
 secondArrowDown.style.display ='none';
}

let Menu = document.getElementById('menu');
let btn = document.querySelector('.toggle');
let icon = btn.querySelector('.fa-bars');



btn.onclick = function () {
  if(icon.classList.contains('fa-bars')){
    Menu.style.display = 'block';
   icon.classList.replace('fa-bars', 'fa-times');
  }else{
    Menu.style.display = 'none';
   icon.classList.replace('fa-times', 'fa-bars')
  }
}
