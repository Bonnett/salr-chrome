// Copyright (c) 2009-2013 Scott Ferguson
// Copyright (c) 2013 Matthew Peveler
// All rights reserved.

// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:

// - Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
// - Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer in the
//   documentation and/or other materials provided with the distribution.
// - Neither the name of the software nor the
//   names of its contributors may be used to endorse or promote products
//   derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY
// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
// WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY
// DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
// (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
// ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
// SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/**
 * Initialize event callbacks for the page
 *
 */

var port = chrome.extension.connect({"name":"settings"});

jQuery(document).ready(function() {

    var debug = "false";
    
    // Don't wipe the settings made by previous versions
    if (localStorage.getItem('username')) {
        localStorage.setItem('salrInitialized', 'true');
    }

    // Setting names.
    var defaultSettings = [];
    defaultSettings['salrInitialized']              = 'true';

    defaultSettings['username']                     = '';
    defaultSettings['usernameCase']                 = 'false';
    
    // Thread Highlighting
    defaultSettings['hightlightThread']             = 'false';
    defaultSettings['darkRead']                     = '#6699cc';
    defaultSettings['lightRead']                    = '#99ccff';
    defaultSettings['darkNewReplies']               = '#99cc99';
    defaultSettings['lightNewReplies']              = '#ccffcc';
    defaultSettings['displayCustomButtons']         = 'true';
    defaultSettings['inlinePostCounts']             = 'false';

    // Post Highlighting
    defaultSettings['highlightOP']                  = 'false';
    defaultSettings['highlightOPColor']             = '#fff2aa';
    defaultSettings['highlightSelf']                = 'false';
    defaultSettings['highlightSelfColor']           = '#f2babb';
    defaultSettings['highlightOwnQuotes']           = 'false';
    defaultSettings['userQuote']                    = '#a2cd5a';
    defaultSettings['highlightOwnUsername']         = 'false';
    defaultSettings['usernameHighlight']            = '#9933ff';
    defaultSettings['highlightFriends']             = 'false';
    defaultSettings['highlightFriendsColor']        = '#f2babb';
    defaultSettings['highlightModAdmin']            = 'false';
    defaultSettings['highlightModAdminUsername']    = 'false';
    defaultSettings['highlightModeratorColor']      = '#b4eeb4';
    defaultSettings['highlightAdminColor']          = '#ff7256';

    // Forum Display Options
    defaultSettings['hideAdvertisements']           = 'false';
    defaultSettings['displayNewPostsFirst']         = 'false';
    defaultSettings['displayNewPostsFirstForum']    = 'true';
    defaultSettings['displayNewPostsFirstUCP']      = 'true';
    defaultSettings['showLastThreePages']           = 'false';
    defaultSettings['postsPerPage']                 = 'default';
    defaultSettings['showLastThreePagesForum']      = 'true';
    defaultSettings['showLastThreePagesUCP']        = 'true';
    defaultSettings['showLastThreePagesThread']     = 'true';

    // Header Link Display Options
    //defaultSettings['hideHeaderLinks']              = 'true';
    defaultSettings['showPurchases']                = 'true';
    defaultSettings['topPurchaseAcc']               = 'true';
    defaultSettings['topPurchasePlat']              = 'true';
    defaultSettings['topPurchaseAva']               = 'true';
    defaultSettings['topPurchaseArchives']          = 'true';
    defaultSettings['topPurchaseNoAds']             = 'true';
    defaultSettings['topPurchaseUsername']          = 'true';
    defaultSettings['topPurchaseBannerAd']          = 'true';
    defaultSettings['topPurchaseEmoticon']          = 'true';
    defaultSettings['topPurchaseSticky']            = 'true';
    defaultSettings['topPurchaseGiftCert']          = 'true';
    defaultSettings['showNavigation']               = 'true';
    defaultSettings['topNavBar']                    = 'true';
    defaultSettings['bottomNavBar']                 = 'true';
    defaultSettings['topSAForums']                  = 'true';
    defaultSettings['topSALink']                    = 'true';
    defaultSettings['topSearch']                    = 'true';
    defaultSettings['displayConfigureSalr']         = 'true';
    defaultSettings['topUserCP']                    = 'true';
    defaultSettings['topPrivMsgs']                  = 'true';
    defaultSettings['topForumRules']                = 'true';
    defaultSettings['topSaclopedia']                = 'true';
    defaultSettings['topGloryhole']                 = 'true';
    defaultSettings['topLepersColony']              = 'true';
    defaultSettings['topSupport']                   = 'true';
    defaultSettings['topLogout']                    = 'true';

    // Thread Options
    defaultSettings['showUserAvatarImage']          = 'true';
    defaultSettings['showUserAvatar']               = 'true';
    defaultSettings['inlineVideo']                  = 'false';
    defaultSettings['embedVideo']                   = 'false';
    defaultSettings['youtubeHighlight']             = '#ff00ff';
    defaultSettings['threadCaching']                = 'false';
    defaultSettings['boxQuotes']                    = 'false';
    defaultSettings['salrLogoHide']                 = 'false';
    defaultSettings['whoPostedHide']                = 'false';
    defaultSettings['searchThreadHide']             = 'false';
    defaultSettings['enableUserNotes']              = 'false';
    defaultSettings['enableThreadNotes']            = 'false';
    defaultSettings['fixCancer']                    = 'true';
    //defaultSettings['adjustAfterLoad']              = 'true';
    defaultSettings['enableSOAPLink']               = 'true';
    defaultSettings['enableSinglePost']             = 'true';
    defaultSettings['hidePostButtonInThread']       = 'false';
    defaultSettings['collapseTldrQuotes']           = 'false';

    // Control Options
    defaultSettings['displayPageNavigator']         = 'true';
    defaultSettings['displayOmnibarIcon']           = 'false';
    defaultSettings['enableKeyboardShortcuts']      = 'false';
    defaultSettings['enableMouseGestures']          = 'false';
    defaultSettings['enableMouseMenu']              = 'true';
    defaultSettings['enableMouseUpUCP']             = 'false';
    defaultSettings['enableQuickReply']             = 'true';
    defaultSettings['quickReplyParseUrls']          = 'true';
    defaultSettings['quickReplyBookmark']           = 'false';
    defaultSettings['quickReplyDisableSmilies']     = 'false';
    defaultSettings['quickReplySignature']          = 'false';
    defaultSettings['quickReplyLivePreview']        = 'false';
    defaultSettings['quickReplyFormat']             = 'true';
    defaultSettings['quickReplyEmotes']             = 'true';

    // Image Display Options
    defaultSettings['replaceLinksWithImages']       = 'false';
    defaultSettings['dontReplaceLinkNWS']           = 'false';
    defaultSettings['dontReplaceLinkSpoiler']       = 'false';
    defaultSettings['dontReplaceLinkRead']          = 'false';
    defaultSettings['dontReplaceLinkImage']         = 'false';
    defaultSettings['replaceImagesWithLinks']       = 'false';
    defaultSettings['replaceImagesReadOnly']        = 'false';
    defaultSettings['replaceImagesLink']            = 'false';
    defaultSettings['restrictImageSize']            = 'false';
    //defaultSettings['fixTimg']                      = 'false';
    //defaultSettings['forceTimg']                    = 'false';
    defaultSettings['retinaImages']                 = 'false';
    
    // Other Options
    defaultSettings['qneProtection']                = 'false';
    defaultSettings['showEditBookmarks']            = 'false';
    defaultSettings['openAllUnreadLink']            = 'true';
    //defaultSettings['ignoreBookmarkStar']           = "";
    defaultSettings['ignoreBookmarkStarGold']       = 'false';
    defaultSettings['ignoreBookmarkStarRed']        = 'false';
    defaultSettings['ignoreBookmarkStarYellow']     = 'false';

    // Misc Options (don't show up on settings.html)
    defaultSettings['MouseActiveContext']           = 'false';
  
    // Check stored settings, if value not set, set to default value
    for ( var key in defaultSettings ) {
        if ( localStorage.getItem(key) == undefined ) {
            localStorage.setItem(key, defaultSettings[key]);
        }
    }

    if (debug == "true") {
        loadNewSettings();
    }

    jQuery('#d_username').text(localStorage.getItem('username'));

    // Initialize text entry fields
    jQuery('input.text-entry').each(function() {
        // Pre-populate settings field
        populateValues(jQuery(this));

        // Set focus handler for the entry fields
        jQuery(this).focus(function() {
            onInputSelect(jQuery(this));
        });
        
        // Set blur handler for the entry fields
        jQuery(this).blur(function() {
            onInputDeselect(jQuery(this));
        });

        jQuery(this).change(function() {
            if (jQuery(this).attr('id') == 'username') {
                if (jQuery(this).val() == "") {
                    jQuery(this).val(localStorage.getItem('username'));
                }
                jQuery("#d_username").text(jQuery(this).val());
            }            
            localStorage.setItem(jQuery(this).attr('id'), jQuery(this).val());
            highlightExamples();
        });
    });

    // Initialize checkbox fields
    jQuery('div.display-preference input').each(function() {
        populateCheckboxes(jQuery(this));

        jQuery(this).click(function() {
            localStorage.setItem(jQuery(this).attr('id'), jQuery(this).prop('checked'));
            highlightExamples();
        });
    });

    // Initialize drop down menus
    jQuery('div.display-preference select').each(function() {
        populateDropDownMenus(jQuery(this));

        jQuery(this).change(function() {
            localStorage.setItem(jQuery(this).attr('id'), jQuery(this).val());
        });
    });

    // Setup color picker handles on the text boxes
	jQuery('.color-select-text').ColorPicker({
            onSubmit: function(hsb, hex, rgb, el) {
				jQuery(el).val('#' + hex);
				jQuery(el).ColorPickerHide();
                var box = jQuery('#'+jQuery(el).attr('id')+'-box');
				box.css('background-color', '#' + hex);
                localStorage.setItem(jQuery(el).attr('id'), jQuery(el).val());
                highlightExamples();
			},
			onBeforeShow: function () { 
				jQuery(this).ColorPickerSetColor(this.value);
			}
	})
	.bind('keyup', function() {
		jQuery(this).ColorPickerSetColor(this.value);
	});

    jQuery('div.color-select-box').each(function() {
        var backgroundColor = jQuery(this).parent().parent().find('input.color-select-text').val();

        jQuery(this).css('background-color', backgroundColor);
    });
 
    // Set click handler for the okay button
    jQuery('.submit-panel > input#submit').click(function() {
        onSubmitClicked();
    });

	// once to initialize and once to bind click

	jQuery('div.display-preference input[type=checkbox]').each(function() {
		onParentOptionSelect(jQuery(this));
	}).click(function() {
		onParentOptionSelect(jQuery(this));
	});

    highlightExamples();

    jQuery('#config').click(function() {
        configWindow();
    });

    jQuery("#logo").click(function() {
        configWindow();
    });

    jQuery('#settings').click(function() {
        transitionSettings();
    });

    jQuery('.help').mouseover(function(e) {
        var helpBox = jQuery(this).parent().children(".help-box");
        helpBox.show(100);
        helpBox.offset({left:jQuery(this).position().left+20,top:jQuery(this).position().top-10});
    }).mouseout(function() {
        jQuery(this).parent().children(".help-box").hide(100);
    });

    jQuery('a').click(function() {
        if (jQuery(this).next().css('display') == "none") {
            jQuery('.show').next().hide(200);
            jQuery('.show').find('img').attr('src','images/plus.png');
            jQuery('.show').removeClass('show');

            jQuery(this).addClass('show');
            jQuery(this).next().show(200);
            jQuery('img',this).attr('src','images/minus.png');
        }
        else {
            jQuery(this).removeClass('show');
            jQuery(this).next().hide(200);
            jQuery('img',this).attr('src','images/plus.png');
        }
        return false;
    });
    jQuery('section').hide();

    // get install info from other SALR(R) extensions
    port.onMessage.addListener(function(data) {
        if (data.message == 'salr-button') {
            if (data.bool == 'true') {
                jQuery('#displayOmnibarIcon').attr('disabled', true);
                jQuery('#displayOmnibarIcon').parent().parent().addClass('disabled-options');
                jQuery('#displayOmnibarHelp2').remove();
            }
            else {
                jQuery('#displayOmnibarHelp1').remove();
            }
        }
        else if (data.message == 'convert') {
            if (data.bool == 'false') {
                jQuery('#settings').remove();
            }
        }
    });
    port.postMessage({'message':'GetSALRButtonStatus'});
    port.postMessage({'message':'GetSALRStatus'});
});

