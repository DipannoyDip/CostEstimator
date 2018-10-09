var xmlHttp = createXmlHttpRequestObject();
var xmlHttp_for_unit_cost = createXmlHttpRequestObject2();
var xmlHttp_for_quantity = createXmlHttpRequestObject3();
var xmlHttp_for_drop=createXmlHttpRequestObject4();
var xmlHttp_for_check=createXmlHttpRequestObject5();
var curr_drop_price=0;
var curr_check_price=0;
var price=0;
var quantity=0;
var l=0,w=0;

var u=0,q=0;

var unit;
var quant;
plates = ['hasi', 'demi'];
var foo;


function createXmlHttpRequestObject(){
    var xmlHttp;

    if(window.ActiveXObject){
        try{
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp = false;
        }
    }else{
        try{
            xmlHttp = new XMLHttpRequest();
        }catch(e){
            xmlHttp = false;
        }
    }

    if(!xmlHttp){
        alert("Cant create that object");
    }else{
        return xmlHttp;
    }
}

function createXmlHttpRequestObject2(){
    var xmlHttp_for_unit_cost;

    if(window.ActiveXObject){
        try{
            xmlHttp_for_unit_cost = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp_for_unit_cost = false;
        }
    }else{
        try{
            xmlHttp_for_unit_cost = new XMLHttpRequest();
        }catch(e){
            xmlHttp_for_unit_cost = false;
        }
    }

    if(!xmlHttp_for_unit_cost){
        alert("Cant create that object");
    }else{
        return xmlHttp_for_unit_cost;
    }
}

function createXmlHttpRequestObject3(){
    var xmlHttp_for_quantity;

    if(window.ActiveXObject){
        try{
            xmlHttp_for_quantity = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp_for_quantity = false;
        }
    }else{
        try{
            xmlHttp_for_quantity = new XMLHttpRequest();
        }catch(e){
            xmlHttp_for_quantity = false;
        }
    }

    if(!xmlHttp_for_quantity){
        alert("Cant create that object");
    }else{
        return xmlHttp_for_quantity;
    }
}
function createXmlHttpRequestObject4(){
    var xmlHttp_for_drop;

    if(window.ActiveXObject){
        try{
            xmlHttp_for_drop = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp_for_drop = false;
        }
    }else{
        try{
            xmlHttp_for_drop = new XMLHttpRequest();
        }catch(e){
            xmlHttp_for_drop = false;
        }
    }

    if(!xmlHttp_for_drop){
        alert("Cant create that object");
    }else{
        return xmlHttp_for_drop;
    }
}


function createXmlHttpRequestObject5(){
    var xmlHttp_for_check;

    if(window.ActiveXObject){
        try{
            xmlHttp_for_check = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp_for_check = false;
        }
    }else{
        try{
            xmlHttp_for_check = new XMLHttpRequest();
        }catch(e){
            xmlHttp_for_check = false;
        }
    }

    if(!xmlHttp_for_check){
        alert("Cant create that object");
    }else{
        return xmlHttp_for_check;
    }
}

