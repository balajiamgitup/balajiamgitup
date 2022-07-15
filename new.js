// var q1=prompt("Enter which techonolgy ypu want edit :");
// if(q1=="front"){
// var rawdata = file.readFileSync('fontend.txt');
// let file_data = JSON.parse(rawdata);
// console.log("<<<<<<<<<<<<<<Frontend Technologies>>>>>>>>>> ");
// main.disp(file_data);
// var front_save={};
// front_save=file_data;
// var qq1=prompt("Enter  the new key to  : ");
// var qq2=prompt("Enter the new value : ");
// front_save[qq1]=qq2;
// main.disp(front_save);
//  file.truncateSync('fontend.txt', 0, function() {
// });
// var data = JSON.stringify(front_save, null, 2);
// file.appendFileSync('fontend.txt', data);


var data={
"idli":50,
"dosa":1000
}
var arr=["idli","dosa"];
var bill=[50,40,1000,55,777];
var sum;
for (var i = 0; i < arr.length; i++) {
for (var key in data) {
  for(var j=0;j<bill.length;j++){
        if (arr[i] == key) {
            if(bill[j]==data[key]){
          console.log( bill[j])
      
    }
    console.log(sum)
}
  }
}
}
var s;
for(var i=0;i<bill.length;i++){
         s=bill[i--]+bill[i];
         sum+=s;
}
