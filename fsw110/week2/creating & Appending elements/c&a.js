

  var node = document.createElement("LI");
  var textnode = document.createTextNode("Water");
  var textnode = document.createTextNode("Coffe");
  var textnode = document.createTextNode("Tea");
  node.appendChild(textnode);
  document.getElementById("myList").appendChild(node);
  
  var h = document.createElement("H1");                
  var t = document.createTextNode("Welcome to my JS Site");     
  h.appendChild(t); 
  document.getElementById("H1").appendChild(h);

  var para = document.createElement("P");                       
  var t = document.createTextNode("All of this was created with Javascript.");     
  para.appendChild(t);                                         