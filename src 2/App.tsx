import { useState } from "react";
import Frame from "./imports/Frame";

export default function App() {
  const [lastClicked, setLastClicked] = useState<string>("");

  const handleButtonClick = (label: string) => {
    setLastClicked(label);
    console.log(`Clicked: ${label}`);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center py-8">
      {lastClicked && (
        <div className="fixed top-4 right-4 bg-[#2e8540] text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideIn">
          Clicked: <strong>{lastClicked}</strong>
        </div>
      )}

      <div
        className="w-full max-w-[1440px]"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const clickableElement = target.closest(
            "[data-interactive]",
          );
          if (clickableElement) {
            const label =
              clickableElement.getAttribute("data-label");
            if (label) {
              handleButtonClick(label);
            }
          }
        }}
      >
        <InteractiveFrame />
      </div>
    </div>
  );
}

function InteractiveFrame() {
  return <Frame />;
}