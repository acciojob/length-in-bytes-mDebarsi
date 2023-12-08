const byteSize = (str) => {
  // write your code here
	// Create a Blob object with the string data
  const blob = new Blob([str]);

  // Get the size property of the Blob to get the byte size
  const sizeInBytes = blob.size;

  return sizeInBytes;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
