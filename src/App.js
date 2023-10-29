import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import AllActors from "./pages/AllActors";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailActors from "./pages/DetailActors";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  let client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
            <Header />
            <img  className="fixed inset-0 w-full h-full object-cover blur-sm" src="https://www.hdwallpaper.nu/wp-content/uploads/2018/11/rick_and_morty-2.jpg" alt="" />
            <div className="fixed inset-0 w-full h-full bg-black opacity-50"></div>

            <div className="container">
              <Routes>
                <Route path="/" element={<AllActors />} />
                <Route path="/actor/:actorId" element={<DetailActors />} />
              </Routes>
            </div>
            <Footer />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
