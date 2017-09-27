function stringManipulation(word)
{
  if (word.charAt(0)=='a' || word.charAt(0)=='i' || word.charAt(0)=='u' || word.charAt(0)=='e' || word.charAt(0)=='o' )
  {
    console.logword);
  }
  else
  {
    var awal = word.charAt(0);
    var tambah = 'nyo';
    var hapus = word.substr(1);
    console.log(hapus.concat(awal,tambah));

  }
}
stringManipulation('ayam');// ayam
stringManipulation('bebek');// ebekbnyo
