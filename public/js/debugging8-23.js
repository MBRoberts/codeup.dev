// uncomment the following exercises as you complete the preceding ones

//---------------------------------- 1 ---------------------------------------- 

// change the text of the main heading.
var $heading = $('#main-heading');
$heading.html("something else");

//---------------------------------- 2 ---------------------------------------- 

// why isn't the click listener working?
function buttonPushed () {
	$('#my-btn').click(function(e) {
	    alert('you clicked the button!');
	});
}
buttonPushed();

//---------------------------------- 3 ---------------------------------------- 

// `inventory.json` refers to the same file we worked with in the ajax request example
// why am I not seeing my products on the page?
function showInventory (products) {
    var contents = '';

    products.forEach(function(products){
        contents += '<div class="col-md-4">';
        contents += '<h2>' + products.title + '</h2>';
        contents += '<ul>';
        products.categories.forEach(function(category){
            contents += '<li>' + category + '</li>';
        });
        contents += '</ul>';
        contents += '<p>$' + products.price + '</p>';
        contents += '<p>We only have ' + products.quantity + 'left!</p>';
        contents += '</div>';
    });

    $('#products').html(contents);
}

$.get("/data/inventory.json").done(showInventory);