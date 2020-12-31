
 $(".inputcc input").val("https:www.youtube.com/channel/UC8uhhaqA9s540gufCwKwrKA")
 $(".inputcc button").on("click",function(){
     var chURL = $(".channelUrl").val();
     var howMuchVideo = 20;
     var urlsplit= chURL.split(/^.*(channel\/|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/);
     var mrApi = "AIzaSyDSwN5XQQfJvYhY4iLMf3DZmUr6MdCjawg";
     var getDataUrl = "https:www.googleapis.com/youtube/v3/search?key="+mrApi+"&channelId="+urlsplit[3]+"&part=snippet,id&order=date&maxResults="+howMuchVideo
     $.ajax({
         type: "GET",
        dataType: "json",
         url: getDataUrl,
        success: function(data1) {
            var video = 0;
         for(var i=0;i<data1.items.length;i++){
          appendf(data1.items[i].id.videoId)
         } 
        }
        });

 });
function appendf(id){
  $('.maindiv').append(' <div class="video"><div class="video-container"> <iframe src="https://www.youtube.com/embed/'+id+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe></div></div>');

}


