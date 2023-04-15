//auto changing cat images segment
  console.log("hi2")
  var catImage = document.getElementById('catImages');
  //let images = ['Pictures/catpic1.png', 'Pictures/catpic2.png','Pictures/catpic3.png', 'Pictures/catpic4.png']
  var images = ['../Pictures/catpic1.png.png', '../Pictures/catpic2.png.png','../Pictures/catpic3.png.png', '../Pictures/catpic4.png.png', '../Pictures/catpic5.png','../Pictures/catpic6.png','../Pictures/catpic7.png', '../Pictures/catpic8.png', '../Pictures/catpic9.png', '../Pictures/catpic10.png', '../Pictures/catpic11.png']
 //added more picture variations in week 10!

  setInterval(function(){
    console.log("hello")
    var random = Math.floor(Math.random() * 11);
    catImage.src = images[random];
  },800);


//Adding eventlistener for dropdown!
// storyboard.addEventListener("click", function(){
//    displaysetting = window.getComputedStyle(storyboardMenu).getPropertyValue("display");
//   if (displaySetting == "block"){
//     storyboardMenu.style.display= "none";
//     storyboardArrow.style.transform="rotate(-45deg)";
//   } else {
//     storyboardMenu.style.display="block";
//     storyboardArrow.style.transform="rotate(45deg)";
//   }
// })

const Slider = document.getElementById("ageRanger");
          kittenCard.hidden = false;
          youngAdultCard.hidden = true;
          matureAdultCard.hidden = true;
          seniorCard.hidden = true;

Slider.addEventListener('change', (e) => {
  const kittenCard = document.getElementById("kittenCard");
  const youngAdultCard = document.getElementById("youngAdultCard");
  const matureAdultCard = document.getElementById("matureAdultCard");
  const seniorCard = document.getElementById("seniorCard");

  console.log(Slider.value);
  
   if(Slider.value == 75) {
    kittenCard.hidden = true;
    youngAdultCard.hidden = true;
    matureAdultCard.hidden = true;
    //seniorCard.show = true;
    seniorCard.hidden = false;

  }
  
  else if(Slider.value == 50  ){
      kittenCard.hidden = true;
      youngAdultCard.hidden = true;
      matureAdultCard.hidden = false;
      //      matureAdultCard.show = true;
      seniorCard.hidden = true;
  } 
  
  else if(Slider.value == 25){
        kittenCard.hidden = true;
        youngAdultCard.hidden = false;
        //        youngAdultCard.show = true;
        matureAdultCard.hidden = true;
        seniorCard.hidden = true;
      }
       else 
        if(Slider.value == 0){
          kittenCard.hidden = false;
          //          kittenCard.show = true;
          youngAdultCard.hidden = true;
          matureAdultCard.hidden = true;
          seniorCard.hidden = true;
        }
    });


// Slider.addEventListener("hide", ()=> )
//Slider portion
//https://www.tutorialspoint.com/How-to-hide-HTML-element-with-JavaScript#:~:text=Using%20the%20style.,-display%20property&text=It%20can%20have%20values%20like,none'%20to%20hide%20html%20element.



  //Visual Charts
  const adoptionYears = ['2012','2013','2014','2015','2016','2017','2018','2019','2020']
  const adoptionStatistcs = ['106','88','69','74','126','127','127','130','138']

  const adoptionChart1 = {
    labels: adoptionYears,           //we want the x axis to be the years
    datasets: [
        {
            label: "Number of cats sent to Animal Shelter",// uncomment this line and set this to "Accountancy" for example
            data: adoptionStatistcs, // uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
            borderWidth: 2,
            backgroundColor: "rgba(234, 199, 199,0.5)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            borderColor: "black rgb(0,0,0) "//put black rgb(0,0,0) or the same color as above
        },
    ],
  }


  new Chart("adoptionChart",
        {
            type: "line",
            data: adoptionChart1,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Number of cats in the SPCA shelter in Singapore from 2012 to 2020",
                    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
                    fontSize: 24,
                    fontColor: 'rgb(135, 67, 86)',
                }
            }
        });

//SECOND GRAPH

