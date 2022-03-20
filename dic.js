console.log("bankai");
// let fetchBtn=document.getElementById('fetchbtn');
// iam trying to push this code using cmd
// fetchBtn.addEventListener('click', buttonClickHandler);

// function buttonClickHandler(){
//     console.log('you have touched orihime');
//     const xhr= new XMLHttpRequest();
//     // const vv='harry.txt';
//     // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1',true);
//     xhr.open('Post', 'http://dummy.restapiexample.com/api/v1/create',true);
//     xhr.getResponseHeader('content-type','application/x-www-form-urlencoded');
    
//     xhr.onprogress=function(){
//         console.log('on progress kavai ');

//     }
//     xhr.onload=function(){
//         console.log(this.responseText);
//     }
//     param={"name":"orihime","salary":"1237","age":"23"}
//     xhr.send(param);
//     console.log("we are done!!")
// }
let popbtn=document.getElementById('popbtn');
popbtn.addEventListener('click', pophandler);

function pophandler(){
    console.log('you have touched pop handler');
    var url='https://api.dictionaryapi.dev/api/v2/entries/en/'
var word = document.getElementById("fname").value;
console.log(word);
var result=url+word;
console.log(result);
        const xhr= new XMLHttpRequest();
        console.log(url);
        xhr.open('GET',result,true);
        xhr.onload=function(){
            if(this.status===200){
                let obj1=JSON.parse(this.responseText);
                console.log(obj1);
                let list=document.getElementById('list');
                str="";
                for(key in obj1){
                    str+= `<li>${obj1[key]["meanings"]["0"]["definitions"]["0"]["definition"]}</li>`
                    // str+= `<li>${obj1[phonetics]}</li>`
                }
                list.innerHTML=str;
                let obj2=JSON.parse(this.responseText);
                console.log(obj2);
                let list1=document.getElementById('list1');
                str1="";
                for(key in obj2){
                    str1+= `<li>${obj1[key]["meanings"]["0"]["definitions"]["1"]["definition"]}</li>`
                    // str+= `<li>${obj1[phonetics]}</li>`
                }
                list1.innerHTML=str1;
            }
            else{
                console.log("some error occured")
            }
        }
        xhr.send();
        console.log("we are done fetching")
}
