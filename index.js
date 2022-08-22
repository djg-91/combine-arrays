const jqueryFunctions = () => {
  handleInput();
  generateCombinations();
  handleArray();
}

const handleInput = () => {
  
  // Add input
  $('body').on('click', "input[id$='-add']", function() {
    
    const arrName = this.id.split('-')[0];
    const arrElements = $(`#${arrName}-container .col`);
    
    if (arrElements.length > 7) {
      alert('You cannot have more than 8 elements in an array');
      return;
    } 

    createRow(arrName, arrElements);
  })

  // Delete input
  $('body').on('click', "button[id*='close']", function() {
    $(this).parents(`#${this.id.replace('close', 'col')}`).remove();
  });
}

const createRow = (arrName, arrElements) => {
 
  const position = arrElements.length + 1;
  
  const col = ` <div id="${arrName}-col-${position}" class="col">
                  <button id="${arrName}-close-${position}" class='btn-close close-input btn-sm'></button>
                  <input type="text" id="${arrName}-input-${position}" class="form-control mb-2" tabindex="${position}">
                </div>`
  
  $(`#${arrName}-container`).append(col);
}

const generateCombinations = () => {
  $('body').on('click', "#generate", function() {

    $('#result').empty();
    let final_arr = [];

    $("div[id^='div-arr_']").each(function () {
      let arr = [];
      $(this).find("input[id*='-input-']").each(function () {
        
        arr.push($(this).val());
      })
      final_arr.push(arr);
   })

   final_arr = iterNArrays(final_arr);

  if (final_arr.length > 0) {
    $('#result').append('<ul class="list-group">');
   
    for (let li of final_arr) {
      $('#result').append(`<li class="list-group-item">${li}</li>`);
    }
  
    $('#result').append('</ul>');

  }
 })
}

const handleArray = () => {
  // Create array
  $('body').on('click', "#add-arr", function() {
    const position = $("div[id^='div-arr_']").length + 1;
    
    $('#arrs').append(`
      <div id="div-arr_${position}">
        
        <p>
          <button id="delete-${position}" class='btn-close btn-sm'></button>
          Add elements to the array
          <input type='button' class="btn-sm btn btn-light" id='arr_${position}-add' value='+' />
        </p>
        <div id="arr_${position}-container" class="row row-cols-4 w-75">
          <div id="arr_${position}-col-1" class="col">
            <input type="text" id="arr_${position}-input-1" class="form-control mb-2" tabindex="1">
          </div>
        </div>
      </div>
    `);
  })

   // Delete array
  $('body').on('click', "button[id^='delete-']", function() {
    $(this).parents(`#${this.id.replace('delete-', 'div-arr_')}`).remove();
  }); 
}

const iterNArrays = (arr) => {
  // Take the first array of the input
  dummy_arr = arr.shift();
  
  final_arr = [];
  
  while (arr[0] != null) {
    for (let i in dummy_arr) {
      for (let j in arr[0]) {
        final_arr.push(dummy_arr[i] + arr[0][j]);
      }
    }
    dummy_arr = final_arr.slice();
    final_arr = [];
    arr.shift();
  }
  
  return dummy_arr.slice();
}
