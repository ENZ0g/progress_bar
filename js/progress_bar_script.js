$('span').text(($('.progress-bar').width() / $('.progress').width() * 100).toFixed(0) + '%');

$('#btn1').click(function(){
    progressBarChange(0.01);
});

$('#btn3').click(function(){
    progressBarChange(0.03)
});

$('#btn7').click(function(){
    progressBarChange(0.07)
});

$('#btn_1').click(function(){
    progressBarChange(-0.01)
});

$('#btn_3').click(function(){
    progressBarChange(-0.03)
});

$('#btn_7').click(function(){
    progressBarChange(-0.07)
});

function progressBarChange(step){
    let totalWidth = $('.progress').width();
    
    let progressBarWidthBefore = $('.progress-bar').width();
    console.log('Width was: ' + progressBarWidthBefore);
    
    let progressBarChange = Math.round(totalWidth * step);
    console.log('Change: ' + progressBarChange);
    
    let progressBarWidhAfter = progressBarWidthBefore + progressBarChange
    console.log('Width now: ' + progressBarWidhAfter);
    
    console.log('% = ' + (progressBarWidhAfter / totalWidth));
        
    if ((progressBarWidhAfter / totalWidth) >= 0 & (progressBarWidhAfter / totalWidth) <= 1) {
        $('span').text(Math.round(progressBarWidhAfter / totalWidth * 100) + '%')
    }
        else if ((progressBarWidhAfter / totalWidth) > 1) {
            $('span').text('100%')
    }
        else {
            $('span').text('0%')
    };
    

    
    $('.progress-bar').width(progressBarWidhAfter);
};