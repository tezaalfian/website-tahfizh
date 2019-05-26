/**
 * Remove activate button and replace with activation in progress button.
 *
 * @package Zakra
 */

/* global zakra_plugin_helper */
/* global console */

jQuery( document ).ready(
	function ( $ ) {
		$.pluginInstall = {
			'init': function () {
				this.handleInstall();
				this.handleActivate();
				this.handleGetStarted();
			},

			'handleGetStarted': function () {
				var self = this;
				$( 'body' ).on( 'click', '.btn-get-started', function ( e ) {
					e.preventDefault();
					var button   = $( this );
					var slug     = button.attr( 'data-slug' );
					var url      = button.attr( 'href' );
					var redirect = $( button ).attr( 'data-redirect' );
					button.addClass( 'updating-message' );

					if ( jQuery(this).parents( '.theme-actions' ).length ) {
						jQuery(this).parents( '.theme-actions' ).css( 'opacity', '1' );
					}

					wp.updates.installPlugin(
						{
							slug    : slug,
							success : function ( response ) {

								if ( response.activateUrl ) {
									window.location.href = response.activateUrl;
									setTimeout( function () {
										jQuery( '.zakra-message-close' )[0].click();
										window.location.href = zakra_redirect_demo_page.uri;
									}, 2000 );
								}
							},

							error : function ( error ) {
								if ( 'folder_exists' === error.errorCode ) {
									setTimeout( function () {
										jQuery( '.zakra-message-close' )[0].click();
										window.location.href = zakra_redirect_demo_page.uri;
									}, 2000 )
								}
							}
						}
					);
				});
			},

			'handleGetStartedActivate': function ( url, redirect ) {
				if ( typeof url === 'undefined' || !url ) {
					return;
				}
				jQuery.ajax(
					{
						async: true,
						type: 'GET',
						url: url,
						success: function () {
							// Reload the page.
							if ( typeof (
								redirect
							) !== 'undefined' && redirect !== '' ) {
								window.location.replace( redirect );
							} else {
								location.reload();
							}
						},
						error: function ( jqXHR, exception ) {
							var msg = '';
							if ( jqXHR.status === 0 ) {
								msg = 'Not connect.\n Verify Network.';
							} else if ( jqXHR.status === 404 ) {
								msg = 'Requested page not found. [404]';
							} else if ( jqXHR.status === 500 ) {
								msg = 'Internal Server Error [500].';
							} else if ( exception === 'parsererror' ) {
								msg = 'Requested JSON parse failed.';
							} else if ( exception === 'timeout' ) {
								msg = 'Time out error.';
							} else if ( exception === 'abort' ) {
								msg = 'Ajax request aborted.';
							} else {
								msg = 'Uncaught Error.\n' + jqXHR.responseText;
							}
							console.log( msg );
						},
					}
				)
			},

			'handleInstall': function () {
				var self = this;
				$( 'body' ).on( 'click', '.zakra-install-plugin', function ( e ) {
					e.preventDefault();
					var button   = $( this );
					var slug     = button.attr( 'data-slug' );
					var url      = button.attr( 'href' );
					var redirect = $( button ).attr( 'data-redirect' );
					button.text( wp.updates.l10n.installing );
					button.addClass( 'updating-message' );
					wp.updates.installPlugin(
						{
							slug: slug,
							success: function () {
								button.text( zakra_plugin_helper.activating + '...' );
								self.activatePlugin( url, redirect );
							}
						}
					);
				} );
			},

			'activatePlugin': function ( url, redirect ) {
				if ( typeof url === 'undefined' || !url ) {
					return;
				}
				jQuery.ajax(
					{
						async: true,
						type: 'GET',
						url: url,
						success: function () {
							// Reload the page.
							if ( typeof (
								redirect
							) !== 'undefined' && redirect !== '' ) {
								window.location.replace( redirect );
							} else {
								location.reload();
							}
						},
						error: function ( jqXHR, exception ) {
							var msg = '';
							if ( jqXHR.status === 0 ) {
								msg = 'Not connect.\n Verify Network.';
							} else if ( jqXHR.status === 404 ) {
								msg = 'Requested page not found. [404]';
							} else if ( jqXHR.status === 500 ) {
								msg = 'Internal Server Error [500].';
							} else if ( exception === 'parsererror' ) {
								msg = 'Requested JSON parse failed.';
							} else if ( exception === 'timeout' ) {
								msg = 'Time out error.';
							} else if ( exception === 'abort' ) {
								msg = 'Ajax request aborted.';
							} else {
								msg = 'Uncaught Error.\n' + jqXHR.responseText;
							}
							console.log( msg );
						},
					}
				);
			},

			'handleActivate': function () {
				var self = this;
				$( 'body' ).on( 'click', '.activate-now', function ( e ) {
					e.preventDefault();
					var button   = $( this ),
					    url      = button.attr( 'href' );
					var redirect = button.attr( 'data-redirect' );
					button.addClass( 'updating-message' );
					button.text( zakra_plugin_helper.activating + '...' );
					self.activatePlugin( url, redirect );
				} );
			},
		};
		$.pluginInstall.init();
	}
);