function processed(){
    // let food;
    console.log('hllo from process');
    var send_drop='';

    var a=[];
    // driver.findElement(By.xpath("(//img[@id='MoveAllRight'])[2]")).click();

    // console.log(specification);
    if (xmlHttp_for_drop.readyState == 0 || xmlHttp_for_drop.readyState == 4) {
        var drop = document.getElementsByName('drop1');

        for(var i=0;i<drop.length;i++)
        {
             send_drop+=drop[i].value+'*';

        }

        console.log(drop[0].value+drop[1].value);

        // var string = "foo",
        //     substring = "oo";
        // console.log(string.includes(substring));

        // drop.split("#");
        //
        // console.log(drop);
        //  a.push(drop);
        // console.log(a);

        // a.split("#");
        // console.log(a[0]);
        // droparray=JSON.parse(a);
        // console.log(droparray);
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_drop.open("GET", "/drop/" + send_drop, true);
        // next();
        xmlHttp_for_drop.onreadystatechange = handleServerResponse4;
        xmlHttp_for_drop.send(null);
    } else {
        setTimeout('processed()', 1000);
    }
}
function processed2() {
    console.log('hllo from process2');
    var send_check='';

    var a=[];
    // driver.findElement(By.xpath("(//img[@id='MoveAllRight'])[2]")).click();

    // console.log(specification);
    if (xmlHttp_for_check.readyState == 0 || xmlHttp_for_check.readyState == 4) {
        var check = document.getElementsByName('check1')


        for(var i=0;i<check.length;i++)
        {
            if(check[i].checked==true){
                send_check+=check[i].value+'*';
                console.log(check[i].value)
            }


        }

        // console.log(drop[0].value+drop[1].value);

        // var string = "foo",
        //     substring = "oo";
        // console.log(string.includes(substring));

        // drop.split("#");
        //
        // console.log(drop);
        //  a.push(drop);
        // console.log(a);

        // a.split("#");
        // console.log(a[0]);
        // droparray=JSON.parse(a);
        // console.log(droparray);
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_check.open("GET", "/check/" + send_check, true);
        // next();
        xmlHttp_for_check.onreadystatechange = handleServerResponse5;
        xmlHttp_for_check.send(null);
    } else {
        setTimeout('processed2()', 1000);
    }


}



