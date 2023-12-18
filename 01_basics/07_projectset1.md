# Projects related to DOM

## Project Link[Click here](

)

# Solution Code

## Project 1

``` javascript
console.log("Shahjan khan")

const buttons=document.querySelectorAll('.button')    // node list mili hai , html collections nhi
// console.log(buttons);
let body=document.querySelector("body")

buttons.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
      console.log(e);
      console.log(e.target);
      if(e.target.id === "grey")
       {
        body.style.backgroundColor= e.target.id
       }
      else if(e.target.id === "box1")
       {
        body.style.backgroundColor="lightgreen"
       }
      if(e.target.id === "box2")
       {
        body.style.backgroundColor= "aquamarine"
       }
      if(e.target.id === "box3")
       {
        body.style.backgroundColor= "burlywood"
       }
    })
})
```