const counter_form = document.getElementById('counter_form');
const counter = document.querySelector('.counter');
const msg = document.querySelector('.msg');
let count;


counter_form.onsubmit = (e) => {
    e.preventDefault();

    clearInterval(count);

    // Get Form Data 
    let form_data = new FormData(e.target);
    let { date, time } = Object.fromEntries(form_data.entries());

    if( !date || !time ){
        msg.innerHTML = setAlert('All fields are required!!');
    }else{
        count = setInterval(() => {

            timeCounter(date, time, counter);
            
        }, 1000)
    }

    

}