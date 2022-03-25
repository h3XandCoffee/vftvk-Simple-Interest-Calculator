function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result = document.getElementById("result");
    if (principal <= 0) {
        alert ("Enter a positive number");

        /* TODO: Consider getting the element only once and use it's value property and focus() method */
        document.getElementById("principal").focus();

    /* TODO: Consider using return insted of else branch */
    } else {
        result.innerHTML = "If you deposit <mark>" + principal + "</mark><br>"
                        + "at an interest rate of <mark>" + rate + "</mark>.<br>"
                        + "You will receive an amount of <mark>" + interest + "</mark>,<br>"
                        + "in the year " + (Number(new Date().getFullYear()) + Number(years)) + "</mark>";
    }
}

/* Rate slider updater function */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
