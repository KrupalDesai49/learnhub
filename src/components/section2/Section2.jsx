import React from "react";
import Card2 from "./Card2";

import i1 from "../../img/i1.svg";
import i2 from "../../img/i2.svg";
import i3 from "../../img/i3.svg";
const Section2 = () => {
  return (
    <section>
      {/* main Container */}
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-5">
        {/* Text container */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <h4 className="text-lg font-bold text-primary">
            All-In-One <span className="text-secondry">Cloud Software.</span>
          </h4>
          <p className="max-w-md text-center text-sm text-slate-600">
            Skilline is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>
        {/* Card Container */}
        <div className="mt-16 flex flex-col flex-wrap justify-center sm:flex-row  sm:space-x-14 ">
          <Card2
            text1="Online Billing, Invoicing, & Contracts"
            text2="Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts"
            color="#5B72EE"
            img={i1}
          />
          <Card2
            text1="Easy Scheduling & Attendance Tracking"
            text2="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
            color="#2F327D"
            img={i2}
          />
          <Card2
            text1="Customer Tracking"
            text2="Automate and track emails to individuals are or groups. Skilline’s built-in system helps organize your organization attendance"
            color="#29B9E7"
            img={i3}
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
