
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

         $(".results").append(

          "<p>" +  "<b>" + "BIO:" + "</b>"  + "<br>" + "</br>" +  value["profile"]["bio"] + "</p>" + 
          "<p>" +  "<b>" + "LOCATION:" + "</b>" + "<br>" + "</br>" + value.practices[0].name + "</p>" + 
          "<p>" + value.practices[0].visit_address.city + "</p>" + 
          "<p>" + value.practices[0].visit_address.state +"</p>" + 
          "<p>" + value.practices[0].visit_address.zip + "</p>" + 
          "<p>" + "<b>" + "CONTACT DETAILS:" + "</b>" + "<br>" + "</br>" +  value.practices[0].phones[0].number + "</p>" + 
          "<p>" + value.practices[0].phones[0].type + "</p>" + 
          "<p>" + value.practices[0].website + "</p>" + "<hr>");




        
 });
     
    }
  });
});
    
   

  
 

