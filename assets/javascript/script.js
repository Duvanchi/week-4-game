$(document).ready(function() {


	// var darthVader = {
	// 	name: "Darth Vader",
	// 	health: 150,
	// 	attack: 10,
	// 	counterAttack: 20,
	// 	id: $('vader').data("darthVader"),
	// };

	// var palpatine = {
	// 	name: "Emperor Palpatine",
	// 	health: 100,
	// 	attack: 20,
	// 	counterAttack: 30,
	// 	id: $('palpatine').data("palpatine"),
	// };

	// var bobaFett = {
	// 	name: "Boba Fett",
	// 	health: 125,
	// 	attack: 15,
	// 	counterAttack: 25,
	// 	id: $('#bobafett'),
	// };

	// var lukeSkywalker = {
	// 	name: "Luke Skywalker",
	// 	health: 150,
	// 	attack: 10,
	// 	counterAttack: 20,
	// 	id: $('#luke'),
	// };

	// var princessLeia = {
	// 	name: "Princess Leia",
	// 	health: 100,
	// 	attack: 20,
	// 	counterAttack: 30,
	// 	id: $('#leia'),
	// };

	// var hanSolo = {
	// 	name: "Han Solo",
	// 	health: 125,
	// 	attack: 15,
	// 	counterAttack: 25,
	// 	id: $('han'),
	// };


	var playerHealth = ''
	var enemyHealth = ''
	var playerAttack = ''
	var enemyAttack = ''
	var avatarSelected = false
	var playerAvatar = ''
	var enemyAvatar = ''
	var names = ["vader", "palpatine", "bobafett", "luke", "leia", "han"]
	var enemiesArray = []
	// character selection function
	$('.charSelect').on('click', function goodPeep() {
		//console.log('click');
		//console.log($(this).attr("id"));
			if (avatarSelected === false) {
				$(this).appendTo("#attackersection");
				$(this).data("id", 'click');
				playerAvatar = $(this).attr("id");
				playerAttack = $(this).attr("attack");
				playerHealth = $(this).attr("health");
				$('#hp').text(playerHealth);
			    $('#ap').text(playerAttack);
				avatarSelected = true;
				$('#pick').empty();
				$('#info').empty();
				console.log(playerHealth);

				// tests for which character the user picked, pushes the other objects into enemiesArray
				for (i = 0; i < names.length; i++) {
					
					if (names[i] !== playerAvatar) {
						enemiesArray.push(names[i]);
					}

				}
				// gets value of "enemy" objects and moves them in the document.
				// Also, this is removing the "charSelect" class and replacing it with "enemySelect"
				for (i = 0; i < enemiesArray.length; i++) {
					var temp = "#" + enemiesArray[i];
					$(temp).appendTo('#enemysection');
					$(temp).removeClass("charSelect");
					$(temp).addClass("enemySelect");
					console.log($(temp).attr("class"));
					// console.log(enemiesArray[i]);
				}
			}
			// enemy selection (still kinda broken, but wwaaayyyy better than last night)
			if (avatarSelected === true) {
				$('.enemySelect').on('click', function badPeeps () {
				$(this).appendTo('#defendersection');
				$(this).data("id", 'click');
				enemyAvatar = $(this).attr("id");
				enemyHealth = $(this).attr("health");
				enemyAttack = $(this).attr("attack");
			    $('#ehp').text(enemyHealth);
		      	$('#eap').text(enemyAttack);
				$('#tellem').empty();
				console.log(enemyHealth);
			})
		}
	});


	// Combat function + win/loss function
	$('.attackbutton').on('click', function attack() {
		  var pdam = parseInt(enemyHealth - playerAttack);
		  var edam = parseInt(playerHealth - enemyAttack);
		  playerAttack = (playerAttack * 1.5);
		  enemyHealth = pdam;
		  playerHealth = edam;
		  console.log(pdam);
		  console.log(edam);
		  $('#hp').text(playerHealth);
		  $('#ap').text(playerAttack);
	      $('#ehp').text(enemyHealth);
	      $('#eap').text(enemyAttack);

		 if (enemyHealth <= 0) {
		 	$('#defendersection').empty();
		 	$('#ehp').empty();
		 	$('#eap').empty();
		 	$('#tellem').text("Most impressive. Choose a new opponent.");
		 }

		 if (playerHealth <= 0) {
		 	alert("You have much to learn young padawan.")
		 }
	});



	

	// Ok so from here I need (for JS):

	// 	1. Character Select (done)
	// 	2. Defender Select (done)
	// 	3. Move Images to correct position (done)
	//  3.5: Assign Objects to pictures (eff that for now)
	//  3.6: Convert strings to integers (got it)
	// 	4. Gameplay (works-ish)
	//  4.5 Display gameplay data (donezo)
	// 	5. Attack power increase *50% per attack should work* (checkarooni)
	//  5.5: Reset enemy (check for that fam)
	// 	6. Win/Loss (booyah)
	//  7. Probably a lot More (yep)






})