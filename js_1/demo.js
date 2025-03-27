let demo =() =>{
    let l1=document.createElement("label");
    let txt=document.createTextNode("Enter a Name");
    l1.appendChild(txt);
    let inp=document.createElement("input");
    inp.setAttribute('type',"text");
    inp.setAttribute('id','uname');
    inp.setAttribute('value',"");
    inp.setAttribute('placeholder',"Enter a name");
    l1.appendChild(inp);
    let button=document.createElement("button");
    button.innerText ="Submit";
    
    document.body.appendChild(l1);
    document.body.appendChild(button);

}