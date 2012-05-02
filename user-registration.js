(function($) {
  var settings = {
    termsId: 'helprow-custom_11'
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
  });
})(jQuery);
