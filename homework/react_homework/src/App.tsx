import "./App.css";
import ReduxTodoSolution from "./ReduxTodoSolution";
import Day11Play from "./day11_describing_the_ui/notes";
import Day12Play from "./day12_interactivity/notes";
import Day13Play from "./day13_lifecycles/notes";
import Day14Play from "./day14_practice";
import Day16Play from "./day16_custom_hooks/notes";
import Day17Play from "./day17_performance/notes";
import Day21Play from "./day21_routing/notes";
import Day22Play from "./day22_testing";
import MenuList from "./many_practices/MenuList";
import QuizApp from "./many_practices/QuizApp";

function App() {
  const menuConfig = [
    {
      title: 'Home',
    },
    {
      title: 'Services',
      subItems: ['Cooking', 'Cleaning'],
    },
    {
      title: 'Contact',
      subItems: ['Phone', 'Mail'],
    },
  ];
  
  return (
    <>
      {/* <Day11Play /> */}
      {/* <Day12Play /> */}
      {/* <Day13Play /> */}
      {/* <Day14Play /> */}
      {/* <Day16Play /> */}
      {/* <Day17Play /> */}
      {/* <ReduxTodoSolution /> */}
      {/* <Day21Play /> */}
      {/* <Day22Play /> */}
      {/* <MenuList menuConfig={menuConfig} /> */}
      <QuizApp />
      
    </>
  );
}

export default App;
