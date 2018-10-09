
var express = require('express');
var jquery = require('jquery');
//import test from "../public/test";

//var test = require('../public/test');

var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var data=[];
var datacltshow = [];
var receivedata = [];
var invoicearray = [];
var orderarray = [];
var costestimationdata;
var parseddatum='';
var platedatum='';
var url = 'mongodb://localhost:27017/test';
var datum='';
var check = 0;
var check2= 0;
var check3= 0;
var start = 0;

var chk1 = 0;
var chk2 = 0;
var chk3 = 0;
var chk4=0;
var s=0;
var start2=0;
var taskname;
var project=[];
let arr=[];

var typearray = ['textfield','drop','checkbox','date','radio','number'];
var operatorarray =['+','-','*','/','%','(',')'];


/* GET home page. */
router.get('/', function(req, res, next) {

    var a=['red','green'];
    var b= 'green';
    // if(a[1]==b)
    //     console.log(40/25);
    start =1;
    start2 = 1;
    var num = 2223;
    console.log(parseInt(num, 10)); // 2
    //console.log(test.test[0]);
    // console.log(typearray[1]);
    // mongo.connect(url, function(err, db) {
    //     // var name= req.body.product;
    //     // var jnum= req.body.jnum;
    //     // var cname=req.body.cname;
    //     // var qtn=req.body.qtn;
    //     // console.log(name);
    //     var dat="";
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("platess").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         console.log('database achhe');
    //         console.log(result.length);
    //         console.log(result[i]._id);
    //         for(var i=0;i<=result.length;i++)
    //         {
    //             // console.log(result[i].name);
    //
    //             if(result[i]._id=='Hashi') {
    //                 dat = result[i].name;
    //                 db.close();
    //                 // console.log(dat);
    //                 var arr=dat.split("#");
    //                 console.log(arr);
    //                 console.log("here");
    //             }
    //         }
    //     });
    //     res.render('index',{start:start,start2:start2});
    //
    // });

    // mongo.connect(url, function(err, db) {
    //     // var name= req.body.product;
    //     // var jnum= req.body.jnum;
    //     // var cname=req.body.cname;
    //     // var qtn=req.body.qtn;
    //     // console.log(name);
    //     var dat="";
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("plates").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         for(var i=0;i<result.length;i++)
    //         {
    //             console.log(i);
    //             // console.log(result[i]._id);
    //             // if(result[i]._id==name) {
    //                 a=result[i]._id;
    //                 console.log(result[i].name);
    //                 dat = result[i].name;
    //                 db.close();
    //                 // console.log(dat);
    //                 var arr=dat.split("#");
    //                 console.log(arr);
    //                 // console.log("here");
    //             //     res.render('index',{arr:arr,name:name,jnum:jnum,cname:cname,qtn:qtn,showdetail:showdetail});
    //             // }
    //         }
    //     });
    // });
    product=[];

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result[0].name);

            // console.log(result);
            for(var i=0;i<result.length;i++)
            {
                product.push(result[i]._id);


            }
            // product=result;
            res.render('index',{product:product});

            db.close();
            // res.render('add',{product:product,order1:order1,ordercount:ordercount});


        });
    });
    // res.render('add',{product:product,order1:order1,ordercount:ordercount});


    // res.send({msg:hlllo});




    // var arrray = ['show the page','unit','lot'];
    // res.render('index',{start:start,start2:start2,arrray:arrray});
});
var chk ;

router.get('/product', function(req, res, next)
{
     console.log(req.query.id);
     var product = req.query.id;
     var spec = [];
     var arr=[];


    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result[0].name);

            console.log(result);
            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==product)
                {

                    var dat;

                    console.log('hi i am here');

                    dat = result[i].name;
                    arr=dat.split("#");
                    for(var j=0;j<arr.length;j++)
                    {
                        if(arr[j]=='<specification>')
                        {

                            spec.push(arr[j+1]);
                        }



                    }

                }


            }
            // product=result;
            res.render('index',{p:1,product:product,spec:spec});

            db.close();
            // res.render('add',{product:product,order1:order1,ordercount:ordercount});


        });
    });


})

router.get('/specification',function(req, res, next){

    // console.log(req.params.product);
    console.log(req.query.id1);
    console.log(req.query.id2);
    var s=req.query.id1;
    var p=req.query.id2;

    var spec=[];

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==p) {
                    console.log('i got 1');

                    var dat;
                    // console.log('spec result :'+result[i]);


                    // console.log('hi i am here');

                    dat = result[i].name;
                    arr = dat.split("#");
                    for (var j = 0; j < arr.length; j++) {
                        // console.log('dipannoy');
                        if (arr[j] === '') arr.splice(j, 1);
                    }

                    console.log(arr.length);


                    for (var j = 0; j < arr.length; j++) {
                        if (arr[j] == s) {
                            console.log('i got 2');
                            for (var k = j; k < arr.length; k++) {

                                if (arr[k] == '</specification>') {
                                    break;
                                }
                                else {


                                    console.log('i got 3');


                                    if (arr[k] == '<option>' || arr[k] == '</option>' || arr[k] == '<price>' || arr[k] == '</price>' || arr[k] == '<unit>' || arr[k] == '</unit>' || arr[k] == '<type>' || arr[k] == '</type>' || arr[k] == '</plate>' || arr[k] == '<plate>') {
                                        console.log('i got 4');

                                        continue;
                                    }
                                    else {
                                        console.log('i got 5');


                                        spec.push(arr[k]);

                                    }
                                }

                            }
                            break;


                        }

                    }
                }


            }


            db.close();
            // product=result;

            console.log('spec :'+spec);
            res.render('index',{p2:1,spec_array:spec,specification:s,product:p});


            // res.render('add',{product:product,order1:order1,ordercount:ordercount});


        });
    });




    // res.render('index',{h:1});




})

var upd_product='';
var upd_specification='';

router.get('/specification2',function(req, res, next){


    console.log('specification2');
    console.log(req.query.id1);
    console.log(req.query.id2);

    upd_product=req.query.id1;
    upd_specification=req.query.id2;

    res.render('index',{p3:1});

})

router.post('/specification3',function(req, res, next){
    var option=req.body.option;
    var price =req.body.price;
    var unit=req.body.unit;

    res.render('index',{});


})

router.post('/specification4',function(req, res, next){
    // var option=req.body.option;
    // var price =req.body.price;
    // var unit=req.body.unit;

    res.render('index',{});


})


