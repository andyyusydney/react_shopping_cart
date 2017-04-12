// My account edit page JavaScript
// -------------------------------

$(function () {
  var $form = $('#my-profile-edit');

  if ($form.length) {

    // UpdateDetailsView
    // -----------------

    var UpdateDetailsView = Backbone.View.extend({
      initialize: function () {
        this.initializeSelectBoxes();
        this.prefill();
      },

      // Private
      // -------

      prefill: function () {
        var self = this;
        var dummyData = {
          firstName: 'John',
          lastName: 'Fox',
          email: 'john@fox.com',
          password: 'password',
          mobile: '0450687896',
          dateOfBirth: '10-04-1987',
          address: '24 Fox Avenue',
          suburb: 'Foxville',
          state: 'ACT',
          postcode: '1000'
        }

        _(dummyData).chain().keys().each(function (key) {
          var $field = $('[data-id="' + key + '"]');

          switch ($field.prop('tagName')) {
            case 'SELECT':
              var selectBox = self.selectBoxes[key]
              selectBox.setValueByChoice(dummyData[key]);
            case 'INPUT':
              // Prefill the value.
              $field.val(dummyData[key])
                // Add active value to label to show populated state.
                .siblings('label').addClass('active');
          }
        })
      },

      initializeSelectBoxes: function () {
        var self = this;

        self.$el.find('select.foxtel-now-select').each(function () {
          var element = $(this).get(0);
          var choices = new Choices(element, {
            search: false,
            placeholderValue: $(this).data('placeholder'),
            shouldSort: false
          });
          var fieldId = $(this).data('id')

          self.selectBoxes = self.selectBoxes || {};
          self.selectBoxes[fieldId] = choices;
        });
      }
    });

    // Instantiate view.
    new UpdateDetailsView({
      el: $form
    });
  }
});
