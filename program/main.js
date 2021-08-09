var Count = 10;
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var player1 = "player 1";
var player2 = "player 2";
document.getElementById("form1").addEventListener("submit", (e)=>
{
    e.preventDefault();
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    document.getElementById("form1").style.display = "none";
    document.getElementById("newGame").style.display = "";
    document.getElementById("turn").innerText = player1 + "'s turn";
    Count = 1;
});

console.log(player1 + " " + player2);

$(document).ready(function()
{
    $("button").click(function()
    {
        console.log(player1 + " " + player2);
        if(Count > 9)
        {
            return;
        }
        document.getElementById("won").innerText = "";

        var x = $(this);
        var value = x[0].value;
        var id = x[0].id;
        console.log(value+ " "+ id);
        
        if(board[value] != 0)
        {
            document.getElementById("won").innerText = "Wrong Choose!";
            return;
        }

        if(Count%2 == 1)
        {
            document.getElementById(id).style.backgroundColor = "green";
            board[value] = 5;
            if(checkWinnerPlayer1() == true)
            {
                document.getElementById("won").innerText = player1+" won!";
                Count = 10;
            }
        }
        else
        {
            document.getElementById(id).style.backgroundColor = "red";
            board[value] = 7;
            if(checkWinnerPlayer2() == true)
            {
                document.getElementById("won").innerText = player2+" won!";
                Count = 10;
            }
        }
        if(Count == 9)
        {
            document.getElementById("won").innerText ="Draw!";
        }

        if(Count%2 == 0)
        {
            document.getElementById("turn").innerText = player1 + "'s turn";
        }
        else
        {
            document.getElementById("turn").innerText = player2 + "'s turn";
        }
        Count++;
    });



    $("#newGame").click(function()
    {
        location.reload();
    });
});


function checkWinnerPlayer1()
{
    if(board[1]+board[2]+board[3] == 15)
    {
        return true;
    }
    if(board[4]+board[5]+board[6] == 15)
    {
       return true;
    }
    if(board[7]+board[8]+board[9] == 15)
    {
        return true;
    }
    if(board[1]+board[4]+board[7] == 15)
    {
       return true;
    }
    if(board[2]+board[5]+board[8] == 15)
    {
        return true;
    }
    if(board[3]+board[6]+board[9] == 15)
    {
       return true;
    }
    if(board[1]+board[5]+board[9] == 15)
    {
       return true;
    }
    if(board[3]+board[5]+board[7] == 15)
    {
        return true;
    }
    return false;
}

function checkWinnerPlayer2()
{
    if(board[1]+board[2]+board[3] == 21)
    {
        return true;
    }
    if(board[4]+board[5]+board[6] == 21)
    {
       return true;
    }
    if(board[7]+board[8]+board[9] == 21)
    {
        return true;
    }
    if(board[1]+board[4]+board[7] == 21)
    {
       return true;
    }
    if(board[2]+board[5]+board[8] == 21)
    {
        return true;
    }
    if(board[3]+board[6]+board[9] == 21)
    {
       return true;
    }
    if(board[1]+board[5]+board[9] == 21)
    {
       return true;
    }
    if(board[3]+board[5]+board[7] == 21)
    {
        return true;
    }
    return false;
}

