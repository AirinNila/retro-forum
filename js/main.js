// all post
const allPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json()
    const posts = data.posts;
    handlePost(posts)
}

const handlePost = (data) =>{
    const catagories = document.getElementById('catagories-container')
    data.forEach(element => {
        console.log(element)
        const newDiv = document.createElement('div')
        newDiv.classList = `flex justify-start p-2 md:p-4 bg-[#F3F3F5] rounded-xl md:rounded-2xl gap-2 md:gap-4`
        newDiv.innerHTML=`
                
           
            <div class="w-16 rounded-xl"><img src="${element.image}" alt="display class='rounded-xl'"></div>
           
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
               
                <div class="bg-[#10B981] text-white text-base rounded-full p-2">
                  <i class="fa-solid fa-envelope-open"></i>
                </div>
              </div>
            </div>

         
        `

        catagories.appendChild(newDiv)
    });
}

allPost()