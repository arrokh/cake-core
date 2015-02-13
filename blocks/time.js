/**
 * Created by 최재웅 on 2015-02-11.
 */
'use strict';

goog.provide('Blockly.Blocks.time');

goog.require('Blockly.Blocks');

Blockly.Blocks['library_time_current'] = {
    /**
     * Block for printing current time
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.STRING_STRLEN_HELPURL);
        this.setColour(300);
        this.interpolateMsg(Blockly.Msg.TIME_TIME_CURRENT_TITLE,
            Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.STRING_STRLEN_HELPURL);
    },
    //when the block is changed,
    onchange: Blockly.Blocks.requireInFunction
};

Blockly.Blocks['library_time_requiredTime'] = {
    /**
     * Block for saving time required to do
     * @this Blockly.Block
     */
    init: function() {
        this.setHelpUrl(Blockly.Msg.STRING_STRCAT_HELPURL);
        this.setColour(300);
        this.interpolateMsg(Blockly.Msg.TIME_REQUIREDTIME_TITLE,
            Blockly.ALIGN_RIGHT);
        this.appendStatementInput('DO');
        this.interpolateMsg(Blockly.Msg.TIME_REQRUIEDTIME_TALE,
            ['SAVE', ['VAR_DOUBLE', 'Variable'], Blockly.ALIGN_RIGHT],
            Blockly.ALIGN_RIGHT);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.STRING_STRCAT_HELPURL);
    },
    //when the block is changed,
    onchange: Blockly.Blocks.requireInFunction
};