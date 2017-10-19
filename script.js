$(document).ready(function() {


	var darthVader = {
		name: "Darth Vader",
		health: 150,
		attack: 10,
		counterAttack: 20,
		id: "vader",
	};

	var palpatine = {
		name: "Emperor Palpatine",
		health: 100,
		attack: 20,
		counterAttack: 30,
		id: "palpatine",
	};

	var bobaFett = {
		name: "Boba Fett",
		health: 125,
		attack: 15,
		counterAttack: 25,
		id: "bobafett",
	};

	var lukeSkywalker = {
		name: "Luke Skywalker",
		health: 150,
		attack: 10,
		counterAttack: 20,
		id: "luke",
	};

	var princessLeia = {
		name: "Princess Leia",
		health: 100,
		attack: 20,
		counterAttack: 30,
		id: "leia",
	};

	var hanSolo = {
		name: "Han Solo",
		health: 125,
		attack: 15,
		counterAttack: 25,
		id: "han",
	};

	var avatarSelected = false
	var playerCharacter = ''
	var enemyCharacter = ''
	var names = ["vader", "palpatine", "bobafett", "luke", "leia", "han"]
	var enemiesArray = []
	// character selection function
	$('.charSelect').on('click', function() {
		//console.log('click');
		//console.log($(this).attr("id"));
			if (avatarSelected === false) {
				$(this).appendTo("#attackersection");
				$(this).data("id");
				playerCharacter = $(this).attr("id");
				avatarSelected = true;
				console.log(playerCharacter);

				// tests for which character the user picked, pushes the other objects into enemiesArray
				for (i = 0; i < names.length; i++) {
					
					if (names[i] !== playerCharacter) {
						enemiesArray.push(names[i]);
					}

				}
				// gets value of "enemy" objects and moves them in the document.
				// Also, this has the intention of removing the "charSelect" class and replacing it with "enemySelect" (attempting to allow user enemy choice)
				for (i = 0; i < enemiesArray.length; i++) {
					var temp = "#" + enemiesArray[i];
					$(temp).appendTo('#enemysection');
					$(temp).removeClass("charSelect");
					$(temp).addClass("enemySelect");
					console.log($(temp).attr("class"));
					// console.log(enemiesArray[i]);

					// if (i === enemiesArray.length) {
					// 	return;
					}
				}
			// enemy selection (still kinda broke, but wwaaayyyy better than last night)
			if (avatarSelected === true) {
				$('.enemySelect').on('click', function() {
				$(this).appendTo('#defendersection');
				$(this).data("id", "starwars");
				enemyCharacter = $(this).attr("id");
				console.log(enemyCharacter);
			})
		}
	});

		// Working on assigning the objects to the html elements, attempting the .data method currently
		$('.attackbutton').on('click', function() {
			enemyCharacter.health - playerCharacter.attack;
			console.log(playerCharacter);
		});



	

	// Ok so from here I need (for JS):

	// 	1. Character Select (done)
	// 	2. Defender Select (done)
	// 	3. Move Images to correct position (done)
	//  3.5: Assign Objects to pictures (in progress)
	// 	4. Gameplay
	// 	5. Attack power increase *50% per attack should work*
	// 	6. Win/Loss
	//  7. Probably a lot More 





})