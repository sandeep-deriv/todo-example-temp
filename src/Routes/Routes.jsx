import { Routes, Route } from "react-router-dom";
import About from "../Components/About/About";
import AppWrapper from "../Components/Common/AppWrapper";
import Todo from "../Components/Todo/Todo";


const AppRoutes = () => {
    return (
        <AppWrapper>
            <Routes>
                <Route path="/" element={<Todo />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AppWrapper>
    )
}

export default AppRoutes;