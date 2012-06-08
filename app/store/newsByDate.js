/*
 * File: app/store/newsByDate.js
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

Ext.define('MyApp.store.newsByDate', {
    extend: 'Ext.data.Store',
    alias: 'store.newsByDate',
    requires: [
        'MyApp.model.newsSummary'
    ],

    config: {
        autoLoad: true,
        model: 'MyApp.model.newsSummary',
        storeId: 'newsByDate',
        proxy: {
            type: 'ajax',
            url: 'app/data/vwMobNewsByDate.json',
            reader: {
                type: 'json'
            }
        }
    }
});