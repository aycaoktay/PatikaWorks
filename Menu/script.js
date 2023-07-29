const menu =[
    {
        id: 1 ,
        title: "Çok Özlü İksir",
        category : "İksir",
        price : '85 TL' ,
        Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeVaH3KfauefkYaljN7yfEZM-DgWxkR3Nepg&usqp=CAU",
        desc : 'İçen kişiyi, iksirin içine katılan malzemeye göre başka bir kişiye döndürür '
 },
 {
    id: 2 ,
    title: "Kaymak Birası",
    category : "İçecek",
    price : '90 TL',
    Image : "http://www.gazetebilkent.com/wp-content/uploads/2019/02/IMG-20190210-WA0092-768x1024.jpg",
    desc : 'Büyücüler için leziz bir içecektir   '
},
{
    id: 3 ,
    title:"Adamotu Tatlısı",
    category : "Tatli",
    price : '120 TL' ,
    Image : "https://www.eniyi.best/image/hogwarts-express-cafe-cankaya-ankara-4743-6674.jpg",
    desc : 'Çikolatalı enfes lezzet  '
},
 
{
    id: 4 ,
    title: "Golden Snitch Kruvasan",
    category : "Tatli",
    price : '125 TL' ,
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3D9Dg9vKdYsk_TEzNdxqMiW791usGfS14RZQGLRoMB4G0p-4SK6Xw2rYdKG0KxXnuoPg&usqp=CAU",
    desc : 'Çikolatalı enfes lezzet  '
},
 
{
    id: 5 ,
    title: "Gevezelik İksiri",
    category : "İksir",
    price : ' 68 TL' ,
    Image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOjEM4H5vO6rGDqKztah32_4hTRVFBYrZ48w&usqp=CAU",
    desc : 'Yaban Mersini ve Ejder meyvesi lezzetiyle...'
},
];
const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const categories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );


  const categoryList = () => {
    const categoryBtns = categories
      .map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
      })
      .join("");
  
      btnContainer.innerHTML = categoryBtns;
      const filterBtns = document.querySelectorAll(".btn-item");
    

    //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.Image}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();