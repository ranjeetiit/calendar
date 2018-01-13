var Calendar = (function(){
	var $targetDiv= document.getElementById("calendar");


	function _drawCalendar(){
		createHeader();
		fillDate();
		$targetDiv.addEventListener("click" , function(e){
			var $target =  e.target;
			var date;
			var allEvents;
			if($target.classList.contains("dateCell")){
				date = getDateFromCell($target);
				Event.addAnEvent(date ,["having meeting"]);
				allEvents = Event.getEventByDate(date);
				displayEvent($target,allEvents);
			}
		});
	}


	function getDateFromCell (cell){
		return cell.getAttribute("date");
	}

	function createHeader (){
		var daysArray = Constant.dayNames;
		var len = daysArray.length;
		var fragment = document.createDocumentFragment();
		var cell ;
		for(var i = 0 ; i <len ; i++){
			cell = createDayCell(daysArray[i])
			fragment.appendChild(cell);
		}

		$targetDiv.append(fragment);
	}

	function fillDate(){
		var currentDate  =  Utils.currentDate();
		var fragment = document.createDocumentFragment();
		var cell;
		for(var i = 0 ; i <= 30; i ++){
			if(i >= currentDate){
				cell = createDayCell(i ,true);
			}else{
				cell = createDayCell("");
			}
			fragment.appendChild(cell);
		}
		$targetDiv.append(fragment);
	}

	function createDayCell(text,isDateCell){
		var cell = document.createElement("div");
			cell.classList.add("cell");
			if(isDateCell){
				cell.classList.add("dateCell");
				cell.classList.add("tooltip");	
				cell.setAttribute("date", text);
			}
			cell.innerHTML = text;
			return cell;
	}
	function displayEvent(cell, events){
		var tooltipFragment = document.createDocumentFragment();
		var	span = document.createElement("span");
			span.classList.add("tooltiptext");
		
		var allMEttings = events.reduce(function(prev, curr){
			return prev + (prev ? " , " : "") + curr.val;
		},"");
		span.innerHTML = allMEttings;
		tooltipFragment.appendChild(span)
		cell.appendChild(tooltipFragment);
	}

	return{
		drawCalendar : _drawCalendar
	}
})();


Calendar.drawCalendar();