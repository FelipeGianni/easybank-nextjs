import React from "react";

const LatestArticles: React.FC = () => {
  return (
    <section className="article container container--px">
      <div className="article__title">
        <h2>Latest Articles</h2>
      </div>

      <div className="article__grid">
        <a href="#" className="article__item">
          <div
            className="article__image"
            style={{ backgroundImage: "url('./images/image-currency.jpg')" }}
          ></div>

          <div className="article__text">
            <div className="article__text__author">
              <p>By Claire Robinson</p>
            </div>
            <div className="article__text__title">
              <p>Receive money in any currency with no fees</p>
            </div>
            <div className="article__text__description">
              <p>
                The world is getting smaller and we`re becoming more mobile. So
                why should you be forced to only receive money in a single …
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="article__item">
          <div
            className="article__image"
            style={{
              backgroundImage: "url('./images/image-restaurant.jpg')",
            }}
          ></div>

          <div className="article__text">
            <div className="article__text__author">
              <p>By Wilson Hutton</p>
            </div>
            <div className="article__text__title">
              <p>Treat yourself without worrying about money</p>
            </div>
            <div className="article__text__description">
              <p>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you …
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="article__item">
          <div
            className="article__image"
            style={{ backgroundImage: "url('./images/image-plane.jpg')" }}
          ></div>

          <div className="article__text">
            <div className="article__text__author">
              <p>By Wilson Hutton</p>
            </div>
            <div className="article__text__title">
              <p>Take your Easybank card wherever you go</p>
            </div>
            <div className="article__text__description">
              <p>
                We want you to enjoy your travels. This is why we don`t charge
                any fees on purchases while you`re abroad. We`ll even show you …
              </p>
            </div>
          </div>
        </a>

        <a href="#" className="article__item">
          <div
            className="article__image"
            style={{ backgroundImage: "url('./images/image-confetti.jpg')" }}
          ></div>

          <div className="article__text">
            <div className="article__text__author">
              <p>By Claire Robinson</p>
            </div>
            <div className="article__text__title">
              <p>Our invite-only Beta accounts are now live!</p>
            </div>
            <div className="article__text__description">
              <p>
                After a lot of hard work by the whole team, we`re excited to
                launch our closed beta. It`s easy to request an invite through
                the site ...
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default LatestArticles;
