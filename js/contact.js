// $(function()
// {
//     $("#contact form").submit(function()
//     {
//         var form = $(this);
//         var str = form.serialize();
//         $.ajax(
//         {
//             type: "POST",
//             url: "https://script.google.com/macros/s/AKfycbwQYf0ZrxkB7UhTAHEKxY6xiGZhpep7xAJsXeRumjh4r5qNAeqaHv480x4fJEf2Kbd0dA/exec",
//             data: str,
//             success: function(msg)
//             {
//                 $('.card').css('height', 'auto'); // fix
//                 $("#contact .result .alert").remove();
//                 msg = JSON.parse(msg);

//                 if(msg.status == 'OK')
//                 {
//                     $('#contact .result').append('<div class="alert alert-success">Your message has been sent. Thank you!<button type="button" class="close" data-dismiss="alert">×</button></div');
//                 }
//                 else if(msg.text)
//                 {
//                     $.each(msg.text, function(i, elem){
//                         $('#contact .result').append('<div class="alert alert-error">' + elem + '<button type="button" class="close" data-dismiss="alert">×</button></div');
//                     })
//                 }
//                 else
//                 {
//                     $('#contact .result').append('<div class="alert alert-error">Error<button type="button" class="close" data-dismiss="alert">×</button></div');
//                 }
//             }
//         })
//         return false;
//     })
// })


	