router.get('/start/:id', function(req, res, next) {
     console.log(req.params.id);

    var data='dip';
    // page=page+"<input type='text' name='text1'>";

    var responseText='';
    var foot=['messi','higuain'];
    var crckt=['mash','fizz'];

    // console.log(plate[0]);
    console.log(foot[0]);
    var pusharray=[];
    pusharray.push(foot+"#");
    pusharray.push(crckt);
    // res.send(pusharray);
    var foot
    chk=0;
    // responseText=responseText+"<input type='text' name='text1'>";
    // res.send(responseText);
    // console.log('response :'+responseText);

    // if(req.params.id=='abcde')
    // {
    //     responseText='its a match';
    //     res.send(responseText);
    //
    // }
    // else
    // {
    //     responseText='its not match';
    //     res.send(responseText);
    //
    // }




    var arr=[];
    var array=[[]];

    // console.log('database start');
    mongo.connect(url, function(err, db) {
        // name= req.body.product;
        // var ordcount =ordercount;
        // // var jnum= req.body.jnum;
        // cname=req.body.cname;
        // qtn=req.body.qtn;
        // orderarray.push("ClientName :"+cname);
        // orderarray.push("Product :"+name);
        //
        // orderarray.push("Quantity :"+qtn);
        // console.log(name);
        // var dat="";
        console.log('database enter');
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==req.params.id) {
                    chk=1;

                    dat = result[i].name;
                    arr=dat.split("#");
                    array.push(arr);
                    db.close();
                    var plte;
                    var plate;
                    // console.log('matched');
                    // console.log(dat);
                    // dbo.collection("plt").find({}).toArray(function(err, result) {
                    //     if (err) throw err;
                    //     for(var i=0;i<result.length;i++) {
                    //
                    //         plte = result[i].name;
                    //
                    //         plate = plte.split("#");
                    //         console.log(plate);
                    //         array.push(plate);
                    //     }
                    //
                    // });

                    // res.send(array);
                    // for(var j=0;j<arr.length;j++)
                    //     res.send(arr[i]);
                    //     res.next();
                    //  res.send(arr);
                        responseText = "<form action=\"/test/datasubmit\" method='post' >";
                        var c = 0, d = 0, r = 0;
                        var name;
                        var rdio = 0;
                        optns = null;
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
                                responseText = responseText + "<h4>Product: " + arr[i + 1] + "</h4>\n";
                                // name=arr[i+1];
                                console.log("name: " + arr[i + 1]);
                            }
                            else if ((arr[i] == '<specification>')) {
                                responseText = responseText + "<h4>SpecificationName: " + arr[i + 1] + "</h4>\n";
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
                                    responseText = responseText + "<select name='drop1'>";
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
                                    responseText = responseText + "<option value='" + arr[i + 1] + "'>" + arr[i + 1] + "</option>";
                                }
                                // page=page+"<h2>Options: </h2>\n";
                                // page=page+"<h2>"+arr[i+1]+"</h2>\n";
                                // console.log("options: "+arr[i+1]);
                                if (c == 1) {
                                    responseText = responseText + "<br> <input type='checkbox' name='check1' value='" + arr[i + 1] + "'>" + arr[i + 1];
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
                    // console.log('inner chk :'+chk);
                    break;
                    // console.log(arr);
                    // console.log("here");
                    // res.render('index',{arr:arr,ordercount:ordcount,name:name,cname:cname,qtn:qtn,order2:order2});
                }
                else
                {
                    responseText=responseText+'noproduct';
                }
            }
            // res.send(responseText);
        });
    });

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("plt").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(var i=0;i<result.length;i++) {

                plte = result[i].name;

                plate = plte.split("#");
                console.log(plate);
                 array.push(plate);
                 // res.end();
                // res.next;

            }

            var timer = setTimeout(function () {
                res.send(array);
            }, 100);
            req.once('timeout', function () {
                clearTimeout(timer);
            });

            // res.send(array);
            //
            // res.send(array);


        });
    });
    // res.next();







});

router.get('/start2/:id', function(req, res, next) {
    console.log(req.params.id);
    var responseText = 'ok from cost';

    res.send(responseText);





});
router.get('/start3/:id', function(req, res, next) {
    console.log(req.params.id);
    var responseText = req.params.id;

    res.send(responseText);





});

router.get('/drop/:id', function(req, res, next) {
    // var d=[];
    // console.log(req.params.id);
    // //  var responseText = req.params.id;
    // // d.push(res.params.id);
    // var responseText=res.params.id;
    // var d=JSON.parse(req.params.id);
    // console.log(d);


    res.send(req.params.id);





});

router.get('/check/:id', function(req, res, next) {
    // var d=[];
    // console.log(req.params.id);
    // //  var responseText = req.params.id;
    // // d.push(res.params.id);
    // var responseText=res.params.id;
    // var d=JSON.parse(req.params.id);
    // console.log(d);


    res.send(req.params.id);





});

function check()
{

    console.log(some);
}




router.post('/test/signed',function (req,res,next) {
    // if(!sess.email) {
    //     res.redirect('/');
    // }
    unam= req.body.uname;
    pass= req.body.passw;
    type=req.body.type;
    data="<name>#"+unam+"#</name>#"+"<pass>#"+pass+"#</pass>#"+"<type>#"+type+"#</type>";
    if((unam=="")||(pass="")||(type==""))
    {
        res.render('index')
    }
    else
    {
        mongo.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            var myobj ={ _id: unam, name: data};
            //var myobj = { name: "Company Inc", address: "Highway 37" };
            dbo.collection("Employers").insertOne(myobj, function(err, res) {
                if (err) throw err;
                console.log("1 document inserted");
                console.log(data);
                db.close();
            });
        });
        res.render('index');
    }


});
var afterlog;
var afterlog2;

router.post('/test/logged',function (req,res,next) {
    // if(flag==1) {
    //     res.redirect('/');
    // }
    afterlog = 0;
    afterlog2=0;
    var name= req.body.name;
    var pass= req.body.pass;
    console.log(name + pass);
    var f=0;
    mongo.connect(url, function(err, db) {
        var dat="";
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("Employers").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id=name)
                {
                    var data= result[i].name;
                    var arr=data.split('#');
                    for(var j=0;j<arr.length;j++)
                    {
                        if((arr[j]==name)&&(arr[j+3]==pass))
                        {
                            if(arr[j+6]=='manager')
                                f=1;
                            else
                                f=-1;
                            break;
                        }
                    }
                }
            }
            if(f==0)
            {
                var errs ="Invalid Login";
                var succ=false;
                afterlog=0;
                afterlog2 =0;
                console.log("invalid login");

                // res.render('login',{success: succ, errors: errs}  );
                res.render('index');

            }

            else if(f==1) {
                afterlog=1;
                afterlog2=1;
                console.log(afterlog);
                res.render('index',{afterlog:afterlog,afterlog2:afterlog2});
            }
            else{
                afterlog=1;
                afterlog2=1;


                console.log("admin");
                console.log(afterlog);

                res.render('index',{afterlog:afterlog,afterlog2:afterlog2});
            }

        });
    });

});
var show_data;

var show_data2;


var show_data3;

var i;













var showprjct=0;




router.get('/get-data', function(req, res, next) {
    var resultArray = [];
    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        var cursor = db.collection('my-data').find();
        cursor.forEach(function(doc, err) {
            assert.equal(null, err);
            resultArray.push(doc);
        }, function() {
            db.close();
            console.log(resultArray);
            res.render('index', {items: resultArray});
        });
    });
});

router.post('/insert', function(req, res, next) {
    var item = {
        parent: "ami",
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };

    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        //item.parent=req.body.author;
        db.collection('my-data').insertOne(item, function(err, result) {
            assert.equal(null, err);

            console.log('Item inserted');

            db.close();
        });
    });

    res.redirect('/get-data');
});
var Handlebars=require('handlebars');
Handlebars.registerHelper('times', function(n, block) {
    var accum = '';
    for(var i = 1; i <=n; ++i)
        accum += block.fn(i);
    return accum;
});
router.post('/update', function(req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    };
    var id = req.body.id;

    mongo.connect(url, function(err, db) {
        assert.equal(null, err);
        db.collection('products').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
            assert.equal(null, err);
            console.log('Item updated');
            db.close();
        });
    });
    res.redirect('/get-data');

});

router.get('/updateproduct', function(req, res, next) {

    console.log("update");
    // var item = {
    //     title: req.body.title,
    //     content: req.body.content,
    //     author: req.body.author
    // };
    // var id = req.body.id;
    //
    // mongo.connect(url, function(err, db) {
    //     assert.equal(null, err);
    //     db.collection('products').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
    //         assert.equal(null, err);
    //         console.log('Item updated');
    //         db.close();
    //     });
    // });
    res.render('index', {u:1});

});

var pr_update='';

