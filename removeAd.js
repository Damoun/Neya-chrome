var flag = 0;

function removeBan(div)
{
    var divs = div.getElementsByTagName("div");
    
    for (var i = 0 ; i < divs.length ; ++i)
    {
	if (removeBan(divs[i]) == true)
	    return (true);
	if (divs[i].style.padding == '5px 0px 0px 20px')
	{
	    divs[i].parentNode.removeChild(divs[i]);
	    flag = 1;
	    return (true);
	}
    }
    return (false);
} 

function removeLogo()
{
    var imgs = document.getElementsByTagName("img");
    
    for (var i = 0 ; i < imgs.length ; ++i)
    {
	if (imgs[i].src == 'http://img.verygames.net/images/logo_vg.png')
	{
	    imgs[i].parentNode.removeChild(imgs[i]);
	    clearTimeout()
	    console.log("ok");
	    return (true);
	}
    }
    return (false);
} 

function start()
{
    console.log("exec");
    if (flag == 0 && removeBan(document) == false)
	setTimeout(start, 100);
    if (removeLogo() == false)
	setTimeout(start, 100);
}

setTimeout(start, 100);