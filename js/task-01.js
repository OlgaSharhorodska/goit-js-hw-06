
const numberOfCategories = document.querySelectorAll(`.item`).length
console.log(`Number of categories:` +  numberOfCategories)

const listCategories = document.querySelectorAll(`.item`)

listCategories.forEach(function(list) {
    console.log(`Category:` + list.firstElementChild.textContent),
    console.dir(`Elements:` + list.lastElementChild.children.length)
});
