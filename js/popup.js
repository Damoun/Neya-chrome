function loadPlayers()
{
    var bg = chrome.extension.getBackgroundPage();
    $("#user").empty();
    if (bg.playerCount > 1)
        $("#user").html('<div class="center title" ><img src="http://img.verygames.net/images/status_panel/up_mc.png" border="0" width="15px" height="15px" /> ' + bg.playerCount + ' Players Online</div>' + bg.playerList.join(""));
    else if (bg.playerCount == 1)
        $("#user").html('<div class="center title" ><img src="http://img.verygames.net/images/status_panel/up_mc.png" border="0" width="15px" height="15px" /> 1 Player Online</div>' + bg.playerList.join(""));
    else
        $("#user").html('<div class="center title" ><img src="http://img.verygames.net/images/status_panel/pause_mc.png" border="0" width="15px" height="15px" /> No Player Online</div>');
    setTimeout(loadPlayers, 1000);
}

function displayDiamond()
{
    var bg = chrome.extension.getBackgroundPage();
    if (bg.canVote == true)
    {
	$('#diamond').show();
	$('#vote').attr('title', "Vous n'avez pas encore vot\351 aujourd'hui");
    }
    else
    {
	$('#diamond').hide();
	$('#vote').attr('title', "");
    }
}

function main()
{
    displayDiamond();
    loadPlayers();
}