function process(){
    // let food;
    if (xmlHttp.readyState == 0 || xmlHttp.readyState == 4) {
        var food = document.getElementById("userInput").value;
        console.log(food);
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp.open("GET", "/start/" + food, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
        // next();

    } else {
        // next();
        setTimeout('process()', 1000);
    }
}

function process2(){
    // let food;
    // unit=0;
    if (xmlHttp_for_unit_cost.readyState == 0 || xmlHttp_for_unit_cost.readyState == 4) {
        var unitcost = document.getElementById("unit").value;
        u=1;
        unit=unitcost;
        console.log(unitcost);
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_unit_cost.open("GET", "/start2/" + unitcost, true);
        xmlHttp_for_unit_cost.onreadystatechange = handleServerResponse2;
        xmlHttp_for_unit_cost.send(null);
    } else {
        setTimeout('process2()', 1000);
    }
}

var quantity;

function process3(){
    // let food;
    if (xmlHttp_for_quantity.readyState == 0 || xmlHttp_for_quantity.readyState == 4) {
        quantity = document.getElementById("qtn").value;
        // quant=quantity;
        // console.log(quantity);
        // q=1;
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_quantity.open("GET", "/start3/" + quantity, true);
        xmlHttp_for_quantity.onreadystatechange = handleServerResponse3;
        xmlHttp_for_quantity.send(null);
    } else {
        setTimeout('process3()', 1000);
    }
}

function  check(a) {
    console.log(a+5);

}

function handleServerResponse(){
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    price=0;
    price1=0;
    var p=price+price1;
    quantity=0;
    if (xmlHttp.readyState == 4) {
        if (xmlHttp.status == 200) {

            console.log("check done");
            check("chkkk");
            var product=[];
             // xmlResponse = xmlHttp.responseXML;
             // xmlDocumentElement = xmlResponse.documentElement;
             // // console.log('chkmsg'+xmlDocumentElement);
             // message = xmlDocumentElement.firstChild;
             // console.log(message);
             foo=JSON.parse(xmlHttp.responseText);
            console.log(foo);

            // product.push(xmlHttp.responseText);
            var o=show_options_for_input(foo[1]);
            console.log(foo[1].length);
            // console.log(xmlHttp.responseText);

            // console.log(xmlHttp.responseText[5]);
            // var a=xmlHttp.responseText.split("#");
            // var b=a[1];
            // console.log(b);
            // console.log(b[3]);
            // for(var i=0;i<xmlHttp.responseText.length;i++) {
                document.getElementById("underInput").innerHTML = '<span style="color:blue">' + o + '</span>';
                 document.getElementById("qt").innerHTML = '<span style="color:red">' +p + '</span>';

            // }
            setTimeout('process()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

}
function handleServerResponse2(){
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    if (xmlHttp_for_unit_cost.readyState == 4) {
        if (xmlHttp_for_unit_cost.status == 200) {

            console.log("cost check done");
            calculatecost();
            // check;
            // check("cost");
            // xmlResponse = xmlHttp.responseXML;
            // xmlDocumentElement = xmlResponse.documentElement;
            // // console.log('chkmsg'+xmlDocumentElement);
            // message = xmlDocumentElement.firstChild;
            // console.log(message);
            console.log(xmlHttp_for_unit_cost.responseText);
            document.getElementById("unitCost").innerHTML = '<span style="color:blue">'+xmlHttp_for_unit_cost.responseText+'</span>';
            setTimeout('process2()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

}
var p=0;
function handleServerResponse3(){
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    console.log('hndleserver');

    if (xmlHttp_for_quantity.readyState == 4) {
        if (xmlHttp_for_quantity.status == 200) {

            console.log("quantity check done");
            // var q=xmlHttp_for_quantity.responseText;
             console.log('cdrop :'+curr_drop_price);
             console.log('ccheck:'+curr_check_price);
             p=quantity*(curr_drop_price+curr_check_price);
            // quantity=xmlHt
            // calculatecost();
            // var price = calculatecost(unit,xmlHttp_for_quantity.responseText);
            // check("cost");
            // xmlResponse = xmlHttp.responseXML;
            // xmlDocumentElement = xmlResponse.documentElement;
            // // console.log('chkmsg'+xmlDocumentElement);
            // message = xmlDocumentElement.firstChild;
            // console.log(message);
            console.log(xmlHttp_for_quantity.responseText);

            document.getElementById("qt").innerHTML = '<span style="color:blue">'+p+'</span>';
            setTimeout('process3()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

}
var price=0;
var price1=0;
var globalprice=0;

function handleServerResponse4(){
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    price=0;
    console.log('hllllllo');
    curr_drop_price=0;
    var pltcost;
    if (xmlHttp_for_drop.readyState == 4) {
        if (xmlHttp_for_drop.status == 200) {

            console.log("quantity check done");
            // console.log(rdrop1);
            // calculatecost();
            // var price = calculatecost(unit,xmlHttp_for_quantity.responseText);
            // check("cost");
            // xmlResponse = xmlHttp.responseXML;
            // xmlDocumentElement = xmlResponse.documentElement;
            // // console.log('chkmsg'+xmlDocumentElement);
            // message = xmlDocumentElement.firstChild;
            // console.log(message);
            // console.log(xmlHttp_for_quantity.responseText);
            var dropvalue=xmlHttp_for_drop.responseText;
            // console.log('dropvalue :'+dropvalue);
            var a=dropvalue.split('*');
            // console.log('a value'+a[1]);
            // console.log(a);
            // foo[1].splice( list.indexOf(''), 1 );
            //
            // foo[1].sp

            for( var j = 0;j<foo[1].length; j++){
                // console.log('dipannoy');
                if ( foo[1][j] === '' ) foo[1].splice(j, 1);
            }
            // // console.log(foo[1].length);
            // var d=JSON.parse(dropvalue);
            // console.log(d);
            // console.log('out'+a[0]);
            // for(var k=0;k<a.length;k++)
            // {
            //     console.log('length :'+a.length);
            //     console.log('value :'+a[k]);
            //
            //
            //
            // }

            var pltcost;
             for(var j=0;j<a.length;j++) {
                for (var i = 0; i < foo[1].length; i++) {
                    if (foo[1][i] == '<specification>') {
                        // console.log('i :' + i);
                        // console.log(foo[1][i + 1]);
                        // console.log('let ' + a[j]);

                        if (a[j].includes(foo[1][i + 1])) {

                            // console.log('dhukse');

                            console.log('plate :'+foo[1][i+3]);
                            if(foo[1][i+3]==1) {
                                if(foo[1][i+1]=='Length') {
                                    l = foo[1][i + 3];
                                    console.log('platecost start');
                                    pltcost=platecost(l, w);
                                }

                            }
                            if(foo[1][i+3]==1) {
                                if(foo[1][i+1]=='width') {
                                    w = foo[1][i + 3];
                                    console.log('platecost start');

                                    pltcost=platecost(l, w);
                                }

                            }
                            i += 8;

                            // console.log(i);
                            // console.log(foo[1][i]);
                            while (foo[1][i] != '</type>') {

                                console.log(dropvalue);
                                console.log(foo[1][i]);
                                if (a[j].includes(foo[1][i])) {
                                    console.log(i);
                                    console.log(i + 2 + "," + foo[1][i + 2]);
                                    price = price + (quantity * foo[1][i + 2]);
                                    curr_drop_price= +curr_drop_price + +foo[1][i+2];
                                    break;

                                }
                                i += 1;
                            }

                        }
                        // if(foo[1][i+3]==1)
                        // {
                        //
                        //
                        // }
                        // else
                        // {
                        //
                        //     if()
                        // }
                        // i+=7;

                        // while(foo[1][i]!='</type>') {
                        //
                        //     if (foo[1][i] == dropvalue) {
                        //         price=price+(2*foo[1][i+2]);
                        //         break;
                        //
                        //     }
                        // }


                        // break;
                    }
                }



            }
            p=price1+price;
            globalprice=globalprice+price;
             document.getElementById("qt").innerHTML = '<span style="color:blue">'+p+'</span>';
            setTimeout('processed()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

}



function handleServerResponse5() {
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    price1 =0 ;
    curr_check_price=0;
    // console.log('hllllllo');
    if (xmlHttp_for_check.readyState == 4) {
        if (xmlHttp_for_check.status == 200) {

            // console.log("checkbox check done");
            // console.log(rdrop1);
            // calculatecost();
            // var price = calculatecost(unit,xmlHttp_for_quantity.responseText);
            // check("cost");
            // xmlResponse = xmlHttp.responseXML;
            // xmlDocumentElement = xmlResponse.documentElement;
            // // console.log('chkmsg'+xmlDocumentElement);
            // message = xmlDocumentElement.firstChild;
            // console.log(message);
            // console.log(xmlHttp_for_quantity.responseText);
            var checkvalue = xmlHttp_for_check.responseText;
            // console.log('checkvalue :' + checkvalue);
            var a = checkvalue.split('*');
            // console.log('a value' + a[1]);
            // console.log(a);
            // foo[1].splice( list.indexOf(''), 1 );
            //
            // foo[1].sp

            for (var j = 0; j < foo[1].length; j++) {
                // console.log('dipannoy');
                if (foo[1][j] === '') foo[1].splice(j, 1);
            }
            // // console.log(foo[1].length);
            // var d=JSON.parse(dropvalue);
            // console.log(d);
            // console.log('out' + a[0]);
            // for(var k=0;k<a.length;k++)
            // {
            //     console.log('length :'+a.length);
            //     console.log('value :'+a[k]);
            //
            //
            //
            // }


            for (var j = 0; j < a.length; j++) {
                for (var i = 0; i < foo[1].length; i++) {
                    if (foo[1][i] == '<specification>') {
                        // console.log('i :' + i);
                        // console.log(foo[1][i + 1]);
                        // console.log('let ' + a[j]);

                        if (a[j].includes(foo[1][i + 1])) {

                            // console.log('dhukse');
                            i += 8;
                            // console.log(i);
                            // console.log(foo[1][i]);
                            while (foo[1][i] != '</type>') {

                                // console.log(dropvalue);
                                console.log(foo[1][i]);
                                if (a[j].includes(foo[1][i])) {
                                    // console.log(i);
                                    // console.log(i + 2 + "," + foo[1][i + 2]);
                                    price1 = price1 + (quantity * foo[1][i + 2]);
                                    curr_check_price= +curr_check_price + +foo[1][i+2];
                                    break;

                                }
                                i += 1;
                            }

                        }
                        // if(foo[1][i+3]==1)
                        // {
                        //
                        //
                        // }
                        // else
                        // {
                        //
                        //     if()
                        // }
                        // i+=7;

                        // while(foo[1][i]!='</type>') {
                        //
                        //     if (foo[1][i] == dropvalue) {
                        //         price=price+(2*foo[1][i+2]);
                        //         break;
                        //
                        //     }
                        // }


                        // break;
                    }
                }


            }
            // console.log('price :'+price);
            p=price1+price;
            document.getElementById("qt").innerHTML = '<span style="color:blue">' + p + '</span>';
            setTimeout('processed()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
}

function check(s)
{
    console.log(s);
}

function calculatecost() {
    var price;
    if(u==1 && q==1) {
        price = unit * quant;
        document.getElementById("qt").innerHTML = '<span style="color:blue">' + price + '</span>';
    }


    // return unt*qtn;

}

function platecost(l,w) {
    var cmpr=10000000;
    var platename='';
    console.log('hllo from platecost');
    console.log(foo.length);

    for(var i=2;i<foo.length;i++)
    {
        // console.log(i);
        // console.log(result[i]._id);
        // if(result[i]._id==name) {
        // a=result[i]._id;
        // console.log(result[i].name);
        // console.log(result.length);
        // dat = result[i].name;
        // db.close();
        // console.log(dat);

        console.log("l :" + l);
        console.log("w :" + w);
        // var arr=dat.split("#");
        // console.log(arr);
        var pr;
        var fpr;
        var acnt;
        var updtpr;
        var num_of_print_per_plate;
        var total_plate;
        var row1;
        var column1;
        var row2;
        var column2;
        var row;
        var column;
        var plate_price;
        pr=foo[i][3];
        for(var j=5;j<foo[i].length;j++)
        {
            console.log("price"+pr);
            console.log("j value"+j);
            // 9
            row1=parseInt((foo[i][j+2]/l),10);
            column1=parseInt((foo[i][j+5]/w),10);
            row2=parseInt((foo[i][j+2]/w),10);
            column2=parseInt((foo[i][j+5]/l),10);

            if((row1*column1)>(row2*column2)) {
                row = row1;
                column = column1;
            }
            else
            {
                row=row2;
                column=column2;

            }

            // column1=arr[j+5]/w;
            // row2=arr[j+2]/w;
            num_of_print_per_plate=row*column;
            total_plate=Math.ceil(quantity/num_of_print_per_plate);
            plate_price=total_plate*foo[i][3];
            if(plate_price<cmpr) {
                cmpr = plate_price;
                platename = foo[i][1];
            }
                        // if(arr[j+1]==l && arr[j+4]==w)
            // {
            //     console.log("calculation start");
            //     acnt=qtn/arr[13];
            //     fpr=acnt*pr;
            //
            //     break;
            // }

            // j=j+8;
            break;



        }
        // console.log(arr);
        // console.log("here");
        //     res.render('index',{arr:arr,name:name,jnum:jnum,cname:cname,qtn:qtn,showdetail:showdetail});
        // }
    }
    console.log('platename :'+ platename);
    console.log('plateprice :'+cmpr);

    return cmpr;

}

var sp;

function show_options_for_input(arr){

    var drop=0;

    var responseText='';
     responseText = responseText+"<form action=\"/test/datasubmit\" method='post' >";
     responseText = responseText+" "
    var c = 0, d = 0, r = 0;
    var name;
    var rdio = 0;
    optns = null;
    var name='dip';
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] == '</product>') || (arr[i] == '</option>') || (arr[i] == '</price>') || (arr[i] == '</specification>')) {
            continue;
        }
        else if (arr[i] == '</type>') {
            if (d == 1) {
                responseText = responseText + "</select>";
                d = 0;
            }
            if (c == 1)
                c = 0;
            if (r == 1) {
                r = 0;
                responseText = responseText + "</div>";
            }
        }
        else if ((arr[i] == '<product>')) {
            responseText = responseText + "<h4>Product: " + arr[i + 1] + "</h4>\n<label>Quantity :</label><input type='number' id='qtn' oninput='process3()' > ";
            // name=arr[i+1];
            console.log("name: " + arr[i + 1]);
        }
        else if ((arr[i] == '<specification>')) {
            responseText = responseText + "<h4>SpecificationName: " + arr[i + 1] + "</h4>\n";
            sp=arr[i+1];
            console.log("Task: " + arr[i + 1]);
        }
        // else if((arr[i]=='<option>'))
        // {
        //
        //     optns=optns+arr[i+1];
        //     page=page+"<h4>"+arr[i+1]+"</h4>";
        //     console.log("Specification : "+arr[i+1]);
        // }
        else if ((arr[i] == '<type>')) {
            if (arr[i + 1] == 'textfield') {
                text1 = '<text>';
                responseText = responseText + "<input type='text' name='text1'>";
            }
            else if (arr[i + 1] == 'drop') {
                d = 1;
                var idd= "drop"+3;
                // $('#drop').attr( ' id ', idd);



                responseText = responseText + "<select name='drop1' id='drop' oninput='processed()'>     <option disabled selected value> -- select an option -- </option>";
                drop++;
                //responseText=responseText+    "";
                ;
            }
            else if (arr[i + 1] == 'checkbox') {
                c = 1;
                // page=page+"<input type='checkbox' name='check1' value=''>";
            }
            else if (arr[i + 1] == 'date') {
                // d=1;
                responseText = responseText + "<input type='date' name='date1'>";
            }
            else if (arr[i + 1] == 'radio') {
                r = 1;
                rdio++;

                // page=page+"<select name='radio'>";

            }
            else if (arr[i + 1] == 'number') {
                responseText = responseText + "<input type='date' name='number'>"
                // c=1;
            }


            //page=page+"<h3>Specification Type Name: "+arr[i+1]+"</h3>\n";
        }
        else if ((arr[i] == '<option>')) {

            optns = optns + arr[i + 1];
            responseText = responseText + "<h4>" + arr[i + 1] + "</h4>";
            if (d == 1) {

                responseText = responseText + "<option value='" +sp+'$'+ arr[i + 1] + "'>" + arr[i + 1] + "</option>";
            }
            // page=page+"<h2>Options: </h2>\n";
            // page=page+"<h2>"+arr[i+1]+"</h2>\n";
            // console.log("options: "+arr[i+1]);
            if (c == 1) {
                responseText = responseText + "<br> <input type='checkbox' name='check1' id='check' onclick='processed2()'  value='" +sp+'$'+ arr[i + 1] + "'>" + arr[i + 1];

                // page= page+"<br> <input type=checkbox name='check1' value='"+arr[i+1]+"'>"+arr[i+1];

            }

            if (r == 1) {
                // page=page+"<form>";
                responseText = responseText + "<br><div><input   type='radio' name='radio1' value='" + arr[i + 1] + "' />" + arr[i + 1];


            }
        }
        else {
            continue;
        }
    }
     responseText = responseText + "<br><br><button name='prname' value='" + name + "'>Confirm</button></form>";

    // responseText = responseText + "  <script src='https://code.jquery.com/jquery-1.10.2.js'>"+
    // "var idd= \"drop\"+drop;"+
    //
    // "$('#drop').attr( ' id ', idd);"+
    // "drop=drop+1;"+
    //
    // // $( "p" ).hide();
    // // $( "a" ).click(function( event ) {
    // //     event.preventDefault();
    // //     $( this ).hide()
    // // });
    // // language=HTML
    // "</script>";
    // console.log(responseText)
    return responseText;




}

//module.exports=plates;