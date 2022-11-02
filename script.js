
const bttn = document.getElementById("submit");
bttn.addEventListener('click', story => {
    const nameAns = document.getElementById("name").value;
    const bday = document.getElementById("birthday").value;
    const address = document.getElementById("address").value;
    const SSN = document.getElementById("SSN").value;
    document.getElementById("result").innerText = `${nameAns} is a FOOL. \n I know where you live... it's ${address} \n what a lame birthday you have btw \n ${bday}??? what kinda birth day is that \n brb gonna go steal your identity with these little numbers \n ${SSN}`;
//clearing inputs
    document.getElementById("SSN").value = '';
    document.getElementById("address").value = '';
    document.getElementById("birthday").value = '';
    document.getElementById("name").value = '';
//changing css after button clicked
    document.getElementById("form").style.fontSize = "10px";
    document.getElementById("form").style.color = "red";
//animate button after clicked
    const movement = 10;
    const circle = getElementById("animation");
    const moveCircle = () => {
        const xCircle = parseFloat(getComputedStyle(circle).left);
        circle.style.left = (xCircle + movement) + "px";
        requestAnimationFrame(moveCircle);
    };
    requestAnimationFrame(moveCircle);
    
});

bttn.addEventListener('click', () => {
    setTimeout(() => {
        bttn.removeEventListener('click', story);
    }, 1000)
})

