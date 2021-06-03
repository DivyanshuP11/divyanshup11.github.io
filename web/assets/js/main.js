const menuanimate = () => {
   const burger = document.querySelector('.burger');
   const nav = document.querySelector('.slide-menu');
   const bars = document.querySelectorAll('.bar');
   const links = document.querySelectorAll('.links');

   burger.addEventListener('click',()=>{
       nav.classList.toggle('menu-active');

       bars[0].classList.toggle('bar11');
       bars[1].classList.toggle('bar22');
       bars[2].classList.toggle('bar33');
       
       links.forEach(li =>{
           li.classList.toggle('lit');
       })
    setTimeout(() =>{   
       nav.classList.toggle('animat')},700);
   
   })

};
menuanimate();
// ------------ NAV javascript ends here  -------------- 
const bodyy = document.querySelector('body');
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const middle = windowHeight/2;
const centre = windowWidth/2;

console.log(middle , centre);

// path length for svg logo
// const logo = document.querySelectorAll('#svglogo path');
// for (let i = 0; i < 7; i++) {
//    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`)
// }

const svglog = document.querySelector('#svglogo');
const dev = document.querySelector('.dev');
const div = document.querySelector('.div');

/// const logowidth = svglog.offsetWidth;
/// const logowidth = svglog.style.width.value;
// const logoheight = svglog.offsetHeight;






const centerfunction = () =>{
     
    bodyy.addEventListener('load',f1());

}
function f1() {
      
        //// alert()//devdiv
       //// svglog.style.top = `${middle}`+'px';
        ///svglog.style.left = `${centre}`+'px';
       //------------logo clc---------
        if (windowWidth <= 768) {
            var logowidth = (windowWidth*(100/100));
            var logoheight = (windowHeight*(49/100));
        }
        else if (windowWidth <=1024 && windowWidth > 768){
            var logowidth = (windowWidth*(80/100));
            var logoheight = (windowHeight*(80/100));
        }
        else{
            var logowidth = (windowWidth*(49/100));
            var logoheight = (windowHeight*(49/100));
        }
        console.log(logowidth , logoheight);
        const devtop = middle-(logoheight/2.5);
        const devleft = centre-(logowidth/7);
        const divtop = middle+(logoheight/1.7);
        const divleft = centre+(logowidth/7);
    
         //----dev
        // dev.style.top = `${devtop}`+'px';
         ///dev.style.left = `${devleft}`+'px';
        //  ----div
        //  div.style.top = `${divtop}`+'px';
         //div.style.left = `${divleft}`+'px';
    
}

centerfunction();