import { useState } from "react";

function MoodChanger() {
  const [mood, setMood] = useState("Happy");

  const happySad = (mood) => {
    setMood(mood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood === "Happy" ? "😄" : "😥"}
      <button onClick={() => happySad("Happy")}>Happy</button>
      <button onClick={() => happySad("Sad")}>Sad</button>
    </div>
  );
}

export default MoodChanger;
