import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CreateContainer, Header, Footer ,MainContainer } from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
// ahaha
const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    // <AnimatePresence exitBeforeEnter>
    //   <div className="w-screen h-auto flex flex-col bg-primary">
    //     <Header />

    //       <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
    //         <Routes>
    //           <Route path="/*" element={<MainContainer />} />
    //           <Route path="/createItem" element={<CreateContainer />} />
    //         </Routes>
    //       </main>

    //     <Footer/>
    //   </div>
    // </AnimatePresence>

    <div class="min-h-screen flex flex-col">

        {/* <header class="bg-red-50 p-2">Header</header> */}

        <Header />

        <div class="flex-1 flex flex-col sm:flex-row">
          <main class="flex-1 bg-indigo-100 p-2">
            Content here
            Content here
            Content here
            Content here
            Content here
            Content here
          </main>
      
          <nav class="order-first sm:w-32 bg-purple-200 p-2">
            Navigation
            Navigation
            Navigation
            Navigation
            Navigation
          </nav>
      
          <aside class="sm:w-32 bg-yellow-100 p-2">
            Right Sidebar
            Right Sidebar
            Right Sidebar
            Right Sidebar
            Right Sidebar
          </aside>
        </div>

        <Footer/>
        {/* <footer class="bg-gray-100 p-2">Footer</footer> */}
    </div>
  );
};

export default App;
