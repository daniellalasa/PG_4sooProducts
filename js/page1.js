                                //FUNCTIONS
                 function random_shower(e)
                 {
                     $("."+e).each(function(){

                        $(this).show(500);
                        delay(1000);

                     });


                 }

                 function loadCloth()
                 {

                    $('.clothbox').load('page2.html',function(){

                        $(this).fadeIn().show();
                        responsiveHeight();
                        $('.clothbox img').addClass('center-center');
                        center();
                    });

                 }
                 function menCloth()
                 {

                    $('.menClothBox').load('page3.html',function(){
                        var parent = $(this).parent();
                        
                        $(this).fadeIn().show().delay(1000);

                        $('.boxToPage .box').not(parent).animate({height:0},200).hide();
                        $('.menClothBox img').addClass('center-center');

                        
                        responsiveHeight();
                        center();
                    });
                 }
                 function prodLoad()
                 {
                   
                    $('.prodpanel').load('page4.html',function(){
                        var parent = $(this).parent();
                        $(this).fadeIn().show().delay(1000);
                        responsiveHeight();
                        center();
                    });

                 }
                 function responsiveHeight()
                 {
                     var eh,gp,h,w,ch,ph;
                        h = $(window).height();
                        w = $(window).width();
                       
                        
                        $('div[h]').each(function(){

                            eh = $(this).attr('h');
                            eh = parseInt(eh);
                            gp = h*(eh/100);
                            $(this).height(gp);
                            $(this).removeAttr('h');

                        });
                        $('div[ch]').each(function(){


                            ph = $(this).parent().height();
                            ph = parseInt(ph);
                            ch = $(this).attr('ch');
                            ch = ph*(ch/100);
                            $(this).height(ch);
                            $(this).removeAttr('ch');

                        });

                 }
                 responsiveHeight();
                 function center()
                 {
                    $(".center-center").each(function(){

                        var ccph = $(this).parent().height(),
                        ccpw = $(this).parent().width(),
                        cceh = $(this).height(),
                        ccew = $(this).width(),
                        top = (ccph-cceh)/2,
                        left = (ccpw-ccew)/2;
                        $(this).css({left:left+"px",top:top+"px"});

                    });
                 }
                 center();
                 // /FUNCTIONS

                //GENERAL SCRIPTS

               

                // /GENERAL SCRIPTS


                //PAGE 1
                 $('.boxToPage .box').click(function(){
                    if(!$(this).hasClass('openedBox')){
                        var ph = $(this).parent().height(),
                            perc = 95,
                            elemCnt = $('.boxToPage div.box').not(this).length;
                            thisgh = ph*(perc/100),
                            othergh = (ph-thisgh)/elemCnt;

                        $('.boxToPage div.box img').hide();

                            $(this).animate(
                                            {height:thisgh+"px"},250,
                                            function()
                                            {
                                                var ph = $(this).height();
                                                $(this).find('.clothbox').height(ph);

                                                //console.log($(this).find('.clothbox').height());
                                                loadCloth();
                                                
                                                $(this).addClass('openedBox');

                                            });
                        $('.boxToPage div.box')
                                               .not(this)
                                               .animate(
                                                        {height:othergh+"px"},250,
                                                        function(){

                                                            $(this).removeClass('openedBox');

                                                        });
                    }

                 });

                 // /PAGE 1


                 //PAGE 2

                 
                 // /PAGE 2



                 
                 


