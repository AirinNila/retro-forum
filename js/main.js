// all post
const allPost = async(category='coding') => {
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`);
    const data = await res.json()
    const posts = data.posts;
    handlePost(posts)
    
}

const handlePost = (data) =>{
    const catagories = document.getElementById('catagories-container')
   

    // clear search historu
    catagories.textContent = '';
    data.forEach(element => {
         // isActive
    const activeFeild = document.getElementById('active-or-not')
    // if(element.isActive === true){
    //   activeFeild.classList.add('bg-green')
    // }
    // else{
    //   activeFeild.classList.add('bg-red')
    // }
        //console.log(element)
        const newDiv = document.createElement('div')
        newDiv.classList = `flex justify-start p-2 md:p-4 bg-[#F3F3F5] rounded-xl md:rounded-2xl gap-2 md:gap-4`
        newDiv.innerHTML=`
                
           
            <div class="w-16">
            <img src="${element.image}" alt="display"  class="rounded-xl w-16 bg-cover">
            <div id="active-or-not" class="rounded-full"></div>
            </div>
           
            <div class="flex flex-col gap-2 justify-center">
              <div class="flex gap-2 md:gap-4 text-[#12132DCC] md:text-sm ">
                <p>#${element.category}</p>
                <p>Author: ${element.author.name}</p>
              </div>
              <h3 class="text-[#12132D] text-lg md:text-xl font-bold">${element.title}</h3>
              <p class="text-des md:text-base text-sm">${element.description}</p>
              <hr>
              <div class="flex justify-between items-center text-base">
                <div class="flex gap-3">
                  <div class="flex gap-2 items-center">
                    <i class="fa-regular fa-message"></i>
                    <p>${element.comment_count}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                    <i class="fa-solid fa-eye"></i>
                    <p>${element.view_count}</p>
                  </div>
                  <div class="flex gap-2 items-center">
                    <i class="fa-regular fa-clock"></i>
                    <p>${element.posted_time} min</p>
                  </div>
                </div>
               
                <button onclick="greenButtonHandler('${element.id}')" class="bg-[#10B981] text-white text-base rounded-full p-2">
                  <i class="fa-solid fa-envelope-open"></i>
                </button>
              </div>
            </div>

         
        `


        catagories.appendChild(newDiv)
      
       
    });
    spinnerHandler(false)
}

// green button
const greenButtonHandler = async (id) => {
  // read count
  const getId = document.getElementById('read-count')
  const getText = getId.innerText;
  const makeNbr = parseInt(getText);
  getId.innerText = makeNbr + 1;
  const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/post/${id}`)
  const data = await res.json()
  console.log(data)
  const titleConainer = document.getElementById('title-container')
  const newItem = document.createElement('div')
  newItem.classList = `flex justify-between items-center bg-white rounded-lg p-2`
  newItem.innerHTML= `
    
                  <h3 class="text-base text-primary font-semibold">${data.title}</h3>
               
                <div class="flex items-center gap-2">
                  <i class="fa-regular fa-eye"></i>
                  <p>${data.view_count}</p>
                </div>
  `
  titleConainer.appendChild(newItem)
 
}

// search handler
const searchHandler = () => {
  const getinputField = document.getElementById('search-field')
  const getValue = getinputField.value ;
  spinnerHandler(true)
  allPost(getValue)
 
}

// for spinner
const spinnerHandler = (dataLoading) => {
  const spinnerFeild = document.getElementById('spinner-feild')
  if(dataLoading){
    spinnerFeild.classList.remove('hidden')
  }
  else{
    spinnerFeild.classList.add('hidden')
  }
}


allPost()