
function changeOptions(){
    let text = document.getElementById('category').value;
    let os = ['Dr.Lee', 'Dr.Noordam'];
    console.log(text);
    let or = ['Dr.Lee'];
    let ph = ['Dr.Noordam', 'Mr.Dsouza'];
    let option = document.getElementById('expert')
    option.childNodes.forEach(op =>{
        option.options[0] = null;
    })
    if (text == 'Oral Surgeons'){
        os.forEach(ex => {
            option.options.add(new Option(ex,ex));
        })
    }
    else if (text == 'Prevent Hygiene') {
        ph.forEach(ex => {
            option.options.add(new Option(ex,ex));
        })
    }
    else if (text == 'Orthodontics'){
        or.forEach(ex => {
            option.options.add(new Option(ex,ex));
        })
    }
    else{
        option.options = [];
    }

}


document.addEventListener("click", event => {
    const cDom = document.getElementById("booking");
    const tDom = event.target;
    if (cDom.style.display === 'block'){
        console.log("executed2")
        if (cDom == tDom || cDom.contains(tDom) || tDom == document.getElementById('primeBtn') || tDom == document.getElementById('primeBtn2')|| tDom == document.getElementById('secBtn') || tDom==document.getElementById('scheduleBtn2')) {
            // ...
        } else {
            cDom.style.display = "none";
            document.getElementsByTagName('body').item(0).style.overflowY = 'auto';
            document.getElementById('overlay').style.cssText = '';
        }
    }

});

document.addEventListener("click", event => {
    const cDom = document.getElementById("confirming");
    const tDom = event.target;
    if (cDom.style.display === 'block'){
        console.log("executed2")
        if (cDom == tDom || cDom.contains(tDom) || tDom == document.getElementById('scheduleBtn')) {
            // ...
        } else {
            cDom.style.display = "none";
            document.getElementsByTagName('body').item(0).style.overflowY = 'auto';
            document.getElementById('overlay').style.cssText = '';
        }
    }

});
function raiseBookingPage(){
    console.log("executed")
    document.getElementById("booking").style.display = 'block';
    document.getElementsByTagName('body').item(0).style.overflowY = 'hidden'
    document.getElementById('overlay').style.cssText = 'z-index = -1;background: black; opacity: 0.7; left: 0; top: 0; position: fixed; width: 100%; height: 100%;'

}
function visibleByName(text){
    let services = ['hygieneText', 'oralText', 'orthogText'];
    let tools = ['hygieneTool','oralTool','orthogTool'];
    services.forEach(service =>{
        if (service !== (text +'Text')) {
            document.getElementById(text+'Tool').style.display = 'none'
            document.getElementById(service).style.display = 'none';
        }
        else {
            document.getElementById(text+'Tool').style.display = 'block'
            document.getElementById(service).style.display = 'block';
        }
    })

    tools.forEach(tool =>{
        if (tool !== (text +'Tool')) {
            document.getElementById(tool).style.display = 'none'
        }
        else {
            document.getElementById(tool).style.display = 'block'
        }
    })
}

window.onload = function() {
    document.getElementById("hygiene").focus();
    document.getElementById('datePickerId').setAttribute("min",new Date().toLocaleDateString('en-ca'));
    const picker = document.getElementById('datePickerId');
    const timePicker = document.getElementById('timePickerId');
    picker.addEventListener('input', function (e){
        const day = new Date(picker.value).getUTCDay();
        if ([6,0].includes(day)) {
            timePicker.setAttribute("min", "00:00");
            timePicker.setAttribute("max", "00:00");
        }
    })

}

function closeOverlay(){
    document.getElementById("booking").style.display = 'none';
    document.getElementById('confirming').style.display = 'none';
    document.getElementById('overlay').style.cssText = '';
    document.getElementsByTagName('body').item(0).style.overflowY = 'auto';
}

function goNextOverlay(){
    document.getElementById("booking").style.display = 'none';
    document.getElementById('confirming').style.display = 'block';
    document.getElementsByTagName('body').item(0).style.overflowY = 'auto';
}

function scheduleAnother(){
    closeOverlay();
    raiseBookingPage();
}


