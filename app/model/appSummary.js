/*
 * File: app/model/appSummary.js
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

Ext.define('MyApp.model.appSummary', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {
                name: 'Title',
                type: 'string'
            },
            {
                name: 'Description',
                type: 'string'
            },
            {
                mapping: '@href',
                name: 'Link',
                type: 'string'
            },
            {
                mapping: 'IconURL',
                name: 'IconURL',
                type: 'string'
            },
            {
                mapping: 'nInstalls',
                name: 'Installs',
                type: 'float'
            },
            {
                mapping: 'Function',
                name: 'Function',
                type: 'string'
            },
            {
                mapping: 'ID',
                name: 'ID',
                type: 'string'
            },
            {
                mapping: 'nRating',
                name: 'Rating',
                type: 'float'
            },
            {
                mapping: 'Tags',
                name: 'Tags',
                type: 'string'
            },
            {
                mapping: 'EnableMessage',
                name: 'EnableMessage',
                type: 'boolean'
            },
            {
                mapping: 'Message',
                name: 'Message',
                type: 'string'
            },
            {
                name: 'IconBgClass'
            }
        ]
    }
});