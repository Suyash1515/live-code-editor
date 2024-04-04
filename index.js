let output=document.querySelector('#output');


let allInputs=document.querySelectorAll(".leftPart textarea")
let htmlCode,cssCode,jsCode='';
allInputs.forEach((el,index)=>{
	el.addEventListener("keyup",()=>{
		if(index==0)  //for html
		{
			htmlCode=el.value;
		}
		if(index==1)  //for css
		{
			cssCode=el.value
		}
		if(index==2)  //for js
		{
			jsCode=el.value;
		}
		output.contentDocument.body.innerHTML=htmlCode;  // display in output as html
		output.contentDocument.head.innerHTML=`<style>${cssCode}</style>` // display in output and changes color of html written
		output.contentWindow.eval(jsCode)  // displaying js in output
	})
})