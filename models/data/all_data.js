/*
  ___         _      _   _ _ _ _         
 | __|_ _____| |_  _| |_(_) (_) |_ _  _  
 | _|\ V / _ \ | || |  _| | | |  _| || | 
 |___|\_/\___/_|\_,_|\__|_|_|_|\__|\_, | 
                                   |__/  
https://github.com/evoluteur/evolutility-models
*/

module.exports = {
	todo: require('./pim/todo-data'),
	contact: require('./pim/contact-data'),
	comics: require('./pim/comics-data'),
	winecellar: require('./pim/winecellar-data'),
	winetasting: require('./pim/winetasting-data'),
	restaurant: require('./pim/restaurant-data'),
	
	album: require('./music/album-data'),
	artist: require('./music/artist-data'),
	track: require('./music/track-data'),

	test: require('./test/test-data'),

	world: require('./designer/world-data'),
	object: require('./designer/object-data'),
	field: require('./designer/field-data'),
};