router.post('/update3', function(req, res, next) {

    console.log(req.body.text);

    var updatedString='';

    mongo.connect(url, function(err, db) {
        // name= req.body.product;
        // var ordcount =ordercount;
        // // var jnum= req.body.jnum;
        // cname=req.body.cname;
        // qtn=req.body.qtn;
        // orderarray.push("ClientName :"+cname);
        // orderarray.push("Product :"+name);
        //
        // orderarray.push("Quantity :"+qtn);
        // console.log(name);
        // var dat="";
        console.log('database enter');
        var ind=0;

        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            for (var i = 0; i < result.length; i++) {
                if (result[i]._id == pr_update) {
                    chk = 1;
                    updatedString=updatedString+"<product>#"+pr_update+"#";

                    dat = result[i].name;
                    arr = dat.split("#");
                    // array.push(arr)
                    for(var j =0;j<arr.length;j++)
                    {
                        if(arr[j]=='<specification>') {
                            updatedString = updatedString + "#<specification>#" + arr[j + 1] + "#";
                        }
                        else if(arr[j]=='<plate>') {
                            updatedString = updatedString + "#<plate>#" +req.body.text[ind] + "#";
                            ind++;
                        }

                        else if(arr[j]=='<type>') {
                            updatedString = updatedString + "#<type>#" + req.body.text[ind] + "#";
                            ind++;
                        }
                        else if(arr[j]=='<price>') {
                            updatedString = updatedString + "#<price>#" + req.body.text[ind] + "#";
                            ind++;
                        }
                        else if(arr[j]=='<unit>') {
                            updatedString = updatedString + "#<unit>#" +req.body.text[ind] + "#";
                            ind++;
                        }
                        else if(arr[j]=='<option>') {
                            updatedString = updatedString + "#<option>#" + req.body.text[ind] + "#";
                            ind++;
                        }
                        else if(arr[j]=='</specification>') {
                            updatedString = updatedString + "#</specification>#";
                        }
                        else if(arr[j]=='</plate>') {
                            updatedString = updatedString + "#</plate>#";
                        }
                        else if(arr[j]=='</price>') {
                            updatedString = updatedString + "#</price>#";
                        }
                        else if(arr[j]=='</type>') {
                            updatedString = updatedString + "#</type>#";
                        }
                        else if(arr[j]=='</unit>') {
                            updatedString = updatedString + "#</unit>#";
                        }
                        else if(arr[j]=='</option>') {
                            updatedString = updatedString + "#</option>#";
                        }
                        else if(arr[j]=='</product>')
                        {
                            updatedString=updatedString+"#</product>#";
                        }
                        else
                        {
                            continue;
                        }


                    }


                }
            }
            // responseText = responseText + "<br><br><button name='prname' value='" + name + "'>Confirm</button></form>";

             console.log("updated : "+updatedString);
            console.log(pr_update)
            // res.render('index');
            dbo.collection('products').updateOne({"_id":pr_update}, {name: updatedString}, function(err, result) {
                assert.equal(null, err);
                console.log('Item updated');
                res.render('index');
                db.close();
            });





        });
    });

    // var item = {
    //     title: req.body.title,
    //     content: req.body.content,
    //     author: req.body.author
    // };
    // var id = req.body.id;
    //
    // mongo.connect(url, function(err, db) {
    //     assert.equal(null, err);
    //     db.collection('products').updateOne({"_id": objectId(id)}, {$set: item}, function(err, result) {
    //         assert.equal(null, err);
    //         console.log('Item updated');
    //         db.close();
    //     });
    // });


});


router.post('/updateproduct2', function(req, res, next) {

    console.log("update");
    console.log(req.body.productname);
    pr_update=req.body.productname;
    var responseText='';

    mongo.connect(url, function(err, db) {
        // name= req.body.product;
        // var ordcount =ordercount;
        // // var jnum= req.body.jnum;
        // cname=req.body.cname;
        // qtn=req.body.qtn;
        // orderarray.push("ClientName :"+cname);
        // orderarray.push("Product :"+name);
        //
        // orderarray.push("Quantity :"+qtn);
        // console.log(name);
        // var dat="";
        console.log('database enter');
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);

            for (var i = 0; i < result.length; i++) {
                if (result[i]._id == req.body.productname) {
                    chk = 1;

                    dat = result[i].name;
                    arr = dat.split("#");
                    // array.push(arr);
                    db.close();
                    var drop = 0;


                }
            }
                    // responseText = responseText + "<br><br><button name='prname' value='" + name + "'>Confirm</button></form>";

                    // console.log("response : "+responseText);
                    res.render('index',{u2:1,arr:arr});





    });
    });




});

router.get('/delete', function(req, res, next) {
    // var id = req.body.id;


    var product=[];

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result[0].name);

            console.log(result);
            for(var i=0;i<result.length;i++)
            {
                product.push(result[i]._id);


            }
            // product=result;

             res.render('index',{product:product,d:1});
            db.close();


        });
    });

    // mongo.connect(url, function(err, db) {
    //     assert.equal(null, err);
    //     dbo.collection('products').deleteOne({"_id": objectId(id)}, function(err, result) {
    //         assert.equal(null, err);
    //         console.log('Item deleted');
    //         db.close();
    //     });
    // });
    // res.redirect('/get-data');

});


router.post('/delete2', function(req, res, next) {
    // var id = req.body.id;


    // product=[];
    var c=req.body.check1;

    // mongo.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("products").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         //console.log(result[0].name);
    //
    //         // console.log(result);
    //         for(var i=0;i<result.length;i++)
    //         {
    //             console.log('id '+result[i]._id+"  chk :"+c);
    //             if(result[i]._id==c)
    //             {
    //
    //                 console.log('matched');
    //             }
    //
    //
    //         }
    //         // product=result;
    //
    //         res.render('index');
    //         db.close();
    //
    //
    //     });
    // });
    mongo.connect(url, function (err, db) {
        if (err) throw err;
        console.log(req.body.check1);
        var dbo = db.db("mydb");
        if(Array.isArray(req.body.check1)) {
            for (var j = 0; j < req.body.check1.length; j++) {

                var myquery = {_id: req.body.check1[j]};
                dbo.collection("products").deleteOne(myquery, function (err, obj) {
                    if (err) throw err;
                    console.log("1 document deleted");

                });
            }

        }
        else
        {
            var id=req.body.check1;
            console.log(id)
            var myquery = {_id:id};
            dbo.collection("products").deleteOne(myquery, function (err, obj) {
                if (err) throw err;
                //console.log(obj)
                console.log("1 document deleted");
                console.log(req.body.check1);
                res.redirect('/');
                db.close();
            });
        }


    });
    // res.redirect("/deleteprod");





    // res.redirect('/get-data');

});




var showdetail=0;

router.post('/test/name',function (req,res,next) {
    // if(!sess.email) {
    //     res.redirect('/');
    // }

    showdetail=1;
    console.log(showdetail);
    mongo.connect(url, function(err, db) {
        var name= req.body.product;
        var jnum= req.body.jnum;
        var cname=req.body.cname;
        var qtn=req.body.qtn;
        console.log(name);
        var dat="";
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==name) {
                    dat = result[i].name;
                    db.close();
                    console.log(dat);
                    var arr=dat.split("#");
                    console.log(arr);
                    console.log("here");
                    res.render('index',{arr:arr,name:name,jnum:jnum,cname:cname,qtn:qtn,showdetail:showdetail});
                }
            }
        });
    });
});


var showspec = 0;
var aftername = 0;
var afterspec = 0;

var prdctname;
var platedate=[];


var platenme;


