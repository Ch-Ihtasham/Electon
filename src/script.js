// Camera SLIDER 
const slides = document.querySelectorAll(".rectangle");
const dots = document.querySelectorAll(".dot");
let currentSlideIndex = 0;
let previousClickedCircle = dots[0];
previousClickedCircle.style.backgroundColor = '#EDA415';

slides.forEach((rectangle, index) => {
    rectangle.style.left = `${index * 100}%`;
});

const goPrev = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(0%)`;
    });
};

const goCenter = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(-100%)`;
    });
};

const goNext = () => {
    slides.forEach((rectangle) => {
        rectangle.style.transform = `translateX(-200%)`;
    });
};

const updateSlider = () => {
    slides.forEach((rectangle, index) => {
        rectangle.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
    });

    if (previousClickedCircle) {
        previousClickedCircle.style.backgroundColor = '';
    }
    dots[currentSlideIndex].style.backgroundColor = '#EDA415';
    previousClickedCircle = dots[currentSlideIndex];
};

const startAutoSlide = () => {
    setTimeout(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        updateSlider();
        setTimeout(() => {
            startAutoSlide();
        }, 4000);
    }, 4000);
};


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (previousClickedCircle) {
            previousClickedCircle.style.backgroundColor = '';
        }
        dot.style.backgroundColor = '#EDA415';
        previousClickedCircle = dot;

        currentSlideIndex = index;
        updateSlider();
    });
});
startAutoSlide();

// SIDE BAR

var navLinks = document.getElementById("navLinks");
var showlinks = document.getElementById("show");

function hide() {
    navLinks.style.right = "-200px";
    navmenu.style.overflow = "hidden !important";

}
function show() {
    navLinks.style.right = "-8%";
    // showlinks.style.overflow= "auto";
    showlinks.style.position = "static";


}

//  mini slider

const mini = document.querySelectorAll(".main-rectangle2");
mini.forEach((mainRectangle2, index) => {
    mainRectangle2.style.left = `${index * 100}%`;
});
const left = () => {
    mini.forEach((mainRectangle2) => {
        mainRectangle2.style.transform = `translateX(0%)`;
    });
};

const right = () => {
    mini.forEach((mainRectangle2) => {
        mainRectangle2.style.transform = `translateX(-100%)`;
    });
};

// main slider 

const Slides = document.querySelectorAll(".rectangle4");
const dot = document.querySelectorAll(".Dot");
let dotClick = dot[0];
dotClick.style.backgroundColor = '#EDA415'
Slides.forEach((rectangle4, index) => {
    rectangle4.style.left = `${index * 100}%`;
});
const go_Prev = () => {
    Slides.forEach((rectangle4) => {
        rectangle4.style.transform = `translateX(0%)`;
    }
    )
};
const go_Center = () => {
    Slides.forEach((rectangle4) => {
        rectangle4.style.transform = `translateX(-100%)`
    });
};
const go_Next = () => {
    Slides.forEach((rectangle4) => {
        rectangle4.style.transform = `translateX(-200%)`
    });
};
dot.forEach((Dot, index) => {
    Dot.addEventListener('click', () => {
        if (dotClick) {
            dotClick.style.backgroundColor = '';
        }
        Dot.style.backgroundColor = '#EDA415';
        dotClick = Dot;
    });
});



// speaker slider 
const speaker = document.querySelectorAll(".mini");
let points = document.querySelectorAll(".Cpoint")
let pointClick = points[0]
pointClick.style.backgroundColor = "#EDA415";
points.forEach((Cpoint, index) => {
    Cpoint.addEventListener('click', () => {
        if (pointClick) {
            pointClick.style.backgroundColor = ""
        }
        Cpoint.style.backgroundColor = "#EDA415";
        pointClick = Cpoint;
    })
})

speaker.forEach((mini, index) => {
    mini.style.left = `${index * 210}%`
})
const Go_Prev = () => {
    speaker.forEach((mini) => {
        mini.style.transform = `translateX(0%)`;
    }
    )
};
const Go_Next = () => {
    speaker.forEach((mini) => {
        mini.style.transform = `translateX(-212.9%)`
    });
};

// review slider  

const review = document.querySelectorAll(".rectangle8")
let r_dot = document.querySelectorAll(".Rpoint")
let rdot = r_dot[0];
rdot.style.backgroundColor = "#EDA415"
r_dot.forEach((Rpoint, index) => {
    Rpoint.addEventListener('click', () => {
        if (rdot) {
            rdot.style.backgroundColor = ''
        }
        Rpoint.style.backgroundColor = "#EDA415";
        rdot = Rpoint;
    })

})
review.forEach((rectangle8, index) => {

    rectangle8.style.left = `${index * 100}%`
})
const prev = () => {
    review.forEach((rectangle8) => {
        rectangle8.style.transform = `translateX(0%)`
    })
}
const next = ((rectangle8) => {
    review.forEach((rectangle8) => {
        rectangle8.style.transform = `translateX(-100%)`
    })
})