const Revenue = ['Government Support Scheme','Sterilisation Programme Income','Events & Merchanidise','SCSP - AVA Subsidy Stray Cat Sterilisation Programme','Membership', 'Donation']
const revenueAmount = ['32640','33600','101759','176638','4800','609593']
//const revenuePercentage = ['3.4','3.5','10.6','18.4','0.5','63.5']
const revenueColors= ['rgba(137,207,240, 0.3)', 'rgba(137,230,255, 0.3)','rgba(137,255,230, 0.3)','rgba(137,240,200, 0.3)', 'rgba(137,207,215, 0.3)', 'rgba(255,207,215, 1)']



const charityRevenueChart = {
  labels: Revenue,           //we want the x axis to be the years
  datasets: [
      {
          label: "Revenue Source",// uncomment this line and set this to "Accountancy" for example
          data: revenueAmount, // uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
          borderWidth: 2,
          backgroundColor: revenueColors,//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
          borderColor: "black rgb(0,0,0) "//put black rgb(0,0,0) or the same color as above
      },
  ],
}


new Chart("charityRevenueChart",
      {
          type: "pie",
          data: charityRevenueChart,
          options: { 
              maintainAspectRatio: false,
              legend: {
                  display: false,
              },
              title: {
                  display: true,
                  text: "Amount of revenue for Cat Welfare Society in 2020",
                  fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
                  fontSize: 24,
                  fontColor: 'rgb(135, 67, 86)',
              }
          }
      });

// replaced because newest statistics found is against my argument!
  // const petAdoptionChart = {
  //   labels: animalTypes,           //we want the x axis to be the years
  //   datasets: [
  //       {
  //           label: "Number of pets adopted in 2018",// uncomment this line and set this to "Accountancy" for example
  //           data: adoptionStatistcs, // uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
  //           borderWidth: 2,
  //           backgroundColor: "rgba(234, 199, 199,0.5)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
  //           borderColor: "black rgb(0,0,0) "//put black rgb(0,0,0) or the same color as above
  //       },
  //   ],
  // }

  // new Chart("petChart",
  //       {
  //           type: "bar",
  //           data: petAdoptionChart,
  //           options: { 
  //               maintainAspectRatio: false,
  //               legend: {
  //                   display: false,
  //               },
  //               title: {
  //                   display: true,
  //                   text: "Based on 2018 Statistics, Cats are not as welcomed as other pets such as dogs and fishes.",
  //                   fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
  //                   fontSize: 24,
  //                   fontColor: 'rgb(135, 67, 86)',
  //               }
  //           }
  //       });



        
//let counter = 0;

//document.addEventListener("DOMContentLoaded", function () {
//document.querySelector("patButton").onclick = count;
//});

// function count() {
//   counter++;

//   if (counter % 10 === 0) {
//     alert("Mouse would like to thank you for the food 🥙");
//   }

//   document.querySelector(".counter").innerHTML = counter;
// }

let counter = 0; 

donateFunction = function () {  
  counter = counter +1;
 
  //step 1f
  document.getElementById("donatebutton").innerHTML = "OK, you have now clicked " + counter + " converted into $" + (counter*0.01).toFixed(2);

}

//credits to https://www.youtube.com/watch?v=XrjKA7m5EZo for guiding on how to rotate images.
const rotateHand = document.querySelector('#handPic');
const donateButton = document.querySelector('#donatebutton');

donateButton.addEventListener('click', () => {
  rotateHand.style.transform = 'rotate(8deg)';

  setTimeout(() => {
    rotateHand.style.transform = 'rotate(-10deg)';
  }, 500);

  // Set it back to -10 degrees


  
  //how to create a loop that it will goback to default after each rotation?
  // for (let i = 0; i < ; i++) {
  //   dayjs.duration(500).seconds(); 
  // rotateHand.style.transform = 'rotate(4deg)';

})

// let myVar = setInterval(myTimer, 1000);
// function myTimer() {
//   const d = new Date();
//   document.getElementById("#handPic").innerHTML = d.toLocaleTimeString();
// }

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



//testing waters
// if (  rotateHand.style.transform > 'rotate(7deg)')    
// dayjs.duration(500).seconds(); 
//   rotateHand.style.transform = 'rotate(4deg)';