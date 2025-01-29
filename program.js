let arr = [
	{title: "Заголовок 1", href:""},
	{title:"Заголовок 2", href:""},
	{title:"Заголовок 3", href:""},
	{title:"Заголовок 4", href:""},
	{title:"Заголовок 5", href:""},
	{title:"Заголовок 6", href:""}
];

arr.forEach(elem => elem.clicks = Math.round(Math.random()*99) + 50);

arr.forEach(elem => console.log(elem.clicks));

arr.filter(elem => elem.clicks >= 50)
.sort((a,b) => b.clicks - a.clicks)
.forEach(obj => document.write(`<a>${obj.title} (${obj.clicks})</a><br>`));