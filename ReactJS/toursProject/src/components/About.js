import Items from "./Items";

export default function About(){
    return (
        // <div>
        //   <h1>Hello from React</h1>
        // </div>
        <div class="about-us" id="about">
            <div class="small-container">
                <h2 class="text-center">Winter <span>Holiday</span></h2>
                <p class="text-center">as opposed to using 'Content here, content here', making it look lik</p>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-12 text-center">
                               <Items />
                            </div>
                            <div class="col-lg-6 col-12 text-right">
                                <h4 class="text-uppercase">Engoy <span>holiday</span></h4>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like</p>
                                <button class="text-center"><a href="#" class="text-capitalize">book now</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="first"></div>
                <div class="second"></div>
            </div>
        </div>
      );
}