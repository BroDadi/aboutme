window.onload = function()
{
    let today = new Date();
    let isAfterMarch14th;
    if (today.getMonth() > 2 || (today.getMonth() == 2 && today.getDate() > 14))
    {
        isAfterMarch14th = true;
    }
    let year = today.getFullYear();
    if (isAfterMarch14th) year++;
    let nextMarch14th = new Date(year, 2, 14);
    let daysToBday = Math.ceil((nextMarch14th.getTime() - today.getTime()) / 1000 / 86400);
    if (daysToBday <= 0)
    {
        document.querySelector("#daycount").innerText = "(TODAY!!!)";
        document.querySelector("#daycount").classList.add("bdaytoday");
    }
    else
    {
        document.querySelector("#daycount").innerText = "(in exactly " + daysToBday + " days!)";
    }
}