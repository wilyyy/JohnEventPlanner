function calcCost()
{
    let people = parseInt(document.getElementById("people").value);
    if (isNaN(people))
    {
        alert("Please use numbers!");
    }
    let totalcost = parseInt(document.getElementById("totalcost").value);
    if (isNaN(totalcost))
    {
        alert("Please use numbers!");
    }
    indcost = people / totalcost;
    if (indcost < 1)
    {
        indcost = indcost * 100;
        document.getElementById("indcost").value = Math.round(indcost) + "¢";
    }
    
    else
    {
        document.getElementById("indcost").value = "$" + Number.parseFloat(indcost).toFixed(2);
    }
}