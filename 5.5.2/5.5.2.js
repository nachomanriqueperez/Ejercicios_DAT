function Empty (tag) {
  elements = document.getElementsByTagName(tag);
  for (element in elements) {
    elements[element].innerHTML="";
  }
}

Empty("body")