router.post('/test/plate1',function (req,res,next) {

    platenme=req.body.plate;
    var price = req.body.price;
    platedatum=platedatum+"<plate>#"+platenme+"#<price>#"+price+"#</price>#";

    // console.log(platename + price);

    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    //
    // // receivedata=null;
    //
    // // taskname="";
    //
    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // // costestimationdata=null;
    // // taskname=req.body.id;

    // costestimationdata.push(receivedata);



    res.render('index',{plate1:1});
})

router.post('/test/plate2',function (req,res,next) {

    var length=req.body.length;
    var width = req.body.width;
    // var quantity=req.body.quantity;
    platedatum=platedatum+"#<length>#"+length+"#</length>#<width>#"+width+"#</width>";

    // console.log(dimension + quantity);

    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    //
    // // receivedata=null;
    //
    // // taskname="";
    //
    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // // costestimationdata=null;
    // // taskname=req.body.id;

    // costestimationdata.push(receivedata);



    res.render('index',{plate1:1});
})

router.get('/test/plate3',function (req,res,next) {

    // var dimension=req.body.dimension;
    // var quantity = req.body.quantity;
    platedatum=platedatum+"#</plate>#";

    console.log(platedatum);

    console.log(platenme);



    // console.log(dimension + quantity);

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj ={ _id: platenme, name:platedatum};
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("plt").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    // costestimationdata.push(receivedata);



    res.render('index',{start2:1});
})

router.post('/print1',function (req,res,next) {

    var productname=req.body.productname;
    prdctname=productname;
    aftername = 1;
    console.log(productname);
    costestimationdata=[];
    receivedata=[];
    var nm=productname+'dip';

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj ={ _id: productname, name:nm};
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("prcts").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    // receivedata=null;

    // taskname="";

    // parseddatum=parseddatum+"<product>#"+productname;
     receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // costestimationdata=null;
    // taskname=req.body.id;

    costestimationdata.push(receivedata);



    res.render('index',{s:1,data:costestimationdata,typearray:typearray});
})
var spec;
router.post('/print2',function (req,res,next) {

    // var productname=req.body.productname;

     spec = req.body.specification;
    var type=req.body.type;
    console.log(spec + type);
    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    // var nm=productname+'dip';

    // mongo.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     var myobj ={ _id: productname, name:nm};
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("prcts").insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         db.close();
    //     });
    // });

    // receivedata=null;

    // taskname="";

    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // costestimationdata=null;
    // taskname=req.body.id;

    // costestimationdata.push(receivedata);



    res.render('index',{s2:1,data:costestimationdata,spec:spec});
})

router.post('/print3',function (req,res,next) {

    // var productname=req.body.productname;

    // var spec = req.body.specification;
    // var type=req.body.type;
    // console.log(spec + type);
    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    // var nm=productname+'dip';

    // mongo.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     var myobj ={ _id: productname, name:nm};
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("prcts").insertOne(myobj, function(err, res) {
    //         if (err) throw err;
    //         console.log("1 document inserted");
    //         db.close();
    //     });
    // });

    // receivedata=null;

    // taskname="";

    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // costestimationdata=null;
    // taskname=req.body.id;

    // costestimationdata.push(receivedata);



    res.render('index',{start:1,data:costestimationdata});
})

router.post('/print4',function (req,res,next) {





    res.render('index',{s:1,data:costestimationdata,typearray:typearray});
})


router.post('/print6',function (req,res,next) {

    res.render('index',{start:1,data:costestimationdata,typearray:typearray});
})

router.post('/print5',function (req,res,next) {

    // var productname=req.body.productname;
    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    //
    // // receivedata=null;
    //
    // // taskname="";
    //
    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // // costestimationdata=null;
    // // taskname=req.body.id;
    //
    // costestimationdata.push(receivedata);



    res.render('index',{s2:1,data:costestimationdata,typearray:typearray,spec:spec});
})

router.get('/prnt',function (req,res,next) {

    // var productname=req.body.productname;
    // prdctname=productname;
    // aftername = 1;
    // console.log(productname);
    // costestimationdata=[];
    //
    // // receivedata=null;
    //
    // // taskname="";
    //
    // parseddatum=parseddatum+"<product>#"+productname;
    // receivedata='ProductName :' + productname;
    // console.log("rcvdata :" +receivedata);
    // // costestimationdata=null;
    // // taskname=req.body.id;
    //
    // costestimationdata.push(receivedata);



    res.render('index',{start:1,aftername:aftername,data:costestimationdata});
})


router.get('/test/print2',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    afterspec =1;
    parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{afterspec:afterspec,typearay:typearray,data:costestimationdata});
})

var afterspec2=0;
var chk;

router.get('/test/print',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{afterspec:1,typearay:typearray,data:costestimationdata});
})


router.get('/test/print5',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;

    // parseddatum=parseddatum+;

    afterspec =1;
    // console.log(productspecnamename);
    parseddatum=parseddatum+"#</type>#</specification>#";



    res.render('index',{chck:0,hudai:1,data:costestimationdata});
})


router.get('/test/print6',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    afterspec =1;

    parseddatum=parseddatum+"#</type>#</specification>#</product>#";

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj ={ _id: prdctname, name:parseddatum};
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").insertOne(myobj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
    });

    console.log(parseddatum);



    res.render('index',{start:1});
})
var spec_function=[];
router.post('/test/print3',function (req,res,next) {


    var specificationname = req.body.specification;
    var type=req.body.typearray;
    hudai=1;
    console.log(specificationname[1]);
    // console.log(req.body.check1);

    var plt;

    if(req.body.check1==undefined)
        plt=0;
    else
        plt=1;

    parseddatum=parseddatum+"#<specification>#"+specificationname[0]+"#<plate>#"+plt+"#</plate>#"+"#<type>#"+specificationname[1]+"#";
    spec_function.push(specificationname[0]);
    receivedata='Specification :' + specificationname[0]+'\n'+'Type:' + specificationname[1];
    // taskname=req.body.id;

    costestimationdata.push(receivedata);


    if(new String("textfield").valueOf() == new String(specificationname[1]).valueOf() || new String("date").valueOf() == new String(specificationname[1]).valueOf()|| new String("number").valueOf() == new String(specificationname[1]).valueOf())
    {
        chk = 0;
    }

    else
    {
        chk = 1;
    }
    afterspec = 0;
    // afterspec2=1;

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    console.log("type :" + chk );



    res.render('index',{chck:chk,hudai:hudai,data:costestimationdata});
})

var hudai=0;

router.post('/test/print4',function (req,res,next) {

    // var chk;

    // var specificationname = req.body.specification;
    // var type=req.body.typearray;
    var option = req.body.option;
    var price =req.body.price;
    var unit = req.body.unit;
    hudai=1;

    // if(type == "text")
    // {
    //     chk = 0;
    // }
    //
    // else
    // {
    //     chk = 1;
    // }
    afterspec = 0;

    parseddatum=parseddatum+"#<option>#"+option+"#<price>#"+price+"#<unit>#"+unit+"#</unit>#</price>#</option>#";
    receivedata='Option:' + option+'Price:' + price;
    // taskname=req.body.id;

    costestimationdata.push(receivedata);
    // afterspec2=1;

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // console.log(option + price );



    res.render('index',{chck:1,hudai:hudai,data:costestimationdata});
})
var shwdata='';

router.get('/test/gntfnc',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{operatorarray:operatorarray,specarray:spec_function});
})

router.get('/test/gntfnc2',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);
    console.log('specarray :'+spec_function);



    res.render('index',{gntfnc2:1,operatorarray:operatorarray,specarray:spec_function});
})
router.get('/test/gntfnc3',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc3:1,operatorarray:operatorarray,specarray:spec_function});
})

router.get('/test/gntfnc4',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc4:1,operatorarray:operatorarray,specarray:spec_function});
})

