/**
 * Visual Blocks Language
 *
 * Copyright 2021 openblock.cc.
 * https://github.com/openblockcc/openblock-blocks
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

goog.provide('Blockly.Python.spotpear');

goog.require('Blockly.Python');


Blockly.Python['spotpear_pin_setDigitalOutput'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var level = Blockly.Python.valueToCode(block, 'LEVEL', Blockly.Python.ORDER_FUNCTION_CALL) || 'LOW';

  var code = "pin" + pin + ".write_digital(" + level + ")\n";
  return code;
};

Blockly.Python['spotpear_pin_menu_level'] = function(block) {
  var code = block.getFieldValue('level') || '0';
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_pin_setPwmOutput'] = function(block) {
  var pin = block.getFieldValue('PIN');
  var out = Blockly.Python.valueToCode(block, 'OUT', Blockly.Python.ORDER_FUNCTION_CALL) || '0';

  var code = "pin" + pin + ".write_analog(" + out + ")\n";
  return code;
};

Blockly.Python['spotpear_pin_readDigitalPin'] = function(block) {
  var pin = block.getFieldValue('PIN') || '0';
  var code = "pin" + pin + ".read_digital()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_pin_pinTouched'] = function(block) {
  var pin = block.getFieldValue('PIN') || '0';
  var code = "pin" + pin + ".is_touched()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_timer_setTimer'] = function(block) {
  var tid = Blockly.Python.valueToCode(block, 'TIMER', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_FUNCTION_CALL) || '';

  var code = "set_timer(" + tid + ", " + value + ")\n";
  return code;
};

Blockly.Python['spotpear_display_setLED'] = function(block) {
  var state = block.getFieldValue('STATE') || 0;

  var code = "set_led(" + state + ")\n";
  return code;
};


Blockly.Python['spotpear_display_drawLine'] = function(block) {
  var x1 = Blockly.Python.valueToCode(block, 'X1', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y1 = Blockly.Python.valueToCode(block, 'Y1', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var x2 = Blockly.Python.valueToCode(block, 'X2', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y2 = Blockly.Python.valueToCode(block, 'Y2', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x');
  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_FUNCTION_CALL) || '';

  var code = "draw_line(" + x1 + ", " + y1 + ", " + x2 + ", " + y2 + ", " + color + ", " + width + ")\n";
  return code;
};

Blockly.Python['spotpear_display_drawRectangle'] = function(block) {
  var x1 = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y1 = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var width = Blockly.Python.valueToCode(block, 'WIDTH', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var height = Blockly.Python.valueToCode(block, 'HEIGHT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x');

  var code = "draw_rectangle(" + x1 + ", " + y1 + ", " + width + ", " + height + ", " + color + ")\n";
  return code;
};

Blockly.Python['spotpear_display_drawCircle'] = function(block) {
  var x1 = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y1 = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var radius = Blockly.Python.valueToCode(block, 'RADIUS', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x');

  var code = "draw_circle(" + x1 + ", " + y1 + ", " + radius + ", " + color + ")\n";
  return code;
};

Blockly.Python['spotpear_display_showImage'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';

  arg0 = arg0.slice(0, 5) + ':' + arg0.slice(5, 10) + ':' + arg0.slice(10, 15)
    + ':' + arg0.slice(15, 20) + ':' + arg0.slice(20, 25);
  var code = "draw_grid( parse_matrix('" + arg0 + "'), 5, 0xff0000, 128, 128 )\n";
  return code;
};

Blockly.Python['spotpear_display_showImage16x16'] = function(block) {
  var arg0 = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC) || '0';

  arg0 = arg0.slice(0, 16) + ':' + arg0.slice(16, 32) + ':' + arg0.slice(32, 48) + ':' + arg0.slice(48, 64) 
 + ':' + arg0.slice(64, 80) + ':' + arg0.slice(80, 96) + ':' + arg0.slice(96, 112) + ':' + arg0.slice(112, 128) 
 + ':' + arg0.slice(128, 144) + ':' + arg0.slice(144, 160) + ':' + arg0.slice(160, 176) + ':' + arg0.slice(176, 192) 
 + ':' + arg0.slice(192, 208) + ':' + arg0.slice(208, 224) + ':' + arg0.slice(224, 240) + ':' + arg0.slice(240, 256);

  var code = "draw_grid( parse_matrix('" + arg0 + "'), 1, 0xff0000, 128, 128 )\n";
  return code;
};

Blockly.Python['spotpear_display_show'] = function(block) {
  var txt = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var x1 = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y1 = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x').replace(/^\((.*)\)$/, "$1");
  var _size = Blockly.Python.valueToCode(block, 'SIZE', Blockly.Python.ORDER_FUNCTION_CALL) || '14';

  var code = "display_text_at_position(" + txt + ", " + x1 + ", " + y1 + ", " + color + ", " + _size + ")\n";
  return code;
};

Blockly.Python['spotpear_display_clearDisplay'] = function() {
  var code = "clear_screen()\n";
  return code;
};

Blockly.Python['spotpear_display_setBackgroundColor'] = function(block) {
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x').replace(/^\((.*)\)$/, "$1");
  var code = "set_screen_background_color(" + color + ")\n";
  return code;
};

Blockly.Python['spotpear_display_drawPixel'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var color = Blockly.Python.valueToCode(block, 'COLOR', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  color = color.replace(/#/y, '0x');

  var code = "draw_pixel(" + x + ", " + y + ", " + color + ")\n";
  return code;
};


Blockly.Python['spotpear_display_rgb'] = function(block) {
  var order = Blockly.Python.ORDER_FUNCTION_CALL;
  var r = Blockly.Python.valueToCode(block, 'RED', order) || 0;
  var cr = isNaN(r) ? r.replace(/^\((.*)\)$/, "$1") : Math.max(0, Math.min(r, 255));
  var g = Blockly.Python.valueToCode(block, 'GREEN', order) || 0;
  var cg = isNaN(g) ? g.replace(/^\((.*)\)$/, "$1") : Math.max(0, Math.min(g, 255));
  var b = Blockly.Python.valueToCode(block, 'BLUE', order) || 0;
  var cb = isNaN(b) ? b.replace(/^\((.*)\)$/, "$1") : Math.max(0, Math.min(b, 255));

  var code = (cr << 16) + (cg << 8) + (cb) + 0x0;
  return [code, Blockly.Python.ORDER_ATOMIC];
};


Blockly.Python['spotpear_sensor_buttonIsPressed'] = function(block) {
  var key = block.getFieldValue('KEY');

  var code = "button_" + key + ".is_pressed()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_sensor_runningTime'] = function() {
  var code = "running_time()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_wireless_openWirelessCommunication'] = function() {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.on()\n";
  return code;
};

Blockly.Python['spotpear_wireless_closeWirelessCommunication'] = function() {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.off()\n";
  return code;
};

Blockly.Python['spotpear_wireless_resetWirelessCommunication'] = function() {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.reset()\n";
  return code;
};

Blockly.Python['spotpear_wireless_sendWirelessMessage'] = function(block) {
  Blockly.Python.imports_["radio"] = "import radio";

  var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var code = "radio.send(str(" + msg + "))\n";
  return code;
};

Blockly.Python['spotpear_wireless_receiveWirelessMessage'] = function() {
  Blockly.Python.imports_["radio"] = "import radio";
  var code = "radio.receive()";
  return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['spotpear_wireless_setWirelessCommunicationChannel'] = function(block) {
  Blockly.Python.imports_["radio"] = "import radio";

  var ch = block.getFieldValue('CH');
  var code = "radio.config(channel = " + ch + ")\n";
  return code;
};

Blockly.Python['spotpear_console_consolePrint'] = function(block) {
  var msg = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_FUNCTION_CALL) || '';
  var code = "print(" + msg + ")\n";
  return code;
};
