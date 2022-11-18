let newDiv = $('<div>click here <div>');

let page = $('body');

page.append(newDiv);

let ul = $('<ul></ul>');

page.append(ul);

newDiv.on('click', () => {
   console.log('test');

   let input = $('#myInput');
   let myLi = $(`<li>${input.val()}</li>`)
   ul.append(myLi);

   input.val('');//set to clear out text
})

//jquery instead of .style .css

page.css({
    backgroundColor: "silver",
    color: "black"
})