router.post('/test/gntfnc5',function (req,res,next) {

    var spec=req.body.specification;
    console.log('spec :'+spec);
    shwdata+=spec;

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc:1,operatorarray:operatorarray,specarray:spec_function,showdata:shwdata});
})
router.post('/test/gntfnc6',function (req,res,next) {
    var opertr=req.body.specification;
    console.log('optr :'+opertr);
    shwdata+=opertr;


    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc:1,operatorarray:operatorarray,specarray:spec_function,showdata:shwdata});
})
router.post('/test/gntfnc7',function (req,res,next) {

    var number=req.body.num;
    console.log('number :'+number);
    shwdata+=number;




    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc:1,operatorarray:operatorarray,specarray:spec_function,showdata:shwdata});
})



router.get('/test/invoice',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;

    // parseddatum=parseddatum+;

    // afterspec =1;
    // // console.log(productspecnamename);
    // parseddatum=parseddatum+"#</type>#</specification>#";



    res.render('index',{invc:1,invoicearray:invoicearray,clntname:cname});
})


router.get('/test/invoice2',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;

    // parseddatum=parseddatum+;

    // afterspec =1;
    // // console.log(productspecnamename);
    // parseddatum=parseddatum+"#</type>#</specification>#";

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result[0].name);
            product=result;
            db.close();
            res.render('index',{product:product,ordr:1,orderarray:orderarray,order4:1});



        });
    });



})
var order1=0;
var ordercount=0;

router.get('/test/order1',function (req,res,next) {

    order1=1;
    ordercount++;
    console.log("running");

    orderarray.push("ordercount :"+ordercount);

    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result[0].name);
            product=result;
            db.close();
            res.render('index',{product:product,order1:order1,ordercount:ordercount});


        });
    });





})

router.get('/boot',function (req,res,next) {

    // var productspecname=req.body.specname;
    // aftername = 0;
    // afterspec =1;
    // parseddatum=parseddatum+"#</type>#</specification>#";

    // console.log(productspecnamename);



    res.render('index',{gntfnc:1,operatorarray:operatorarray,specarray:spec_function});
})
var order2=0;
var name;
var qtn;
var cname;

router.post('/test/order2',function (req,res,next) {

    order2=1;
    // ordercount++;

    mongo.connect(url, function(err, db) {
        name= req.body.product;
        var ordcount =ordercount;
        // var jnum= req.body.jnum;
         cname=req.body.cname;
        qtn=req.body.qtn;
        orderarray.push("ClientName :"+cname);
        orderarray.push("Product :"+name);

        orderarray.push("Quantity :"+qtn);
        // console.log(name);
        // var dat="";
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==name) {
                    dat = result[i].name;
                    db.close();
                    console.log(dat);
                    var arr=dat.split("#");
                    // console.log(arr);
                    // console.log("here");
                    res.render('index',{arr:arr,ordercount:ordcount,name:name,cname:cname,qtn:qtn,order2:order2});
                }
            }
        });
    });

})

var price;


router.get('/test/order3',function (req,res,next) {
    //
    // order2=1;
    // var receive= req.body.text1;
    // console.log(receive);
    // price=0;

    console.log(req.body.food);

    // var data={
    //
    //
    //
    //     name:Dip,
    //     class:12,
    //     phone:123456
    //
    // };
    // res.send(d);
    // mongo.connect(url, function(err, db) {
    //     // name= req.body.product;
    //     // var ordcount =ordercount;
    //     // // var jnum= req.body.jnum;
    //     // var cname=req.body.cname;
    //     // var qtn=req.body.qtn;
    //     // console.log(name);
    //     // var dat="";
    //
    //     var x=0;
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("products").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         for(var i=0;i<result.length;i++)
    //         {
    //             if(result[i]._id==name) {
    //                 dat = result[i].name;
    //                 db.close();
    //                 console.log(dat);
    //                 var arr=dat.split("#");
    //                 console.log(arr);
    //                 for(var j=0;j<arr.length;j++)
    //                 {
    //                     if(arr[j]==receive[x])
    //                     {
    //                         price=price+(qtn*arr[j+1]);
    //
    //
    //                     }
    //
    //
    //
    //
    //                 }
    //                 // console.log("here");
    //                 res.render('index',{arr:arr,ordercount:ordcount,name:name,cname:cname,qtn:qtn,order2:order2});
    //             }
    //         }
    //     });
    // });

    // ordercount++;

    // mongo.connect(url, function(err, db) {
    //     var name= req.body.product;
    //     var ordcount =ordercount;
    //     // var jnum= req.body.jnum;
    //     var cname=req.body.cname;
    //     var qtn=req.body.qtn;
    //     // console.log(name);
    //     // var dat="";
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("products").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         for(var i=0;i<result.length;i++)
    //         {
    //             if(result[i]._id==name) {
    //                 dat = result[i].name;
    //                 db.close();
    //                 console.log(dat);
    //                 var arr=dat.split("#");
    //                 console.log(arr);
    //                 // console.log("here");
    //                 res.render('index',{arr:arr,ordercount:ordcount,name:name,cname:cname,qtn:qtn,order2:order2});
    //             }
    //         }
    //     });
    // });

     res.render('add');

});

