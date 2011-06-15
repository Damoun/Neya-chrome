var canVote = false;

var playerList = [];
var playerCount = 0;

function background()
{
    haveYouVote();
    loadPlayerMarkers();
}

function loadPlayerMarkers()
{
    $.getJSON('http://minemap.verygames.net/server5115/world/markers.json', function(data) {
	playerList = [];
	playerCount = 0;
        for (i in data)
        {
            var item = data[i];
            if (item.msg != "Spawn")
            {
                if (playerCount < 10)
                    playerList.push('<div class="player link" onclick="chrome.tabs.create({url: \'http://minemap.verygames.net/server5115/world/#/' + item.x + '/' + item.y + '/' + item.z + '/max\'})"><img src="http://www.verygames.net/minecraft/Player-Avatar/player-avatar.php?player=' + item.msg + '&usage=list" border="0" /> ' + item.msg + '</div>');
                ++playerCount;
            }
	}
	playerList.sort();
	if (playerCount > 10)
	    playerList.push('<div class="link center" onclick="chrome.tabs.create({url: \'http://minemap.verygames.net/server5115/world/\'})">+++</div>');
    });
    setTimeout(loadPlayerMarkers, 1000);
}

function haveYouVote()
{
    var content;

    chrome.cookies.remove({url: "http://serveurs-minecraft.org", name: "__utma"});
    chrome.cookies.remove({url: "http://serveurs-minecraft.org", name: "__utmb"});
    chrome.cookies.remove({url: "http://serveurs-minecraft.org", name: "__utmc"});
    chrome.cookies.remove({url: "http://serveurs-minecraft.org", name: "__utmz"});
    chrome.cookies.remove({url: "http://www.serveurs-minecraft.org", name: "PHPSESSID"});
    chrome.cookies.remove({url: "http://www.serveurs-minecraft.org", name: "topsitevote_1962"});
    $.ajax({
        url: "http://www.serveurs-minecraft.org/vote.php?id=1962",
        type: "POST",
        dataType: "html",
	async: false,
        success: function(data) {
	    console.log("meede");
	    content = data;
        },
	complete: function(jqXHR, textStatus) {
	    console.log(textStatus);
	}
    });
    console.log(content);
    if (content.search("Voulez-vous bien voter pour Neya ?") != -1)
	canVote = true;
    else
	canVote = false;
    setTimeout(haveYouVote, 3600000);
}
