function TripController($scope) {
	$scope.oneAtATime = true;
	$scope.groups = [{
		id: '1',
		title: "Trip options and dates",
		content: "trip options data"
	}, {
		id: '2',
		title: "Itenereies",
		links: [{
			title: 'Young Proffesional Trips',
			target: 'http://israelonthehouse.com/content/young-professionals-trip-itinerary#!/signup'
		}, {
			title: 'Student Trips',
			target: 'http://israelonthehouse.com/content/student-trips-itinerary#!/signup'
		}]
	}, {
		id: '3',
		title: "Photos",
		type: "link",
		link: "photos"
	}, {
		id: '4',
		title: "How to Register",
		links: [{
			title: "link",
			target: "#!/register"
		}]
	}, {
		id: '5',
		title: "Elgibility",
		content: "Dynamic Group Body - 2"
	}, {
		id: '6',
		title: "Trip Extensions",
		content: "Dynamic Group Body - 2"
	}];
}