router.post('/test/datasubmit', function(req, res, next) {
    // if(!sess.email) {
    //     res.redirect('/');
    // }
    console.log(name);
    var l,w;

    // showspec = 1;
    mongo.connect(url, function(err, db) {
        var drop = req.body.drop1;
        var check = req.body.check1;
        var radio = req.body.radio1;
        // date=req.body.date1;
        // number=req.body.number;
        price=0;
        var text=[];
        var date=[];
        var number=[];
        var spec;
        text.push( req.body.text1);
        date.push(req.body.date1);
        number.push(req.body.number);
        console.log('dipannoy');
        // console.log(drop);
        console.log(radio);
        console.log(check);
        console.log(drop);


        // var name= req.body.prname;//name of that project
        // console.log(name);
        var dat="";
        if (err) throw err;
        var dbo = db.db("mydb");
        var productdata="";
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("products").find({}).toArray(function(err, result) {
            if (err) throw err;
            for(var i=0;i<result.length;i++)
            {
                if(result[i]._id==name) {
                    dat = result[i].name;//taking all the data of that project
                    db.close();
                    //console.log(dat);
                    var arr=dat.split("#");
                    console.log(arr);
                    var checkflag=0,textflag=0,dropflag=0,radioflag=0,dateflag=0,numberflag=0,plateflag=0,lnth=0,wdth=0;// checkflag = checkbox, dropflag = dropdown,textflag=textbox
                    var textcounter=0,dropcounter=0,checkcounter=0,radiocounter=0,datecounter=0,numbercounter=0;
                    for (var i = 0; i < arr.length; i++) {
                        //console.log(drop);
                        if(arr[i]=='<plate>')
                        {

                            if(arr[i+1]==1)
                                plateflag=1;



                        }


                        else if(arr[i]=='<specification>') {
                          spec=arr[i+1];
                        }

                        else if(arr[i]=='Length') {
                            console.log("spec----" + arr[i]);


                            lnth = 1;
                        }

                        else if(arr[i]=='width') {
                            console.log("spec----" + arr[i]);




                            wdth = 1;
                        }

                        else if (arr[i] == '<type>') { //checking the type textbox,checkbox, or dropdownlist
                            productdata = productdata + "#<data>#";
                            if (arr[i + 1] == 'checkbox') {
                                checkflag = 1;
                                i++;
                            }
                            else if (arr[i + 1] == 'textfield') {
                                textflag = 1;
                                i++;
                            }
                            else if (arr[i + 1] == 'drop') {
                                console.log("matched");
                                console.log("match "+i);
                                dropflag = 1;
                                i++;
                            }

                            else if (arr[i + 1] == 'date') {
                                dateflag = 1;
                                i++;
                            }

                            else if (arr[i + 1] == 'number') {
                                numberflag = 1;
                                i++;
                            }

                            else if (arr[i + 1] == 'radio') {
                                radioflag = 1;
                                i++;
                            }
                        }
                        else if (arr[i] == '</type>') {
                            productdata = productdata + "#</data>#</subtask>#";
                            checkflag = 0;
                            dropflag = 0;
                            textflag = 0;
                            radioflag=0;
                            dateflag=0;
                            numberflag=0;

                        }
                        else if (arr[i] == '<option>') {
                            console.log("option index : "+i);
                            console.log("lnth "+lnth+"wdth "+wdth+"plateflag "+plateflag);
                            if (checkflag == 1 && plateflag==1) {
                                i+=1;
                                var dta = arr[i];
                                //console.log(check);
                                for (var j = checkcounter; j < check.length; j++) {
                                    if (check[j] == dta) {
                                        //console.log(dta);
                                        //console.log(check[j]);
                                        i+=2;
                                        price=price+(qtn*arr[i]);
                                        orderarray.push(spec+":"+check[j]);
                                        // productdata = productdata + dta+"#";
                                        checkcounter++;
                                        break;
                                    }
                                }
                                i++;
                            }


                            else if (dropflag == 1 && plateflag==1 && lnth==1) {
                                i+=1;
                                console.log("dropflag index "+i);
                                console.log("dropflag content"+arr[i]);
                                // console.log("dta value "+dta);

                                var dta = arr[i];
                                console.log("check data"+dta);
                                for (var j = dropcounter; j < drop.length; j++) {
                                    console.log("drop array: "+drop[j]);
                                    if (drop[j]==dta) {
                                        l=drop[j];
                                        console.log(" l value :"+l);




                                        console.log("is it done???");
                                        orderarray.push(spec+":"+drop[j]);


                                        //console.log(dta);
                                        //console.log(check[j]);
                                        i+=2;
                                        console.log("price for drop :" + arr[i]);

                                        var unitchk=Math.ceil(qtn/arr[i+2]);
                                        price=price+(unitchk*arr[i]);

                                        // productdata = productdata + dta+"#";
                                        dropcounter++;
                                        lnth=0;
                                        plateflag=0;
                                        break;
                                    }
                                }
                                i++;

                            }

                            else if (dropflag == 1 && plateflag==1 && wdth==1) {
                                i+=1;
                                console.log("dropflag index "+i);
                                console.log("dropflag content"+arr[i]);


                                console.log('hiiiiiiiiiiiiiiiiiiiiiiiiiii');
                                console.log(i);


                                var dta = arr[i];
                                console.log("check data"+dta);
                                for (var j = dropcounter; j < drop.length; j++) {
                                    console.log("drop array: "+drop[j]);
                                    if (drop[j]==dta) {
                                        w=drop[j];
                                        console.log("w value :"+w);


                                        console.log("is it done???");
                                        orderarray.push(spec+":"+drop[j]);


                                        //console.log(dta);
                                        //console.log(check[j]);
                                        i+=2;
                                        console.log("price for drop :" + arr[i]);
                                        price=price+(qtn*arr[i]);
                                        // productdata = productdata + dta+"#";
                                        dropcounter++;
                                        wdth=0;
                                        plateflag=0;

                                        break;
                                    }
                                }
                                i++;
                            }

                            else if (radioflag == 1) {
                                i+=1;
                                var dta = arr[i];
                                //console.log(check);
                                for (var j = radiocounter; j < radio.length; j++) {
                                    if (radio[j] == dta) {
                                        //console.log(dta);
                                        //console.log(check[j]);
                                        i+=2;
                                        price=price+(qtn*arr[i]);
                                        orderarray.push(spec+":"+radio[j]);

                                        // productdata = productdata + dta+"#";
                                        radiocounter++;
                                        break;
                                    }
                                }
                                i++;
                            }

                            // else if (dateflag == 1) {
                            //     i+=1;
                            //     var dta = arr[i];
                            //     //console.log(check);
                            //     // for (var j = datecounter; j < date.length; j++) {
                            //     //     if (drop[j] == dta) {
                            //             //console.log(dta);
                            //             //console.log(check[j]);
                            //             i+=2;
                            //             price=price+(qtn*arr[i])
                            //             productdata = productdata + dta+"#";
                            //             // datecounter++;
                            //             // break;
                            //     //     }
                            //     // }
                            //     i++;
                            // }

                            // else if (numberflag == 1) {
                            //     i+=1;
                            //     var dta = arr[i];
                            //     //console.log(check);
                            //     for (var j = numbercounter; j < number.length; j++) {
                            //         if (number[j] == dta) {
                            //             //console.log(dta);
                            //             //console.log(check[j]);
                            //             i+=2;
                            //             price=price+(qtn*arr[i]);
                            //             productdata = productdata + dta+"#";
                            //             numbercounter++;
                            //             break;
                            //         }
                            //     }
                            //     i++;
                            // }

                            // else {
                            //     i+=1;
                            //     var dta = arr[i];
                            //     //console.log(check);
                            //     for (var j = textcounter; j < text.length; j++) {
                            //         if (drop[j] == dta) {
                            //             //console.log(dta);
                            //             //console.log(check[j]);
                            //             i+=2;
                            //             price=price+(qtn*arr[i])
                            //             productdata = productdata + dta+"#";
                            //             numbercounter++;
                            //             break;
                            //         }
                            //     }
                            //     i++;
                            // }
                        }

                        else if((arr[i]=='</option>')||(arr[i]=='</price>')||(dropflag==-1))
                        {
                            continue;
                        }
                        else
                        {
                            //console.log(arr[i]);
                            productdata=productdata+arr[i]+"#";
                            //console.log(productdata);
                        }
                        if (dateflag == 1) {
                            i+=1;
                            // var dta = arr[i];
                            //console.log(check);
                            // for (var j = datecounter; j < date.length; j++) {
                            //     if (drop[j] == dta) {
                            //console.log(dta);
                            //console.log(check[j]);
                            // i+=2;
                            price=price+(qtn*arr[i]);
                            productdata = productdata + dta+"#";
                            // datecounter++;
                            // break;
                            //     }
                            // }
                            i++;
                        }
                        if (textflag==1) {
                            // console.log(text);
                            // if(text.length>1)
                            //     da=text[textcounter];
                            // else
                            //     da=text[textcounter];
                            // productdata=productdata+da+"#";
                            // console.log(da);
                            // textflag=0;
                            // textcounter++
                            // i+=1;
                            // var dta = arr[i];
                            //console.log(check);
                            // for (var j = datecounter; j < date.length; j++) {
                            //     if (drop[j] == dta) {
                            //console.log(dta);
                            //console.log(check[j]);
                            // i+=2;
                            // price=price+(qtn*arr[i]);
                            // productdata = productdata + dta+"#";
                            // datecounter++;
                            // break;
                            //     }
                            // }
                            // i++;
                            continue;
                        }

                        if (numberflag == 1) {
                            i+=1;
                            // var dta = arr[i];
                            //console.log(check);
                            // for (var j = datecounter; j < date.length; j++) {
                            //     if (drop[j] == dta) {
                            //console.log(dta);
                            //console.log(check[j]);
                            // i+=2;
                            price=price+(qtn*arr[i]);
                            productdata = productdata + dta+"#";
                            // datecounter++;
                            // break;
                            //     }
                            // }
                            i++;
                        }
                    }


                    //console.log(productdata);
                    // var array=productdata.split("#");
                    // console.log("chkarray  :"+array);
                    console.log("withoutplatePrice :"+price);
                    break;
                }
            }
        });
        var cmpr=1000000;
        var platename;


        dbo.collection("plt").find({}).toArray(function(err, result) {



            if (err) throw err;
            for(var i=0;i<result.length;i++)
            {
                // console.log(i);
                // console.log(result[i]._id);
                // if(result[i]._id==name) {
                // a=result[i]._id;
                // console.log(result[i].name);
                console.log(result.length);
                dat = result[i].name;
                db.close();
                // console.log(dat);

                console.log("l :" + l);
                console.log("w :" + w);
                var arr=dat.split("#");
                console.log(arr);
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
                pr=arr[3];
                for(var j=5;j<arr.length;j++)
                {
                    console.log("price"+pr);
                    console.log("j value"+j);
                    console.log("plt_lnth"+arr[j+2]);
                    console.log("plt_wdth"+arr[j+5]);
                    row1=parseInt((arr[j+2]/l),10);
                    column1=parseInt((arr[j+5]/w),10);
                    row2=parseInt((arr[j+2]/w),10);
                    column2=parseInt((arr[j+5]/l),10);

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
                    total_plate=Math.ceil(qtn/num_of_print_per_plate);
                    plate_price=total_plate*arr[3];
                    if(plate_price<cmpr) {
                        cmpr = plate_price;
                        platename = arr[1];
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

            price=price+cmpr;
            console.log("withplateprice "+price);
            console.log("cmpr "+cmpr);
            console.log(price+platename+cmpr);
            invoicearray.push(name);
            invoicearray.push(qtn);
            invoicearray.push(price);

        });


        res.render('index',{orderarray:orderarray,ordr:1});

    });

    // mongo.connect(url, function(err, db) {
    //     if (err) throw err;
    //     var dbo = db.db("mydb");
    //     //var myobj = { name: "Company Inc", address: "Highway 37" };
    //     dbo.collection("plates").find({}).toArray(function(err, result) {
    //         if (err) throw err;
    //         console.log(result[0].name);
    //         project=result;
    //         db.close();
    //         res.render('makeproject',{project:project});
    //     });
    // });


});

Handlebars.registerHelper('invoice', function(invoice) {
    var accum = '';
    console.log(invoice);
    for(var i = 0; i <invoice.length-2; i+=3) {
        accum+="<h3> ProductName :"+invoice[i]+"</h3>";
        accum+="<h3> Quantity :"+invoice[i+1]+"</h3>";
        accum+="<h3> Price :"+invoice[i+2]+"</h3>";
    }
    return new Handlebars.SafeString (accum);
})


Handlebars.registerHelper('spec', function(spec) {
    var page = '';

    page +="<h3> Specification :" +spec[0]+"</h3>";
    page +="<h3> Plate :" +spec[1]+"</h3>";
    page +="<h3> Type :" +spec[2]+"</h3>";


    // console.log(invoice);
    for(var i = 3; i <spec.length-2; i+=3) {
        page+="<h3> Option :"+spec[i]+"</h3>";
        page+="<h3> Price :"+spec[i+1]+"</h3>";
        page+="<h3> Unit :"+spec[i+2]+"</h3>";
    }


    var p='hjk'
    return new Handlebars.SafeString (page);
})


Handlebars.registerHelper('ajx', function() {
    var ajaxpage = '';
    console.log(invoice);
    // for(var i = 0; i <invoice.length-2; i+=3) {
    //     accum+="<h3> ProductName :"+invoice[i]+"</h3>";
    //     accum+="<h3> Quantity :"+invoice[i+1]+"</h3>";
    //     accum+="<h3> Price :"+invoice[i+2]+"</h3>";
    // }

    ajaxpage+="<p>working</p>"
    return new Handlebars.SafeString (ajaxpage);
})

Handlebars.registerHelper('productspec',function (arr) {
    var c=0,d=0;
    var page="";
    for(var i=0;i<arr.length;i++)
    {
        if(d==1&&arr[i]!='</data>')
        {
            console.log(arr[i]);
            page=page+"<p>"+arr[i]+"</p>"
        }
        if((arr[i]=='</task>')||(arr[i]=='</option>')||(arr[i]=='</subtask>')||(arr[i]=='</specification>')||arr[i]==" " )
        {
            continue;
        }
        else if((arr[i]=='<task>'))
        {
            page=page+"<h1>Task: "+arr[i+1]+"</h1>\n";
            console.log("name: "+arr[i+1]);
        }
        else if((arr[i]=='<subtask>'))
        {
            page=page+"<h2>SubTask: "+arr[i+1]+"</h2>\n";
            console.log("Task: "+arr[i+1]);
        }
        else if((arr[i]=='<specification>'))
        {
            page=page+"<h3>"+arr[i+1]+"</h3>";
            console.log("Specification: "+arr[i+1]);
        }
        else if((arr[i]=='<data>'))
        {
            d=1;
        }
        else if((arr[i]=='</data>'))
        {
            d=0;
        }
        else {
            continue;
        }
    }
    page=page+"<br><br><button type='submit' name='prname' value='Confirm'> Confirm</button></form>";
    console.log(page);
    return new Handlebars.SafeString (page);

});

Handlebars.registerHelper('specpage',function (arr) {
    // page="<form action=\"/test/specsubmit\" method='post' >";
    var spectype="<select name='specification' >";
    for(var i=0;i<typearray.length;i++)
    {
        spectype = spectype + "<option value='" + typearray[i] + "'>" + typearray[i] + "</option>";

    }

    console.log(spectype);
    return new Handlebars.SafeString (spectype);







})
Handlebars.registerHelper('gntfnc',function (arr) {
    // page="<form action=\"/test/specsubmit\" method='post' >";
    var spectype="<select name='specification' >  <option disabled selected value>  select an option  </option>";
    for(var i=0;i<arr.length;i++)
    {
        spectype = spectype + "<option value='" + arr[i] + "'>" + arr[i] + "</option>";

    }
    spectype=spectype+"</select>";
    console.log(spectype);
    return new Handlebars.SafeString (spectype);







})







var optns=[];

Handlebars.registerHelper('update',function (arr) {

    var responseText='';
    responseText = responseText+"<form action=\"/update3\" method='post' >";
    responseText = responseText+" ";
    var c = 0, d = 0, r = 0;
    var name;
    var rdio = 0;
    optns = null;
    var name='dip';
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] == '</product>') || (arr[i] == '</option>') || (arr[i] == '</price>') || (arr[i] == '</unit>')|| (arr[i] == '</specification>')) {
            continue;
        }

        else if ((arr[i] == '<product>')) {
            responseText = responseText + "<h4>Product: " + arr[i + 1] + "</h4>";
            // name=arr[i+1];
            // console.log("name: " + arr[i + 1]);
            // console.log(responseText);
        }
        else if ((arr[i] == '<specification>')) {
            responseText = responseText + "<h4>SpecificationName: " + arr[i + 1] + "</h4>\n";
            // sp=arr[i+1];
            // console.log("Task: " + arr[i + 1]);
            // console.log(responseText);

        }
        else if ((arr[i] == '<type>')) {
            responseText = responseText + "<label>Type :</label><input type='text' name='text' value='"+arr[i+1]+"' > ";
            // console.log(responseText);

        }

        else if ((arr[i] == '<plate>')) {
            responseText = responseText + "<label>Plate :</label><input type='text' name='text' value='"+arr[i+1]+"' > ";
            // console.log(responseText);

        }

        else if ((arr[i] == '<option>')) {
            responseText = responseText + "<label>Option :</label><input type='text' name='text' value='"+arr[i+1]+"' > ";
            // console.log(responseText);

        }

        else if ((arr[i] == '<price>')) {
            responseText = responseText + "<label>Price :</label><input type='number' name='text' value='"+arr[i+1]+"' > ";
            // console.log(responseText);

        }

        else if ((arr[i] == '<unit>')) {
            responseText = responseText + "<label>Unit :</label><input type='number' name='text' value='"+arr[i+1]+"' > ";
            // console.log(responseText);

        }
        // else if((arr[i]=='<option>'))
        // {
        //
        //     optns=optns+arr[i+1];
        //     page=page+"<h4>"+arr[i+1]+"</h4>";
        //     console.log("Specification : "+arr[i+1]);
        // }

        else {
            continue;
        }
    }
    responseText = responseText + "<br><br><button name='prname' value='" + name + "'>Confirm</button></form>";

    console.log("response : "+responseText);
    // res.render('add',{u2:1,response:responseText});


    return new Handlebars.SafeString (responseText);


});


