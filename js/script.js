document.addEventListener("DOMContentLoaded",() =>{
	task1=document.querySelector("#task1")
	task1.addEventListener('click',()=>{
		input=document.querySelector("#task1_inp")
		output=document.querySelector("#task1_out")
		num=input.value
		if((num<1)||num>125){
			output.innerHTML="НЕ БАЛУЙСЯ! :-)<br>Введи положительное число до 125"
			input.value=null
			return
		}
		input.value=null

		let res=[]			//результат
		let size=2*num-1
		let direct="left"
		let arr=new Array(size)
		arrInit(arr,size)
		let x=y=xMax=xMin=yMax=yMin = num-1
		res.push(arr[x][y])
		while (true) {
			switch (direct) {
				case "left":y--;break;
				case "right":y++;break;
				case "top":x--;break;
				case "bottom":x++;break;
			}
			if((x<0||y<0)||(x>size||y>size)){console.log("exit"); break}
			switch (direct) {
				case "left":  if(y<yMin){yMin=y;direct="bottom"}
				case "right": if(y>yMax){yMax=y;direct="top"}
				case "top":   if(x<xMin){xMin=x;direct="left"}
				case "bottom":if(x>xMax){xMax=x;direct="right"}
			}
			res.push(arr[x][y])
		}
		output.innerHTML=res.join(", ")
	})

	task2=document.querySelector("#task2")
	task2.addEventListener('click',()=>{
		input=document.querySelector("#task2_inp")
		output=document.querySelector("#task2_out")
		str=input.value.split('')
		input.value=null

		let res			//результат
		if(str.length==0) return
		iStart=0
		iEnd=str.length-1
		while (true) {
			if(iStart==iEnd){res=true;break}
			if(str[iStart]!==str[iEnd]){res=false;break}
			iStart++
			iEnd--
			if(iStart>iEnd){res=true;break}
		}
		if(res)output.innerHTML="ПАЛИНДРОМ"
		else output.innerHTML="НЕ ПАЛИНДРОМ"
	})

	task3=document.querySelector("#task3")
	task3.addEventListener('click',()=>{
		input=document.querySelector("#task3_inp")
		output=document.querySelector("#task3_out")
		let res			//результат
		num=input.value.split('')
		if(num.length==0) return
		if(((num.length%2)!=0)||(num==[])){output.innerHTML="ЧИТАЙ УКАЗАНИЕ"; return}
		input.value=null

		sum1=sum2=0
		middle=num.length/2
		for (let i = 0; i<middle; i++) {
			num[i]=+num[i]
			sum1=sum1+num[i]
		}
		for (let i = middle; i<num.length; i++) {
			num[i]=+num[i]
			sum2=sum2+num[i]
		}
		if(sum1===sum2)output.innerHTML="СЧАСТЛИВЫЙ"
		else output.innerHTML="НЕ СЧАСТЛИВЫЙ"
	})

	task4=document.querySelector("#task4")
	task4.addEventListener('click',()=>{
		let input=document.querySelector("#task4_inp")
		let output=document.querySelector("#task4_out")
		let arrStr=input.value.split(',')
		if(arrStr==[]) return
		if(arrStr.includes("")){
			output.innerHTML="Многовато запятых!!!"
			return
		}
		let arr=arrStr.map(item=>{return Number(item)})
		if(arr.includes(NaN)){
			output.innerHTML="Только цифры!!!"
			return
		}
		let iMax=arr.length-1
		let i=1
		let count=0			//результат
		while (true) {
			if(arr[i]<=arr[i-1]){arr[i]++;count++;}
			else i++
			if(i>iMax)break
		}
		output.innerHTML=`количество ходов: ${count}`
	})

})

function arrInit(arr,size){
	for (let i = 0; i < size; i++) {
		arr[i]=new Array(size)
	}
	let val=1
	for (let i = 0; i < size; i++) {
		for (let j = 0; j < size; j++) {
			arr[i][j]=val++;
		}
	}
	// for (let i = 0; i < size; i++) {
	// 	for (let j = 0; j < size; j++) {
	// 		console.log("arr[",i,"][",j,"] = ",arr[i][j])
	// 	}
	// }
}
