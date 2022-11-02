
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
//changing css and animate after button clicked
    document.getElementById("form").classList.add("postSubmit");
    document.getElementById("result").classList.add("animate");
    setTimeout(() => {
        document.getElementById("form").classList.remove("postSubmit");
        document.getElementById("result").innerText = '';
        document.getElementById("result").classList.remove("animate");
    }, 5000);
});