Handlebars.registerHelper('productpage2', function(arr) {
    page="<form action=\"/test/datasubmit\" method='post' >";
    var c=0,d=0,r=0;
    var name;
    var rdio=0;
    optns=null;
    for(var i=0;i<arr.length;i++)
    {
        if((arr[i]=='</product>')||(arr[i]=='</option>')||(arr[i]=='</price>')||(arr[i]=='</specification>'))
        {
            continue;
        }
        else if(arr[i]=='</type>')
        {
            if(d==1)
            {
                page=page+"</select>";
                d=0;
            }
            if(c==1)
                c=0;
            if(r==1) {
                r = 0;
                page=page+"</div>";
            }
        }
        else if((arr[i]=='<product>'))
        {
            page=page+"<h4>Product: "+arr[i+1]+"</h4>\n";
            // name=arr[i+1];
            console.log("name: "+arr[i+1]);
        }
        else if((arr[i]=='<specification>'))
        {
            page=page+"<h4>SpecificationName: "+arr[i+1]+"</h4>\n";
            console.log("Task: "+arr[i+1]);
        }
        // else if((arr[i]=='<option>'))
        // {
        //
        //     optns=optns+arr[i+1];
        //     page=page+"<h4>"+arr[i+1]+"</h4>";
        //     console.log("Specification : "+arr[i+1]);
        // }
        else if((arr[i]=='<type>'))
        {
            if(arr[i+1]=='textfield')

            {
                text1='<text>';
                page=page+"<input type='text' name='text1'>";
            }
            else if(arr[i+1]=='drop')
            {
                d=1;
                page=page+"<select name='drop1'>";
            }
            else if(arr[i+1]=='checkbox')
            {
                c=1;
                // page=page+"<input type='checkbox' name='check1' value=''>";
            }
            else if(arr[i+1]=='date')
            {
                // d=1;
                page=page+"<input type='date' name='date1'>";
            }
            else if(arr[i+1]=='radio')
            {
                r=1;
                rdio++;

                // page=page+"<select name='radio'>";

            }
            else if(arr[i+1]=='number')
            {
                page=page+"<input type='date' name='number'>"
                // c=1;
            }


            //page=page+"<h3>Specification Type Name: "+arr[i+1]+"</h3>\n";
        }
        else if((arr[i]=='<option>'))

        {

            optns=optns+arr[i+1];
            page=page+"<h4>"+arr[i+1]+"</h4>";
            if(d==1)
            {
                page= page+"<option value='"+arr[i+1]+"'>"+arr[i+1]+"</option>";
            }
            // page=page+"<h2>Options: </h2>\n";
            // page=page+"<h2>"+arr[i+1]+"</h2>\n";
            // console.log("options: "+arr[i+1]);
            if(c==1)
            {
                page= page+"<br> <input type='checkbox' name='check1' value='"+arr[i+1]+"'>"+arr[i+1];
            }

            if(r==1)
            {
                // page=page+"<form>";
                page=page+"<br><div><input   type='radio' name='radio1' value='"+arr[i+1]+"' />"+arr[i+1];


            }
        }
        else {
            continue;
        }
    }
    page=page+"<br><br><button name='prname' value='"+name+"'>Confirm</button></form>";
    console.log(page);
    return new Handlebars.SafeString (page);
});




