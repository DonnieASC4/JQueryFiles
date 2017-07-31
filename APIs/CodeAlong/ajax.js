var appId = "65f3ff5b";
var appKey = "9c34320c9b96eb7f769a61fe3c1a81fd";
var McDonaldsUrl = "https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=" + appId + "&appKey=" + appKey;

$.ajax({
    url: McDonaldsUrl,
    success: function(data) {
        console.log(data);
        for(var i = 0; i < data.hits.length; i++) {
            var foodItem = data.hits[i];
            var name = foodItem.fields.item_name;
            var cals = foodItem.fields.nf_calories;
            $("body").append("<h2>This " + name + " has " + cals + " calories!!!</h2>");
        }
    }
})