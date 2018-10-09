 var xmlHttp = createXmlHttpRequestObject();

    function createXmlHttpRequestObject() {
        var xmlHttp;

        if(window.ActiveXObject) {
            try{
                xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e){
                xmlHttp = false;
            }
        }else{
             try{
                xmlHttp = new XMLHttpRequest();
            } catch(e){
                xmlHttp = false;
            }
        }

        if(!xmlHttp)
            alert("Cant create that object!");

        else {
            return xmlHttp;
        }
    }

    // This is now the communication part!

    function process() {
        if(xmlHttp.readyState==0 || xmlHttp.readyState==4){
            food =  encodeURIComponent(document.getElmentById("userInput").value);
            xmlHttp.open("GET", "/test/order3" + food, true);
            xmlHttp.onreadystatechange = handleServerResponse;
            xmlHttp.send(null);
        }else{
            setTimeout('process()',1000);
        }
    }

    function handleServerResponse() {

        if(xmlHttp.readyState==4){
            if(xmlHttp.status==200){
                xmlResponse = xmlHttp.responseXML;
                xmlDocumentElement = xmlResponse.documentElement;
                message = xmlDocumentElement.firstChild.data;
                document.getElementById("underInput").innerHTML = '<span styel="color:blue">' + message + '</span>';
                setTimeout('process()',1000);
            }else{
                alter('Something went wrong!');
            }
        }

    }