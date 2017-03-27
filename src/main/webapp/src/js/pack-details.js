// Animate green background between buttons on hover.
// --------------------------------------------------

$(document).ready(function () {
  function updateSlidingBackground() {
    var $activeAnchor = $actions.find('.active');

    // $slider.css({
    //   'left': $activeAnchor.position().left,
    //   'width': $activeAnchor.outerWidth()
    // });
  }

  var $actions = $('.foxtel-now-pack-details__meta__actions');
  var $links = $actions.find('a');
  var $slider = $actions.find('.slide-bg');
  var anchorWidth = $links.first().css('width');

  // Setup sliding background element.
  $slider.css('width', anchorWidth);
  updateSlidingBackground();

  // Update the sliding background on hover.
  $links.each(function () {
    $(this).mouseover(function () {
      $links.removeClass('active');
      $(this).addClass('active');
      updateSlidingBackground();
    });
  });

  $('.foxtel-now-pack-details__meta__actions a.add-to-cart').click(function (event) {
    var text = $(this).data('added-text');

    event.preventDefault();
    $(this).addClass('foxtel-now-btn--disabled');
    $(this).html(text);
    $(this).removeClass('active');
    $(this).siblings('a').first().addClass('active');
    updateSlidingBackground();
  });
});
