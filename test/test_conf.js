window.jentis = window.jentis || {};
window.jentis.consent = window.jentis.consent || {};
window.jentis.consent.config = {
	
	timeoutBarShow : 3600000,
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
				"name"  : "statistic"
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
				"id"    : "stat",
				"name"  : "statistic"
			},
			"justification" : {
				"id"    : "legal",
				"name"  : "Legal Fullfillment"
			},
			"description" : "bla bla bla bla bla"
			
		}
	}

};
