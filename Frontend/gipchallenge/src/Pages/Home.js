import Card from '../Components/Card';
import 'bootstrap/dist/css/bootstrap.css';
import '../Components/Home.css';




function Home(){
    const products = [
    {
        id: 1,
        name: "TeeElite",
        size: "XL",
        type: "Tshirt",
        imageUrl: "https://picsum.photos/200",
        price: 500
    },
    {
        id: 2,
        name: "KickKout",
        size: "L",
        type: "Shoes",
        imageUrl: "https://picsum.photos/200",
        price: 400
    },
    {
        id: 3,
        name: "CapCraze",
        size: "L",
        type: "Hat",
        imageUrl: "https://picsum.photos/200",
        price: 350
    },
    {
    id: 4,
    name: "CozyCouture",
    size: "XL",
    type: "Hoodie",
    imageUrl: "https://picsum.photos/200",
    price: 760
},
{
    id: 5,
    name: "FreshFlex",
    size: "L",
    type: "Shoes",
    imageUrl: "https://picsum.photos/200",
    price: 420
},
{
    id: 6,
    name: "SoleStylin'",
    size: "M",
    type: "Socks",
    imageUrl: "https://picsum.photos/200",
    price: 100
},
{
    id: 7,
    name: "SoleSwag",
    size: "S",
    type: "Shoes",
    imageUrl: "https://picsum.photos/200",
    price: 800
},
{
    id: 8,
    name: "SwagThread",
    size: "M",
    type: "Tshirt",
    imageUrl: "https://picsum.photos/200",
    price: 300
},
{
    id: 9,
    name: "BrimBlitz",
    size: "M",
    type: "Hat",
    imageUrl: "https://picsum.photos/200",
    price: 270
},
{
    id: 10,
    name: "SwagSocksElite",
    size: "L",
    type: "Socks",
    imageUrl: "https://picsum.photos/200",
    price: 160
},
{
    id: 11,
    name: "DapperKicks",
    size: "L",
    type: "Shoes",
    imageUrl: "https://picsum.photos/200",
    price: 630
},
{
    id: 12,
    name: "Jim Beam",
    size: "L",
    type: "Tshirt",
    imageUrl: "https://picsum.photos/200",
    price: 410
}
]

const featuredProducts = products.slice(6, 10);

const FeatureddElements = featuredProducts.map((item, index) => (
    <div key={index} className="col-md-3">
        <div className="card mb-3">
            <img src={item.imageUrl} className="card-img-top" alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">Size: {item.size}</p>
                <p className="card-text">Price: ${item.price}</p>
                <p className="card-text">Type : {item.type}</p>
                <button className="btn btn-primary">Buy</button>
            </div>
        </div>
    </div>
));



    return (       
        <>
       
        <section class="hero-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-sm-12 text-xs-center hero-left">
                        <h1><span class="name display-2 title-1" />EMRACE <br/> THE CLASSICS <br/>SHOW <br/>YOUR SWAG</h1>
                        <button type='button' className='btn btn-dark btn-lg'>Shop Now</button>
                    </div>
                    <div class="col-md-6 col-sm-12 animated bounceInRight">
                        <img src="https://picsum.photos/400" alt="img" class="hero-img img-fluid" />
                    </div>
                </div>
            </div>
        </section>

                <div className="row mt-4 justify-content-center featured">
                    <h1 className="product-section-title">Products</h1>
                    {FeatureddElements}
                </div>


            <section class="about-us">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-12">
                            <img src="https://picsum.photos/400" alt="about-us img" class="hero-img img-fluid" />
                        </div>

                        <div class="col-md-6 col-sm-12 text-xs-center hero-left-second">
                                <div className='white-div-2'><h1><span class="name display-2 title-2" />About us</h1></div>
                               <div className="black-div-2"> <p>WE ARE THRILLED TO INTRODUCE OUR VENTURE INTO THE WORLD OF SWAG, BRINGING YOU A CURATED COLLECTION OF SMART AND STYLISH ITEMS THAT SEAMLESSLY BLEND BRAINPOWER WITH FASHION FLAIR, AT BRAINY, WE BELIEVE THAT SWAG IS NOT JUST A STATEMENT—IT'S A MINDSET</p></div>
                        </div>
                    </div>
                </div>
            </section>
         
        </>
    )
}
export default Home;