const fs = require('fs');

// Reading  the input JSON file
fs.readFile('input.json', 'utf8', (err, data) => {
  if (err) {
    console.log("hi")
    console.error('Error reading input file:', err);
    return;
  }

  
  const userData = JSON.parse(data);
   
  userData.forEach(user => {
      user.totalPosts = user.posts.length;
    });

    
  const modifiedData = JSON.stringify(userData);

  
  fs.writeFile('output.json', modifiedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing output file:', err);
        return;
      }

      console.log('Data manipulation and writing to output.json successful!');
    });
   
});