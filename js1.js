<script>
function formsubmit(){
var formdata=Readformdata();
newRecord(formdata);
}
function Readformdata(){
var formdata={};
formdata["empid"]=document.getElementById("empid").value;
formdata["empname"]=document.getElementById("empname").value;
formdata["phno"]=document.getElementById("phno").value;
formdata["salary"]=document.getElementById("salary").value;
formdata["address"]=document.getElementById("address").value;
return formdata;
}
function newRecord(data){
var table=document.getElementById("storedata").getElementByTagName('tbody')[0];
var newrow=table.insertRow(table.length);
var cell=newrow.insertCell(0);
cell.innerHTML=data.empid;
var cell1=newrow.insertCell(1);
cell1.innerHTML=data.empname;
var cell2=newrow.insertCell(2);
cell2.innerHTML=data.phno;
var cell3=newrow.insertCell(3);
cell3.innerHTML=data.salary;
var cell4=newrow.insertCell(4);
cell4.innerHTML=data.address;
var cell5=newrow.insertCell(5);
cell5.innerHTML='<a>edit</a><a>delete</a>';
}
</script>