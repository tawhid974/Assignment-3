// Task 1 -- kilometerToMeter


function kilometerToMeter(kilometer){
    const meter = 1000;
    var result = kilometer * 1000;
    return result;
}


// Task 2 -- budgetCalculator


function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    totalWatchPrice = (watch * watchPrice);
    totalMobilePrice = (mobile * mobilePrice);
    totalLaptopPrice = (laptop * laptopPrice);
    var totalCost = (totalWatchPrice + totalMobilePrice + totalLaptopPrice);
    return totalCost;
}
	var totalBudget = budgetCalculator(6, 4, 3);
	console.log(totalBudget);


// Task 3 -- hotelCost


function hotelCost(day) {
    if (day <= 10) {
       var hotelCost = day * 100;
    } else if (day <= 20) {
        var firstOffer = 10 * 100;
        var secondOffer = (day-10) * 80;
        hotelCost = firstOffer + secondOffer;
    } else {
        firstOffer = 10 * 100;
        secondOffer = 10 * 80;
        var thirdOffer = (day-20) * 50;
        hotelCost = (firstOffer + secondOffer + thirdOffer);
    }
		return hotelCost;
}
	var totalHotelCost = hotelCost(30);
	console.log(totalHotelCost);


// Task 4 -- megaFriend


function megaFriend(friendName) {
        var largeName = friendName[0];
        for (var i = 0; i < friendName.length; i++) {
            var element = friendName[i];
            if (element.length > largeName.length) {
                largeName = element;
        }
	}
         return largeName;
}
		var friendName = ["kamal", "sakib", "shanto", "mostakim", "fahim", "emran"];
		var megaFriendName = megaFriend(friendName);
		console.log(megaFriendName);