$(document).ready(function() {
	$('#request .close').click(function(e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

	$("a.btn").click(function() {
      $("html, body").stop().animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 800
      });
      return false;
    }); 

		$("a.iframe").fancybox(
		{						
	        "padding" : 0,
	        "imageScale" : false, 
			"zoomOpacity" : false,
			"zoomSpeedIn" : 1000,	
			"zoomSpeedOut" : 1000,	
			"zoomSpeedChange" : 1000, 
			"frameWidth" : 852,	 
			//maxHeight:300,
			"framemaxHeight" : 300, 
			"autoHeight": true,
			"overlayShow" : true, 
			//"overlayOpacity" : 0.8,	
			"hideOnContentClick" :false,
			"centerOnScroll" : false
			});
	    $("a.fancybox-text").fancybox({
	    beforeLoad: function() {
	        var el, id = $(this.element).data('title-id');
	          if (id) {
	            el = $('#' + id);
	          if (el.length) {
	            this.title = el.html();
	            }
	          }
	        },
	      helpers : {
	        title: {
	            type: 'inside',
	            position: 'top'
	        }
	      }, 
	      padding:20,
	      maxWidth:852,
	      autoHeight:true,
	      closeBtn:false,
	      autoSize:false,
	      openEffect:"fade",
	      closeEffect:"fade"
	    });
	    $(".fancybox").fancybox({
	    	padding:0,
	        maxWidth	: 800,
	        maxHeight	: 600,
	        fitToView	: false,
	        width		: '70%',
	        height		: '70%',
	        autoSize	: false,
	        closeClick	: false,
	        openEffect	: 'none',
	        closeEffect	: 'none'
	    });
	    $("a.fancybox-ok").fancybox({
	     padding:0,
	     maxWidth:413,
	     closeBtn:false,
	     autoSize:false,
	     closeClick:false,
	     openEffect:"fade",
	     closeEffect:"fade"
	  });
	   $('form').submit(function(e) {
	           e.preventDefault();
	           var $form = $(this);
	           // if (check_form($form)) {
	           //     console.log('eroor')
	           //     return false;
	           // }
	           console.log($form.serialize())
	           console.log('ss')

	           $.ajax({
	               url: $form.attr('action'), 
	               type: $form.attr('method'),
	               data: $form.serialize(),

	               success: function(data) {
                console.log('data')
                console.log(data)
                $.magnificPopup.open({
                    items: {
                        type: 'inline',
                        src: '#request',
                    }
                });
                $form.find("input[type=text], textarea").val("");
            },
            error: function(data) {
                alert('Извините, данные не были переданы');
            }
	           });
	       });

	       function check_form(form){
	           var error = false;
	           $(form).find('input, textarea').each(function(){
	               if ($(this).val().length <= 1) {
	                   $(this).addClass('error');
	                   error = true;
	               } else {
	                   $(this).removeClass('error');
	               }
	           });

	           var name = $(form).find('[name=name]');
	           var phone = $(form).find("[name=phone]");
	           var email = $(form).find("[name=email]");
	           var question = $(form).find("[name=question]");

	           if (name.val().length < 3) {
	               console.log(name)
	               name.addClass('error');
	               error = true;
	           }
	           if (phone.val().length < 11) {
	               phone.addClass('error');
	               error = true;
	           }
	           return error;
	       }
	
});