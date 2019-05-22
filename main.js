
/*let i=1;
let a= +prompt('С какого числа начинать отсчёт');
let b= +prompt('На сколько увеличивать число');
let с = +prompt('Сколько раз увеличивать');
let sum=0;
while (i<10) {
    i++;
    sum=a+sum;
    console.log(sum);
}*/
/*let i=1;
let a= +prompt('С какого числа начинать отсчёт');
let b= +prompt('На сколько увеличивать число');

while (i>a) {  
    i = +prompt('Сколько раз увеличивать', a);
}
let sum=0;
while(i<a){
    i++;
    sum=a+sum;
    console.log(sum);
}*/
/*let b= +prompt('С какого числа начинать отсчёт');
let c= +prompt('На сколько увеличивать число');
let n = +prompt('Сколько раз увеличивать');
let a=0;
    a=b+c*n;

    
    alert(a);*/
/*let b= +prompt('С какого числа начинать отсчёт');
let c= +prompt('На сколько увеличивать число');
let n = +prompt('Сколько раз увеличивать');
let a=0;
while(n>a){
    a=b+c*n;
    n++;
    console.log(a); 
}*/
/*let a=9, b=6;
if(a<10 && b>5){
    console.log(1);
}else{
    console.log(2);
}*/
/*for ( let i = 0, j = 1;  j<7; i++, j++ ) {
    i = i + j ;
    console.log(i);
}*/
/*let arr = [10, 2, 3, 'Вася', 5];
let sas = arr.length-1;
for ( i = 0; i <= sas; i++) {
    
	console.log(arr[i]); //выведет 1, 2, 3, 4, 5
}*/
/*let i = 0;
while (i <= 50) {
	console.log(i);
    i++;
    
}*/
/*let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length-1; i++) {
	console.log(arr[i]);
}*/
//Найти произведение элементов этого массива
/*let arr = [2, 3, 4, 5];
let result = 1;
for (var i = 0; i < arr.length; i++) {
    result *= arr[i];
    console.log(result);
}*/

let arr = [11, 34, 67, 4, 25];
let max=0;

for (i = 0; i <= arr.length; i++) {
    
    if (max < arr[i]) {
        max = arr[i]; 
    }   
    
	
}
for (i = 0; i <= max; i++) {
    
    if (max < arr[i]) {
        max = arr[i]; 
    }   
	console.log(max);
}
let min=max;
for (i = 0; i <= arr.length; i++) {
    
    if (arr[i] < min  ) {
        min = arr[i]; 
    }   
    
	
}
for (i = 0; i < min; i++) {
    
    if (min > arr[i]) {
        min = arr[i]; 
    }   
    console.log(min);
}
    
    /*let str = 'adddd вавуууу wewewewe';
    let arr = str.split([' '], [2]);
    console.log(arr);  */