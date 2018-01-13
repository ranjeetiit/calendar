var Utils = (function  () {


	function getCurrentDate() {
		var date = new Date();
		return date;
	}

	function _getCurrentDay(){
		var currentDay = getCurrentDate().getDay();
	}


	function _currentDate(){
		var date = getCurrentDate();
		return date.getDate();
	}
	
	return {
		currentDay : _getCurrentDay,
		currentDate : _currentDate
	}
})();