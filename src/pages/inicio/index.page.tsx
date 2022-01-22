import React from "react";
import Head from "next/head";

export default function Home() {
  return <></>;

  return (
    <>
      <Head>
        <title>Easybank</title>
        <meta
          name="description"
          content="Easybank - Challenge by Frontend Mentor"
        />
        <link
          rel="canonical"
          href="https://www.frontendmentor.io?ref=challenge"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt-BR" />
        <meta
          property="og:url"
          content="https://www.frontendmentor.io?ref=challenge"
        />
        <meta property="og:title" content="Easybank" />
        <meta property="og:site_name" content="Easybank" />
        <meta
          property="og:description"
          content="Easybank - Challenge by Frontend Mentor"
        />
        <meta property="og:image" content="/assets/logo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <section className="hero">
        <div className="hero__image"></div>

        <div className="hero__text">
          <h1>Next generation digital banking</h1>

          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <a href="#" className="button">
            Request Invite
          </a>
        </div>
      </section>

      <section className="benefits container container--px">
        <div className="benefits__title">
          <h2>Why choose Easybank?</h2>

          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className="benefits__options">
          <div className="opt">
            <img src="./images/icon-online.svg" alt="Online Banking" />

            <h3>Online Banking</h3>

            <p>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="opt">
            <img src="./images/icon-budgeting.svg" alt="Simple Budgeting" />

            <h3>Simple Budgeting</h3>

            <p>
              See exactly where your money goes each month. Receive
              notifications when you`re close to hitting your limits.
            </p>
          </div>
          <div className="opt">
            <img src="./images/icon-onboarding.svg" alt="Fast Onboarding" />

            <h3>Fast Onboarding</h3>

            <p>
              We don`t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="opt">
            <img src="./images/icon-api.svg" alt="Open API" />

            <h3>Open API</h3>

            <p>
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </section>

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
                  The world is getting smaller and we`re becoming more mobile.
                  So why should you be forced to only receive money in a single
                  …
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
                  any fees on purchases while you`re abroad. We`ll even show you
                  …
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
    </>
  );
}
