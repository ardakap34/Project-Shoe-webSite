let resimler = document.querySelectorAll('.midside-img .image');
let currentIndex = 0;

setInterval(() => {
    
    resimler[currentIndex].style.opacity = 0;

    
    currentIndex = (currentIndex + 1) % resimler.length;

    
    resimler[currentIndex].style.opacity = 1;
}, 4000); 



document.getElementById('down').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down = document.getElementById('down');
    const up = document.getElementById('up');
    
    down.style.zIndex = "-99";
    up.style.zIndex = "99";

    if (box1.style.height === '500px') {
        box1.style.height = '400px';
        document.getElementById('text1').style.opacity = '0'; 
        document.getElementById('text1').style.visibility = 'hidden'; 
    } else {
        box1.style.height = '500px';
        box2.style.height = '400px';
        box3.style.height = '400px';
        document.getElementById('text1').style.opacity = '1'; 
        document.getElementById('text1').style.visibility = 'visible'; 
    }
});

document.getElementById('up').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down = document.getElementById('down');
    const up = document.getElementById('up');
    
    down.style.zIndex = "99";
    up.style.zIndex = "-99";

    if (box1.style.height === '400px') {
        box1.style.height = '400px';
        document.getElementById('text1').style.opacity = '0'; 
        document.getElementById('text1').style.visibility = 'hidden'; 
    } else {
        box1.style.height = '400px';
        box2.style.height = '400px';
        box3.style.height = '400px';
        document.getElementById('text1').style.opacity = '0'; 
        document.getElementById('text1').style.visibility = 'hidden'; 
    }
});

document.getElementById('down2').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down2 = document.getElementById('down2');
    const up2 = document.getElementById('up2');
    
    down2.style.zIndex = "-99";
    up2.style.zIndex = "99";

    if (box2.style.height === '500px') {
        box2.style.height = '400px';
        document.getElementById('text2').style.opacity = '0'; 
        document.getElementById('text2').style.visibility = 'hidden'; 
    } else {
        box2.style.height = '500px';
        box1.style.height = '400px';
        box3.style.height = '400px';
        document.getElementById('text2').style.opacity = '1'; 
        document.getElementById('text2').style.visibility = 'visible'; 
    }
});

document.getElementById('up2').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down2 = document.getElementById('down2');
    const up2 = document.getElementById('up2');
    
    down2.style.zIndex = "99";
    up2.style.zIndex = "-99";

    if (box2.style.height === '400px') {
        box2.style.height = '400px';
        document.getElementById('text2').style.opacity = '0'; 
        document.getElementById('text2').style.visibility = 'hidden'; 
    } else {
        box2.style.height = '400px';
        box1.style.height = '400px';
        box3.style.height = '400px';
        document.getElementById('text2').style.opacity = '0'; 
        document.getElementById('text2').style.visibility = 'hidden'; 
    }
});

document.getElementById('down3').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down3 = document.getElementById('down3');
    const up3 = document.getElementById('up3');

    down3.style.zIndex = "-99";
    up3.style.zIndex = "99";

    if (box3.style.height === '500px') {
        box3.style.height = '400px';
        document.getElementById('text3').style.opacity = '0'; 
        document.getElementById('text3').style.visibility = 'hidden'; 
    } else {
        box3.style.height = '500px';
        box1.style.height = '400px';
        box2.style.height = '400px';
        document.getElementById('text3').style.opacity = '1'; 
        document.getElementById('text3').style.visibility = 'visible'; 
    }
});

document.getElementById('up3').addEventListener('click', function() {
    const box1 = document.getElementById('box-bg');
    const box2 = document.getElementById('box-bg2');
    const box3 = document.getElementById('box-bg3');
    
    const down3 = document.getElementById('down3');
    const up3 = document.getElementById('up3');
    
    down3.style.zIndex = "99";
    up3.style.zIndex = "-99";

    if (box3.style.height === '400px') {
        box3.style.height = '400px';
        document.getElementById('text3').style.opacity = '0'; 
        document.getElementById('text3').style.visibility = 'hidden'; 
    } else {
        box3.style.height = '400px';
        box1.style.height = '400px';
        box2.style.height = '400px';
        document.getElementById('text3').style.opacity = '0'; 
        document.getElementById('text3').style.visibility = 'hidden'; 
    }
});




  
