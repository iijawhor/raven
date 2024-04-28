import React from "react";

function WhyUs() {
  const whyUs = [
    {
      name: "Secure Payments",
      description:
        "Shop with confidence knowing that your transactions are safeguarded.",
      id: 1
    },
    {
      name: "Free Shipping",
      description:
        "Shopping with no extra charges – savor the liberty of complimentary shipping on every order.",
      id: 3
    },
    {
      name: "Easy Returns",
      description:
        "With our hassle-free Easy Returns, changing your mind has never been more convenient.",
      id: 3
    },
    {
      name: "Order Tracking",
      description:
        "Stay in the loop with our Order Tracking feature – from checkout to your doorstep.",
      id: 4
    }
  ];
  return (
    <section className="bg-black md:py-20 p-10 relative">
      <h1>Why Us</h1>
      <div className="flex md:flex-row flex-col justify-evenly items-center gap-5 relative">
        {whyUs.map((whyUs) => (
          <div
            className=" flex flex-col items-center gap-1 text-center"
            id={whyUs.id}
          >
            <h2 className="md:text-4xl text-2xl italic font-Cormorant tracking-wide font-medium text-white">
              {whyUs.name}
            </h2>
            <p className="tracking-wide font-sans text-center text-sm text-slate-400">
              {whyUs.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export default WhyUs;
