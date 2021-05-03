window.jentis = window.jentis || {};
window.jentis.consent = window.jentis.consent || {};
window.jentis.consent.config = {
	
	timeoutBarShow : 3600000,
	cssUrl			: "test.css",
	backward : {
		vendorduplicate : "pixel"
	},	
	template : {
		cssUrl : "../JentisAppDsgvo.css",
		config : {
			consentText 	: "<h4>Dataprotection Settings</h4>Wir verwenden Cookies und &auml;hnliche Technologien f&uuml;r folgende Zwecke: {{purposes}}. Mit Klick auf \"Zustimmen\" willigen Sie der Verwendung dieser Cookies ein. Mit \"Ablehnen\" lehnen Sie diese Cookies ab. Die gesamten Cookie-Einstellungen k&ouml;nnen Sie in den Cookie-Einstellungen verwalten.",
			contact			: "JENTIS GmbH<br>Sch&ouml;nbrunnerstraáe 231, 1120 Wien<br>Austria<br>+43-1-2234 00 33<br>dataprotection@jentis.com",
			buttonAgree		: "Alle akzeptieren",
			buttonDeny		: "Ablehnen",
			buttonSetting	: "Einstellungen",
			buttonSave		: "Speichern",
			importantLinks	: {
				"Impressum"		: "/impressum",
				"Datenschutz"	: "/datenschutz"
			}		
		}
	},
	vendors : 
	{
		"ga" : {

			"vendor" : {
				"id"      : "ga",
				"name"    : "Google Analytics",
				"street"  : "Google Street 1",
				"zip"     : "114011",
				"country" : {
					"iso"   : "us",
					"name"  : "United States of America"
				}
			},
			"purpose" : {
				"id"    : "stat",
				"name"  : "Statistik"
			},
			"justification" : {
				"id"    : "consent",
				"name"  : "consent"
			},
			"description" : "bla bla bla bla bla"
		},
		"fb"  : {
			"vendor" : {
				"id"      : "fb",
				"name"    : "Facebook",
				"street"  : "FB Street 1",
				"zip"     : "114011",
				"country" : {
					"iso"   : "us",
					"name"  : "United States of America"
				}
			},
			"purpose" : {
				"id"    : "mark",
				"name"  : "Marketing"
			},
			"justification" : {
				"id"    : "legal",
				"name"  : "Legal Fullfillment"
			},
			"description" : "bla bla bla bla bla"
			
		},
		"adw"  : {
			"vendor" : {
				"id"      : "adw",
				"name"    : "Adwords",
				"street"  : "FB Street 1",
				"zip"     : "114011",
				"country" : {
					"iso"   : "us",
					"name"  : "United States of America"
				}
			},
			"purpose" : {
				"id"    : "mark",
				"name"  : "Marketing"
			},
			"justification" : {
				"id"    : "consent",
				"name"  : "Legal Fullfillment"
			},
			"description" : "bla bla bla bla bla"
			
		}
		
	}

};
