window.onload = function()
{
    let today = new Date();
    let year = today.getFullYear();
    let age = year - 2009;
    if (today < new Date(year, 2, 14)) age--;

    let nextMarch14th = new Date(today < new Date(year, 2, 15) ? year : year + 1, 2, 14);
    let daysToBday = Math.ceil((nextMarch14th - today) / 86400000);
    
    if (daysToBday <= 0)
    {
        document.querySelector("#daycount").innerText = "(TODAY!!!)";
        document.querySelector("#daycount").classList.add("bdaytoday");
    }
    else
    {
        document.querySelector("#daycount").innerText = `(in exactly ${daysToBday} days!)`;
    }
    document.querySelector("#age").innerText = age;
}