/*global QUnit*/

sap.ui.define([
	"MSS/EmployeePost/controller/EmployeeForm.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmployeeForm Controller");

	QUnit.test("I should test the EmployeeForm controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});