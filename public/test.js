
// var math = require('mathjs');

var xmlHttp = createXmlHttpRequestObject();
var xmlHttp_for_unit_cost = createXmlHttpRequestObject2();
var xmlHttp_for_quantity = createXmlHttpRequestObject3();
var xmlHttp_for_drop=createXmlHttpRequestObject4();
var xmlHttp_for_check=createXmlHttpRequestObject5();
var xmlHttp_for_num=createXmlHttpRequestObject6();
// var math = require('mathjs');


// import math from index.js
// var math=require('mathjs');

// var parser=require('Parser');

var num_spec_array=[];
var drop_spec_array=[];
var check_spec_array=[];
var inter_spec_array=[];
var inter_spec_price=[];

var curr_drop_price=0;
var curr_check_price=0;
var paper_cost_array=[];
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


function createXmlHttpRequestObject6(){
    var xmlHttp_for_num;

    if(window.ActiveXObject){
        try{
            xmlHttp_for_num = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(e){
            xmlHttp_for_num = false;
        }
    }else{
        try{
            xmlHttp_for_num = new XMLHttpRequest();
        }catch(e){
            xmlHttp_for_num = false;
        }
    }

    if(!xmlHttp_for_num){
        alert("Cant create that object");
    }else{
        return xmlHttp_for_num;
    }
}

var numberr=[];
var num=[];
var drop_value=[];
var check_value=[];


function processnum(){
    // let food;

    var temp=[];
    var pass='';
    var num=[];
     numberr=[];
    paper_cost_array=[];
    if (xmlHttp_for_num.readyState == 0 || xmlHttp_for_num.readyState == 4) {

        for (var i = 0; i < document.getElementsByName('number').length; i++) {
            num.push(document.getElementsByName('number')[i].value);
            numberr.push(document.getElementsByName('number')[i].value);


        }

        for (var i = 0; i < num.length; i++)
        {
            if(num[i]!='') {
                pass += num[i] + '$';
            }


        }

        console.log('num arrray:'+num)


        for( var j = 0;j<foo[1].length; j++){
            // console.log('dipannoy');
            if ( foo[1][j] === '' ) foo[1].splice(j, 1);
        }
        // for( var j = 0;j<foo[4].length; j++){
        //     // console.log('dipannoy');
        //     if ( foo[1][j] === '' ) foo[1].splice(j, 1);
        // }

        var numind=0;
        for(var i=0;i<foo[1].length;i++)
        {
            if(foo[1][i]=='number') {
                if(foo[1][i-3]==1) {
                    console.log('paper matched');
                    if (num[numind] != '') {
                        var a = foo[1][i - 8] + '$' + num[numind];
                        numind++;
                        paper_cost_array.push(a);
                    }
                }
                num_spec_array.push(foo[1][i - 8]);
            }

        }
        // var food = document.getElementsByName('number').value;
        // num.push(food);
        // console.log('bodmas :'+bodmas());


        // console.log('f---'+f());

         // console.log(math.evaluate('1.2 * (2 + 4.5)'));     // 7.8


        // var r=sum(bodmas());
        //
        // console.log('r----'+r);

         // console.log('result :'+math.eval(bodmas()));
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_num.open("GET", "/number/" + 5, true);
        xmlHttp_for_num.onreadystatechange = handleServerResponse6;
        xmlHttp_for_num.send(null);
        // next();

    } else {
        // next();
        setTimeout('processnum()', 1000);
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

        for(var i=0;i<foo[1].length;i++)
        {
            if(foo[1][i]=='drop') {
                drop_spec_array.push(foo[1][i - 5]);
            }

        }

        // for(var i=0;i<drop.length;i++)
        // {
        //     var t;
        //     if(drop[i]!='') {
        //         a=drop[i];
        //         t = drop[i].split('$');
        //         drop_value.push(t[1]);
        //     }
        //
        // }
        //
        // console.log('drop value :'+drop_value);

        for(var i=0;i<drop.length;i++)
        {
            console.log('drop value :'+drop[i]);
             send_drop+=drop[i].value+'*';

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
        var check = document.getElementsByName('check1');

        for(var i=0;i<foo[1].length;i++)
        {
            if(foo[1][i]=='checkbox') {
                check_spec_array.push(foo[1][i - 5]);
            }

        }


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
        curr_drop_price=0;
        curr_check_price=0;
        xmlHttp.open("GET", "/start/" + food, true);
        xmlHttp.onreadystatechange = handleServerResponse;
        xmlHttp.send(null);
        // next();

    } else {
        // next();
        setTimeout('process()', 1000);
    }
}

function process2(num,drop){
    // let food;
    // unit=0;
    if (xmlHttp_for_unit_cost.readyState == 0 || xmlHttp_for_unit_cost.readyState == 4) {
        // var unitcost = document.getElementById("unit").value;
        console.log('My Drop'+drop);
        console.log('My number'+num);
        u=1;
        // unit=unitcost;
        // console.log(unitcost);
        // check(document.getElementById("userInput").value);
        // console.log(document.body("userInput").value);
        // document.getElementById("underInput").innerHTML = '<span style="color:blue">'+food+'</span>'
        xmlHttp_for_unit_cost.open("GET", "/start2/" + drop, true);
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
    inter_spec_array=[];
    inter_spec_price=[];
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
            for( var j = 0;j<foo[1].length; j++){
                // console.log('dipannoy');
                if ( foo[1][j] === '' ) foo[1].splice(j, 1);
            }

            for(var i=0;i<foo[1].length;i++)
            {
                if(foo[1][i]=='drop' || foo[1][i]=='checkbox')
                {
                    inter_spec_array.push(foo[1][i-8]);
                }

            }

            for(var j=0;j<inter_spec_array.length;j++)
            {
                inter_spec_price[j]=0;

            }


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
            document.getElementById("function").innerHTML = '<span style="color:red">' +p + '</span>';


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
var pfnl_bodmas=0;
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
var p_bd1=0;
var p_bd2=0;
var p_bd3=0;


var globalprice=0;


function handleServerResponse4(){
    drop_value=[];
    var fnc_value=[];
    var inter_price;
    paper_cost_array_drop=[];
    var fnc=[];
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    price=0;
    console.log('hllllllo');
    curr_drop_price=0;
    p_bd1=0;
    var pltcost;
    if (xmlHttp_for_drop.readyState == 4) {
        if (xmlHttp_for_drop.status == 200) {

            console.log("quantity check done");

            for( var j = 0;j<foo[1].length; j++){
                // console.log('dipannoy');
                if ( foo[1][j] === '' ) foo[1].splice(j, 1);
            }
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


            for(var i=0;i<a.length;i++)

            {
                fnc_value=[];
                fnc=[];
                if(a[i]!='')

                {
                    var b=a[i].split('$');
                    drop_value.push(b[1]);

                     for(var j=0;j<foo[1].length;j++)
                     {

                        if(foo[1][j]==b[0])
                        {
                            if(foo[1][j+5]==1)
                                paper_cost_array_drop.push(a[i]);

                            console.log('matchedddddddd');

                            while(foo[1][j]!='</type>')
                            {

                                if(foo[1][j]=='<option>')

                                {
                                    console.log('after option-------'+foo[1][j+1]);
                                    if(foo[1][j+1]==b[1])
                                    {
                                        console.log('after match-------'+foo[1][j+1]);

                                        // console.log(foo[1][j+])

                                        fnc_value.push(foo[1][j+3]);
                                        fnc_value.push(foo[1][j+5]);


                                         // break;
                                    }
                                }
                                j++;
                            }
                             j+=2;

                            while(foo[1][j]!='</function>')
                            {
                                fnc.push(foo[1][j]);
                                j++;

                            }
                            inter_price=bodmas2(fnc_value,fnc,quantity);
                            p_bd1+=bodmas2(fnc_value,fnc,quantity);


                            break;
                      }
                    //
                    }

                    for(var i=0;i<inter_spec_array.length;i++)
                    {

                        if(inter_spec_array[i]==b[0])
                        {

                            inter_spec_price[i]=inter_price;
                        }



                    }



                }






            }

            paprcost_drop=papercost(paper_cost_array_drop);
            console.log('drop-----'+drop_value);

            console.log('helllllllo dipannnoly');
            // console.log('fnc_value------'+fnc_value);
            // console.log('fnc-------'+fnc);
            // console.log('a value'+a[1]);
            // console.log(a);
            // foo[1].splice( list.indexOf(''), 1 );
            //
            // foo[1].sp




            // var dd=eval(bodmas());


            // var ii=

            // for( var j = 0;j<foo[4].length; j++){
            //     // console.log('dipannoy');
            //     if ( foo[4][j] === '' ) foo[4].splice(j, 1);
            // }
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
                                    price = price + ((quantity/foo[1][i+4]) * foo[1][i + 2]);
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
            pfnl_bodmas=p_bd1+p_bd2+p_bd3+paprcost_num+paprcost_drop+paprcost_check;
            p=price1+price;
             //qt te p hobe
            globalprice=globalprice+price;
             document.getElementById("qt").innerHTML = '<span style="color:blue">'+p+'</span>';
            document.getElementById("function").innerHTML = '<span style="color:blue">'+pfnl_bodmas+'</span>';

            setTimeout('processed()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

}

var paprcost_num=0;
var paprcost_drop=0;
var paprcost_check=0;



function handleServerResponse5() {
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    check_value=[];
    var interprice;
    paper_cost_array_check=[];


    var fnc_value=[];
    var fnc=[];

    price1 =0 ;
    p_bd2=0;
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
            for( var j = 0;j<foo[1].length; j++){
                // console.log('dipannoy');
                if ( foo[1][j] === '' ) foo[1].splice(j, 1);
            }
            var checkvalue = xmlHttp_for_check.responseText;
            // console.log('checkvalue :' + checkvalue);
            var a = checkvalue.split('*');

            // var a=dropvalue.split('*');

            for(var i=0;i<a.length;i++)
            {
                fnc_value=[];
                fnc=[];
                if(a[i]!='')

                {
                    var b=a[i].split('$');
                    check_value.push(b[1]);

                    for(var j=0;j<foo[1].length;j++)
                    {

                        if(foo[1][j]==b[0])
                        {
                            if(foo[1][j+5]==1)
                                paper_cost_array_check.push(a[i]);

                            // console.log('matchedddddddd');

                            while(foo[1][j]!='</type>')
                            {

                                if(foo[1][j]=='<option>')

                                {
                                    console.log('after option-------'+foo[1][j+1]);
                                    if(foo[1][j+1]==b[1])
                                    {
                                        console.log('after match-------'+foo[1][j+1]);

                                        // console.log(foo[1][j+])

                                        fnc_value.push(foo[1][j+3]);
                                        fnc_value.push(foo[1][j+5]);


                                        // break;
                                    }
                                }
                                j++;
                            }
                            j+=2;

                            while(foo[1][j]!='</function>')
                            {
                                fnc.push(foo[1][j]);
                                j++;

                            }
                            interprice=bodmas2(fnc_value,fnc,quantity);
                            p_bd2+=bodmas2(fnc_value,fnc,quantity);


                            break;
                        }
                        //
                    }

                    for(var i=0;i<inter_spec_array.length;i++)
                    {

                        if(inter_spec_array[i]==b[0])
                        {

                            inter_spec_price[i]=interprice;
                        }



                    }



                }



            }

            paprcost_check=papercost(paper_cost_array_check);
            console.log('check-----'+check_value);
            console.log('inter spec array'+inter_spec_array);
            console.log('inter spec price '+inter_spec_price);
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
                                    price1 = price1 + ((quantity/foo[1][i+4]) * foo[1][i + 2]);
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
            pfnl_bodmas=p_bd1+p_bd2+p_bd3+paprcost_num+paprcost_drop+paprcost_check;
            document.getElementById("qt").innerHTML = '<span style="color:blue">' + p + '</span>';
            document.getElementById("function").innerHTML = '<span style="color:blue">' + pfnl_bodmas + '</span>';

            setTimeout('processed()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
}


function handleServerResponse6(){
    let xmlResponse;
    let xmlDocumentElement;
    let message;
    // price=0;
    // price1=0;
    // var p=price+price1;
    // quantity=0;
    if (xmlHttp_for_num.readyState == 4) {
        if (xmlHttp_for_num.status == 200) {

            console.log("num check done");
            // check("chkkk");
            var product=[];
            // xmlResponse = xmlHttp.responseXML;
            // xmlDocumentElement = xmlResponse.documentElement;
            // // console.log('chkmsg'+xmlDocumentElement);
            // message = xmlDocumentElement.firstChild;
            // console.log(message);
            // foo=JSON.parse(xmlHttp.responseText);
            // console.log(foo);

            // product.push(xmlHttp.responseText);
            // var o=show_options_for_input(foo[1]);
            // console.log(foo[1].length);
            console.log(xmlHttp_for_num.responseText);

            // var dd=eval(bodmas());

            // console.log();

            // console.log(xmlHttp.responseText);

            // console.log(xmlHttp.responseText[5]);
            // var a=xmlHttp.responseText.split("#");
            // var b=a[1];
            // console.log(b);
            // console.log(b[3]);
            // for(var i=0;i<xmlHttp.responseText.length;i++) {
            //  document.getElementById("underInput").innerHTML = '<span style="color:blue">' + dd + '</span>';

            paprcost_num=papercost(paper_cost_array);
            console.log('before bodmas'+numberr);
            p_bd3=bodmas();

            p=price1+price;

            console.log('pbd1 '+p_bd1);
            console.log('pbd2 '+p_bd2);
            console.log('pbd3 '+p_bd3);
            console.log('papercost_num '+paprcost_num);
            console.log('papercost_drop '+paprcost_drop);
            console.log('papercost_check '+paprcost_check);





            pfnl_bodmas=p_bd1+p_bd2+p_bd3+paprcost_num+paprcost_drop+paprcost_check;
            document.getElementById("qt").innerHTML = '<span style="color:blue">' + paprcost_num + '</span>';
            document.getElementById("function").innerHTML = '<span style="color:blue">' + pfnl_bodmas + '</span>';
             // document.getElementById("qt").innerHTML = '<span style="color:red">' + + '</span>';

            // }
            setTimeout('processnum()', 10000000);
        } else {
            alert('Something went wrong!');
        }
    }
    // xmlHttp.send();

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
    var text;
    // var chck;

    responseText+="<head>"+'      "<script src="math.js" type="text/javascript"></script>"'+ "</head>"
     responseText = responseText+"<form action=\"/datasubmit\" method='post' >";
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
            responseText = responseText + "<h4>Product: " + arr[i + 1] + "</h4>\n<label>Quantity :</label><input type='number' id='qtn' name='qtn' oninput='process3()' > ";
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
                responseText = responseText + "<input type='number' id='numb'  name='number' value='' oninput='processnum()'>"
                // c=1;
            }


            //page=page+"<h3>Specification Type Name: "+arr[i+1]+"</h3>\n";
        }
        else if ((arr[i] == '<option>')) {

            optns = optns + arr[i + 1];
            // responseText = responseText + "<h4>" + arr[i + 1] + "</h4>";
            if (d == 1) {

                responseText = responseText + "<option value='" +sp+'$'+ arr[i + 1] + "'>" + arr[i + 1] + "</option>";
            }
            // page=page+"<h2>Options: </h2>\n";
            // page=page+"<h2>"+arr[i+1]+"</h2>\n";
            // console.log("options: "+arr[i+1]);
            if (c == 1) {
                responseText = responseText + " <input type='checkbox' name='check1' id='check' onclick='processed2()'  value='" +sp+'$'+ arr[i + 1] + "'>" + arr[i + 1] +"&nbsp; &nbsp; &nbsp;";
                var chck=document.getElementsByName('check1');

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
     // responseText=responseText+"<input type='button' value='Done' onclick=papercost()>"
// <input type="button" class="btn btn-info btn-lg" value="Done" onclick="location.href = '/print6';">

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



function sum(s) {

    var r=0;

    r=+r + +s;


    return r;

    
}

var paperarray=[];
var platearray=[];
var array_plate=[];
var array_paper=[];


function changearray()
{

    var paper='<paper>#A4#<length>#9#</length>#<width>#11.5#</width>#<price>#1#</price>#</paper>#<paper>#A5#<length>#12#</length>#<width>#15#</width>#<price>#1.5#</price>#</paper>#<paper>#A6#<length>#14#</length>#<width>#18#</width>#<price>#2#</price>#</paper>';
    var plate='<plate>#Hashi#<length>#10#</length>#<width>#15#</width>#</plate>#<plate>#Demi#<length>#12#</length>#<width>#18#</width>#</plate>#<plate>#DoubleDemi#<length>#15#</length>#<width>#20#</width>#</plate>';
    paperarray.push(paper);
    platearray.push(plate);
    array_plate=platearray[0].split('#');

    array_paper=paperarray[0].split('#');


}
function papercost(paper) {
    // console.log('paper array :'+paper_cost_array);
    changearray();

    if(paper.length<2)
        return 0;

    else {

        for (var i = 0; i < paper.length; i++) {

            //l,w,q chilo
            var a = paper[i].split('$');
            var b = paper[i + 1].split('$');
            l = a[1];
            w = b[1];
            var l_plt = 0;
            var w_plt = 0;
            // q=100;

            console.log("l :" + l);
            console.log("w :" + w);

            var pr;
            var fpr;
            var acnt;
            var updtpr;
            var num_of_print_per_page;
            var total_page;
            var max = 100000000;
            var row1;
            var column1;
            var row2;
            var column2;
            var row;
            var column;
            var plate_price;
            var ppr_price;
            var paper = '';
            for (var j = 0; j < array_paper.length; j++) {
                if (array_paper[j] == '<paper>') {
                    // console.log("price"+pr);
                    // console.log("j value"+j);
                    // console.log("plt_lnth"+arr[j+2]);
                    // console.log("plt_wdth"+arr[j+5]);
                    row1 = parseInt((array_paper[j + 3] / l), 10);
                    column1 = parseInt((array_paper[j + 6] / w), 10);
                    row2 = parseInt((array_paper[j + 3] / w), 10);
                    column2 = parseInt((array_paper[j + 6] / l), 10);

                    if ((row1 * column1) > (row2 * column2)) {
                        row = row1;
                        column = column1;
                    }
                    else {
                        row = row2;
                        column = column2;

                    }

                    // column1=arr[j+5]/w;
                    // row2=arr[j+2]/w;
                    num_of_print_per_page = row * column;
                    total_page = Math.ceil(quantity / num_of_print_per_page);

                    if (total_page < max) {
                        max = total_page;
                        paper = array_paper[j + 1];
                        l_plt = array_paper[j + 3];
                        w_plt = array_paper[j + 6];
                        ppr_price = total_page * array_paper[j + 9];
                    }
                    // plate_price=total_plate*arr[3];
                    // if(plate_price<cmpr) {
                    //     cmpr = plate_price;
                    //     platename = arr[1];
                    // }
                    // if(arr[j+1]==l && arr[j+4]==w)
                    // {
                    //     console.log("calculation start");
                    //     acnt=qtn/arr[13];
                    //     fpr=acnt*pr;
                    //
                    //     break;
                    // }

                    // j=j+8;
                    j = j + 11;
                    // break;


                }

                i += 2;


                // console.log(arr);
                // console.log("here");
                //     res.render('index',{arr:arr,name:name,jnum:jnum,cname:cname,qtn:qtn,showdetail:showdetail});
                // }


            }
            console.log('paper for ' + a[0] + '&&&&' + b[0] + paper);
            console.log('max  ' + max);
            console.log('Paper Price :' + ppr_price);
            // console.log('PlateName  :' + choicePlate(l_plt, w_plt));
        }

        return ppr_price;

    }


}

function bodmas2(a,b,q)
{

    // var q=400;
    var sorol='';

    console.log('func----'+a);
    console.log('func_value----'+b);

        for(var i=0;i<b.length;i++)
    {
        if(b[i]=='price')
        {
            b[i]=a[0];
        }
        else if(b[i]=='unit')
        {
            b[i]=a[1];
        }
        else if(b[i]=='quantity')
        {

            b[i]=q;
        }
        else
        {
            continue;
        }


    }

    console.log('b after mnod :'+b.length);

        for(var i=0;i<b.length;i++)
    {
        sorol+=b[i];
        console.log('sorol :'+sorol);



    }
    console.log('Final_sorol :'+sorol);



    console.log('Evaluation '+eval(sorol));

    return eval(sorol);
    // consol


    // for()


}



function bodmas()
{
    var sorol='';

    var temp=[];
    var temp2=[];
    var func=[];

    for( var j = 0;j<foo[1].length; j++){
        // console.log('dipannoy');
        if ( foo[1][j] === '' ) foo[1].splice(j, 1);
    }

    for(var i=0;i<foo[1].length;i++)
    {

        if(foo[1][i]=='<final_function>') {
            console.log('fnc match');
            i += 1;
            for (var j = i; j < foo[1].length; j++) {

                if (foo[1][j] == '</final_function>')
                    break;
                else
                    func.push(foo[1][j]);

            }
            break;

        }


            // while (foo[1][i]!='</final_function>')
            // {
            //     func.push(foo[1][i]);
            //     i++;
            //
            //
            // }
    }

    console.log('func '+func);
    //
    // for(var i=0;i<foo[4].length;i++)
    // {
    //
    //     temp.push(foo[4][i]);
    // }
    // console.log(foo[4]);

    console.log('num  '+num);

    for(var i=0;i<num_spec_array.length;i++) {
        for (var j = 0; j < func.length; j++) {
            if (func[j]==num_spec_array[i]) {
                func[j]=numberr[i];

            }


        }
    }

    // for(var i=0;i<drop_spec_array.length;i++) {
    //     for (var j = 0; j < foo[4].length; j++) {
    //         if (foo[4][j]==drop_spec_array[i]) {
    //             temp[j]=drop_value[i];
    //
    //         }
    //
    //
    //     }
    // }

    for(var i=0;i<func.length;i++)
    {
        sorol+=func[i];


    }

    console.log('sorol for final '+sorol);

    var r=eval(sorol);

    console.log('cost for final functio'+r);

    return r;



}

//module.exports=plates;