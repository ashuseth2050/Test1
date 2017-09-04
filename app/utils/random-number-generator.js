function getRandomNumber(len) {
    var charSet = '0123456789',
        firstCharSet = '123456789',
        randomString = '';

    for (var i = 0; i < len; i++) {
        //using a different charset for first digit
        if (i === 0) {
          var firstPoz = Math.floor(Math.random() * firstCharSet.length);
          randomString += firstCharSet.substring(firstPoz, firstPoz + 1);
        } else {
          var randomPoz = Math.floor(Math.random() * charSet.length);
          randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
    }

    return randomString;
};

exports.getRandomNumber = getRandomNumber;