Handlebars.registerHelper('page', function(arr) {
    page="<form action=\"/test/datasubmit\" method='post' >";
    var c=0,d=0;
    var name;
    for(var i=0;i<arr.length;i++)
    {
        if((arr[i]=='</task>')||(arr[i]=='</option>')||(arr[i]=='</subtask>')||(arr[i]=='</specification>'))
        {
            continue;
        }
        else if(arr[i]=='</type>')
        {
            if(d==1)
            {
                page=page+"</select>";
                d=0;
            }
            if(c==1)
                c=0;
        }
        else if((arr[i]=='<task>'))
        {
            page=page+"<h4>Task Name: "+arr[i+1]+"</h4>\n";
            name=arr[i+1];
            console.log("name: "+arr[i+1]);
        }
        else if((arr[i]=='<subtask>'))
        {
            page=page+"<h4>SubTask Name: "+arr[i+1]+"</h4>\n";
            console.log("Task: "+arr[i+1]);
        }
        else if((arr[i]=='<specification>'))
        {
            page=page+"<h4>"+arr[i+1]+"</h4>";
            console.log("Specification : "+arr[i+1]);
        }
        else if((arr[i]=='<type>'))
        {
            if(arr[i+1]=='text')
            {
                page=page+"<input type='text' name='text1'>";
            }
            else if(arr[i+1]=='dropdown')
            {
                d=1;
                page=page+"<select name='drop1'>";
            }
            else if(arr[i+1]=='check')
            {
                c=1;
            }
            //page=page+"<h3>Specification Type Name: "+arr[i+1]+"</h3>\n";
        }
        else if((arr[i]=='<option>'))
        {
            if(d==1)
            {
                page= page+"<option value='"+arr[i+1]+"'>"+arr[i+1]+"</option>";
            }
            // page=page+"<h2>Options: </h2>\n";
            // page=page+"<h2>"+arr[i+1]+"</h2>\n";
            // console.log("options: "+arr[i+1]);
            if(c==1)
            {
                page= page+"<br> <input type=checkbox name='check1' value='"+arr[i+1]+"'>"+arr[i+1];
            }
        }
        else {
            continue;
        }
    }
    page=page+"<br><br><button name='prname' value='"+name+"'>Confirm</button></form>";
    console.log(page);
    return new Handlebars.SafeString (page);
});


Handlebars.registerHelper('productpage', function (page) {
    var productname="<select name='product' >";
    for(var i=0;i<product.length;i++)
    {
        productname= productname+"<option value='"+product[i]._id+"'>"+product[i]._id+"</option>";

    }
    productname=productname+"</select>";
    console.log(productname);
    return new Handlebars.SafeString (productname);
});






//Creating my Invoice page

Handlebars.registerHelper('projectpage', function (page) {
    var projectname="<select name='product' >";
    for(var i=0;i<project.length;i++)
    {
        projectname= projectname+"<option value='"+project[i]._id+"'>"+project[i]._id+"</option>";

    }
    projectname=projectname+"</select>";
    console.log(page);
    return new Handlebars.SafeString (projectname);
});




router.post('/showproject',function (req,res,next) {
    if(!sess.email) {
        res.redirect('/');
    }
    mongo.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        //var myobj = { name: "Company Inc", address: "Highway 37" };
        dbo.collection("customers").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result[0].name);
            project=result;
            db.close();
            res.render('makeproject',{project:project});
        });
    });


});


module.exports = router;



