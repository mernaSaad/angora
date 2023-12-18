var quotes=[
    {
        qoute:"I am so clever that sometimes I don't understand a single word of what I am saying",
        aurthor:"--Oscar Wilde, The Happy Prince and Other Stories",
    },
    {
        qoute:"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment",
        aurthor:"--Ralph Waldo Emerson",
    },
    {
        qoute:"Insanity is doing the same thing, over and over again, but expecting different results",
        aurthor:"--Narcotics Anonymous",
    },
    {
        qoute:"It is better to be hated for what you are than to be loved for what you are not",
        aurthor:"--Andre Gide, Autumn Leaves",
    },
    {
        qoute:"If you tell the truth, you don't have to remember anything",
        aurthor:"--Mark Twain",
    },
    {
        qoute:"You only live once, but if you do it right, once is enough",
        aurthor:"--Mae West",
    },
    {
        qoute:"Be the change that you wish to see in the world",
        aurthor:"--Mahatma Gandhi",
    },
    {
        qoute:"Friendship ... is born at the moment when one man says to another 'What! You too? I thought that no one but myself . . .'",
        aurthor:"--C.S. Lewis, The Four Loves",
    }
]

var Duration
var lastIndex
var displayedQuotes=[]
function getQoutes(){

    if(displayedQuotes.length == quotes.length){
        displayedQuotes=[]
    }

    do{
         Duration = Math.round(Math.random()*quotes.length);
    }while(Duration==lastIndex || displayedQuotes.includes(Duration)){
        console.log(Duration)
        lastIndex=Duration
        displayedQuotes.push(Duration)
    }

    document.getElementById("qoute").innerHTML=quotes[Duration].qoute
    document.getElementById("aurthor").innerHTML=quotes[Duration].aurthor
}