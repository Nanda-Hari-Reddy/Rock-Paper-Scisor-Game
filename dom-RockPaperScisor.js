
        let Score=JSON.parse(localStorage.getItem("score"));
        if(Score===null)
        {
            Score=
            {
                wins:0,
                lost:0,
                ties:0
            }
        }


        let scoreboard = document.querySelector('.score')
        scoreboard.innerHTML= `Wins:${Score.wins}, Lost:${Score.lost}, Tie:${Score.ties}`;
        let res = document.querySelector(".result");

            document.querySelector('.auto').addEventListener("click",()=>
                {
                    autoplay();
                }
            )


            function auto()
            {
                const yourMove = PickcomputerMove();
                playGame(yourMove); 
            }

            let intervalId;
            let playAuto = false;
            function autoplay()
            {
                if(!playAuto)
                {
                   intervalId = setInterval(auto,2000);
                    playAuto = true;
                }
                else
                {
                    clearInterval(intervalId);
                    playAuto = false;
                }
            }


            document.querySelector(`.Reset`).addEventListener("click",()=>
                {
                    deleteScore();
                }
            )


            function deleteScore()
            {
                Score.wins=0;
                Score.lost=0;
                Score.ties=0;
                localStorage.removeItem("score");
                // alert(`Wins:${Score.wins}, Lost:${Score.lost}, Tie:${Score.ties}`)
                let scoreboard = document.querySelector('.score')
                res.innerHTML="";
                scoreboard.innerHTML= `Wins:${Score.wins}, Lost:${Score.lost}, Tie:${Score.ties}`;
            }


            document.querySelector('.rock').addEventListener("click",()=>
                {
                    playGame("rock")
                }
            )


            document.body.addEventListener("keydown",(event)=>
                {
                    if(event.key==='r' || event.key==='R') playGame("rock");
                    if(event.key==='p' || event.key==='P') playGame("paper");
                    if(event.key==='s' || event.key==='S') playGame("Scisors");

                }
            )


            document.querySelector('.paper').addEventListener("click",()=>
                {
                    playGame("paper")
                }
            )


            document.querySelector('.Scisors').addEventListener("click",()=>
                {
                    playGame("Scisors")
                }
            )


            function PickcomputerMove()
            {
                let computerMove='';
                computer =  Math.random();
                if(computer<=0.3333)
                {
                    computerMove='rock';
                }
                else if(computer>0.3333 && computer<=0.6666)
                {
                    computerMove='paper'
                }
                else
                {
                    computerMove='Scisors'
                }
                return computerMove;
            }


            function playGame(yourMove)
            {
                let result='';
                const computerMove = PickcomputerMove();
                if(yourMove==='rock')
                {
                    if(computerMove==='rock')
                    {
                        result='Its a tie'
                        ++Score.ties;
                    }
                    else if(computerMove==='paper')
                    {
                        result='You Lose';
                        ++Score.lost;
                    }
                    else
                    {
                        result='You Win';
                        ++Score.wins;
                    }
                }
                if(yourMove==='paper')
                {
                    if(computerMove==='rock') 
                    {
                        result='You Win';
                        ++Score.wins;
                    }
                    else if(computerMove==='paper') 
                    {
                        result='Its a tie'
                        ++Score.ties;
                    }
                    else 
                    {
                        result='You Lose';
                        ++Score.lost;
                    }
                }
                if(yourMove==='Scisors')
                {
                    if(computerMove==='rock')
                    {
                        result='You Lose';
                        ++Score.lost;
                    }
                    else if(computerMove==='paper')
                    {
                        result='You Win';
                        ++Score.wins;
                    }
                    else
                    {
                        result='Its a tie'
                        ++Score.ties;
                    }
                }
                localStorage.setItem("score",JSON.stringify(Score))
                res.innerHTML=`"${result}" <br> You picked ${yourMove} - Computer picked ${computerMove} `;
                // alert( `You picked ${yourMove} and Computer picked ${computerMove},${result} Wins:${Score.wins}, Lost:${Score.lost}, Tie:${Score.ties}`)
                scoreboard.innerHTML= `Wins:${Score.wins}, Lost:${Score.lost}, Tie:${Score.ties}`;
            }