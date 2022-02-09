 <button type="button" value="4" class="btn bg-gradient-info btn-sm detail" data-toggle="modal" data-target="#modal-xl">View</button>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

<script>
$(document).ready(function(){


    $.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
  })

 $('.detail').click(function(){

  if($(this).val() != '')
  {
      
   var value = $(this).val();
  // alert(value)
   var _token = $('input[name="_token"]').val();
  // alert(_token)
   $.ajax({
    url:"{{route('detail.form')}}",
    method:"POST",
    data:{value:value, _token:"{{csrf_token()}}"},
     dataType: 'json',
    success:function(result)
    {


        var re = result['form'];
    
        var form_dataa = re.form_data;
        form_data = JSON.parse(form_dataa);
       console.log(form_data);
      var location = '';
   
       // $('#location').empty()

    $.each(form_data,function(i,result){

       // location +=  '<tr><td>'+result.label+'</td><td>'+result.value+'</td></tr>';
        location += '<div class="col-6 col-sm-4" style="margin-bottom: 11px;" ><b>'+result.label+'</b> : '+result.value+'</div>';

console.log(location);
    

   })
   
    $("#location").html(location);
   
    }

   })
  }
 });



});
</script>
