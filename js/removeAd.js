var logoUrl = 'http://img.verygames.net/images/logovg.png';

function removeLogo()
{
    var imgs = document.getElementsByTagName("img");
    
    for (var i = 0 ; i < imgs.length ; ++i)
	if (imgs[i].src == logoUrl)
    {
	imgs[i].parentNode.removeChild(imgs[i]);
	clearTimeout()
	return (true);
    }
    return (false);
} 

function start()
{
    if (removeLogo() == false)
	setTimeout(start, 100);
}
setTimeout(start, 100);