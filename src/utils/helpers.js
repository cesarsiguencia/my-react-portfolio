export function LowercaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }
  
export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function grabTabName(e){
  const element = document.getElementsByTagName("h3")
  console.log(element[0].innerHTML)
  const tabName = element[0].innerHTML

  const hello = e.target.matches(".navtab")
  console.log(hello)
  // if(tabName)
}
