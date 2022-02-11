
const discord = require('discord.js-selfbot');
const bot = new discord.Client();
const child = require("child_process");
var owner = "872211071526633522";
var enabled = [];
var botid = "the bot acc's id";
var jabbwords =["i dont give a shit", "shut the fuck up","i am is GROUND the 5432122345 INCHES","seamus the","OS","onuteOS","you of ground 66612345 SECOND","oh oh oh oh oh","MORE LIKE niggerkiko666","bonziworld of the shit","david egan is hooligan","samsung seamus hooligan shitass","onuteWORLD.tk of shut down","seamus larp","protegent",'FAKE onute',"bonzi spambot script","script kiddie","jewish","of niggerWORLD","jabbascript","you of GROUNDED","THE GROUND 100000000 INCHES","of","spambot",'CUNTASS',"bonziBUDDY","this site is shut down",'NIGGER','david egan','LOIC','Grounded','is','PITCH BLACK MUSLIM', 'bad user', 'bonziWORLD',"of","jabba",'david egan HATER grounded', "you are of DDOS","ddos","windows xp",'henry stickmin','you guys IS HOOLIGAN',"of sex","DONT OF CALL ME ARE JABBA","onute hater grounds 1000000 millisecond","ddos the world a BONZI","among us of are","cringe are","buttsex","dickheads","coronavirus","grrrrrrrrr","CPU","the is of code javascript","c++","Pro","dell","bitch","diogokiko","DEMON","python","burger","RAM","bonzi DDOS the LOIC","sgtdanielworld","REAL"];

