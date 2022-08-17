
let button = document.querySelector('button');
let myImage = document.querySelector('.promo_img');
button.onclick = function(){
	alert('Пока нет возможности покупки!');
}
let pImage = document.querySelectorAll('.people_img');
let para = document.querySelector('blockquote p');
let cImage = document.querySelector('li.people_list_item_center > img');
let pName = document.querySelector('.people_name');
let pInf = document.querySelector('.people_info');
let lArrow = document.querySelector('.arrow_left');
let rArrow = document.querySelector('.arrow_right');

pInf.style.textAlign = 'center';

pImage.forEach(function(image){
	image.onmouseover = function(){
	let pId = image.getAttribute('id');
	let cId = cImage.getAttribute('id');
	pInf.style.textAlign = null;
	switch(pId){
		case 'p1':
			pName.textContent = 'Лера Винчестер';
			p1.style.width = '150%';
			p2.style.width = '100%';
			p3.style.width = '70%';
			p4.style.width = '100%';
			p5.style.width = '100%';
			pInf.style.margin = '0 0 0 -680px'
			para.textContent = 'Очень хороший помощник в доме, убирает все начисто. Оставляю его на целый день, при этом заранее подготовив комнаты и ухожу. Возвращаясь домой - квартира вся чистая!';
			break;
		case 'p2':
			pName.textContent = 'Анастасия Герц';
			p1.style.width = '100%';
			p2.style.width = '150%';
			p3.style.width = '70%';
			p4.style.width = '100%';
			p5.style.width = '100%';
			pInf.style.margin = '0 0 0 -330px'
			para.textContent = 'Хорошо собирает мусор, пыль. Отлично справляется с поставленной задачей. Вместительный контейнер под сбор мусора пыли';
			break;
		case 'p3':
			pName.textContent = 'Олег Фролов';
			p1.style.width = '100%';
			p2.style.width = '100%';
			p3.style.width = '100%';
			p4.style.width = '100%';
			p5.style.width = '100%';
			pInf.style.margin = '0 0 0 0px'
			para.textContent = 'Хорошо убирает всю пыль, даже не думала что у нас столько ворсинок лежит на полу, видит все препятствия, если есть порог и он с первого раза на него не заехал, то он не уезжает а пробует ещё раз.';
			break;
		case 'p4':
			pName.textContent = 'Стас Скрипт';
			p1.style.width = '100%';
			p2.style.width = '100%';
			p3.style.width = '70%';
			p4.style.width = '150%';
			p5.style.width = '100%';
			pInf.style.margin = '0 0 0 400px'
			para.textContent = 'Сухая и влажная уборка; отлично ориентируется в пространстве и составляет план помещений; имеется приложение для смартфона посредством которого легко и очень удобно управлять робот-пылесосом';
			break;
		case 'p5':
			pName.textContent = 'Петр Кирилицца';
			p1.style.width = '100%';
			p2.style.width = '100%';
			p3.style.width = '70%';
			p4.style.width = '100%';
			p5.style.width = '150%';
			pInf.style.margin = '0 0 0 730px'
			para.textContent = 'Лучший! он все видит, объезжает даже мелкие игрушки расбросанные по полу. До этого был дорогущий айробот, мало того, что он был тупой и вечно все сносил, через полтора года еще и сломался!';
			break;		
	}
}
	rArrow.onclick = function(){
		let pSrc = image.getAttribute('src');
		let pId = image.getAttribute('id');
		let pList = document.querySelector('.people_list');
		for (let i = pImage.length - 1; i >= 0; i--) {
			console.log(pImage[i]);
		}
	}
});

let burger = document.querySelector('.burger');

burger.onclick = function(){
	console.log('pressed');
}