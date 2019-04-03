
$(function() {
    // Get the form.
    let form = $('#mainForm');

    // Get the messages div.
    let formMessages = $('#form-messages');

});


$('form').submit(function (e) {
    e.preventDefault();
    $("form").ajaxForm({url: ' https://actum-form-ulcrunoxba.now.sh/api/submit', type: 'post'})
}
var formData = $(form).serialize();



$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData,

    success: function(data)
    {
        alert(data); // show response from the php script.
    }

})



// $("#mainForm").submit(function(e) {
//
//     e.preventDefault(); // avoid to execute the actual submit of the form.
//
//     var form = $(this);
//     var url = form.attr('action');
//
//     $.ajax({
//         type: "POST",
//         url: url,
//         data: form.serialize(), // serializes the form's elements.
//         success: function(data)
//         {
//             alert(data); // show response from the php script.
//         }
//     });
//
// });



