(function($) {
  var settings = {
    termsId: 'helprow-custom_11',
    formId: 'user-register-form',
    bankAccountId: 'custom_10'
  };
  $(function() {
    var $terms = $('#'+ settings.termsId),
        $showterms = $('<a id="boosted-'+ settings.termsId +'" class="boosted-showterms" href="#boosted-'+ settings.termsId +'">Show Terms and Conditions</a>');
    $terms.after($showterms);
    $showterms.click(function() {
      if ($terms.is(':visible')) {
        $terms.hide(500);
        $showterms.html('Show Terms and Conditions');
      } else {
        $terms.show(500);
        $showterms.html('Hide Terms');
      }
    });
    $terms.hide();
    $('#'+ settings.formId).submit(function() {
      var val = $('#'+ settings.bankAccountId).val();
      if (!val.match(/^[0-9]{2}[ -]?[0-9]{4}[ -]?[0-9]{7}[ -]?[0-9]{2,3}$/)) {
        alert('00 0000 0000000 000 not given');
        return false;
      }
    });
  });
})(jQuery);
