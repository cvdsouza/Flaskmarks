$(function(){

    $('.clickIncrement').on('click', function(){
        var id = $(this).attr('data-id');
        url = $(this).attr('data-url');
        $.ajax({
          url: url,
          data: {id : id},
          type: 'GET',
          dataType: 'json',
          success: function(data) {
              if (data.status == 'success') {
                  return
              }
          }
        });
    });

    $('.delete').on('click', function(){
        if (confirm('Are you sure you want to delete this?')) {
            return true;
        } else {
            return false;
        }
    });

});
