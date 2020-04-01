exports.binary = function (decimal){ 
	binary = "";

	while(decimal!=0) {
		rest = decimal % 2; 
		decimal = (decimal - rest) / 2; 
        binary = rest + binary;
	}
	return binary;
}

console.log(binary(5));

	