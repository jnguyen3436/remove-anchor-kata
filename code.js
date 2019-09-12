function removeUrlAnchor(url){
let newUrl = "";

  for (i = 0;i<url.length;i++)
  {if(url[i]==="#")
  break;
  newUrl = newUrl + url[i]
  }
  return(newUrl)
}
