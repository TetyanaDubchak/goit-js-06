const mainList = document.querySelector('#categories');
const  numberOfChild= mainList.childElementCount;
console.log(`Number of categories:`, numberOfChild)

const elements = [...mainList.children];

elements.forEach((el) => {
    const title = el.firstElementChild.textContent;
    console.log('Category:', title);
    const quantity = el.lastElementChild.childElementCount;
    console.log('Elements', quantity);
})