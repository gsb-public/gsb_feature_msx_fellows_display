(function ($) {
  Drupal.behaviors.gsb_feature_msx_fellows_display = {
    attach: function (context, settings) {
      //
        $('#edit-narrow-search').wrap('<div class="narrow-search-wrapper"/>');
        $fieldset = $('.narrow-search-wrapper').detach();
       // $fieldset.insertAfter('#views-exposed-form-msx-fellows-panel-pane-1 .views-submit-button');
       $fieldset.insertBefore('#views-exposed-form-msx-fellows-graduation-year-list .views-exposed-widgets #edit-last-name-wrapper');
       
    }
  }
})(jQuery);

