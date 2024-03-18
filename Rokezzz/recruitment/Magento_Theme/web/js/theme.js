/**
 * @author Karol Kowalewski <sensejszyn@gmail.com>
 */

define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'domReady!'
], function ($, keyboardHandler) {
    'use strict';

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });

    $('.nav-toggle').on('click',function(){
        $('body').toggleClass('js-nav-opened');
    })

    keyboardHandler.apply();
});
