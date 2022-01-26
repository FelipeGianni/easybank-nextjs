import React from "react";

const Benefits: React.FC = () => {
  return (
    <section className="benefits container container--px">
      <div className="benefits__title">
        <h2>Why choose Easybank?</h2>

        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
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
            See exactly where your money goes each month. Receive notifications
            when you`re close to hitting your limits.
          </p>
        </div>
        <div className="opt">
          <img src="./images/icon-onboarding.svg" alt="Fast Onboarding" />

          <h3>Fast Onboarding</h3>

          <p>
            We don`t do branches. Open your account in minutes online and start
            taking control of your finances right away.
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
  );
};

export default Benefits;
