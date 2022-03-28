
/***************3️⃣ Var ***********/

function biadata()
{
    var myFirstName = "Prince";
    console.log(myFirstName);

    if(true)
    {
        var myLastName = "Sharma";
        console.log('inner : ' + myLastName);
        console.log('inner : ' + myFirstName);
    }
    console.log('innerOuter : ' + myLastName);
}
biadata();