import React, { useCallback, useRef, useState, memo } from "react";

/** Re-render counter (shows how many times a component rendered) */
function RenderCounter({ label }) {
  const renders = useRef(0);
  renders.current += 1;
  return (
    <span
      style={{
        fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
        fontSize: 12,
        padding: "2px 6px",
        borderRadius: 6,
        border: "1px solid #ddd",
        background: "#f8fafc",
        color: "#0f172a",
      }}
      title={`${label} has rendered ${renders.current} times`}
    >
      {label}: {renders.current}
    </span>
  );
}

/** A memoized child that only re-renders if props change (shallow compare) */
const Child = memo(function Child({ onAdd, label }) {
  console.log(`👶 Child <${label}> rendered`);
  return (
    <div
      style={{
        display: "grid",
        gap: 8,
        padding: 12,
        borderRadius: 10,
        border: "1px solid #e5e7eb",
        background: "#ffffff",
      }}
    >
      <b>Child ({label})</b>
      <RenderCounter label={`Child<${label}> renders`} />
      <button onClick={onAdd}>Add Todo</button>

    </div>
    
  );
});

/** Version A: NO useCallback — child sees a NEW function every render */
function Parent_NoUseCallback() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // ❌ recreated on every render
  const addTodo = () => {
    setTodos((prev) => [...prev, `Task ${prev.length + 1}`]);
  };

  console.log("🔁 Parent_NoUseCallback rendered");
  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h3 style={{ margin: 0 }}>A) No useCallback</h3>
      <RenderCounter label="Parent A renders" />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment A: {count}
        </button>
        <button onClick={addTodo}>Add Todo (A)</button>
      </div>
      <Child onAdd={addTodo} label="A (no useCallback)" />
      <div style={{ fontSize: 12, color: "#334155" }}>
        Todos A: {todos.join(", ") || "—"}
      </div>
    </section>
  );
}

/** Version B: WITH useCallback — stable function reference between renders */
function Parent_WithUseCallback() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // ✅ memoized once (deps = [])
  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `Task ${prev.length + 1}`]);
  }, []);

  console.log("🔁 Parent_WithUseCallback rendered");
  return (
    <section style={{ display: "grid", gap: 12 }}>
      <h3 style={{ margin: 0 }}>B) With useCallback</h3>
      <RenderCounter label="Parent B renders" />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button onClick={() => setCount((c) => c + 1)}>
          Increment B: {count}
        </button>
        <button onClick={addTodo}>Add Todo (B)</button>
      </div>
      <Child onAdd={addTodo} label="B (useCallback)" />
      <div style={{ fontSize: 12, color: "#334155" }}>
        Todos B: {todos.join(", ") || "—"}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 20,
        padding: 24,
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, rgba(248,250,252,1) 0%, rgba(241,245,249,1) 100%)",
      }}
    >
      <Parent_NoUseCallback />
      <Parent_WithUseCallback />
    </main>
  );
}
