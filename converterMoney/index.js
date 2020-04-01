exports.converterEuro = function (euro){
		dollar = euro * 1.470;
		pound = euro * 0.717;
		yen = euro * 165.192;
		return console.log(dollar, pound, yen);
}
converterEuro(1);

exports.converterDollar = function (dollar){
		euro = dollar * 0.680;
		pound = dollar * 0.488;
		yen = dollar * 112.36;
		return console.log(euro, pound, yen);
}
converterDollar(1.47);

exports.converterPoud = function (pound){
		dollar = pound * 2.049;
		euro = pound * 1.394;
		yen = pound * 230.27;
		return console.log(dollar, euro, yen);
}

exports.converterYen = function (yen){
		dollar = yen * 0.0089;
		pound = yen * 0.00434;
		euro = yen * 0.00605;
		return console.log(dollar, euro, yen);
}