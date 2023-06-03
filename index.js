const fetchCategories = () =>{
    fetch('https://openapi.programming-hero.com/api/news/categories')
    .then((res) => res.json())
    .then((data) => showCategories(data.data))
}
// fetchCategories()


const showCategories = data =>{
    console.log(data)
    const categoriesContainer = document.getElementById('categories-container')
    data.news_category.forEach(singleCategories => {
        console.log(singleCategories);
        // categoriesContainer.innerHTML += `
        // <a class="nav-link" href="#">${singleCategories?.category_name}</a
        // `

        const linkContainer = document.createElement('p')
        linkContainer.innerHTML = ` <a class="nav-link" href="#" onclick="fetchCategoriesNews('${singleCategories.category_id}','${singleCategories.category_name}')">${singleCategories.category_name}</a>`
        categoriesContainer.appendChild(linkContainer)
    })
}

// all news available in categories 

const fetchCategoriesNews = (category_id, category_name )=>{
    // console.log(category_id)
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url).then(res => res.json()).then(data => showAllNews(data.data, category_name))
}

const showAllNews = (data, category_name ) =>{
console.log(data,category_name)
document.getElementById('news-count').innerText = data.length
document.getElementById('categories-name').innerText = category_name

data.forEach(singleNews => {
    console.log(data)
});

}