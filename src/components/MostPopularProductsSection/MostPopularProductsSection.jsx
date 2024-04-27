import React, { useState } from "react";
import { Card } from "../../exports";
import { useNavigate } from "react-router-dom";
function MostPopularProductsSection() {
  const navigate = useNavigate();
  const mostPopularProducts = [
    {
      category: "T-Shirt",
      name: "Basic Scoop Neck Tee",
      color: "White",
      size: "M",
      price: 1899,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20210309/kHvd/6046d1f3f997dd5c400990d4/-473Wx593H-410277412-gvk-MODEL.jpg",
      description:
        "Simple white scoop neck tee made from soft cotton, a versatile staple for any wardrobe.",
      id: 24
    },
    {
      category: "Shirt",
      name: "Classic Oxford Shirt",
      color: "White",
      size: "M",
      price: 1299,
      image:
        "https://img.freepik.com/premium-photo/portrait-casual-man-standing-with-hand-pocket-gray-wall_171337-83287.jpg",
      description:
        "A timeless white Oxford shirt, perfect for both casual and formal occasions.",
      id: 1
    },
    {
      category: "Casual Clothes",
      name: "Graphic Pullover Sweatshirt",
      color: "Black",
      size: "L",
      price: 999,
      image:
        "https://img.freepik.com/premium-photo/front-back-view-black-hoodie-mockup-design-print-blue-background_68060-990.jpg",
      description:
        "Black pullover sweatshirt featuring a bold graphic print, perfect for adding a stylish edge to your casual look.",
      id: 47
    },
    {
      category: "Jeans",
      name: "Slim Fit Denim Jeans",
      color: "Blue",
      size: "32x34",
      price: 2289,
      image:
        "https://c4.wallpaperflare.com/wallpaper/416/980/47/ewan-mcgregor-brunette-jacket-jeans-wallpaper-preview.jpg",
      description:
        "Classic blue denim jeans with a modern slim fit, perfect for everyday wear.",
      id: 28
    },
    {
      category: "Shirt",
      name: "Cotton Shirt",
      color: "White",
      size: "M",
      price: 1170,
      image:
        "https://img.freepik.com/free-photo/positive-confident-young-caucasian-male-office-worker-wearing-white-formal-shirt-classic-trousers-with-belt-having-happy-facial-expression-keeping-hands-pockets-smiling-joyfully_343059-4600.jpg",
      description:
        "Essential white V-neck t-shirt made from soft cotton, ideal for layering or standalone wear.",
      id: 11
    },
    {
      category: "T-Shirt",
      name: "Striped Henley Tee",
      color: "Black/Gray",
      size: "S",
      price: 1300,
      image:
        "https://i.pinimg.com/originals/cf/80/13/cf80133ff72245c7a52f185947acc934.jpg",
      description:
        "Black and gray striped henley tee with button details, combining style and comfort effortlessly.",
      id: 27
    },

    {
      category: "Shirt",
      name: "Plaid Flannel Shirt",
      color: "Red/Black",
      size: "S",
      price: 1210,
      image:
        "https://wallpapers.com/images/hd/prabhas-hd-in-white-button-up-shirt-nh5k3prxjl6g5dr7.jpg",
      description:
        "Warm and cozy red and black plaid flannel shirt for a rugged outdoor look.",
      id: 3
    },
    {
      category: "Casual Clothes",
      name: "Lightweight Zip-Up Hoodie",
      color: "Navy",
      size: "XL",
      price: 1450,
      image:
        "https://media.gq.com/photos/656e344f1caf53b31817fbbe/3:4/w_748%2Cc_limit/Sweat-Full-zip-Hoodie.jpg",
      description:
        "Navy lightweight zip-up hoodie made from breathable fabric for all-day comfort.",
      id: 45
    },
    {
      category: "Shirt",
      name: "Chambray Work Shirt",
      color: "Blue",
      size: "XL",
      price: 999,
      image:
        "https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg",
      description:
        "Durable blue chambray work shirt with chest pockets, ideal for versatile wear.",
      id: 4
    },

    {
      category: "Shirt",
      name: "Printed Hawaiian Shirt",
      color: "Green",
      size: "L",
      price: 1199,
      image:
        "https://img.freepik.com/free-psd/stylish-blue-plaid-shirt-men-isolated-transparent-background_191095-23038.jpg",
      description:
        "Tropical green Hawaiian shirt with a vibrant floral print for a laid-back vibe.",
      id: 6
    },
    {
      category: "Shirt",
      name: "Slim Fit Polo Shirt",
      color: "Black",
      size: "M",
      price: 2099,
      image:
        "https://images.pexels.com/photos/769749/pexels-photo-769749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description:
        "A classic black polo shirt, tailored for a slim fit, suitable for various occasions.",
      id: 7
    },
    {
      category: "Shirt",
      name: "Denim Shirt",
      color: "Light Blue",
      size: "S",
      price: 2189,
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/8717979/2019/3/20/585db9fe-1df0-458d-b218-6f514eabb9601553068826233-Mast--Harbour-Men-Shirts-4141553068825026-1.jpg",
      description:
        "Versatile light blue denim shirt, perfect for casual outings or layering.",
      id: 8
    },
    {
      category: "Shirt",
      name: "Vintage Graphic Tee",
      color: "Gray",
      size: "XL",
      price: 1399,
      image:
        "https://img.freepik.com/free-photo/relaxed-young-man-holding-tablet-computer_1262-18592.jpg",
      description:
        "Soft gray tee featuring a vintage graphic print, offering a laid-back retro style.",
      id: 9
    },
    {
      category: "Shirt",
      name: "Striped Button-Down Shirt",
      color: "Blue/White",
      size: "L",
      price: 899,
      image:
        "https://img.freepik.com/premium-photo/illustration-ultra-realistic-4k-image-blue-shirt_756405-66549.jpg",
      description:
        "A stylish blue and white striped shirt with a classic button-down collar.",
      id: 2
    },
    {
      category: "Shirt",
      name: "Tropical Print Shirt",
      color: "Blue/Green",
      size: "L",
      price: 1280,
      image:
        "https://img.freepik.com/free-photo/thoughtful-man-looking-away-holding-hands-hips_1262-18734.jpg",
      description:
        "Colorful blue and green tropical print shirt, perfect for beach parties or vacations.",
      id: 10
    },

    {
      category: "Shirt",
      name: "Retro Bowling Shirt",
      color: "Red/White",
      size: "L",
      price: 1250,
      image: "path/to/image13.jpg",
      description:
        "Throwback red and white bowling shirt featuring retro-inspired designs, perfect for a vintage look.",
      id: 12
    },
    // T-Shirts
    {
      category: "T-Shirt",
      name: "Graphic Print Tee",
      color: "Black",
      size: "L",
      price: 899,
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/24924240/2023/9/12/8b18c1de-30fd-4b08-b05c-2a79ec8a1d5d1694530723716PowerlookMenWhiteOpaquePrintedCasualShirt1.jpg",
      description:
        "A comfortable black cotton tee with a stylish graphic print on the front.",
      id: 13
    },

    {
      category: "T-Shirt",
      name: "Plain V-Neck Tee",
      color: "Gray",
      size: "M",
      price: 1999,
      image:
        "https://c0.wallpaperflare.com/preview/576/636/54/fashion-hallway-indoors-man.jpg",
      description:
        "Essential gray V-neck tee made from soft cotton for everyday wear.",
      id: 14
    },
    {
      category: "T-Shirt",
      name: "Vintage Logo Tee",
      color: "Navy",
      size: "L",
      price: 2000,
      image:
        "https://c1.wallpaperflare.com/preview/535/376/883/t-shirt-design-book-self-boy-one-man-only.jpg",
      description:
        "Navy blue tee featuring a vintage-inspired logo print for a retro look.",
      id: 15
    },
    {
      category: "Shirt",
      name: "Striped Linen Shirt",
      color: "Navy/White",
      size: "M",
      price: 899,
      image:
        "https://img.freepik.com/premium-photo/style-everyday-mens-casual-shirt-photoshoot-poses-boys-shirt_463958-96.jpg",
      description:
        "Lightweight navy and white striped linen shirt, perfect for warm weather.",
      id: 5
    },
    {
      category: "T-Shirt",
      name: "Striped Pocket Tee",
      color: "White/Black",
      size: "M",
      price: 1180,
      image: "https://wallpapercave.com/wp/wp3852916.jpg",
      description:
        "Casual white tee with black stripes and a chest pocket, perfect for everyday wear.",
      id: 16
    },
    {
      category: "T-Shirt",
      name: "Graphic Muscle Tank",
      color: "Red",
      size: "XL",
      price: 1099,
      image:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/c/tr:w-270,/0ca8bf82726-0101-BSGRN_1.jpg?rnd=20200526195200",
      description:
        "Red muscle tank with a bold graphic print, ideal for workouts or casual wear.",
      id: 17
    },
    {
      category: "T-Shirt",
      name: "Basic Crewneck Tee",
      color: "Black",
      size: "S",
      price: 1299,
      image: "https://wallpapercave.com/wp/wp3852911.jpg",
      description:
        "Essential black crewneck tee made from soft cotton, perfect for layering.",
      id: 18
    },
    {
      category: "T-Shirt",
      name: "Graphic Print Crop Top",
      color: "White",
      size: "S",
      price: 1199,
      image:
        "https://dunnes.btxmedia.com/pws/client/images/catalogue/products/1212204/zoom/1212204_navy.jpg",
      description:
        "Stylish white crop top with a trendy graphic print, perfect for casual outings or festivals.",
      id: 19
    },
    {
      category: "T-Shirt",
      name: "Striped Raglan Sleeve Tee",
      color: "Blue/White",
      size: "M",
      price: 14.79,
      image:
        "https://w0.peakpx.com/wallpaper/491/881/HD-wallpaper-man-wearing-black-crew-neck-t-shirt.jpg",
      description:
        "Blue and white striped tee featuring raglan sleeves for a sporty yet casual look.",
      id: 20
    },
    {
      category: "T-Shirt",
      name: "Vintage Graphic Muscle Tank",
      color: "Gray",
      size: "L",
      price: 899,
      image:
        "https://c1.wallpaperflare.com/preview/414/396/979/person-outdoor-pad-brace.jpg",
      description:
        "Gray muscle tank with a vintage-inspired graphic print, ideal for a retro aesthetic.",
      id: 21
    },
    {
      category: "T-Shirt",
      name: "Pocket V-Neck Tee",
      color: "Black",
      size: "XL",
      price: 1399,
      image: "https://i.ebayimg.com/images/g/-4UAAOSwfZ1WXwg9/s-l1200.jpg",
      description:
        "Classic black V-neck tee with a chest pocket detail, offering both style and functionality.",
      id: 22
    },
    {
      category: "T-Shirt",
      name: "Tie-Dye Graphic Tee",
      color: "Multicolor",
      size: "S",
      price: 1799,
      image:
        "https://c4.wallpaperflare.com/wallpaper/837/1008/40/stephen-amell-actor-brunette-t-shirt-wallpaper-preview.jpg",
      description:
        "Vibrant tie-dye tee with a unique graphic print, perfect for adding a pop of color to your outfit.",
      id: 23
    },

    {
      category: "T-Shirt",
      name: "Printed Pocket Tee",
      color: "Navy",
      size: "L",
      price: 25.99,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/5/h/0/3xl-18934824-pepe-jeans-original-imagmm9hychx5kcz.jpeg?q=90&crop=false",
      description:
        "Navy tee featuring a printed pocket detail, adding a touch of interest to a classic design.",
      id: 25
    },
    {
      category: "T-Shirt",
      name: "Retro Logo Muscle Tank",
      color: "Red/White",
      size: "XL",
      price: 1988,
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/141/112/desktop-wallpaper-black-model-t-shirt-brunette-top-jake-gyllenhaal-male-muscle-neck-chin-shoulder-facial-hair-sleeve-electric-blue-young-man-white-collar-worker-1920x1200-black-t-shirt.jpg",
      description:
        "Red muscle tank with a retro logo print in white, perfect for a sporty vintage vibe.",
      id: 26
    },

    // Jeans

    {
      category: "Jeans",
      name: "Distressed Skinny Jeans",
      color: "Black",
      size: "30x32",
      price: 1600,
      image:
        "https://i.pinimg.com/736x/24/6b/8e/246b8e731716a4176027784c03ecbb28.jpg",
      description:
        "Trendy black distressed skinny jeans for a rugged yet stylish look.",
      id: 29
    },
    {
      category: "Jeans",
      name: "Straight Leg Jeans",
      color: "Dark Wash",
      size: "34x32",
      price: 1629,
      image:
        "https://i.pinimg.com/originals/29/80/30/298030f179a801058918950237d82b36.jpg",
      description:
        "Classic dark wash jeans with a straight leg fit for a timeless appeal.",
      id: 30
    },
    {
      category: "Jeans",
      name: "Ripped Denim Shorts",
      color: "Light Blue",
      size: "32",
      price: 1190,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqeBBX7iIqYGAxukWdZDI8zOMn7_uUaaBnpvsJJ1hQSIYOxVuYqR1BHlDAI-jiOa6jZ1M&usqp=CAU",
      description:
        "Light blue ripped denim shorts for a cool and casual summer look.",
      id: 31
    },
    {
      category: "Jeans",
      name: "Skinny Fit Stretch Jeans",
      color: "Gray",
      size: "32x30",
      price: 1660,
      image:
        "https://wearmanstyle.com/cdn/shop/products/newbluejeans1.jpg?v=1634227889",
      description:
        "Comfortable gray skinny fit stretch jeans for a modern and stylish look.",
      id: 32
    },
    {
      category: "Jeans",
      name: "Bootcut Denim Jeans",
      color: "Light Blue",
      size: "36x32",
      price: 2080,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/jean/j/c/m/34-lmjn004377-lee-original-imagxywa5gzp7znn.jpeg?q=20&crop=false",
      description:
        "Light blue bootcut denim jeans for a relaxed yet stylish fit.",
      id: 33
    },
    {
      category: "Jeans",
      name: "High-Waisted Skinny Jeans",
      color: "Medium Wash",
      size: "28x32",
      price: 1680,
      image:
        "https://zolfshop.com/wp-content/uploads/2021/10/DENIM-DESENCOLADA-1.jpg",
      description:
        "Medium wash high-waisted skinny jeans, perfect for creating a sleek and elongated silhouette.",
      id: 34
    },
    {
      category: "Jeans",
      name: "Distressed Boyfriend Jeans",
      color: "Light Blue",
      size: "29x30",
      price: 2299,
      image:
        "https://c0.wallpaperflare.com/preview/429/486/498/jeans-pants-style-man.jpg",
      description:
        "Light blue distressed boyfriend jeans for a relaxed yet edgy vibe.",
      id: 35
    },
    {
      category: "Jeans",
      name: "Slim Straight Jeans",
      color: "Dark Gray",
      size: "31x32",
      price: 2100,
      image:
        "https://img.freepik.com/premium-photo/close-up-man-s-legs-jeans-boots-wooden-floor_35378-1236.jpg",
      description:
        "Dark gray slim straight jeans offering a versatile and modern fit.",
      id: 36
    },
    {
      category: "Jeans",
      name: "Cropped Flare Jeans",
      color: "Black",
      size: "27x30",
      price: 1899,
      image:
        "https://i5.walmartimages.com/asr/1485f800-efde-42fc-b960-0c2d8cb29e1a.5f23cb45818354e11425e05332d4f4c8.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      description:
        "Black cropped flare jeans featuring a trendy silhouette, perfect for adding a fashion-forward touch to your outfit.",
      id: 37
    },
    {
      category: "Jeans",
      name: "Mid-Rise Bootcut Jeans",
      color: "Medium Wash",
      size: "33x32",
      price: 1999,
      image: "https://m.media-amazon.com/images/I/713vr0v-XoL._SX466_.jpg",
      description:
        "Medium wash mid-rise bootcut jeans for a flattering and versatile look.",
      id: 38
    },
    {
      category: "Jeans",
      name: "Vintage Wash Straight Jeans",
      color: "Light Blue",
      size: "30x34",
      price: 1099,
      image:
        "https://assets.ajio.com/medias/sys_master/root/20231208/2HXs/65734370ddf7791519bcd63c/-473Wx593H-466865815-blue-MODEL2.jpg",
      description:
        "Light blue vintage wash straight jeans with a lived-in look, perfect for a laid-back style.",
      id: 39
    },
    {
      category: "Jeans",
      name: "Wide Leg Jeans",
      color: "Dark Wash",
      size: "32x32",
      price: 1400,
      image:
        "https://rukminim2.flixcart.com/image/850/1000/l4fxh8w0/jean/r/m/q/32-raf02bb08dkblue-spykar-original-imagfcb9gncgbhcw.jpeg?q=20&crop=false",
      description:
        "Dark wash wide leg jeans offering a relaxed and on-trend silhouette.",
      id: 40
    },

    // Casual Clothes
    {
      category: "Casual Clothes",
      name: "Casual Hoodie",
      color: "Gray",
      size: "XL",
      price: 1650,
      image:
        "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/21203458/2023/1/2/06271946-be59-476d-bb62-0b4d81c961611672651142670-Roadster-Men-Sweatshirts-91672651142282-1.jpg",
      description:
        "A cozy gray hoodie made from soft cotton fleece, ideal for relaxed weekends.",
      id: 41
    },
    {
      category: "Casual Clothes",
      name: "Cargo Shorts",
      color: "Khaki",
      size: "34",
      price: 899,
      image:
        "https://i.pinimg.com/736x/cf/c6/25/cfc62547ac855a72aaba143b45a17115.jpg",
      description:
        "Stylish khaki cargo shorts with multiple pockets, perfect for summer outings.",
      id: 42
    },

    {
      category: "Casual Clothes",
      name: "Striped Polo Shirt",
      color: "Blue/White",
      size: "L",
      price: 1330,
      image:
        "https://c0.wallpaperflare.com/preview/733/674/453/man-in-blue-and-black-striped-button-up-polo-shirt-and-blue-denim-jeans-staands-on-stairs.jpg",
      description:
        "Classic blue and white striped polo shirt for a smart-casual look.",
      id: 43
    },
    {
      category: "Casual Clothes",
      name: "Denim Joggers",
      color: "Dark Blue",
      size: "M",
      price: 1800,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/1/378886819/NV/KH/NU/5743413/men-s-denim-joggers-with-utility-front-side-thigh-pocket.jpeg",
      description:
        "Comfortable dark blue denim joggers with an elastic waistband for a relaxed fit.",
      id: 44
    },

    {
      category: "Casual Clothes",
      name: "Cotton Chino Shorts",
      color: "Beige",
      size: "32",
      price: 899,
      image:
        "https://img.freepik.com/free-photo/man-wearing-beige-shorts-close-up_53876-125260.jpg?size=338&ext=jpg&ga=GA1.1.1700460183.1713052800&semt=ais",
      description:
        "Beige cotton chino shorts with a relaxed fit, perfect for warm weather.",
      id: 46
    },

    {
      category: "Casual Clothes",
      name: "Cargo Jogger Pants",
      color: "Olive Green",
      size: "M",
      price: 1099,
      image:
        "https://i.pinimg.com/236x/c3/84/4a/c3844a82bc0e9eb29a69dfde5d62e63b.jpg",
      description:
        "Olive green cargo jogger pants with functional pockets, combining comfort and utility in one.",
      id: 48
    },
    {
      category: "Casual Clothes",
      name: "Striped Crewneck Sweater",
      color: "Gray/Navy",
      size: "XL",
      price: 1400,
      image:
        "https://c4.wallpaperflare.com/wallpaper/385/26/393/orlando-bloom-actor-male-sweater-wallpaper-preview.jpg",
      description:
        "Gray and navy striped crewneck sweater, perfect for a relaxed yet refined winter look.",
      id: 49
    },
    {
      category: "Casual Clothes",
      name: "Ripped Denim Jacket",
      color: "Light Blue",
      size: "L",
      price: 2499,
      image:
        "https://i.pinimg.com/474x/98/24/d7/9824d7a63aac59bbfc28a4b3a5285b0f.jpg",
      description:
        "Light blue ripped denim jacket for an edgy and laid-back addition to your casual wardrobe.",
      id: 50
    },
    {
      category: "Casual Clothes",
      name: "V-Neck Knit Sweater",
      color: "Burgundy",
      size: "M",
      price: 999,
      image:
        "https://i.pinimg.com/474x/7d/ea/ef/7deaef62d0c33a3b2f9425e38a22b5db.jpg",
      description:
        "Burgundy V-neck knit sweater made from soft yarn, offering warmth and style on chilly days.",
      id: 51
    },
    {
      category: "Casual Clothes",
      name: "Cargo Utility Vest",
      color: "Gray",
      size: "One Size",
      price: 1212,
      image:
        "https://corwear.eu/cdn/shop/products/REGATTAPROFESSIONALTRA865_2.jpg?v=1664785390&width=1946",
      description:
        "Gray cargo utility vest with multiple pockets and adjustable straps, perfect for outdoor adventures.",
      id: 52
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerpage = 4;
  const lastIndexOfData = currentPage * productsPerpage;
  const firstIndexOfData = lastIndexOfData - productsPerpage;
  const currentData = mostPopularProducts.slice(
    firstIndexOfData,
    lastIndexOfData
  );
  const totalPages = Math.ceil(mostPopularProducts.length / productsPerpage);
  const paginateArray = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );
  const handleNavigate = (id) => {
    navigate(`/product-details${id}`);
  };

  return (
    <section className="bg-white flex flex-col items-center justify-center md:py-24 py-8">
      <h1 className="text-3xl md:text-7xl md:mb-10 font-Cormorant italic font-semibold">
        Most Popular
      </h1>
      <div className="w-4/5 h-fit md:flex items-center md:gap-4 py-5 overflow-auto scroll-smooth">
        {currentData.map((product) => (
          <div className="min-w-72 h-fit mb-5">
            <Card
              productId={product.id}
              handleNavigate={handleNavigate}
              productCategory={product.category}
              productName={product.name}
              availableColor={product.color}
              availableSize={product.color}
              productPrice={product.price}
              productImage={product.image}
              productDescription={product.description}
            />
          </div>
        ))}
      </div>
      <ul className="flex gap-2 items-center flex-wrap px-10 justify-center">
        {paginateArray.map((pageNumber) => (
          <li
            onClick={() => setCurrentPage(pageNumber)}
            className={`border h-7 w-7 font-Cormorant font-semibold  border border-slate-400 text-center text-slate-400 rounded cursor-pointer hover:border-black hover:duration-300 ${
              currentPage === pageNumber ? "border-black text-black" : ""
            }`}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default MostPopularProductsSection;
