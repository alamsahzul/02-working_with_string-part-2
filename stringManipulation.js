function stringManipulation(word)
{
  if (word.charAt(0)=='a' || word.charAt(0)=='i' || word.charAt(0)=='u' || word.charAt(0)=='e' || word.charAt(0)=='o' )
  {
    console.log(word);
  }
  else
  {
    var awal = word.charAt(0);
    var addition = 'nyo';
    var deleted = word.substr(1);
    console.log(deleted.concat(awal,addition));

  }
}
stringManipulation('egg');// egg
stringManipulation('chicken');// hickencnyo
