import { Route, Routes } from "react-router-dom";
import { Subscribe } from "./pages/Subscribe";
import { Subscribed } from "./pages/Subscribed";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/subscribed" element={<Subscribed />} />
    </Routes>
  )
}