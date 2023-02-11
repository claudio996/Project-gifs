import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [Categories, setCategories] = useState(["value-1"]);

  const OnAddCategory = (newValue) => {
    console.log(newValue);
    setCategories([...Categories, newValue]);
  };
  return (
    <>
      <h1>Search gif</h1>
      <AddCategory OnNewValue={(event) => OnAddCategory(event)} />

      {
      
      Categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
