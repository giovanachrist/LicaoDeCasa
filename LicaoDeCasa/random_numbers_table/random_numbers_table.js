(function ($) {
  Drupal.behaviors.random_numbers_table = {
    attach: function (document, Drupal.settings) {
      /*$('.add').click(function() {
        var $newLine = $('<tr><td>0</td><td><a class="btn btn-danger btn-xs remove" href="#">X</a></td></tr>');
        $newLine.appendTo('#table-numbers > tbody');
        Drupal.attachBehaviors(newLine);
      });*/

      $('.remove').on('click', function() {
        $(this).parents('tr').remove();
        alert("Sou uma merda");
      });

      
    }
  };
})(jQuery); 