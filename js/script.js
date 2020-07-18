$(window).on("load", function(){
    
    $(".loader .inner").fadeOut(750, function(){
        $(".loader").fadeOut(750);
    });
})

   $("[data-fancybox]").fancybox();
     $(".items").isotope({
         filter:'*',
         animationOptions:{
             duration:1500,
             easing:'linear',
             queue:false
         }
     });

$(document).ready(function() {
    
    $('#slides').superslides({
        animation: 'fade',
        play:5000,
        pagination: false
        
    });
    
    
    var typed = new Typed(".typed",{
        strings: ["Semester 8", "Made By: ","Bhagyesh Shah","Aashwath Chowta","Mrinnmay Shanbhag"] ,
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
    
 
    var skillsTopOffset =$(".skillsSection").offset().top;
   $(window).scroll(function() {
       if(window.pageYOffset > skillsTopOffset - $(window).height() + 200){
            $('.chart').easyPieChart({
        easing: 'easeInOut',
        barColor:'#fff',
        trackColor:false,
        scaleColor:false,
        lineWidth:4,
        size:152,
        onStep:function(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
           
        });  
           
       }
    
   });
    
 
    $("#filters a").click(function(){
        $("#filters .current").removeClass("current");
        $(this).addClass("current");
        
        var selector = $(this).attr("data-filter");
        
        $(".items").isotope({
         filter:selector,
         animationOptions:{
             duration:1500,
             easing:'linear',
             queue:false
         }   
            
        });
       return false; 
    });
    
    const nav= $("#navigation");
    const navTop = nav.offset().top;
    
    $(window).on("scroll", stickyNavigation);
    
    function stickyNavigation(){
        var body= $("body");
        if($(window).scrollTop() >= navTop){
    body.addClass("FixedNav");
}
        else{
            body.removeClass("fixedNav");
        }
    }
    
});
function alt_null_contact(){
    document.getElementById("alt_error_contact").style.display="none";
        document.getElementById("alt_error_contact").innerHTML="";
}
  function validateemail(){
      //------EMAIL-------------
    if(document.DetailForm.email.value=="Your Email Address*" || document.DetailForm.email.value=="")
    {
        alt_null_contact();
        document.getElementById("alt_error_contact").style.display="block";
        document.getElementById("alt_error_contact").innerHTML="Please Enter Your Email Id";
        document.DetailForm.email.select();
        document.DetailForm.email.focus();
        return false;
    }
    if(document.DetailForm.email.value!="")
    {
        var str =/\w+[-a-zA-Z0-9_\.]+@\w+[-a-zA-Z0-9]+\.\w+[-a-zA-Z\.]+/;
        var eflag = document.DetailForm.email.value.match(str);
        //alert (eflag);
        if(eflag!=document.DetailForm.email.value)
        {
            alt_null_contact();
            document.getElementById("alt_error_contact").style.display="block";
            document.getElementById("alt_error_contact").innerHTML="Please Enter a Valid Email Id";
            document.DetailForm.email.select();
            document.DetailForm.email.focus();
            return false;
        }
        var string1=document.DetailForm.email.value;
        
        


    }//email validation

document.DetailForm.action = "insert.php";
    document.DetailForm.submit();

  } 