//auto changing cat images segment
  console.log("hi2")
  var catImage = document.getElementById('catImage');
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



//Slider portion



  //Visual Charts
  const adoptionYears = ['2012','2013','2014','2015','2016','2017','2018','2019','2020']
  const adoptionStatistcs = ['106','88','69','74','126','127','127','130','138']
  const animalTypes = ['Dog','Fish','Cat','Bird']
  const petNumbers = ['58%','21%','20%','6%']

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
  const petAdoptionChart = {
    labels: animalTypes,           //we want the x axis to be the years
    datasets: [
        {
            label: "Number of pets adopted in 2018",// uncomment this line and set this to "Accountancy" for example
            data: adoptionStatistcs, // uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
            borderWidth: 2,
            backgroundColor: "rgba(234, 199, 199,0.5)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
            borderColor: "black rgb(0,0,0) "//put black rgb(0,0,0) or the same color as above
        },
    ],
  }

  new Chart("petChart",
        {
            type: "bar",
            data: petAdoptionChart,
            options: { 
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: "Based on 2018 Statistics, Cats are not as welcomed as other pets such as dogs and fishes.",
                    fontFamily: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen",
                    fontSize: 24,
                    fontColor: 'rgb(135, 67, 86)',
                }
            }
        });



        
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
  document.getElementById("donatebutton").innerHTML = "OK, you have now clicked " + counter + " converted into $" + counter*0.01;

}

//credits to https://www.youtube.com/watch?v=XrjKA7m5EZo for guiding on how to rotate images.
const rotateHand = document.querySelector('#handPic');
const donateButton = document.querySelector('#donatebutton');

donateButton.addEventListener('click', () => {
  rotateHand.style.transform = 'rotate(8deg)';

})