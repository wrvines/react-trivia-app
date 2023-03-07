import axios from "axios";
import React from "react";

function App() {
  // https://opentdb.com/api.php?amount=10&category=10&difficulty=easy

  const [category, setCategory] = React.useState("");
  const [difficulty, setDifficulty] = React.useState("");
  const [questions, setQuestions] = React.useState([]);

  const handleChange = (e) => {
    setCategory(e.target.value);
    console.log(category);
  };

  const handleDifficulty = (e) => {
    setDifficulty(e.target.value);
    console.log(difficulty);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
      )
      .then((res) => {
        console.log(res.data.results);
        setQuestions(res.data.results);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-blue-300 h-screen">
      <div className="mx-auto">
        <div className="flex flex-col mx-auto p-4 gap-4">
          <select value={category} onChange={handleChange}>
            <option>Select a Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals & Theatre</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Videogames</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="29">Entertainment: Comics</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animation</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="30">Science: Gadgets</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Arts</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
          </select>
          <select value={difficulty} onChange={handleDifficulty}>
            <option>Select Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={handleSubmit}
            className="w-20 h-10 border-2 shadow-lg"
          >
            Submit
          </button>
        </div>
      </div>
      <div className=" bg-blue-300 w-full">
        {questions?.map((trivia) => (
          <div className=" p-4 border-b-2 flex flex-col items-center">
            <h1 className="text-3xl pb-4 text-center">{trivia?.question}</h1>
            <h3 className="text-2xl text-center">{trivia?.correct_answer}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

{
  /* <button className="w-40 h-20" onClick={setDifficulty("easy")}>
Easy
</button>
<button className="w-40 h-20" onClick={setDifficulty("medium")}>
Medium
</button>
<button className="w-40 h-20" onClick={setDifficulty("hard")}>
Hard
</button> */
}
