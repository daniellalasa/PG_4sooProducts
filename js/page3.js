                var eh,gp,h,w,ch,ph;
                h = $(window).height();
                w = $(window).width();
               
                
                $('div[h]').each(function(){

                    eh = $(this).attr('h');
                    eh = parseInt(eh);
                    gp = h*(eh/100);
                    $(this).height(gp);

                });
                $('div[ch]').each(function(){


                    ph = $(this).parent().height();
                    ph = parseInt(ph);
                    ch = $(this).attr('ch');
                    ch = ph*(ch/100);
                    $(this).height(ch);

                });
                $(".center-center").each(function(){

                    var ccph = $(this).parent().height(),
                    ccpw = $(this).parent().width(),
                    cceh = $(this).height(),
                    ccew = $(this).width(),
                    top = (ccph-cceh)/2,
                    left = (ccpw-ccew)/2;
                    $(this).css({left:left+"px",top:top+"px"});
                });

            
