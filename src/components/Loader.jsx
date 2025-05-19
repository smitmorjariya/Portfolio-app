import React, { useEffect, useState, useRef } from "react";

const colors = [
  "#ff6b6b",
  "#feca57",
  "#54a0ff",
  "#1dd1a1",
  "#5f27cd",
  "#c8d6e5",
];

const typingSpeed = 150; // ms per character

const Loader = () => {
  const name = "Smit Morjariya";
  const role = "Front-end Developer";

  const [typedName, setTypedName] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [bgColor, setBgColor] = useState(colors[0]);

  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedName(name.slice(0, index + 1));
      index++;
      if (index === name.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (typedName !== name) return;

    let index = 0;
    const interval = setInterval(() => {
      setTypedRole(role.slice(0, index + 1));
      index++;
      if (index === role.length) clearInterval(interval);
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [typedName]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor((prev) => {
        let newColor;
        do {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        } while (newColor === prev);
        return newColor;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!synthRef.current) return;

    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }

    const utterThis = new SpeechSynthesisUtterance(`${name}. ${role}.`);
    utterThis.rate = 1;
    utterThis.pitch = 1;

    synthRef.current.speak(utterThis);

    return () => {
      if (synthRef.current.speaking) {
        synthRef.current.cancel();
      }
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        background: bgColor,
        color: "white",
        fontFamily: "'Courier New', Courier, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        transition: "background-color 0.8s ease",
      }}
    >
      <h1 style={{ fontSize: "4rem", whiteSpace: "nowrap" }}>
        {typedName}
        <span className="cursor"></span>
      </h1>
      <p style={{ fontSize: "1.5rem", marginTop: "1rem", whiteSpace: "nowrap" }}>
        {typedRole}
        <span className="cursor"></span>
      </p>

      <style>{`
        .cursor {
          display: inline-block;
          width: 1ch;
          height: 1.5em;
          fontFamily: 'Courier New', Courier, monospace;
          animation: typing 1s steps(2, start) infinite;
          color: white;
        }
        @keyframes typing {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Loader;
