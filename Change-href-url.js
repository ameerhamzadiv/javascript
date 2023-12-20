	jQuery(document).ready(function($){

    $(".woocommerce-table__product-name a").attr("href", function(i, attr){
  return  attr + "?mobile";
});
	
	
    });
