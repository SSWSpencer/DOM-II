// Your code goes here

// function clickEventHandler(event) {
//     event.preventDefault()
//     console.log(event.type + '!!!!!!!!!!!!!!!!!!!!!!!!!!!')
//     console.log(event.target)
//     console.log(event.currentTarget);
// }

// document.querySelector('a').addEventListener('click', clickEventHandler);
// document.querySelector('nav').addEventListener('click', clickEventHandler);
// document.querySelector('header').addEventListener('click', clickEventHandler);
// document.body.addEventListener('click', clickEventHandler);
// document.addEventListener('click', clickEventHandler);
// window.addEventListener('click', clickEventHandler);



let nightMode = false;
// Event Listener 1 (Changes element color to red only on mouseover)

const colorSelection = document.querySelectorAll("p, a, h1, h2, h3, h4, button");
colorSelection.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.style.color = "red";
    })
    element.addEventListener("mouseout", () => {
        if(!nightMode){
            element.style.color = "black";
        }
        if(nightMode){
            element.style.color = "white";
        }
    })
  })


  // Event Listener 2 (Increases and Decreases Letter Spacing in Header)
  const h1Text = document.querySelector("h1");
  let spacingNum = 0;
  let increase = true;
  h1Text.addEventListener("click", () =>{
      if(increase){
        spacingNum++;
        h1Text.style.letterSpacing = `${spacingNum}px`;
        if(spacingNum == 30){
            increase = false;
        }
      }
      if(!increase){
          spacingNum--;
          h1Text.style.letterSpacing = `${spacingNum}px`;
          if(spacingNum == 0){
            increase = true;
        }
      }

 })

 // Event Listener 3 (Missed Bus)
 funBus.addEventListener("click", () =>{
     funBus.style.display = "none";
     missedBus.style.display = "inline";
     colorSelection.forEach(element => {
         element.textContent = "";
     })
     adventure.style.display = "none";
     destin.style.display = "none";
     funImg.style.display = "none";
     h1Text.textContent = "You Missed the Bus";
     const buttonDel = document.querySelectorAll(".btn");
     buttonDel.forEach(element => {
         element.style.display = "none";
     })

 })


 // Event Listener 4 (Flipped Page)
 let flipCount = 0;
 const flipButton = document.querySelector("footer p");
 flipButton.addEventListener("dblclick", () => {
     flipCount++;
     if(flipCount % 2 == 1){
         flipDiv.style.transform = "rotate(180deg)";
     }
     if(flipCount % 2 == 0){
         flipDiv.style.transform = "rotate(0deg)";
     }

 })

 // Event Listener 5 (Bus Horn on Signup)
    const busHonk = document.querySelectorAll(".btn");
    const honkSound = document.getElementById("honk-honk");
    busHonk.forEach(element =>{
        element.addEventListener("click", () => {
            honkSound.play();
        })
    })


    // Event Listener 6 (Screen Reader)

    let readTitle = false;
    let readCount = 0;
    screenReadButton.addEventListener("click", ()=> {
        readCount++;
        if(readCount % 2 == 1){
            readTitle = true;
            screenReadButton.textContent = "Screen Reader: On";
            console.log(readTitle);
        }
        if(readCount % 2 == 0){
            readTitle = false;
            screenReadButton.textContent = "Screen Reader : Off";
            console.log(readTitle);
        }
    })

    const read1 = document.querySelector("header h2");
    const sound1 = document.getElementById("welcome");
    const read2 = document.querySelector(".content-section h2:nth-of-type(1)");
    const sound2 = document.getElementById("lets-go");
    const read3 = document.querySelector(".content-section:nth-of-type(2) h2");
    const sound3 = document.getElementById("adv-awaits");
    const read4 = document.querySelector(".content-destination h2");
    const sound4 = document.getElementById("pick-des");
    const read5 = document.querySelector(".destination:nth-of-type(1) h4");
    const sound5 = document.getElementById("fun-sun");
    const read6 = document.querySelector(".destination:nth-of-type(2) h4");
    const sound6 = document.getElementById("mtn-exc");
    const read7 = document.querySelector(".destination:nth-of-type(3) h4");
    const sound7 = document.getElementById("isl-get");
    const read8 = document.querySelectorAll(".btn");
    const sound8 = document.getElementById("start");
    read1.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound1.play();
        }
    })
    read2.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound2.play();
        }
    })
    read3.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound3.play();
        }
    })
    read4.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound4.play();
        }
    })
    read5.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound5.play();
        }
    })
    read6.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound6.play();
        }
    })
    read7.addEventListener("mouseover", ()=>{
        if(readTitle){
            sound7.play();
        }
    })
    read8.forEach(element =>{
        element.addEventListener("mouseover", () => {
            if(readTitle){
                sound8.play();
            }
        })
    })

    // Element 7 (Night Mode)
    let modeCount = 0;
    nightModeButton.addEventListener("click", () =>{
        modeCount++;
        if(modeCount % 2 == 1){
            nightModeButton.textContent = "Day Mode";
            const bG = document.querySelectorAll("*");
            bG.forEach(element => {
                element.style.backgroundColor = "black";
                element.style.color = "white";
            })
            nightMode = true;
        }
        if(modeCount % 2 == 0){
            nightModeButton.textContent = "Night Mode";
            const bG = document.querySelectorAll("*");
            bG.forEach(element => {
                element.style.backgroundColor = "white";
                element.style.color = "black";
            })
            nightMode = false;
        }
    })

    // Element 8 (Remove All Images)
    let hideCount = 0;
    hideImgButton.addEventListener("click", () =>{
        hideCount++;
        if(hideCount % 2 == 1){
            funBus.style.display = "none";
            adventure.style.display = "none";
            funImg.style.display = "none";
            destin.style.display = "none";
            const text = document.querySelectorAll(".text-content");
            text.forEach(element => {
                element.style.width = "100%";
            })
            hideImgButton.textContent = "Show Images";
        }
        if(hideCount % 2 == 0){
            funBus.style.display = "inline";
            adventure.style.display = "inline";
            funImg.style.display = "inline";
            destin.style.display = "inline";
            const text = document.querySelectorAll(".text-content");
            text.forEach(element => {
                element.style.width = "50%";
            })
            hideImgButton.textContent = "Hide Images";
        }
        
    })


    // Element 9 (Color Nav when mouseover)
    const bannerColor = document.querySelector("header")
    bannerColor.addEventListener("mouseover", () => {
        if(!nightMode){
            bannerColor.style.backgroundColor = "#FFEBCD";
            document.querySelector(".nav-container").style.backgroundColor = "#FFEBCD";
            bannerColor.style.borderBottom = "2px dashed #C0C0C0";
            document.querySelectorAll("a").forEach(element => {
                element.style.backgroundColor = "#FFEBCD";
            })
            document.querySelector("nav").style.backgroundColor = "#FFEBCD";
            document.querySelector("h1").style.backgroundColor = "#FFEBCD";
        }
        
    })
    bannerColor.addEventListener("mouseout", () =>{
        if(!nightMode){
            bannerColor.style.backgroundColor = "white";
            document.querySelector(".nav-container").style.backgroundColor = "white";
            document.querySelectorAll("a").forEach(element => {
                element.style.backgroundColor = "white";
            })
            document.querySelector("nav").style.backgroundColor = "white";
            document.querySelector("h1").style.backgroundColor = "white";
        }
        bannerColor.style.borderBottom = "0";
    })



    // Element 10 (Put Border Around Selected Content)
    const borderSelection = document.querySelectorAll("*");
    borderSelection.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.border = "1px solid red";
            event.stopPropagation();
        })
        element.addEventListener("mouseout", () => {
                element.style.border = "0";
        })
      })

//Prevent Default on Nav
const navDef = document.querySelectorAll("a")
navDef.forEach(element => {
    element.preventDefault();
})

