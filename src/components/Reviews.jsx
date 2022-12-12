import React from "react";

const Reviews = () => {
  return (
      <section id="Reviews" className="flex h-screen pl-10 font-['Helvetica'] text-green-900">
        <div className="my-auto justify-end">
          <p className="text-5xl font-bold">Hear from our satisfied customers!<br/></p>
          <div className="bg-white rounded-lg shadow-xl mt-4 px-8 py-4 flex gap-4 items-center transition hover:bg-green-100 hover:scale-105">
            <img src="https://mk0qomafemocnned3wjh.kinstacdn.com/wp-content/uploads/2019/02/AI-thispersondoesnotexist.jpg" alt="profpic" className="h-32 rounded-full shadow-lg"/>
            <div>
              <div className="text-green-900 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              <p className="text-1xl font-bold">LOVE MY NEW THETUMBLERCO</p>
              <p className="text-lg" align="justify-center">I love this cup, the color is beautiful. I have used these tumblers for 5+ years <br/>and never had issues they last forever, fit in my cup holder are larger size<br/> than most others on the market and they stay hot/cold for many hours!</p>
              <p className="text-lg italic">─ BRITTNEY W.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl mt-4 px-8 py-4 flex gap-4 items-center transition hover:bg-green-100 hover:scale-105">
          <img src="https://i.pinimg.com/originals/8b/56/b7/8b56b72767b137213fbb7965dbebd2c3.jpg" alt="profpic" className="h-32 rounded-full shadow-lg"/>
            <div>
              <div className="text-green-900 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              <p className="text-1xl font-bold">MY FAVORITE TUMBLER!</p>
              <p className="text-lg" align="justify-center">What a great cup! It stays cold all day and overnight too!!</p>
              <p className="text-lg italic">─ MICHELE L.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl mt-4 px-8 py-4 flex gap-4 items-center transition hover:bg-green-100 hover:scale-105">
          <img src="https://preview.redd.it/tbu3ccwdulg21.jpg?auto=webp&s=cb6bb87f170a443d86cd7b51768ce9cb8216fb2c" alt="profpic" className="h-32 rounded-full shadow-lg"/>
            <div>
              <div className="text-green-900 text-xl">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
              <p className="text-1xl font-bold">WORTHY TUMBLER</p>
              <p className="text-lg" align="justify-center">Love it! Great quality and legit exceeded my expectations.<br/> I ended up using it every day and loved how it keeps my tea<br/> warm for a long time.</p>
              <p className="text-lg italic">─ DANIELA B.</p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Reviews;