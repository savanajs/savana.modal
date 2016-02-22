/*
Savana Modal
Created By Rafael Cruz
Contact: projetosavanajs@gmail.com
Version: Hyena Beta 0.0.1
Release: 05/12/2015
Plugin
Brazil, São Paulo
*/

/*
The MIT License (MIT)
Copyright (c) 2016 Savana JS
......................................................................................................

Permission is hereby granted, free of charge, to any person obtaining a copy of this software 
and associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial 
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT 
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/


!(function($savana, undefined) {

    'use strict';

    $savana.fn.modal = function(params) {

        var target = this[0]; // Selector
        var config = savana.extend({}, params);

        // Overall control of the form, which is called in your startup
        // Your code here
        // Use simple singleton
        var controlGeneral = {
            init: function() {
                var _self = this;
            },
            // modalLoad - savana.modalLoad(selector);
            // Load the modal content
            // -------------------------------------------------------------
            // Example of use:
            // var modalTest = savana.modalLoad(".modal-test");

            modalLoad: function(target) {

                if (!target) return;

                var _html = '<div class="sjs-modal sjs-modal-area sjs-modal-alert ' + target.replace(".", "") + '">' +
                    '<div class="sjs-header-modal sjs-header">' +
                    '<a href="#" class="sjs-close-thik">✖ Fechar</a>' +
                    '</div><!-- /header -->' +
                    '<div class="sjs-body sjs-modal-body">' +
                    $savana(target).content("html") +
                    '</div></div>';

                $savana(target).destroy();
                $savana("body").push(_html, "after");

                if (!savana.elementExist(".sjs-modal-bg"))
                    $savana("body").push('<div class="sjs-modal-bg"></div>', "after");

                this.commandCloseModal();
                this.commandOpenModal();

                return target;

            },

            // modalClose - savana.modalClose();
            // Closing the modal
            // -------------------------------------------------------------
            // Example of use:
            // savana.modalClose();

            commandCloseModal: function() {
                var _self = this;
                $savana("body").delegate("click", ".sjs-modal.sjs-modal-area a.sjs-close-thik", function(e) {
                    _self.modalClose();
                    savana.eventStop(e);
                    return null;
                });
            },

            modalClose: function() {
                $savana(".sjs-modal.sjs-modal-area, .sjs-modal-bg").hide();
                return null;
            },

            commandOpenModal: function() {
                var _self = this;
                $savana("body").delegate("click", "a.sjs-modal-open", function(e) {
                    _self.modalOpen($savana(this).attr("rel"));
                    savana.eventStop(e);
                    return null;
                });
            },

            // modalOpen - savana.modalClose(selector);
            // Open modal
            // -------------------------------------------------------------
            // Example of use:
            // savana.modalOpen(modalTest);

            modalOpen: function(selector) {
                $savana(selector + ", .sjs-modal-bg").show();
                return null;
            },

        };

        return controlGeneral;

    };

})($savana);