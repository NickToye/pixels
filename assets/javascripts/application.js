$(document).ready(function() {
	// Validator
    $('.form-horizontal').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        group: '.controls',
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            }
        }
    });

    // Button States
	$('#loading-example-btn').click(function() {
		var btn = $(this)
		btn.button('loading').delay(2000).queue(function(){
			$(this).button('reset');
            $(this).dequeue();
		});
	});

	// Popovers
	$(".btn--popover").popover();
	$('.popover-dismiss').popover({
		trigger: 'focus'
	})

	// Tooltips
	$('*').tooltip();

	// Scrollspy
	$('body').scrollspy({ target: '#nav-content' })
});
