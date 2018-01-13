var Event =(function() {

	var events = [];

	function _storeEvent(key , data){
		events.push({
			"key" : key,
			"val" : data
		});
	}

	function _getAllEvents(){
		return events;
	}

	function _getEvntBykey(key){
		return events.filter(function(ele){
			return ele.key == key;
		})
	}

	return {
		addAnEvent : _storeEvent,
		getAllEvents : _getAllEvents,
		getEventByDate : _getEvntBykey
	}
})();