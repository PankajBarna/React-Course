import "./App.css";
import React, { useState } from "react";

//component without props-----------------------------------------------------------------------------
function HelloCard() {
  return (
    <div
      style={{
        maxWidth: "250px",
        backgroundColor: "#f1f1f1",
        padding: "16px",
        border: "1px solid #d2d2d2",
        borderRadius: 16,
      }}
    >
      <h2 className="text-xl font-bold text-gray-700">Hello React</h2>
      <p>I am a reusable component</p>
    </div>
  );
}
//component without props ends

//component with props: inputs to components-----------------------------------------------------------------------------
function WelcomeCard({ name }) {
  return (
    <div
      style={{
        maxWidth: "250px",
        backgroundColor: "#d1ffff",
        padding: "16px",
        border: "1px solid #d2d2d2",
        borderRadius: 16,
        boxShadow: "2px 2px 5px #dfdfdf",
      }}
    >
      <h2 className="text-xl font-bold text-gray-700">
        Welcome, {name || "Guest"}
      </h2>{" "}
      {/*prints name or Guest in the card */}
      <p>I am a reusuable component</p>
    </div>
  );
}
//component with props ends

//component with multiple props-----------------------------------------------------------------------------
function ProfileCard({ name, title, imageUrl }) {
  return (
    <div
      style={{
        maxWidth: "250px",
        backgroundColor: "#f1d9fa",
        padding: "16px",
        border: "2px solid #ba03fc",
        borderRadius: "16px",
        boxShadow: "5px 5px 16px #b7b7b7",
      }}
    >
      <img
        src={imageUrl || "https://picsum.photos/id/1001/800/600"}
        alt=""
        style={{ borderRadius: "8px", border: "1px solid #c7c7c7" }}
      />
      <h2 className="text-xl font-bold text-gray-700 pt-4">
        {name || "Guest"}
      </h2>
      <p>{title || "Profile Description not available"}</p>
    </div>
  );
}
//component ends

//component with children & composition-----------------------------------------------------------------------------
function Card({ title, description, children }) {
  return (
    <div
      style={{
        display: "inline-flex",
        width: "300px",
        backgroundColor: "#1eccff",
        padding: "16px",
        borderRadius: "12px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2 className="text-xl, font-bold">{title || "Title"}</h2>
        <p>{description || "No description"}</p>
      </div>

      <span>{children}</span>
    </div>
  );
}
//component ends

//component with state:memory-----------------------------------------------------------------------------
function Counter({ step }) {
  const [count, setCount] = useState(0);
  // <button onClick={((c) => setCount(c+ step))}></button>
  return (
    <div className="flex gap-2 align-middle">
      <button
        onClick={() => setCount(count - step)}
        style={{ backgroundColor: "#d1d1d1", padding: 8, minWidth: "18px" }}
      >
        -
      </button>

      <span
        style={{
          backgroundColor: "#f1f1f1",
          padding: "8px 20px",
          minWidth: "18px",
          borderRadius: "8px",
        }}
      >
        {count}
      </span>

      <button
        onClick={() => setCount(count + step)}
        style={{ backgroundColor: "#d1d1d1", padding: 8, minWidth: "18px" }}
      >
        +
      </button>
    </div>
  );
}
//component ends

//component with state:memory 2 (Dark and Light Modes)-----------------------------------------------------------------------------
function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  function toggleMode() {
    setIsDark((prev) => !prev);
  }

  const appStyle = {
    backgroundColor: isDark ? "#1a1a1a" : "#f9f9f9",
    color: isDark ? "#f9f9f9" : "#1a1a1a",
    height: "20vh",
    display: "flex",
    gap: "20px",
    flexDirection: "coloum",
    alignItems: "center",
    justifyContent: "center",
    transition: "0.3s ease",
  };

  return (
    <div style={appStyle}>
      <h2>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
      <button
        onClick={toggleMode}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          cursor: "pointer",
          backgroundColor: isDark ? "#333" : "#ddd",
          color: isDark ? "#fff" : "#000",
          fontSize: "1em",
        }}
      >
        Toggle Mode
      </button>
    </div>
  );
}
//component ends

