const form = document.querySelector('form')

// form are submitted by post form or get form and values are goes to server in url.
// so we don't want to send to the server so we will stop that. 
form.addEventListener('submit',function(e){
    e.preventDefault()// so this will stop the default process.

    // so now we want the input values of 'height' and 'weight'

    const height = parseInt(document.querySelector('#height').value);//this values we get in the string form so we have convert them into int

    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results')

    //checks if wt and ht are not a num

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = 'please provide valid height.';
    } 

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = 'please provide valid weight.';
    } 
    
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // showing the results
        results.innerHTML = `<span>${bmi}</span>`;
    }

})