function highlightExamples() {
    // Thread highlighting samples

    jQuery('tr#thread-read').each(function() {
        if (localStorage.getItem('highlightThread')=='true') {
            jQuery(this).children('td.star, td.title, td.replies, td.rating').each(function() {
                jQuery(this).css({ "background-color" : localStorage.getItem('lightRead'), 
                                   "background-image" : "url('images/gradient.png')",
                                   "background-repeat" : "repeat-x",
                                   "background-position" : "left"
                                 });
            });  

            jQuery(this).children('td.icon, td.author, td.views, td.lastpost').each(function() {
                jQuery(this).css({ "background-color" : localStorage.getItem('darkRead'), 
                                   "background-image" : "url('images/gradient.png')",
                                   "background-repeat" : "repeat-x",
                                   "background-position" : "left"
                                 });
            });                      
        } else {
            jQuery(this).children().each(function() {
                jQuery(this).css({ "background-color" : '', 
                                   "background-image" : '',
                                   "background-repeat" : '',
                                   "background-position": ''
                                });
            });
        }
    });

    jQuery('tr#thread-unread').each(function() {
        if (localStorage.getItem('highlightThread')=='true') {
            jQuery(this).children('td.star, td.title, td.replies, td.rating').each(function() {            
                jQuery(this).css({ "background-color" : localStorage.getItem('lightNewReplies'), 
                                   "background-image" : "url('images/gradient.png')",
                                   "background-repeat" : "repeat-x",
                                   "background-position": "left"
                                 });
            });

            jQuery(this).children('td.icon, td.author, td.views, td.lastpost').each(function() {                
                jQuery(this).css({ "background-color" : localStorage.getItem('darkNewReplies'), 
                                   "background-image" : "url('images/gradient.png')",
                                   "background-repeat" : "repeat-x",
                                   "background-position": "left"
                                 });
            });          
        } else {
            jQuery(this).children().each(function() {
                jQuery(this).css({ "background-color" : '', 
                                   "background-image" : '',
                                   "background-repeat" : '',
                                   "background-position": ''
                                });
            });
        }
    });

    jQuery('div#lastseen-forum').each(function() {
        if (localStorage.getItem('displayCustomButtons')=='true') {
            jQuery(this).css('display','none');          
        } else {
            jQuery(this).css('display','');
        }
    });
    
    jQuery('div#lastseen-custom').each(function() {
        if (localStorage.getItem('displayCustomButtons')=='true') {
            jQuery(this).css({
                'display' : '',
                'background' : 'none',
                'border' : 'none'
            });
            jQuery('div#lastseen-inline',this).each(function() {
                if (localStorage.getItem('inlinePostCounts') == 'true') {
                    jQuery(this).css('display','');
                } else {
                    jQuery(this).css('display','none');
                }
            });
            jQuery('a#lastseen-count',this).each(function () {
                jQuery(this).html('');

                jQuery(this).css({
                    'border-left' : 'none',
                    'width' : '7px',
                    'height' : '16px',
                    'padding-right' : '11px',
                    'background-image' : "url('images/lastpost.png')",
                    'min-width': "0px"
                });

                jQuery(this).addClass('no-after');
                jQuery(this).parent().css("box-shadow", "0 0 0px #fff");
            });

            jQuery('a#lastseen-x',this).each(function() {
                jQuery(this).css({
                    'background' : 'none',
                    'background-image' : "url('images/unvisit.png')",
                    'height' : '16px',
                    'width' : '14px'
                });
                jQuery(this).parent().css("box-shadow", "0 0 0px #fff");
                jQuery(this).addClass('no-after');

                jQuery(this).text('');
            });        
        } else {
            jQuery(this).css('display','none');
        }
    });
    jQuery('div#lastseen-custom-count').each(function() {
        if (localStorage.getItem('displayCustomButtons') == 'true' && localStorage.getItem('inlinePostCounts') != 'true') {
            jQuery(this).css('display', 'inline');
        } else {
            jQuery(this).css('display', 'none');
        }
    });

    // Post highlighting samples
    jQuery('div#your-quote').each(function() {
        if (localStorage.getItem('highlightOwnQuotes')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('userQuote'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
    jQuery('dt#own-name').each(function() {
        if (localStorage.getItem('username') != '') {
            jQuery(this).text(localStorage.getItem('username'));
        }
    });
    jQuery('span#your-name').each(function() {
        if (localStorage.getItem('username') != '') {
            jQuery(this).text(localStorage.getItem('username'));
        }
        if (localStorage.getItem('highlightOwnUsername')=='true') {
            jQuery(this).css('color', localStorage.getItem('usernameHighlight'));
        } else {
            jQuery(this).css('color', '');
        }
    });
    jQuery('span#your-name-quote').each(function() {
        if (localStorage.getItem('username') != '') {
            jQuery(this).text(localStorage.getItem('username'));
        }
        if (localStorage.getItem('highlightOwnQuotes')!='true' && localStorage.getItem('highlightOwnUsername')=='true') {
            jQuery(this).css('color', localStorage.getItem('usernameHighlight'));
        } else {
            jQuery(this).css('color', '');
        }
    });
    jQuery('table#own-post td').each(function() {
        if (localStorage.getItem('highlightSelf')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('highlightSelfColor'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
    jQuery('table#friend-post td').each(function() {
        if (localStorage.getItem('highlightFriends')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('highlightFriendsColor'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
    jQuery('table#op-post td').each(function() {
        if (localStorage.getItem('highlightOP')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('highlightOPColor'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
    jQuery('dt#mod-name').each(function() {
        if (localStorage.getItem('highlightModAdminUsername') == 'true' && localStorage.getItem('highlightModAdmin')=='true') {
            jQuery(this).css('color', localStorage.getItem('highlightModeratorColor'));
        } else {
            jQuery(this).css('color', '');
        }
    });
    jQuery('dt#admin-name').each(function() {
        if (localStorage.getItem('highlightModAdminUsername') == 'true' && localStorage.getItem('highlightModAdmin')=='true') {
            jQuery(this).css('color', localStorage.getItem('highlightAdminColor'));
        } else {
            jQuery(this).css('color', '');
        }
    });
    jQuery('table#mod-post td').each(function() {
        if (localStorage.getItem('highlightModAdminUsername') != 'true' && localStorage.getItem('highlightModAdmin')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('highlightModeratorColor'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
    jQuery('table#admin-post td').each(function() {
        if (localStorage.getItem('highlightModAdminUsername') != 'true' && localStorage.getItem('highlightModAdmin')=='true') {
            jQuery(this).css('background-color', localStorage.getItem('highlightAdminColor'));
        } else {
            jQuery(this).css('background-color', '');
        }
    });
}

/**
 *
 * Event handler for sub-options
 *
 */
function onParentOptionSelect(element) {

	var nextDiv = element.parent().parent().next();
	if(nextDiv.is('.sub-options')) {

		if (element.is(':checked')) {
			nextDiv.removeClass('disabled-options');
   	    	nextDiv.find('input').removeAttr('disabled');
    	} else {
			nextDiv.addClass('disabled-options');
			nextDiv.find('input').attr('disabled', true);
    	} 
	
	}
}
	
/**
 * Event handler for focusing on the input
 *
 * @param element - Input element
 *
 */
function onInputSelect(element) {
    element.css('color', '#000000');
    //element.val('');
}

/**
 * Event handler for blurring the input
 *
 * @param element - Input element
 *
 */
function onInputDeselect(element) {
    // If the user didn't enter anything,
    // reset it to the saved value
    if (element.val() == '') {
        var value = localStorage.getItem(element.attr('id'));

        element.val(value);
    }

    element.css('color', '#999999');
}

/**
 * Populates the stored settings value into the element
 *
 * @param element - Input element
 *
 */
function populateValues(element) {
    var value = localStorage.getItem(element.attr('id'));

    if (!value) {
        // If there is no stored setting, use the default
        // value stored within the DOM
		var defaultCol = element.attr('default');
        element.attr('value', defaultCol);
    } else {
        // Otherwise, write the stored preference
        element.attr('value',value);
    }
}

/**
 * Populates any checkboxes with their stored value
 *
 * @param element - Input (checkbox) element
 *
 */
function populateCheckboxes(element) {
    var value = localStorage.getItem(element.attr('id'));

    // Make sure we're getting passed a checkbox
    if (element.attr('type') != 'checkbox')
        return;

    // If there is a value in localStorage, then set it,
    // otherwise unchecked it
    if (value == 'true') {
        element.attr('checked', true);
    } else {
        element.attr('checked', false);
    }
}

/**
 * Populates any drop down menus with their stored value
 *
 * @param element - Input (select) element
 *
 */
function populateDropDownMenus(element) {
    var value = localStorage.getItem(element.attr('id'));

    // Make sure we're getting passed a checkbox
    if (element.attr('type') != 'select-one')
        return;
    if (value == null)
        value = '';

    // Set the selected value to the one from LocalStorage
    jQuery('option[value="' + value + '"]', element).first().attr('selected', 'selected');
}

/**
 * Event handler for clicking the submit button 
 *
 *
 */
function onSubmitClicked() {

	// Store the preferences locally so that the page can
    // request it
    // We use window.opener to assign it to the toolstrip localStorage, since
    // the toolstrip handles all communication with the page
    jQuery('.user-preference').each(function() {
        var preferenceID = jQuery(this).attr('id');
        var value = null;

        if (jQuery(this).attr('type') == 'checkbox') {
            value = jQuery(this).attr('checked');
        } else {
            value = jQuery(this).val();
        }

        localStorage.setItem(preferenceID, value);
    });
	
	// Close the settings window
	
    window.close();
}

/**
 * Dump the localStorage entries to a new window.
 *
 */
function configWindow() {
    win = window.open('background.html','config');
    win.document.writeln('<html><body><h1>SALR Configuration</h1>');
    win.document.writeln('<table border="1">');
    win.document.writeln('<tr><th>Key</th><th>Value</th></tr>');
    win.document.writeln('</table>');
    for (var key in localStorage) {
        if (key == 'friendsList' ||
            key == 'forumsList'  || 
            key == 'modList'     ||
            key == 'userNotes'   ||
            key == 'threadNotes' ||
            key == 'forumPostKey' )
            continue;
        //win.document.write('<tr><td>'+key+'</td>');
        //win.document.writeln('<td>'+localStorage[key]+'</td></tr>');
        win.document.writeln('setting[\''+key+'\']    =    "'+localStorage[key]+'"<br />');
    }
    win.document.writeln('</table></body></html>');
    win.document.close();
}

function transitionSettings() {
    port.postMessage({'message':'ConvertSettings'});
    alert("User Notes gotten from SALR!");
}



function loadNewSettings() {
    var setting = [];
setting['MouseActiveContext']="false";
setting['bottomNavBar']="true";
setting['boxQuotes']="false";
setting['collapseTldrQuotes']="false";
setting['darkNewReplies']="#99cc99";
setting['darkRead']="#6699cc";
setting['displayConfigureSalr']="true";
setting['displayCustomButtons']="true";
setting['displayNewPostsFirst']="false";
setting['displayNewPostsFirstForum']="true";
setting['displayNewPostsFirstUCP']="true";
setting['displayOmnibarIcon']="false";
setting['displayPageNavigator']="false";
setting['dontReplaceLinkImage']="false";
setting['dontReplaceLinkNWS']="false";
setting['dontReplaceLinkRead']="false";
setting['dontReplaceLinkSpoiler']="false";
setting['embedVideo']="false";
setting['enableKeyboardShortcuts']="false";
setting['enableMouseGestures']="false";
setting['enableMouseMenu']="true";
setting['enableMouseUpUCP']="false";
setting['enableQuickReply']="true";
setting['enableSOAPLink']="true";
setting['enableSinglePost']="true";
setting['enableThreadNotes']="false";
setting['enableUserNotes']="false";
setting['fixCancer']="true";
setting['hideAdvertisements']="false";
setting['hidePostButtonInThread']="false";
setting['highlightAdminColor']="#ff7256";
setting['highlightFriends']="false";
setting['highlightFriendsColor']="#f2babb";
setting['highlightModAdmin']="false";
setting['highlightModAdminUsername']="false";
setting['highlightModeratorColor']="#b4eeb4";
setting['highlightOP']="false";
setting['highlightOPColor']="#fff2aa";
setting['highlightOwnQuotes']="false";
setting['highlightOwnUsername']="false";
setting['highlightSelf']="false";
setting['highlightSelfColor']="#f2babb";
setting['hightlightThread']="false";
setting['ignoreBookmarkStarGold']="false";
setting['ignoreBookmarkStarRed']="false";
setting['ignoreBookmarkStarYellow']="false";
setting['inlinePostCounts']="false";
setting['inlineVideo']="false";
setting['lightNewReplies']="#ccffcc";
setting['lightRead']="#99ccff";
setting['openAllUnreadLink']="true";
setting['postsPerPage']="default";
setting['qneProtection']="false";
setting['quickReplyBookmark']="false";
setting['quickReplyDisableSmilies']="false";
setting['quickReplyEmotes']="true";
setting['quickReplyFormat']="true";
setting['quickReplyLivePreview']="false";
setting['quickReplyParseUrls']="true";
setting['quickReplySignature']="false";
setting['replaceImagesLink']="false";
setting['replaceImagesReadOnly']="false";
setting['replaceImagesWithLinks']="false";
setting['replaceLinksWithImages']="false";
setting['restrictImageSize']="false";
setting['retinaImages']="false";
setting['salrInitialized']="true";
setting['salrLogoHide']="false";
setting['searchThreadHide']="false";
setting['showEditBookmarks']="false";
setting['showLastThreePages']="false";
setting['showLastThreePagesForum']="true";
setting['showLastThreePagesThread']="true";
setting['showLastThreePagesUCP']="true";
setting['showNavigation']="true";
setting['showPurchases']="true";
setting['showUserAvatar']="true";
setting['showUserAvatarImage']="true";
setting['threadCaching']="false";
setting['topForumRules']="true";
setting['topGloryhole']="true";
setting['topLepersColony']="true";
setting['topLogout']="true";
setting['topNavBar']="true";
setting['topPrivMsgs']="true";
setting['topPurchaseAcc']="true";
setting['topPurchaseArchives']="true";
setting['topPurchaseAva']="true";
setting['topPurchaseBannerAd']="true";
setting['topPurchaseEmoticon']="true";
setting['topPurchaseGiftCert']="true";
setting['topPurchaseNoAds']="true";
setting['topPurchasePlat']="true";
setting['topPurchaseSticky']="true";
setting['topPurchaseUsername']="true";
setting['topSAForums']="true";
setting['topSALink']="true";
setting['topSaclopedia']="true";
setting['topSearch']="true";
setting['topSupport']="true";
setting['topUserCP']="true";
setting['userQuote']="#a2cd5a";
setting['usernameCase']="false";
setting['usernameHighlight']="#9933ff";
setting['whoPostedHide']="false";
setting['youtubeHighlight']="#ff00ff";
    localStorage.clear();
    for ( var key in setting ) {
        localStorage.setItem(key, setting[key]);
    }
}