//component with state:memory 2 (Dark and Light Mode)-----------------------------------------------------------------------------
function ToggleDisplayMode() {
  const [isDark, setIsDark] = useState(false);

  function toggleMode() {
    setIsDark((prev) => !prev);
    console.log(isDark);
  }

  const toggleStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
    backgroundColor: isDark ? "#e6f4ff" : "#0F172A",
    transition: "0.3s ease",
  };
  return (
    <div style={toggleStyle}>
      <button
        onClick={toggleMode}
        style={{
          padding: "10px 20px",
          backgroundColor: isDark ? "#38BDF8" : "#0284C7",
          color: isDark ? "#101010" : "#fff",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
}
//component ends

//component with state:memory (Like Button)-----------------------------------------------------------------------------
function Like() {
  const [isLike, setIsLike] = useState(false);
  const [count, setCount] = useState(0);

  function changeLike() {
    setIsLike((prev) => !prev);
    isLike ? setCount((count) => count - 1) : setCount((count) => count + 1);
  }

  return (
    <div>
      <button
        onClick={changeLike}
        style={{
          padding: "10px 20px",
          backgroundColor: "#f1f1f1",
          borderRadius: "8px",
          fontSize: "1em",
          cursor: "pointer",
        }}
      >
        {isLike ? `❤️${count} Likes` : "🤍 Like"}
      </button>
    </div>
  );
}
//component ends

//components using events and controlled inputs(feedback form)---------------------------------
function FeedbackForm() {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  const charCount = feedback.length;

  const handleSubmit = (e) => {
    e.preventDefault(), alert(`Thanks ${name}! Your feedback: "${feedback}"`);
    setName("");
    setFeedback("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        margin: "2rem auto",
        padding: "20px",
        backgroundColor: "#ebeefa",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Feedback Form</h2>
      <label>
        <input
          style={{
            width: "100%",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            backgroundColor: "white",
          }}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label>
        <textarea
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            backgroundColor: "white",
          }}
          rows="4"
          placeholder="How do you feel about us?"
          value={feedback}
          onChange={handleFeedbackChange}
        />
      </label>

      <p
        style={{
          fontSize: "0.9rem",
          color: charCount > 120 ? "red" : "grey",
          alignSelf: "end",
        }}
      >
        {charCount}/150 characters
      </p>

      <button
        onClick={handleSubmit}
        disabled={!name || !feedback}
        style={{
          padding: "10px 20px",
          borderRadius: "6px",
          backgroundColor: !name || !feedback ? "#9ca3af" : "#0284c7",
          color: "white",
          border: "none",
          cursor: !name || !feedback ? "not-allowed" : "pointer",
        }}
      >
        Submit Feedback
      </button>
    </form>
  );
}
//component ends

//components using events and controlled inputs(login form)---------------------------------
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`username: ${username}, password:${password}`);
    setUsername("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: "80%",
        backgroundColor: "#ffbff2",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "20px",
        margin: "2rem auto",
      }}
    >
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Login</h2>
      <label>
        <input
          style={{
            backgroundColor: "white",
            fontSize: "1rem",
            padding: "8px",
            width: "100%",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsername}
        />
      </label>

      <label>
        <div style={{ position: "relative" }}>
          <input
            style={{
              backgroundColor: "white",
              fontSize: "1rem",
              padding: "8px",
              width: "100%",
              border: "1px solid #ccc",
              borderRadius: "6px",
            }}
            placeholder="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            // disabled={!password}
            style={{
              fontSize: ".9rem",
              padding: "2px 4px",
              borderRadius: "4px",
              position: "absolute",
              right: "0.8rem",
              top: "50%",
              backgroundColor: "#ddd",
              color: "#222",
              transform: "translateY(-50%)",
            }}
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
      </label>

      <button
        disabled={!username || !password}
        style={{
          padding: "10px 20px",
          backgroundColor: !username || !password ? "#9ca3af" : "#fa3ed4",
          borderRadius: "6px",
          outline: "none",
          color: "white",
          cursor: !username || !password ? "not-allowed" : "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
}
//component ends

//component - rendering lists & keys (Product list)------------------------------------------------------
function ProductList() {
  const products = [
    {
      id: 201,
      name: "Modern Lamp",
      price: 1799,
      image:
        "https://images.unsplash.com/photo-1756474215958-f0c2a31eddc1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwbGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=200&h=220",
    },
    {
      id: 202,
      name: "Classic Watch",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1657208632331-1f395bda3520?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xhc3NpYyUyMHdhdGNofGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=200&h=220",
    },
    {
      id: 203,
      name: "Wireless Earbuds",
      price: 2199,
      image:
        "https://images.unsplash.com/photo-1722448113450-f6860b7fbfe5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdpcmVsZXNzJTIwZWFyYnVkc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=200&h=220",
    },
    {
      id: 204,
      name: "Travel Backpack",
      price: 2599,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=200&h=220",
    },
    {
      id: 205,
      name: "Coffee Maker",
      price: 3299,
      image:
        "https://images.unsplash.com/photo-1565452344518-47faca79dc69?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29mZmVlJTIwbWFrZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=200&h=220",
    },
    {
  id: 206,
  name: "Gaming Keyboard",
  price: 2799,
  image:
    "https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=200&h=220",
},
{
  id: 207,
  name: "Noise Cancelling Headphones",
  price: 5999,
  image:
    "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=200&h=220",
},
{
  id: 208,
  name: "Smartphone Tripod",
  price: 899,
  image:
    "https://images.unsplash.com/photo-1576299090369-9067e4adca28?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJpcG9kfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=200&h=220",
},
{
  id: 209,
  name: "Mini Drone",
  price: 4599,
  image:
    "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=200&h=220",
},
{
  id: 210,
  name: "DSLR Camera",
  price: 24999,
  image:
    "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=200&h=220",
},

  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>Product List</h2>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          marginTop:"1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "28px",
        }}
      >
        {products.map((item) => (
          <li
            key={item.id}
            style={{
              margin: "auto",
              width: "min(200px, 100%)",
              backgroundColor: "white",
              borderRadius: "1rem",
              padding: "0.5rem",
              paddingBottom: "1rem",
              color: "#141417",
              boxShadow: "2px 2px 12px #ccc",
              
            }}
          >
            <img style={{ borderRadius: "6px" }} src={item.image} alt="" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ flex: 1 }}>
                <h4 style={{ marginTop: "0.5rem", fontSize: "1.03rem" }}>
                  {item.name}
                </h4>
                <p style={{ margin: 0, color: "#0284c7" }}>Rs {item.price}</p>
              </div>
              <button
                onClick={() => alert(`Added ${item.name} to the cart.`)}
                style={{
                  display: "flex",
                  alignSelf: "center",
                  width: "auto",
                  padding: "4px 12px",
                  backgroundColor: "#0284c4",
                  color: "white",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: ".8rem",
                }}
              >
                Add
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
//component

function TodoList() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn Components" },
    { id: 2, title: "Practice JSX" },
  ]);

  function addTodo(e) {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [{ id: Date.now(), title: trimmed }, ...prev]);
    setText("");
  }

  function removeTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <div className="p-8 border border-gray-300 rounded-lg shadow-lg w-dvh">
      <form
        onSubmit={addTodo}
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 18,
          marginBottom: 12,
          paddingBottom: 12,
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Task"
          className="border border-gray-300 rounded-2xl px-4 py-1 flex-grow"
        />
        <button className="bg-sky-500 px-4 py-1 rounded-2xl">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              gap: 20,
              alignItems: "center",
              justifyContent: "space-between",
              margin: 8,
              borderLeft: "5px solid blue",
              padding: 10,
            }}
          >
            <span>{todo.title}</span>
            <button
              className="px-3 py-0.5 rounded-2xl bg-red-500 m-1 text-white "
              onClick={() => removeTodo(todo.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Checkbox list component

//Accounts checkbox list

// <!-- Accounts -->

function AccountsCheckbox() {
  return (
    <div class="w-full h-auto bg-slate-100 p-6 rounded-2xl">
      {/* <!-- Row --> */}

      <div class="flex items-center justify-between text-center align-middle pl-2 pr-6 pt-4 mb-6">
        <div class="text-3xl">Accounts</div>
        <button class="border-1 border-blue-500 rounded-full px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
          Add
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* <!-- Accounts Card 1: Wallets --> */}
        <div class="flex flex-col bg-white rounded-xl p-4 m-2 h-full">
          <div class="flex justify-between items-center mb-3">
            <p class="text-xl font-medium">Wallets</p>
            <button class="group flex justify-center items-center w-10 h-10 hover:bg-red-100 rounded-full">
              <i class="fa-solid fa-trash text-slate-600 text-base group-hover:text-red-500"></i>
            </button>
          </div>
          <ul class="divide-y divide-slate-200">
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">GPay</span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  PhonePe
                </span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  Amazon Pay
                </span>
              </label>
            </li>
          </ul>
        </div>

        {/* <!-- Accounts Card 2: Debit Card --> */}
        <div class="flex flex-col bg-white rounded-xl p-4 m-2 h-full">
          <div class="flex justify-between items-center mb-3">
            <p class="text-xl font-medium">Debit Card</p>
            <button class="group flex justify-center items-center w-10 h-10 hover:bg-red-100 rounded-full">
              <i class="fa-solid fa-trash text-slate-600 text-base group-hover:text-red-500"></i>
            </button>
          </div>
          <ul class="divide-y divide-slate-200">
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  HDFC Bank
                </span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">SBI</span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  Axis Bank
                </span>
              </label>
            </li>
          </ul>
        </div>

        {/* <!-- Accounts Card 3: Credit Card --> */}
        <div class="flex flex-col bg-white rounded-xl p-4 m-2 h-full">
          <div class="flex justify-between items-center mb-3">
            <p class="text-xl font-medium">Credit Card</p>
            <button class="group flex justify-center items-center w-10 h-10 hover:bg-red-100 rounded-full">
              <i class="fa-solid fa-trash text-slate-600 text-base group-hover:text-red-500"></i>
            </button>
          </div>
          <ul class="divide-y divide-slate-200">
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  HDFC Card
                </span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  SBI Card
                </span>
              </label>
            </li>
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  HDFC Card 2
                </span>
              </label>
            </li>
          </ul>
        </div>

        {/* <!-- Accounts Card 4: Cash --> */}
        <div class="flex flex-col bg-white rounded-xl p-4 m-2 h-full">
          <div class="flex justify-between items-center mb-3">
            <p class="text-xl font-medium">Cash</p>
            <button class="group flex justify-center items-center w-10 h-10 hover:bg-red-100 rounded-full">
              <i class="fa-solid fa-trash text-slate-600 text-base group-hover:text-red-500"></i>
            </button>
          </div>
          <ul class="divide-y divide-slate-200">
            <li class="py-2">
              <label class="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" class="w-5 h-5 accent-sky-600" />
                <span class="text-base font-medium text-slate-600">
                  Cash Payment
                </span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    //accounts checkbox list end
  );
}

function SkillCheckbox() {
  const [skills, setSkills] = useState([]);

  const allSkills = ["HTML", "CSS", "JavaScript", "React"];

  function handleChange(e) {
    const value = e.target.value;
    setSkills((prev) =>
      prev.includes(value)
        ? //remove skill if already selected
          prev.filter((skill) => skill !== value)
        : //add skill if not selected
          [...prev, value]
    );
  }

  return (
    <div>
      <h3>Select your Skills</h3>
      {allSkills.map((skill) => (
        <label key={skill} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={skill}
            checked={skills.includes(skill)}
            onChange={handleChange}
          />
          {skill}
        </label>
      ))}

      <p>
        Selected Skills:{" "}
        {skills.length > 0 ? skills.join(", ") : "None Selected"}
      </p>
    </div>
  );
}

function PreferencesCheckbox() {
  const [preferences, setPreferences] = useState([]);
  const allPreferences = [
    "Subscribe to Newsletter",
    "Enable Notifications",
    "Accept Terms",
  ];

  function handleChange(e) {
    const value = e.target.value;
    setPreferences((prev) =>
      prev.includes(value)
        ? prev.filter((preference) => preference !== value)
        : [...prev, value]
    );
  }
  return (
    <div className="divide-y divide-slate-300">
      {allPreferences.map((preference) => (
        <label key={preference} style={{ display: "block" }}>
          <input
            type="checkbox"
            value={preference}
            checked={preferences.includes(preference)}
            onChange={handleChange}
          />
          {preference}
        </label>
      ))}
      <p>
        You have selected:{" "}
        {preferences.length > 0 ? preferences.join(", ") : "none"}
      </p>
    </div>
  );
}

function App() {
  const namelist = ["Sonu", "Panku", "Manu", "Gudia"];

  const profiles = [
    {
      name: "Pankaj",
      description:
        "Frontend-focused developer learning React and Tailwind; loves clean, responsive UIs.",
      image: "https://i.pravatar.cc/512?img=12",
      imageLink: "https://pravatar.cc/",
    },
    {
      name: "Shabana",
      description:
        "Content strategist who turns complex topics into clear, engaging narratives.",
      image: "https://i.pravatar.cc/512?img=32",
      imageLink: "https://pravatar.cc/",
    },
    {
      name: "Manu",
      description:
        "Data enthusiast building simple dashboards and exploring analytics.",
      image: "https://i.pravatar.cc/512?img=22",
      imageLink: "https://pravatar.cc/",
    },
    {
      name: "Gudia",
      description:
        "UI/UX tinkerer experimenting with microinteractions and accessible design.",
      image: "https://i.pravatar.cc/512?img=47",
      imageLink: "https://pravatar.cc/",
    },
    {
      name: "Rohan",
      description:
        "Backend learner crafting REST APIs with Node.js and Express.",
      image: "https://i.pravatar.cc/512?img=15",
      imageLink: "https://pravatar.cc/",
    },
  ];

  return (
    <>
      <div className="flex flex-col justify-center align-middle mt-20 gap-6 m-10 bg-slate-50 ">
        <ProductList />
        <LoginForm />
        <FeedbackForm />
        <Like />
        <ToggleDisplayMode />
        <DarkModeToggle />
        <Counter step={1} />
        <Counter step={5} />
        <Card
          title="HDFC Bank"
          description="Description for card one. It shows some randon stuff to get along."
        >
          <div
            style={{
              display: "inline-flex",
              backgroundColor: "#f1f1f1",
              padding: "4px 8px",
              borderRadius: "99px",
            }}
          >
            +24.2%
          </div>
        </Card>
        <Card
          title="Axis Bank"
          description="Another card, this one is the second card to get with us"
        ></Card>
        <ProfileCard />
        {profiles.map((profile) => (
          <ProfileCard
            name={profile.name}
            title={profile.description}
            imageUrl={profile.image}
          />
        ))}
        {namelist.map((l) => (
          <WelcomeCard name={l} />
        ))}{" "}
        {/*use "{}" to inject javascript in jsx*/}
        <WelcomeCard name="Pankaj" description="Hello" />{" "}
        {/*Prints "Pankaj" on the card*/}
        <WelcomeCard name="Shabana" /> {/*Prints "Shabana" on the card */}
        <WelcomeCard /> {/*Prints "Guest" on the card*/}
        <HelloCard />
        <HelloCard />
        {/* <CurrencyInfo /> */}
        {/* <TodoList /> */}
        {/* <SkillCheckbox /> */}
        {/* <AccountsCheckbox /> */}
        {/* <PreferencesCheckbox /> */}
      </div>
    </>
  );
}

export default App;
