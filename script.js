//your code here


let mp={};
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
	let articlelessarray=[];
	let articlelessitem=[];
fot(let i =0;i<touristSpots.length;i++){
	articlelessitem=touristSpots[i].replace(/\bthe\b|\ban\b|\ba\b/gi,"").trim();
	articlelessarray.push(articlelessitem);
	mp[articlelessitem]=touristSpots[i];
	

}
articlelessarray.sort();
let ans=[];
for(let i of articlelessarray()){
	ans.push(mp[i]);
}
console.log(ans);