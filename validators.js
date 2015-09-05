var validators = (function() {

  this.validCPF = function( cpf ) {

    var cpf = clearCPF();

    if( errorLength() ) {
      return false;
    }
    var digitOne = +getDigits()[0];
    var digitTwo = +getDigits()[1];

    var firstDigitChecked = checkerOneDigit();
    var secondDigitChecked = checkerTwoDigit();

    function clearCPF() {
      return cpf.replace( /\D/g, '' );
    }

    function getDigits() {
      return cpf.slice( 9 );
    }

    function checkerOneDigit() {
      var aux = 0;
      for( var i = 10, x = 0; i >= 2, x <= 8 ; i--, x++ ) {
        aux = aux + Number( cpf[ x ] * i );
      }
      var digit = ( aux * 10 ) % 11;
      if ( digit === 10 || digit === 11 ) {
        return 0;
      }

      return digit;
    }

    function checkerTwoDigit() {
      var aux = 0;
      for( var i = 11, x = 0; i >= 2, x <= 9 ; i--, x++ ) {
        aux = aux + Number( cpf[ x ] * i );
      }
      var digit = ( aux * 10 ) % 11;
      if ( digit === 10 || digit === 11 ) {
        return 0;
      }

      return digit;
    }
    function errorLength() {
      return cpf.length !== 11;
    }

    function isValid() {
      if( firstDigitChecked === digitOne && secondDigitChecked === digitTwo ) {
        return true;
      }
      return false;
    }

    return isValid();
  };

  return {
    validCPF: validCPF
  };
})();
console.log( validators.validCPF( '407.308.418-63' ) );
