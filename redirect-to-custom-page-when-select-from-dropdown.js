jQuery(document).ready(function($){

    $("select[name='select-service']").change(function(){  //when Select from dropdown
    if ($(this).val() == 2522) { // if option value is this
    window.location.href = '/hourly-corporate-events/'; //redirect to page
    }

	if ($(this).val() == 2521) { // if option value is this
    window.location.href = '/flat-rate-airport-transfer/'; //redirect to page
    }
    });
	
	
    });