// product through js 
const productData1 = [
    {
        img: './Assets/camera3.png',
        name: ' Canon Camera',
        price: ' $11,70'
    },
    {
        img: './Assets/headphone1.png',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: '../Assets/camera4.webp',
        name: ' Camera',
        price: ' $11,70'
    },
    {
        img: './Assets/headphone1.png',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: './Assets/controller1.jpg',
        name: 'Controller',
        price: ' $11,70'
    },
    {
        img: './Assets/hp3.webp',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: './Assets/lp2.png',
        name: 'Hp Laptop',
        price: ' $11,70'
    },
    {
        img: './Assets/controller3.jpg',
        name: 'Controller',
        price: '$11,70'
    },

]
let abc = document.getElementById('abc')
abc.innerHTML = productData1.map((v) => {
    return `<div class="frame1" onclick="viewProduct('${v.name}', '${v.img}')">
                    <div class="img">
                        <img src="${v.img}">
                        <div class="heart"><i class="fa-regular fa-heart"></i></div>
                    </div>
                    <div class="name">
                        ${v.name}
                    </div>
                    <div class="price">
                        $11,70 
                    </div>
                    <div>
                        <i class="fa-solid fa-star" style="color: #eda415;"></i>
                        <i class="fa-solid fa-star" style="color: #eda415;"></i>
                        <i class="fa-solid fa-star" style="color: #eda415;"></i>
                        <i class="fa-solid fa-star" style="color: #eda415;"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="c-button">
                        <button onclick="cart()">Add to cart
                            <img src="./Assets/cart pic.png" alt="" srcset="">
                        </button>
                    </div>
            </div>`;
}).join("")

// product section no two 

const productData2 = [
    {
        img: './Assets/camera3.png',
        name: ' Canon Camera',
        price: ' $11,70'
    },
    {
        img: './Assets/headphone1.png',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: '../Assets/camera4.webp',
        name: ' Camera',
        price: ' $11,70'
    },
    {
        img: './Assets/headphone1.png',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: './Assets/controller1.jpg',
        name: 'Controller',
        price: ' $11,70'
    },
    {
        img: './Assets/hp3.webp',
        name: 'Wireless Headphone',
        price: ' $11,70'
    },
    {
        img: './Assets/lp2.png',
        name: 'Hp Laptop',
        price: ' $11,70'
    },
    {
        img: './Assets/controller3.jpg',
        name: 'Controller',
        price: '$11,70'
    },
]
let def = document.getElementById('def')
def.innerHTML = productData2.map((x) => {
    return `
            <div class="frame1">
                <div class="img">
                    <img src="${x.img}">
                    <div class="heart"><i class="fa-regular fa-heart"></i></div>
                </div>
                <div class="name">
                    ${x.name}
                </div>
                <div class="price">
                    ${x.price}
                </div>
                <div>
                    <i class="fa-solid fa-star" style="color: #eda415;"></i>
                    <i class="fa-solid fa-star" style="color: #eda415;"></i>
                    <i class="fa-solid fa-star" style="color: #eda415;"></i>
                    <i class="fa-solid fa-star" style="color: #eda415;"></i>
                    <i class="fa-solid fa-star-half-stroke" style="color: #eda415;"></i>
                </div>
                <div class="c-button">
                    <button onclick="cart()">Add to cart
                        <img src="./Assets/cart pic.png" alt="" srcset="">
                    </button>
                </div>
            </div>`
}).join(" ")

function viewProduct(name, imageUrl) {
    localStorage.setItem('productName', name);
    localStorage.setItem('productImage', imageUrl);
    window.location.href = 'product.html';
}

function cart() {
    let existingData = localStorage.getItem('data');
    console.log(existingData)
    let items = existingData ? existingData : '';
    let newItem =
        `<div class="items">
                    <div class="product">
                        <div><img src="./Assets/sp2.webp" alt=""></div>
                        <div>
                            <div class="name">Speaker2</div>
                            <div class="color">
                                <span>Color:</span>
                                <span>Black</span>
                            </div>
                        </div>
                    </div>
                    <div class="price rs" id="pkr">11000</div>
                    <div class="inc">
                        <span class="decrement">-</span>
                        <span id="one" class="count">1</span>
                        <span class="increment">+</span>
                    </div>
                    <div class="price total" id="bill">
                        11000
                    </div>
                    <div>
                        <img src="./Assets/close-circle.png" alt="" srcset="" class="cross">
                    </div>

        </div>`
    items += newItem;
    localStorage.setItem('data', items);
    event.stopPropagation()
}





















