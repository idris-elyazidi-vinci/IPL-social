// Fonction de validation de mot de passe
function passwordChecker(password) {
    const regexSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const regexDigit = /\d/;
  
    if (password.length < 8) {
      return false;
    }
    if (!regexSpecialChar.test(password)) {
      return false;
    }
    if (!regexDigit.test(password)) {
      return false;
    }
    if (/ipl/i.test(password)) {
      return false;
    }
    return true;
  }
  
  export default passwordChecker;
  