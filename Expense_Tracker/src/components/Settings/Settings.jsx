import { useState } from "react";

export default function Settings() {

const [sections, setSections] = useState([
    {
      name: "Accounts",
      sectionItems: [
        {sectionItemName: "Wallets", items: ["GPay", "PhonePe", "Amazon Pay"]},
        {sectionItemName: "Debit Card", items: ["HDFC Bank", "SBI", "Axis Bank"]},
        {sectionItemName: "Credit Card", items: ["HDFC Card", "SBI Card", "HDFC Card 2"]},
        {sectionItemName: "Cash", items: ["Cash Payment"]}
      ],
    },
    {
      name: "Categories",
      sectionItems: [
        {sectionItemName: "Food", items: ["Groceries", "Dining Out", "Food Ordering"]},
        {sectionItemName: "Housing", items: ["Rent", "Maid", "Cook"]},
        {sectionItemName: "Utility", items: ["Electricity", "Internet", "Gas","Phone"]},
        {sectionItemName: "Insurance", items: ["Health Insurance", "Term Insurance", "Car Insurance", "Bike Insurance"]},
        {sectionItemName: "Transport", items: ["Taxi", "Train", "Flight", "Diesel", "Petrol", "Car Maintenance", "Bike Maintenance", "Parking Fees", "Tolls", "Car Wash"]},
        {sectionItemName: "Personal Care", items: ["Haircut", "Salon", "Cosmetics", "Skincare"]},
        {sectionItemName: "Technology", items: ["Gadgets", "Softwares"]},
        {sectionItemName: "Subscriptions", items: ["Netflix", "Gym", "Spotify", "Youtube"]}
      ],
    },
    {
      name: "Savings",
      sectionItems: [
        {sectionItemName: "Mutual Fund", items: ["Retirement Fund", "Education Fund"]},
        {sectionItemName: "Emergency Fund", items: ["Emergency Fund"]},
        {sectionItemName: "Fixed Deposit", items: ["HDFC Bank", "Axis Bank"]}
      ],
    },
  ])

  
  

  return (
    <div className="w-[80%] rounded-xl">
      <div className="flex justify-between items-center w-full bg-blue-200 p-6 rounded-xl mb-8 text-2xl overflow-hidden">
        <div>
          <p className="">Settings</p>
          {/* <!-- Breadcrumbs --> */}
          <nav className="mt-2 text-base font-medium text-zinc-500">
            <ol className="flex items-center gap-3">
              <li>
                <a href="#" className="hover:text-zinc-700">
                  Home
                </a>
              </li>
              <li className="text-zinc-500">•</li>
              <li className="text-zinc-700">Settings</li>
            </ol>
          </nav>
        </div>

        {/* <!-- SVG Illustration --> */}
        
        {/* <!-- SVG Illustration End --> */}
      </div>

      {/* <!-- Settings --> */}
      <div className="flex flex-col gap-8">
        {sections.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className="w-full h-auto bg-zinc-200 dark:bg-zinc-900 p-6 rounded-2xl"
          >
            <div className="flex items-center justify-between text-center align-middle pl-2 pr-6 pt-4 mb-6">
              <div className="text-2xl dark:text-zinc-100">{section.name}</div>
              <button className="rounded-full px-4 py-2 bg-linear-to-br/srgb from-cyan-400 to-violet-300 text-zinc-800 dark:text-zinc-100 hover:bg-blue-600">
                Add
              </button>
            </div>

            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {section.sectionItems.map((sectionItem, id) => (
                <div
                  key={id}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 m-2 h-full mb-3"
                >
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-xl font-medium dark:text-zinc-100">
                      {sectionItem.sectionItemName}
                    </p>
                    <button className="group flex justify-center items-center w-10 h-10 hover:bg-red-100 rounded-full">
                      <i className="fa-solid fa-trash text-zinc-600 text-base group-hover:text-red-500"></i>
                    </button>
                  </div>

                  <ul className="divide-y divide-zinc-200 dark:divide-zinc-950">
                    {sectionItem.items.map((item, idx) => (
                      <div key={idx}>
                        <li className="py-2">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input
                              type="checkbox"
                              className="w-5 h-5 accent-sky-600"
                            />
                            <span className="text-base font-medium text-zinc-600 dark:text-zinc-400">
                              {item}
                            </span>
                          </label>
                        </li>
                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






