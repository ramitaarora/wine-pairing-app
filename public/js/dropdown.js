// Get references to the dropdown menus
const whiteRedSelection = document.getElementById('wine-dropdown-choice');
const secondDropdownWine = document.getElementById('second-dropdown-wine-choice');

// Add event listener to the first dropdown
whiteRedSelection.addEventListener('change', async function(event) {
  event.preventDefault();
  // Get the selected value from the first dropdown
  const selectedValue = whiteRedSelection.value;
  // Generate options for the second dropdown based on the selected value
  let options = [];

  if (selectedValue === 'white') {
    secondDropdownWine.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/wine/white');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      const newOption = document.createElement('option');
      newOption.textContent = option.wine_type;
      newOption.value = option.wine_type;
      secondDropdownWine.append(newOption);
    });

  } else if (selectedValue === 'red') {
    secondDropdownWine.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/wine/red');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      const newOption = document.createElement('option');
      newOption.textContent = option.wine_type;
      newOption.value = option.wine_type;
      secondDropdownWine.append(newOption);
    });
  }
});

secondDropdownWine.addEventListener('change', async function(event) {
  event.preventDefault();
  document.location.replace(`/search/wine/${event.target.value}`);
})


// Get references to the dropdown menus
const mealTypeSelection = document.getElementById('food-dropdown-choice');
const secondDropdownMeal = document.getElementById('second-dropdown-meal-choice');

// Add event listener to the first dropdown
mealTypeSelection.addEventListener('change', async function(event) {
  event.preventDefault();
  // Get the selected value from the first dropdown
  const selectedValue = mealTypeSelection.value;
  // Generate options for the second dropdown based on the selected value
  let options = [];
  if (selectedValue === 'White Meat') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/white-meat');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      console.log(option.food_name)
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Red Meat') {
    secondDropdownMeal.innerHTML = '<option></option>';
    const optionsData = await fetch('/api/food/red-meat');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      console.log(option.food_name)
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Pasta') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/pasta');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      console.log(option.food_name)
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Vegetables') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/vegetables');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      console.log(option.food_name)
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Seafood') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/seafood');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Cheese') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/cheese');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
    } else if (selectedValue === 'Dessert') {
    secondDropdownMeal.innerHTML = '<option>(Please select an option)</option>';
    const optionsData = await fetch('/api/food/dessert');
    const data = await optionsData.json();
    // Add new options to the second dropdown
    data.forEach(function(option) {
      const newOption = document.createElement('option');
      newOption.textContent = option.food_name;
      newOption.value = option.food_name;
      secondDropdownMeal.append(newOption);
    });
  }
});

secondDropdownMeal.addEventListener('change', async function(event) {
  event.preventDefault();
  document.location.replace(`/search/food/${event.target.value}`);
})