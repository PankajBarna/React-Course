import { useState, useMemo, useReducer } from "react";

function recalculateSections(sectionsData) {
  return sectionsData.map(section => ({
    ...section,
    sectionItems: section.sectionItems.map(sectionItem => {
      const categoryBudget = sectionItem.items.reduce((sum, item) => sum + item.Budget, 0)
      const categorySpent = sectionItem.items.reduce((sum, item) => sum + item.Spent, 0)
      const categoryRemaining = categoryBudget - categorySpent;

      const updatedItems = sectionItem.items.map(item => {
        const remaining = item.Budget - item.Spent;
        const progressPercentage = (item.Budget > 0 ? (item.Spent / item.Budget) * 100 : 0);
        const over = remaining < 0;
        return { ...item, remaining, progressPercentage, over }
      });

      return { ...sectionItem, items: updatedItems, categoryBudget, categoryRemaining, categorySpent }
    })
  })
  )
}



export default function Budget() {
  const [sections, setSections] = useState([
    {
      name: "Categories",             // map 1
      sectionItems: [
        {
          sectionItemName: "Food",    // map 2
          items: [
            { itemName: "Dining Out", Spent: 1800, Budget: 3000 },   // map 3
            { itemName: "Groceries", Spent: 500, Budget: 2000 },
            { itemName: "Food Ordering", Spent: 3600, Budget: 3000 },
          ],
        },
        {
          sectionItemName: "Housing",
          items: [
            { itemName: "Rent", Spent: 0, Budget: 12500 },
            { itemName: "Cook", Spent: 3000, Budget: 3000 },
          ],
        },
        {
          sectionItemName: "Transport",
          items: [
            { itemName: "Diesel", Spent: 1000, Budget: 2500 },
            { itemName: "Parking", Spent: 0, Budget: 300 },
            { itemName: "Car Wash", Spent: 200, Budget: 300 },
          ],
        },
        {
          sectionItemName: "Utility",
          items: [
            { itemName: "Electricity", Spent: 0, Budget: 2500, },
            { itemName: "Internet", Spent: 1250, Budget: 1250 },
            { itemName: "Gas", Spent: 0, Budget: 800 },
            { itemName: "Phone", Spent: 600, Budget: 1600 },
          ],
        },
        {
          sectionItemName: "Subscriptions",
          items: [
            { itemName: "Netflix", Spent: 680, Budget: 680, },
            { itemName: "Spotify", Spent: 139, Budget: 150 },
            { itemName: "Youtube", Spent: 139, Budget: 150 },
            { itemName: "ChatGPT", Spent: 1633, Budget: 1600 },
          ],
        },
      ],
    },
  ]);



  const computedSections = useMemo(() => recalculateSections(sections), [sections])

  const categoriesGrand = useMemo(() => {
    const categories = computedSections.find(s => s.name = "Categories");
    const spent = categories.sectionItems.reduce((acc, si) => acc + (si.categorySpent || 0), 0)
    const budget = categories.sectionItems.reduce((acc, si) => acc + (si.categoryBudget || 0), 0)
    return { spent, budget }
  }, [computedSections])


  // const categoryNames = useMemo(() => {
  //   const cat = sections.find((s) => s.name === "Categories");
  //   return cat ? cat.sectionItems.map((si) => si.sectionItemName) : [];
  // }, [sections]);





  return (
    <div className="flex flex-col w-[80%]">
      <div className="flex justify-between items-center w-full bg-blue-200 p-6 rounded-xl mb-8 text-2xl overflow-hidden">
        <div>
          <p className="">Budget</p>
          {/* <!-- Breadcrumbs --> */}
          <nav className="mt-2 text-base font-medium text-slate-500">
            <ol className="flex items-center gap-3">
              <li>
                <a href="#" className="hover:text-slate-700">
                  Home
                </a>
              </li>
              <li className="text-slate-500">•</li>
              <li className="text-slate-700">Budget</li>
            </ol>
          </nav>
        </div>

        {/* <!-- SVG Illustration --> */}

        {/* <!-- SVG Illustration End --> */}
      </div>

      {/* <!-- Budgets --> */}
      <div className="flex flex-col gap-8">
        {/* <!-- Budget Categories --> */}
        <div className="w-full h-auto bg-zinc-200 dark:bg-zinc-900 p-6 rounded-2xl">
          {/* <!-- Row --> */}

          <div className="flex items-center justify-between text-center align-middle pl-2 pr-6 pt-4 mb-6">
            <div className="text-3xl text-zinc-950 dark:text-zinc-50">
              Budget
            </div>
            <div className="dark:text-zinc-100">Total Spent : ₹{categoriesGrand.spent} / ₹{categoriesGrand.budget}</div>
            <button className="rounded-full px-4 py-2 bg-linear-to-br/srgb from-cyan-400 to-violet-300 text-zinc-800 dark:text-zinc-100">
              Add
            </button>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">


            {/* {sections.map((section) => section.sectionItems.map((s) => (s.items.map((t) => (t.itemName)))))} */}

            {/* <!-- Food Budget Card ----------------------------------------------------------------------------------------------------> */}
            {computedSections.flatMap((section) =>
              section.sectionItems.map((i, itemId) => (
                <div
                  key={itemId}
                  className="flex flex-col bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 m-2 h-full"
                >
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex flex-row items-center gap-2">
                      <p className="text-xl font-medium text-zinc-900 dark:text-zinc-100">
                        {i.sectionItemName}
                      </p>
                      {/* <span className="px-2 py-1 text-sm text-red-700 bg-red-100 outline-1 outline-red-500 rounded-full hidden">
                        Over
                      </span> */}
                      <div className="text-sm dark:text-zinc-100">( ₹{i.categorySpent} / ₹{i.categoryBudget} Spent)</div>


                    </div>

                    <div className="flex flex-row gap-2">
                      <div className="relative flex items-center justify-center group">
                        {/* <!-- Icon --> */}

                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-200 hover:bg-blue-100">
                          <i className="fa-solid fa-pen text-slate-600 text-sm group-hover:text-blue-500"></i>
                        </button>

                        {/* <!-- Tooltip --> */}

                        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                          Edit
                        </span>
                      </div>

                      <div className="relative flex items-center justify-center group">
                        {/* <!-- Icon --> */}

                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-200 hover:bg-red-100">
                          <i className="fa-solid fa-x text-slate-600 text-sm group-hover:text-red-500"></i>
                        </button>

                        {/* <!-- Tooltip --> */}

                        <span className="absolute bottom-full mb-2 px-2 py-1 text-xs text-white bg-slate-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                          Delete
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Line Items */}

                  <ul className="divide-y divide-zinc-200 dark:divide-zinc-700">
                    {i.items.map((u, uid) => (
                      <li key={uid} className="py-2">
                        <label className="flex items-start gap-auto justify-between cursor-pointer">
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              className="w-5 h-5 accent-sky-600"
                            />
                            <span className="text-base font-medium text-zinc-600 dark:text-zinc-200">
                              {u.itemName}
                            </span>
                          </div>

                          {/* <!-- Progress Bar and Percentage --> */}

                          <div className="flex flex-col gap-0 w-1/2">
                            <div className="flex flex-row gap-1 items-center justify-between">
                              <div className="w-full bg-zinc-200 dark:bg-zinc-600 h-2 overflow-hidden rounded-none">
                                <div
                                  className="h-2 origin-left transition-transform duration-500"
                                  // style={{transform: `scaleX(₹{u.progressPercentage / 100})` }}
                                  style={{ width: `${u.progressPercentage}%`, background: u.over ? "red" : "linear-gradient(to right, #22d3ee, #c4b5fd)" }}
                                />
                              </div>

                              <div className="text-slate-600 dark:text-zinc-300 text-xs">
                                {u.progressPercentage.toFixed(1)}%
                              </div>
                            </div>

                            <p className="text-xs text-zinc-800 dark:text-zinc-200">
                              ₹{u.remaining} /{" "}
                              <span className="text-zinc-400 dark:text-zinc-400">
                                ₹{u.Budget}
                              </span>{" "}
                              left
                            </p>
                          </div>

                          {/* <!-- Progress Bar and Percentage End --> */}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}

            {/* <!-- Food Budget Card End ------------------------------------------------------------------------------------------------> */}

          </div>
        </div>
        {/* <!-- Expense/Income Categories End --> */}
      </div>
    </div>
  );
}


