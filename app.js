
$(function() {
   $("form").submit(function(event) {
     event.preventDefault();
   
    var searchSecond = $(".searchSecond").val();
    var searchTerm = $(".searchTerm").val();

    
    var url = "https://api.betterdoctor.com/2016-03-01/doctors?";
    var params = {
      insurance_uid: "medicaid-medicaid",
      sort: "rating-asc",
      user_key: "aa520e125ba1c8d1fd4281fe2e2b113b",
      limit: 100,
      location: searchTerm,
      specialty_uid: searchSecond,
      
    };
   
    $.getJSON(url, params, showData);

    function showData(results) {
      console.log(results);
       console.log(results.data);

   
      $.each(results.data, function(i, value) {

        
        // console.log(value.practices[i]);
        // console.log(value.practices[i]["name"]);
        // console.log(value.practices[i]["visit_address"]["street"]);
        //  console.log(value.practices[i]["website"]);
        //  console.log(value["profile"]["bio"]);

        // console.log(value.profile["bio"]);
        // console.log(value.ratings[i]);
        // console.log(value.practices[i].website);
       // console.log(value.practices[i].phones[0]["number"]);
       // console.log(value.practices[i].phones[0]["type"]);
       // console.log(value.practices[i].phones[1]["number"]);
       // console.log(value.practices[i].phones[1]["type"]);


        //  function edgeCases () {
        // if(value.profile["bio"] || value.practices[i]["name"] || value.practices[i]["visit_address"]["street"] || value.practices[i]["visit_address"]["city"] 
        //      || value.practices[i]["visit_address"]["zip"] || value.practices[i].phones[i]["number"] || value.practices[i]["website"] === undefined) {
        //     return ("---");
        // }

      // }
  // $(".results").append("<p>" + value["profile"]["bio"] + "</p>" + value.practices[i].phones[0]["type"] + "</p>" + value.practices[i].phones[0]["number"]);


         $(".results").append("<p>" + value["profile"]["bio"] + 
            "</p>" + "<p>" + value.practices[0].name + 
          "</p>" + "<p>" + value.practices[0].visit_address.city + 
          "</p>" + "<p>" + value.practices[0].visit_address.state +
         "</p>" + "<p>" + value.practices[0].visit_address.zip + 
         "</p>" + "<p>" + value.practices[0].phones[0].number + 
         "</p>" + "<p>" + value.practices[0].phones[0].type +
          // "</p>" + "<p>" + value.practices[0].phones[1].number + 
          // "</p>" + "<p>" + value.practices[0].phones[1].type + 
         "</p>" +"<p>" + value.practices[0].website
         + "</p>");


//$(".results").append("<p>" + value["profile"]["bio"] + "</p>" + value.practices[i]["website"] + "</p>");


        
 });
     
    }
  });
});
    
// });
  


//var queryTarget = $(event.currentTarget).find('.js-query');
// var query = queryTarget.val();
 
  
  
 

