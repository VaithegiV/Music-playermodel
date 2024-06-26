function calculateAge() {
  var birthDate = new Date(document.getElementById('date').value);
  var today = new Date();

  // Calculate age
  var yearsDiff = today.getFullYear() - birthDate.getFullYear();
  var monthsDiff = today.getMonth() - birthDate.getMonth();
  var daysDiff = today.getDate() - birthDate.getDate();

  // Adjust negative months
  if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
    yearsDiff--;
    monthsDiff += 12;
  }

  
  // Adjust negative days
  if (daysDiff < 0) {
    monthsDiff--;
    var tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
    daysDiff = tempDate.getDate() - birthDate.getDate() + today.getDate();
  }
   // Display results
  document.getElementById('ageDetails').innerText = 'You are ' + yearsDiff + ' years, ' + monthsDiff + ' months, and ' + daysDiff + ' days old.';
}