$(document).ready(function(){ 
$.ajax({
    type: "GET" , 
    url:"https://swapi.dev/api/films" ,
    contentType : "application/json" ,
    dataType : "json" ,
    success: function (data){
       result = data;
  
    debugger;
     for(var i =0;i < result.results.length ;i++)
      {
         
         let obj ={
            title : result.results[i].title ,
            opening_crawl : result.results[i].opening_crawl ,
            director : result.results[i].director , 
            producer : result.results[i].producer 
        }
        
        //create new card
         var newDiv = $("<div>");
         newDiv.attr("id", "card");
         $("body").append(newDiv);
          
         //create title-box 
         var titleDiv = $("<div>");
         titleDiv.addClass("box")
          $(newDiv).append(titleDiv);
           var titleSpan =$("<span>")   ; 
           titleSpan.addClass("title");
           $(titleDiv).append(titleSpan);
          $(titleSpan).text(obj.title);

          //create  opening_crawl-box
          var openingcrawlDiv = $("<div>");
          openingcrawlDiv.addClass("box")
          $(newDiv).append(openingcrawlDiv);
           var openingcrawlSpan =$("<span>")   ; 
           openingcrawlSpan.addClass("opening-crawl");
           $(openingcrawlDiv).append(openingcrawlSpan);
          $(openingcrawlSpan).text(`"opening_crawl :" ${obj.opening_crawl}`);

          // create director-box 
          var directorDiv = $("<div>");
          directorDiv.addClass("box")
         $(newDiv).append(directorDiv);
          var directorSpan =$("<span>")   ; 
          directorSpan.addClass("director");
          $(directorDiv).append( directorSpan);
         $( directorSpan).text(`"director :"${obj.director}`);

          //create producer-box
          var producerDiv = $("<div>");
          producerDiv.addClass("box")
         $(newDiv).append(producerDiv);
          var producerSpan =$("<span>")   ; 
          producerSpan.addClass("producer");
          $(producerDiv).append(producerSpan);
         $(producerSpan).text(`"producer :"${obj.producer}`);

}
   
    },
    error: function(error){
        alert("An error occured!");    }

})

});

// data:JSON.stringify({ }) ,
// for(var i =0;i < result.results.length ;i++)
// {
 
   //   var newDiv = $("<div>");
   //   newDiv.attr("id", "card");
   //   $("body").append(newDiv);
   //   var secDiv = $("<div>");
   //   secDiv.addClass("box")
   //   $("#card").append(secDiv);
 
// }
    //    $("#card").css( {"width" :"350px" , "background-color": "rgba(255, 255, 255, 0.13)"});

 // css({"property":"value","property":"value",...});
        // newDiv.addClass("box");
      // $("p").css("background-color", "blue");
    //  $(".title").append(JSON.stringify(result.results[0].title))
    //  $(".opening-crawl").append(JSON.stringify(result.results[0].opening_crawl))
    //  $(".director").append(JSON.stringify(result.results[0].director))
    //  $(".producer").append(JSON.stringify(result.results[0].producer))

 //   console.log(item);
//   console.log(item2);
//   console.log(item3);
//   console.log(item4);

 // alert(item.title + item.title + item.title);

   // console.log(result.results);
      //JSON.parse
    //   for(let i = 0; i < result.length; i++) {
        
    // }
  //    $.each(data, function() {
        
    //     // $.each(this, function(k, v) {
    //     //     /// do stuff
    //     //     console.log(data);
    //     //   });
    //   });
    //     data = JSON.stringify(data)
       //  console.log(data);
    //    var jsonArray = JSON.parse(data);
    //    console.log(jsonArray);

    //    jsonArray = jsonArray.title;
    //    console.log(jsonArray);


        //console.log (result.results[0].title);
       // console.log(result);
       // console.log(result[0].title)
      //  $(".title").append(result.title);

   // I replace these with object :
      //  var item = result.results[i].title;
      // var item2 = result.results[i].opening_crawl;
      // var item3 = result.results[i].director;
      // var item4 = result.results[i].producer;



      //changed them
        //  for (var j=0 ; j <=4 ; j++){
         // var secDiv = $("<div>");
         // secDiv.addClass("box")
         // $("#card").append(secDiv);
         // var dsp =$("<span>")   ;
         // dsp.addClass("title");
         // $(".box").append(dsp);
         // $(".title").append(item);
      //  }
      
      //  $(".title").append(item);
      //  $(".opening-crawl").append(item2);
      //  $(".director").append(item3);
      //  $(".producer").append(item4);
   