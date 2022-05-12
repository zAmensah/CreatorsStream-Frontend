"use strict";

// Class Definition
var KTLogin = function() {
    var _login;

    var _showForm = function(form) {
        var cls = 'login-' + form + '-on';
        var form = 'kt_login_' + form + '_form';

        _login.removeClass('login-forgot-on');
        _login.removeClass('login-signin-on');
        _login.removeClass('login-reset-on');
        _login.removeClass('login-signup-on');
        _login.addClass(cls);

        KTUtil.animateClass(KTUtil.getById(form), 'animate__animated animate__backInUp');
    }

    var _handleSignInForm = function() {
        // Handle forgot button
        $('#kt_login_forgot').on('click', function (e) {
            e.preventDefault();
            _showForm('forgot');
        });

        // Handle Reset
        $('#kt_login_reset').on('click', function (e) {
          e.preventDefault();
          _showForm('reset');
      });

        // Handle signup
        $('#kt_login_signup').on('click', function (e) {
            e.preventDefault();
            _showForm('signup');
        });
    }

    var _handleSignUpForm = function(e) {
        // Handle Cancel button
        $('#kt_login_signup_cancel').on('click', function (e) {
            e.preventDefault();
            _showForm('signin');
        });
    }

    var _handleForgotForm = function(e) {
        // Handle Cancel button
        $('#kt_login_forgot_cancel').on('click', function (e) {
            e.preventDefault();
            _showForm('signin');
        });
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            _login = $('#kt_login');
            _handleSignInForm();
            _handleSignUpForm();
            _handleForgotForm();
            _handleResetForm();
        }
    };
}();

// Class Initialization
jQuery(document).ready(function() {
    KTLogin.init();
});
