let extractLanguage = localCode => {
  let language = localCode.slice(0, 2);
  let region = localCode.slice(3, 5);
  if(language === 'en' && region === 'GB') {
    return 'Hello!';
  }else if(language === 'en' && region === 'US') {
    return 'Hey!';
  }else if(language === 'en' && region === 'US') {
    return 'Howdy!';
  }

}
console.log(extractLanguage("en_US.UTF-8"));

