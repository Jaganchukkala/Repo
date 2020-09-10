function initModel() {
	var sUrl = "/XSODATA/bip/Odata/FirstXsOdata.xsodata/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}