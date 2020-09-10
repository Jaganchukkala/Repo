sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("MSS.EmployeePost.controller.EmployeeForm", {
		onInit: function () {

		},

		onPress: function (event) {

			var oCrossAppNav = sap.ushell && sap.ushell.Container && sap.ushell.Container.getService("CrossApplicationNavigation");
			var href_For_Product_display = (oCrossAppNav && oCrossAppNav.toExternal({
				target: {
					shellHash: "HelloWorld-display"
				}
			})) || "";

			// var oModel = this.getOwnerComponent().getModel();
			// var payLoad = {
			// 	"EMPLOYEEID": "Jagannadh",
			// 	"NAME.FIRST": this.getView().byId("name").getValue(),
			// 	//"NAME.MIDDLE": null,
			// 	"NAME.LAST": "Spring",
			// 	"NAME.INITIALS": "Chukkala",
			// 	"GENDER": "F",
			// 	"LANGUAGE": "E",
			// 	"PHONENUMBER": "+919703642190",
			// 	"EMAILADDRESS": "chukkala143@gmail.com",
			// 	"LOGINNAME": "SPRINGS",
			// 	"VALIDITY.STARTDATE": "/Date(946684800000)/",
			// 	"VALIDITY.ENDDATE": "/Date(253402214400000)/",
			// 	"CURRENCY": "USD",
			// 	"SALARYAMOUNT": "55549"
			// };
			// oModel.create("/EmployeeSet", payLoad, {
			// 	success: function (odata, response) {
			// 		debugger;
			// 	}
			// });
		}
	});
});