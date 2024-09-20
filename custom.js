const quotes = [{
Цытаты: `"В жизни всегда есть две дороги: одна — первая, а другая — вторая.

"`,
writer:`--Джейсон Стетхем`
}, 
{
  Цытаты: `"Мы должны оставаться мыми, а они – оними.
    
  "`,
  writer:`--Джейсон Стетхем`
    }, 
    {
        Цытаты: `"Как говорил мой дед, (Я твой дед)
        
        "`,
        writer:`--Джейсон Стетхем`
        }, 
        {
            Цытаты: `"Взял нож - режь, взял дошик - ешь.
            
            "`,
            writer:`--Джейсон Стетхем`
            }, 
            , {
                Цытаты: `"Не будьте эгоистами, в первую очередь думайте о себе!
                
                "`,
                writer:`--Джейсон Стетхем`
            } , {
                Цытаты: `«Если есть на свете рай, то это Краснодарский край»`,
                writer: `--Джейсон Стетхем`
                
            }
        
           
]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".Цытаты");
let writer = document.querySelector(".writer");


btn.addEventListener("click",function() {
let random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random].Цытаты;

 
})