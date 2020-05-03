$.getJSON('https://api.rootnet.in/covid19-in/unofficial/covid19india.org/statewise', function(data) 
{
    var total_cases = data.data.total.confirmed;
    var deaths =  data.data.total.deaths;
    var recovered =  data.data.total.recovered;
    var active = data.data.total.active;
    $(".total_cases").html(total_cases);
    $(".deaths").html(deaths);
    $(".recovered").html(recovered);
    $(".active").html(active);
});
