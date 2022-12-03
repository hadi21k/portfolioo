import { createContext, useContext, useState } from "react";

const Store = createContext(null);
export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [dark, setDark] = useState(true);
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});

  return (
    <Store.Provider
      value={{
        dark,
        setDark,
        works,
        setWorks,
        work,
        setWork,
        blogs,
        setBlogs,
        blog,
        setBlog,
      }}
    >
      {children}
    </Store.Provider>
  );
};
