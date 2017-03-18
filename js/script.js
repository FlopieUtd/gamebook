$(document).ready(function(){
	
var player = {
	health: 100,
	strength: 0,
	intelligence: 0,
	equipment1: "empty",
	equipment2: "empty",
	equipment3: "empty",
	room: "Prison Cell"
}

var emptyInfo = function () {
	$(".health").empty();
	$(".strength").empty();
	$(".intelligence").empty();
	$(".equipment1").empty();
	$(".equipment2").empty();
	$(".equipment3").empty();
	$(".currentLocation").empty();
	$(".story").empty();
	$(".user-options").empty();
}

var updateInfo = function () {
	$(".health").append(player.health);
	$(".strength").append(player.strength);
	$(".intelligence").append(player.intelligence);
	$(".equipment1").append(player.equipment1);
	$(".equipment2").append(player.equipment2);
	$(".equipment3").append(player.equipment3);
	$(".currentLocation").append(player.room);
}

var gameOver = function () {
	$(".header h1").empty();
	$(".header h1").append("GAME OVER!");
	$(".bottom").hide();
}

var newGame = function () {
	location.reload();
}

updateInfo();

// HALWAY

var prisonCellInspect = function () {
	emptyInfo();
	$(".story").append("As you look around the room, you notice it has no furniture at all. You hear a dripping sound, and it seems like one of the overhead pipes is leaking. You could try to get in shape and do some pull ups using these pipes. If you had a wrench, you could even screw one of the pipes loose. In a corner of the room lies a book. The cover reads <em>The Art of War</em>.");
	$(".user-options").append("You can either try to go back to <b>SLEEP</b>, <b>WORKOUT</b> using the overhead pipes, or <b>READ</b> <em>The Art of War</em>.");
	updateInfo();
}

var prisonCellWorkout = function () {
	emptyInfo();
	$(".story").append("You spend your time doing pull ups and push ups. You immediately notice the benefit as your strength increases!");
	$(".user-options").append("The workout has tired you down. You wish you could take a shower but there's nothing left to do but <b>SLEEP</b> for now.");
	player.strength += 1;
	updateInfo();
}

var prisonCellRead = function () {
	emptyInfo();
	$(".story").append("You put the scarce light available to good use reading Sunzi's <em>The Art of War</em>. Interesting stuff! You instantly feel a lot smarter.");
	$(".user-options").append("You're almost halfway through the book when you're too tired to continue. It's probably best to get some <b>SLEEP</b>.");
	player.intelligence += 1;
	updateInfo();	
}

var prisonCellSleep = function () {
	emptyInfo();
	$(".story").append("You lie back down on the cold floor. Fortunately, it doesn't take long to fall asleep.<br><br>When you wake up hours later, you hear footsteps approaching down the hall. As you hear the lock being opened with a key, you realise this may be your chance to get out of here.");
	$(".user-options").append("You can either try to <b>ATTACK</b> the guard or try to <b>DECEIVE</b> him.");
	updateInfo();	
}

var prisonCellAttack = function () {
	emptyInfo();
	if (player.strength >= 1) {
		$(".story").append("As the guard swings open the door, you don't hesitate a moment and charge into him. Unfortunately, he has a rubber baton on him and manages to land a few strikes. After a short struggle, you subdue the guard and render him unconscious. Good thing you're in great shape...");
		$(".user-options").append("You stand in front of the unconscious guard. You can either take his rubber <b>BATON</b> and exit the room or <b>LEAVE</b> the room straightaway. ");	
		player.health -= 20
	} else {
		$(".story").append("As the guard swings open the door, you don't hesitate a moment and charge into him. Unfortunately, he has a rubber baton on him and manages to land a few strikes. After quite a tough struggle, you subdue the guard and render him unconscious.");
		$(".user-options").append("You stand in front of the unconscious guard. You can either take his rubber <b>BATON</b> and exit the room or <b>LEAVE</b> the room straightaway.");	
		player.health -= 40
	}
	updateInfo();	
}

var prisonCellDeceive = function () {
	emptyInfo();
	if (player.intelligence >= 1) {
		$(".story").append("You lie face down as the guard swings open the door. He calls your name, but you don't react. The guard approaches you as he calls your name again. You ignore him once more. When the guard bends over to see if you're conscious, you grab his ankles and yank him down. You quickly get on top of the guard and manage to render him unconscious. ");
		$(".user-options").append("You stand in front of the unconscious guard. You can either take his rubber <b>BATON</b> and exit the room or <b>LEAVE</b> the room straightaway.");	
	} else {
		$(".story").append("You quickly hide behind the door in an attempt to ambush the guard. Your attempt miserably fails as the guard immediately notices what's going on. He beats you with his baton and leaves you to starve in your cell.");
		$(".user-options").append("You can start a <b>NEW</b> game.");	
		gameOver();
	}
	updateInfo();	
}

var prisonCellBaton = function () {
	emptyInfo();
	$(".story").append("You grab the guard's rubber baton and leave your cell. You are now in a long hallway. A sign indicates there's a bathroom to your left, while a maintenance room is further down the hall to your right. You wonder which way gets you to your beloved <em>STR12</em> the fastest...");
	$(".user-options").append("");
	player.room = "Hallway";
	if (player.equipment1 == "empty") {
		player.equipment1 = "Rubber baton (str+1)"
	} else if (player.equipment2 == "empty") {
		player.equipment2 = "Rubber baton (str+1)"
	} else if (player.equipment3 == "empty") {
		player.equipment3 = "Rubber baton (str+1)"
	} else {alert("You have no empty item slots!");}
	player.strength += 1;
	updateInfo();		
}

var prisonCellLeave = function () {
	emptyInfo();
	$(".story").append("You leave your cell and enter a long hallway. A sign indicates there's a bathroom to your left, while the maintenance room is further down the hall to your right. You wonder which way gets you to your beloved spaceship <em>STR12</em> the fastest...");
	$(".user-options").append("You can either go <b>LEFT</b> towards the maintenance room or <b>RIGHT</b> towards the staircase.");
	player.room = "Hallway";
	updateInfo();		
}

// HALLWAY

var hallwayLeft = function () {
	emptyInfo();
	player.room = "Maintenance Room";
	$(".story").append("You decide to go towards the maintenance room. You carefully slide the door ajar and look if someone's inside. The room is empty and you sneak inside.");
	$(".user-options").append("You can <b>INSPECT</b> the room or <b>LEAVE</b> and go back to the hallway.");
	updateInfo();	
}

// MAINTENANCE ROOM

var maintenanceRoomInspect = function () {
	emptyInfo();
	$(".story").append("You look around the maintenance room. There's a computer terminal that might contain blueprints of the building you're in. On the wall, there's a large tool wall. A wrench would come in handy as a weapon, but it must lay somewhere in the room as it's not in its place on the tool wall.");
	$(".user-options").append("You can inspect the computer <b>TERMINAL</b> to see if you can find blueprints of the building or start looking for the <b>WRENCH</b> that must be around somewhere.");
	updateInfo();	
}

var maintenanceRoomTerminal = function () {
	emptyInfo();
	$(".story").append("");
	$(".user-options").append("");
	updateInfo();		
}


$("#go").click(function(){
	event.preventDefault();
	var userChoice = $(".choice").val().toLowerCase();
	var currentLocation = player.room.toLowerCase();
	var answer = currentLocation.concat(" " + userChoice);
	
	switch(answer) {
		//New Game
	    case 'prison cell new':
	    case 'hallway new':
	    	newGame();
	    	break;			
		// Prison Cell
	    case 'prison cell inspect':
	    	prisonCellInspect();
	        break;
	    case 'prison cell workout':
	    	prisonCellWorkout();
	        break;
	    case 'prison cell read':
	    	prisonCellRead();
	        break;
	    case 'prison cell sleep':
	    	prisonCellSleep();
	    	break;
	    case 'prison cell attack':
	    	prisonCellAttack();
	    	break;
	    case 'prison cell deceive':
	    	prisonCellDeceive();
	    	break;    
	    case 'prison cell baton':
	    	prisonCellBaton();
	    	break;
	    case 'prison cell leave':
	    	prisonCellLeave();
	    	break;
	    //Hallway
	    case 'hallway left':
	    	hallwayLeft();
	    	break;
	    case 'hallway right':
	    	hallwayRight();
	    	break;
	    //Maintenance Room
	    case 'maintenance room inspect':
	    	maintenanceRoomInspect();
	    	break;
	    case 'maintenance room leave':
	    	maintenanceRoomLeave();
	    	break;
	    case 'maintenance room terminal':
	    	maintenanceRoomTerminal();
	    	break;
	    case 'maintenance room wrench':
	    	maintenanceRoomWrench();
	    	break;
	    default:
	        alert("Unknown command!");
	}
	$(".choice").val("");
});




});