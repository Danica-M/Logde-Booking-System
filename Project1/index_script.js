function information() {
    alert("This is a reproduced advertisement for spinning car wheel.")
    }

    function Again() {
        var main;
        var animate;
        var newA;
        main = document.getElementById("Container3")
        animate = document.getElementById("Ad2_Container");
        newA = animate.cloneNode(true);
        main.replaceChild(newA, animate);
    }

    function reload() {
        var first;
        var animate;
        var second;
        first = document.getElementById("Container1")
        animate = document.getElementById("Ad1_Container");
        second = animate.cloneNode(true);
        first.replaceChild(second, animate);
    }

    function showForm2() {
        form1.style.display= "none";
        form2.style.display= "inline";
        form3.style.display= "none";
        form4.style.display= "none";
        summary.style.display= "none";
        progressUpdate('form2');
    }
    function showForm1(){
        form1.style.display= "inline";
        form2.style.display= "none";
        form3.style.display= "none";
        form4.style.display= "none";
        summary.style.display= "none";
        progressUpdate('form1');
    }
    function showForm3(){
        form1.style.display= "none";
        form2.style.display= "none";
        form3.style.display= "inline";
        form4.style.display= "none";
        summary.style.display= "none";
        progressUpdate('form3');
    }
    function showForm4(){
        form1.style.display= "none";
        form2.style.display= "none";
        form3.style.display= "none";
        form4.style.display= "inline";
        summary.style.display= "none";
        progressUpdate('form4');

    }
    function showSummary(){
        form1.style.display= "none";
        form2.style.display= "none";
        form3.style.display= "none";
        form4.style.display= "none";
        summary.style.display= "inline";
        progressUpdate('summary');
    

        document.getElementById("arrivalfield").innerHTML = arrival.value;
        document.getElementById("departurefield").innerHTML = departure.value;
        document.getElementById("adultsfield").innerHTML = adults.value;
        document.getElementById("childrenfield").innerHTML = children.value;
        if(yMobility.checked === true){
            document.getElementById("mobilityfield").innerHTML = 'Yes';
        }else{
            document.getElementById("mobilityfield").innerHTML = 'No';
        }

        document.getElementById("roomfield").innerHTML = room.value;
        if(yCooking.checked === true){
            document.getElementById("cookingfield").innerHTML = 'Yes';
        }else{
            document.getElementById("cookingfield").innerHTML = 'No';
        }
        if(ySwimming.checked === true){
            document.getElementById("swimmingfield").innerHTML = 'Yes';
        }else{
            document.getElementById("swimmingfield").innerHTML = 'No';
        }
        document.getElementById("ratefield").innerHTML = rating.value;

        document.getElementById("colorfield").innerHTML = shirtColor.value;
        document.getElementById("numfield").innerHTML = favNum.value;
        if(Ymaps.checked === true){
            document.getElementById("mapsfield").innerHTML = 'Yes';
        }else{
            document.getElementById("mapsfield").innerHTML = 'No';
        }
        document.getElementById("excitefield").innerHTML = excite.value;

        document.getElementById("fNameField").innerHTML = fname.value;
        document.getElementById("lNameField").innerHTML = lname.value;
        document.getElementById("emailfield").innerHTML = email.value;
        document.getElementById("phonefield").innerHTML = phone.value;
        if(local.checked === true){
            document.getElementById("localfield").innerHTML = 'Yes';
        }else{
            document.getElementById("localfield").innerHTML = 'No';
        }

    }

    function checkDate(){
        var date = new Date();
        year = date.getFullYear();
        month = date.getMonth() + 1;
        if(month < 10){
            month= "0" + month;
        }
        day = date.getDate();
        if(day < 10){
            day= "0" + day;
        }
        minOp = year + "-" + month + "-" + day;
        console.log(minOp);
        document.getElementById("arrival").setAttribute('min',minOp);

    }
    function validDate(){
        var sdate = new Date(document.getElementById("arrival").value);
        year = sdate.getFullYear();
        month = sdate.getMonth() + 1;
        if(month < 10){
            month= "0" + month;
        }
        day = sdate.getDate() + 1;
        if(day < 10){
            day= "0" + day;
        }
        minOp = year + "-" + month + "-" + day;
        console.log(minOp);
        document.getElementById("departure").setAttribute('min',minOp);

    }

    function showBook(){
        var newC = "black";
        var newB = "rgb(116, 170, 196)";
        var oldC = "white";
        var oldB = "rgb(18, 95, 109)";
        
        document.getElementById("book").style.color = newC;
        document.getElementById("book").style.backgroundColor = newB;
        document.getElementById("home").style.color = oldC;
        document.getElementById("home").style.backgroundColor = oldB;

        formContainer.style.display="block";
        Homepage.style.display="none";

    }
    function showHome(){
        var newC = "black";
        var newB = "rgb(116, 170, 196)";
        var oldC = "white";
        var oldB = "rgb(18, 95, 109)";
        
        document.getElementById("home").style.color = newC;
        document.getElementById("home").style.backgroundColor = newB;
        document.getElementById("book").style.color = oldC;
        document.getElementById("book").style.backgroundColor = oldB;

        formContainer.style.display="none";
        Homepage.style.display="block";

    }
    function confirm(){
        confirmation.style.display= "block";
        form1.style.display= "none";
        form2.style.display= "none";
        form3.style.display= "none";
        form4.style.display= "none";
        summary.style.display= "none";
        document.getElementById("progress").style.display = "none";
        
    }

    function progressUpdate(currentLoc){
        var NewW;
        switch(currentLoc){
            case 'form1':
                NewW = '0%';
                break;
            case 'form2':
                NewW = '25%';
                break;
            case 'form3':
                NewW = '50%';
                break;
            case 'form4':
                NewW = '75%';
                break;
            case 'summary':
                NewW = '100%';
                break;
        }
        document.getElementById("progressBar").style.width = NewW;
        document.getElementById("progressBar").innerHTML = NewW;
    }



    