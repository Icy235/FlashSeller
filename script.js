
$('#flash1').change(function(){
  var selectval= $(this.colvo).val(); // Получим значение из select со значением #participation
  if( selectval== '2' ,'3','4','5','6') {
      $('.flash1').show();
  } else {
      $('.flash1').hide();
  }
});


$('#flash2').change(function(){
    var selectval= $(this.colvo).val(); // Получим значение из select со значением #participation
    if( selectval== '3','4','5','6' ) {
        $('.flash2').show();
    } else {
        $('.flash2').hide();
    }
  });

  
  
$('#flash3').change(function(){
    var selectval= $(this.colvo).val(); // Получим значение из select со значением #participation
    if( selectval== '4','5','6') {
        $('.flash3').show();
    } else {
        $('.flash3').hide();
    }
  });

  
  
$('#flash4').change(function(){
    var selectval= $(this.colvo).val(); // Получим значение из select со значением #participation
    if( selectval== '5' ) {
        $('.flash4').show();
    } else {
        $('.flash4').hide();
    }
  });

  
  
$('flash5').change(function(){
    var selectval= $(this.colvo).val(); // Получим значение из select со значением #participation
    if( selectval== '6' ) {
        $('.flash5').show();
    } else {
        $('.flash5').hide();
    }
  });
  
