function ChangeTextCompleted()
{
    document.getElementById("statusTXT").textContent = "Completed";
    document.getElementById("statusTXT").style.color = 'green';
}

function ChangeTextWorkingOnIt()
{
    document.getElementById("statusTXT").textContent = "Working on It";
    document.getElementById("statusTXT").style.color = 'DarkOrange';
}

function ChangeTextStuck()
{
    document.getElementById("statusTXT").textContent = "STUCK!";
    document.getElementById("statusTXT").style.color = 'gray';
}

function ChangeTextHaventStarted()
{
    document.getElementById("statusTXT").textContent = "Haven't Started";
    document.getElementById("statusTXT").style.color = 'red';
}

function CreateTask()
{
    
}

function SubmitInputToText()
{
    document.getElementById("TSK_NME").textContent = document.getElementById("input").value;
}