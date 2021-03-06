/*
 * File: app/controller/Main.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            homeToggleButtons: '#homeToggleButtons',
            homeSwitcher: '#homeSwitcher',
            newsCarousel: {
                selector: '#newsCarousel',
                xtype: 'carousel'
            },
            featuredAppsContainer: {
                selector: '#featuredAppsContainer',
                xtype: 'container'
            }
        },

        control: {
            "#homeToggleButtons": {
                toggle: 'onHomeToggleButtonsToggle'
            },
            "#newsCarousel": {
                initialize: 'onNewsCarouselInitialize'
            },
            "#featuredAppsContainer": {
                initialize: 'onFeaturedAppsContainerInitialize'
            }
        }
    },

    onHomeToggleButtonsToggle: function(segmentedbutton, button, isPressed, options) {
        switch(button.getId()){
            case 'whatsHotButton':
            this.getHomeSwitcher().setActiveItem(0);        
            break;
            case 'tweetsButton':
            this.getHomeSwitcher().setActiveItem(1);
            break;
        }
    },

    onNewsCarouselInitialize: function(component, options) {
        var sheets = [];
        sheets.push({xtype:'component', html:'<img src="http://news.bbcimg.co.uk/media/images/60625000/jpg/_60625563_metro.jpg" style="float:left;padding-right:10px"></img><h1>Microsoft previews Windows 8 operating system</h1>Microsoft has launched the most complete preview yet of its forthcoming Windows 8 operating system.<p/>The company said that tens of thousands of improvements have been made to what it calls the most important redesign of its interface since Windows 95.'});
        sheets.push({xtype:'component', html:'<img src="http://news.bbcimg.co.uk/media/images/60642000/jpg/_60642845_014909605-1.jpg" style="float:left;padding-right:10px"></img><h1>Jubilee event rehearsals begin</h1>A full dress rehearsal of a procession between Westminster Hall and Buckingham Palace has taken place ahead of the weekends Diamond Jubilee celebrations.<p/>Roads in central London were closed off for the rehearsal of Tuesdays carriage procession, which ended at 06:00 BST.<p/>The captains and crew of more than 1,000 boats that will sail along the River Thames in a flotilla on Sunday are also being briefed.'});
        sheets.push({xtype:'component', html:'<img src="http://news.bbcimg.co.uk/media/images/60565000/jpg/_60565233_012622076-1.jpg" style="float:left;padding-right:10px"></img><h1>Sir Terry Pratchett wins Wodehouse comic fiction award</h1>British author Sir Terry Pratchett is to have a pig named in his honour after winning the 13th Bollinger Everyman Wodehouse Prize for Comic Fiction.<p/>He won for his 50th book Snuff, which has become one of the fastest-selling hardback novels since records began.'});
        component.setItems(sheets);
        component.setActiveItem(0);
    },

    onFeaturedAppsContainerInitialize: function(component, options) {
        if(Ext.os.is.Tablet){
            var numberOfApps = 20;
            var appsPerRow = 3;
            var rowsPerSheet = 2;
            var appsPerSheet = appsPerRow * rowsPerSheet;
            var rowCounter = 2;

            var apps = [];
            var rows = [];
            var sheets = [];

            var sheet = Ext.create('Ext.Container',{layout:{type:'vbox',align:'fit'}});
            var row = Ext.create('Ext.Container',{layout:{type:'hbox'},cls:'bat_appstore_container',flex:1});

            //before we start we should round up the number of apps to the nearest whole number per sheet
            if(numberOfApps % appsPerSheet !== 0){
                numberOfApps = numberOfApps + (appsPerSheet - (numberOfApps % appsPerSheet));
            }

            //loop through all the apps and build the grid
            for (i = 1; i <= numberOfApps; i++)
            {       

                //handle the apps
                if(rowCounter % 2 === 0){
                    var app = Ext.create('Ext.Container',{html:'<div class=\"bat_appstore_app_icon\"><img src=\"ico_inews_72.png\"></div><div class=\"bat_appstore_app_detail\"><div class=\"bat_appstore_app_detail_title\"><a href=\"http://meap/interact/adrian/mobilecontrolsdojo16.nsf/xp_v_inews3.xsp?action=openDocument\">Interact News</a></div><div class=\"bat_appstore_app_detail_function\">Marketing<br/>Released 15th February 2012</div></div>',cls:'bat_appstore_app_top',flex:1});
                }else{
                    var app = Ext.create('Ext.Container',{html:'<div class=\"bat_appstore_app_icon\"><img src=\"ico_inews_72.png\"></div><div class=\"bat_appstore_app_detail\"><div class=\"bat_appstore_app_detail_title\"><a href=\"http://meap/interact/adrian/mobilecontrolsdojo16.nsf/xp_v_inews3.xsp?action=openDocument\">Interact News</a></div><div class=\"bat_appstore_app_detail_function\">Marketing<br/>Released 15th February 2012</div></div>',cls:'bat_appstore_app_bottom',flex:1});
                }
                apps.push(app);

                //handle the rows
                if(i % appsPerRow === 0){
                    row.setItems(apps);
                    apps = [];
                    rows.push(row);
                    var row = Ext.create('Ext.Container',{layout:{type:'hbox'},cls:'bat_appstore_container',flex:1});
                    rowCounter = rowCounter + 1;
                }

                //handle the sheets
                if(i % appsPerSheet === 0){
                    sheet.setItems(rows);
                    rows = [];
                    sheets.push(sheet);
                    var sheet = Ext.create('Ext.Container',{layout:{type:'vbox',align:'fit'}});
                }  
            }
            //create carousel
            //add a delegated event listener
            //the listner is bound to the html element and listens for the tap event, the delegate option defines which element should have the listener bound to it
            //can't determine which app is tapped using this method, will have to turn each app into a button or something that has a tap event
            var carousel = Ext.create('Ext.Carousel',{
                styleHtmlContent:true,
                listeners:{
                    element:'element',
                    tap:function(){console.log('you have tapped an app');},
                    delegate:'.bat_appstore_app_top, .bat_appstore_app_bottom'
                }}

                );
                carousel.setItems(sheets);
                component.setItems(carousel);

            }else{
                component.setHtml("phone detected");                  
            }
    }

});