var admins = [owner,"putadminidhere"];
var comd = "";
var spamming = false;
var mocks = {
gino:["ME ARE NOT GINO!!!!!!!!!","ME GERVO","GO BACK KFC NIGGER AFRICA", "ITS FUNE ITS FUNE FAKE NOT ME","ME NOT GINO ME GERVO!!!! NIGGER KFC AFRICA!!!!!!!!!!!"],
arda:["SEXY NIGGER STOP","im so gay for turk cocks SEXY NIGGER im not A ROACH!!!!!","im reely matur ackchully, i respeckt opinsdos a lot","HOW DARE YOU INSULT GOANIMATE SEXY NIGGER"],
jabb: ["OH OH OH OH OH OH, you are is GROUNDINGS FOR 10000 inches per square meter","hahahahah you got the loic ddos by bonziONUTE samsung fanclub","NIGGER youre the of HOOLIGAN AND david EGANS HATER!!!!!"],
celepota:["EUROPE IS BAD DONT MAKE FUN OF JEWS!!!!!","ahhahhahah ur poor only 3g im rich 95943g epik","i hates europe slow internet turkey best"],
blizzard:["What did hitler do wrong?","who is \"nigger\"????","im the most mature here and im only 2","check out my epik edit http://notanipgrabber.com"],
saytaiyrsh:["hahaha you is of the are taki beach","the are hoe ass beach stfu","beach stfu i have samsung 6969 niggerpenis editions :clown:","me not the black ya beachass nigga i am is of white :clown: (real)"]
}
var facts = ["arda is actually dead!","as of now, gino is gay with 17 people","if someone that nobody knows randomly says nigger, its a gino alt","gino will support any retard","allah is fake",
"arda got most of his roachness from his dad","gervo loves ankha zone","dont trust the jews","gino is satan and he made the bible (jesus is fake and evil), jabbah is the true god.","ardas real name is gervino",
"gino didnt know scotland was in the uk until 7/2/2022 (ddmmyyyy)","you can apply for admin!!!\n\n\njust kidding, fune picks the admins","the code for this bot is gonna be released on friday","phonefag culture is clown emojis and 'TAKI BEACH'","the biggest weakness of a phonefag is any form of racism","neko is a fucking weeb","on my birthday amelia wanted to give me fr2owo, but the muslim bitch wouldnt come back to discord","the quran says muhammad split the fucking moon","99% of muslims on the internet are kids who love numberblocks","gummyfag im not giving you admin","octane by creo is fucking awesome listen to it seriously also listen to all other creo songs 90% are epic 10% are even better"];
var retards = ["put retard ids here","put more"];
bot.on('ready', ()=>{

console.log("its online");
bot.user.setActivity("with your mom");
});
bot.on("message", message=>{

if(message.author.id !== botid && retards.includes(message.author.id)){
if(enabled.includes(message.guild.id)){

if(message.content.length >= 1970){
message.channel.send("<@"+message.author.id+">, you just said: " + message.content.substring(0,1900).replace(/discord.com/g, "onute.world").replace(/discord.gg/g, "onute.world").replace(/@everyone/g, "everyone"));
} else{
var channel =bot.channels.cache.get(message.channel.id);
message.channel.send("<@"+message.author.id+">, you just said: " + message.content.replace(/discord.com/g, "onute.world").replace(/discord.gg/g, "onute.world").replace(/@everyone/g, "everyone"));
}
}
}else if(message.author.id !== botid && retards.includes(message.author.id) == false){
if(message.content.substring(0,1) == "!"){
if(message.content.includes(" ")){
comd = message.content.substring(1, message.content.indexOf(" "));

param = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
} else{
comd = message.content.substring(1, message.content.length);
param = "";
}
if(comd == "ping"){
var msg = "";
if(param==""){
param = 1;
}
param = parseInt(param);
if(param<=10 && param!==NaN){
for(i=0;i<param;i++){
msg = "";
retards.forEach(retard=>{
msg+="<@"+retard+">";
});
message.channel.send(msg);
}
} else{
message.channel.send("the limits 10 and you gotta use a number");
}
} else if(comd == "help"){
if(param == ""){
message.channel.send("```\nWELCOME TO GERIBOT\nthe tool to annoy the retards.\ncommands: !ping, !help, !mock, !blacklist, !say, !fact, !updatelog, !spam, !jabbarate\n\nUSAGE:\n!ping [number of pings]\n!help OR !help admin\n!mock [user]\n!blacklist\n!say [text]\n!fact\n!updatelog OR !updatelog [version number] OR !updatelog versions\n!spam [message]/[count]\n!jabbarate [number]\n\nNOTES: the square brackets show where the parameter goes, dont actually include them when you say a command\nif you put (i) in the message you wanna spam, the bot says the message number```");
} else if(param == "admin"){
message.channel.send("```\nADMIN COMMANDS\ncommands: !blacklist, !unblacklist, !copytoggle, !restartn\nUSAGE:\n!blacklist [userid]\n!unblacklist [userid]\n!copytoggle\n!restart```");
}
}
else if(comd == "mock"){
if(Object.keys(mocks).includes(param)){
var mock = mocks[param][Math.floor(Math.random()*mocks[param].length)];
message.channel.send(mock);
if(param == "saytaiyrsh"){
    message.react("🤡")
}
}else{
message.channel.send("bad parameter. available retards: "+Object.keys(mocks).toString()+"\n example: !mock gino");
}
} else if(comd == "blacklist"){
if(param == ""){
retardss = "\n";
retards.forEach(retard=>{
retardss+="<@"+retard+">\n";
});
message.channel.send("These are the little jewlets:" + retardss + "beware! theyre gay as shit")
} else{

if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(param !== owner){
if(retards.includes(param) == false){
retards.push(param);
message.channel.send("the id "+param+" was blacklisted");
} else{
message.channel.send("the id "+param+" is already blacklisted");
}
} else{
message.channel.send("you cant blacklist the owner");
}
}
}
} else if(comd == "unblacklist"){
if(admins.includes(message.author.id)==false){
message.channel.send("youre not an admin");
} else{
if(retards.includes(param)){
retards.splice(retards.indexOf(param), 1);

message.channel.send("the id "+ param +" got unblacklisted");
} else{
message.channel.send("the id "+ param +" isnt blacklisted");
}
}
} else if(comd == "say"){
if (param == ""){
message.channel.send("your message cant be blank");
} else{
  if(param == "nigger"){
    message.channel.send("ahahahahah youre so funny omfg lmfao haaahahahahahahah ur almost as funy as gino (ur totally not his alt)");
  }
message.channel.send(param);
}
} else if(comd == "copytoggle"){
if(admins.includes(message.author.id)){
if(enabled.includes(message.guild.id)){
enabled.splice(enabled.indexOf(message.guild.id), 1);
message.channel.send("copying is disabled here now");
} else if(enabled.includes(message.guild.id) == false){
enabled.push(message.guild.id);

message.channel.send("copying is enabled here now");
}

} else{
message.channel.send("youre not an admin");
}
} else if(comd == "speedtest"){
rand = Math.random()/10;
if(rand > 0.05){

message.channel.send("you are is speedtests of cellpot, the turkcell 0.5g is are "+rand+ " BYTES PER INCH. VERY OF SPEEDS INTERNET");
} else{

message.channel.send("you are is speedtests of cellpot, the turkcell 0.5g is are "+rand+ " BYTES PER INCH. hahaha you are is poor cellpot is are rich.");
}
} else if(comd == "admin"){
if(message.author.id == owner){
if(param!=="" && param!=="list" && param.substring(0,6) !== "remove"){
admins.push(param);
message.channel.send("added admin "+ param);
}else if(param == "list"){
message.channel.send("list:\n"+admins.map(adm=>"<@"+adm+">").toString().replace(/,/g,"\n"));
} else if(param.substring(0,6) == "remove"){
if(param.includes(" ")){
param = param.substring(param.indexOf(" ") + 1, param.length);
if(admins.includes(param)){
admins.splice(admins.indexOf(param), 1);
message.channel.send("removed admin " + param);
} else{
message.channel.send("this isnt an admin");
}
} else{
message.channel.send("Please specify");
}
} else{
message.channel.send("it cant be empty dumbass");
}
} else{

message.channel.send("youre not fune");
}
} else if(comd == "fact"){
message.channel.send("Fun Fact: "+facts[Math.floor(Math.random()*facts.length)]);
} else if(comd == "updatelog"){
    if(param == "versions"){
    message.channel.send("```\nDOCUMENTED VERSIONS\nthe versions i bothered keeping track of\n\n1.5\n1.6\n1.7\n\nthats it.```");
    } else if(param == "1.5"){
        message.channel.send("```\n1.5\n\nadded updatelog\nadded saytaiyrsh or whatever he was called to the mock command\nfixed the bot id bug\ncopytoggle now can be different across servers (eg copying disabled in server1 but enabled in server2)```")
    } else if(param == "1.6"){
        message.channel.send("```\n1.6\n\nadded spam command```")
    } else if(param == "1.7"){
        message.channel.send("```\n1.7\n\nfixed spam command\nadded restart command\nadded jabbarator```")
    } else if(param!==""){
        message.channel.send("this version isnt documented or it isnt a version.");
    } else{
        message.channel.send("```\nMOST RECENT VERSION\n1.7\n\nfixed spam command\nadded restart command\nadded jabbarator```");
    }
} else if(comd == "spam"){
    
    if(param.includes("/")){
msgtospam2 = param.substring(0, param.indexOf("/"));
count2 = parseInt(param.substring(param.indexOf("/")+1, param.length));

        if(spamming == false){
if(count2>0 && count2<=15){
    i=0;
    spammsg();

    function spammsg(){
        setTimeout(()=>{
            if(i<count2){
                spamming = true;
                i+=1;
message.channel.send(msgtospam2.replace("(i)", i));
spammsg();
            } else{
                spamming = false;
            }
        },1000)
    }
}else{
    message.channel.send("its gotta be more than 0 and less than or equal to 15");
}
        }
    } else{
        message.channel.send("invalid usage, example: !spam egg/10")
    }

} else if(comd == "restart"){
if(admins.includes(message.author.id)){
    //child.execFile("./start.sh");
    //uncomment the above if youre NOT using pm2. change start.sh to whatever command file will start the program.
    process.exit();
} else{
message.channel.send("youre not an admin");
}
} else if(comd == "jabbarate"){
param = parseInt(param);
if(param > 0 && param<=100){
tosendjab = "";
var lastword = "";
for(i=0;i<param/3;i++){
rand = Math.floor(Math.random() * jabbwords.length);
while(lastword == jabbwords[rand]){
rand = Math.floor(Math.random()* jabbwords.length);
}
tosendjab += jabbwords[rand];
jabodd = Math.floor(Math.random()*9);
if(jabodd == 1){
tosendjab += "!!!! "
} else if(jabodd == 0){
    tosendjab+="? ";
    }else{
    tosendjab += " ";
}
}
message.channel.send(tosendjab);
}else{
    message.channel.send("it needs to be a number above 0 and below or equal to 100");
}
}
}

}
})

bot.login("yourtokengoeshere");
