 
  function takeANumber(katzDeliline, name) {
    katzDeliline.push(`${name}`);
    return(`Welcome, ${name}. You are number ${katzDeliline.length} in line.`);
  }
   		  
  function nowServing(katzDeliline) {	
    let i = 0;
    while (i < katzDeliline.length) {
      i++;
    }
    if (katzDeliline.length === 0) {
      return "There is nobody waiting to be served!";
    }
    else
    return (`Currently serving ${katzDeliline.shift()}.`);
   }		  
 
 var line = [];
  function currentLine(katzDeliline) {
    let i = 0;
    while (i < katzDeliline.length) {
     line.push(` ${i+1}. ${katzDeliline[i]})
      i++;
    }
    if (katzDeli.length === 0) {
      return "The line is currently empty.";
    } else
    return(`The line is currently:` + line);
  } 
  }