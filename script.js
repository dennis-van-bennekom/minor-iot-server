(function() {
    var $on = $('.js-on');
    var $off = $('.js-off');
    
    var domains = {
        'dennis': 'http://iot.dennisvanbennekom.com/light.php',
        'tom': 'http://work3gether.com/IoT/light.php',
        'tijs': 'http://tijsluitse.com/iot/light.php'
    }
    
    $on.on('click', function(e) {
        e.preventDefault();
        
        var name = $(e.target).data('name');
        
        $.ajax({
            type: 'POST',
            url: domains[name],
            data: { light: 'on' }
        });
    });
    
    $off.on('click', function(e) {
        e.preventDefault();
        
        var name = $(e.target).data('name');
        
        $.ajax({
            type: 'POST',
            url: domains[name],
            data: { light: 'off' }
        });
    });
}());