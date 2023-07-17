import {useState} from "react";

const content = [
  {
    tab: 'section 1',
    content: "I'm the content of the section 1"
  },
  {
    tab: 'section 2',
    content: "I'm the content of the section 2"
  }
]

const useTabs = (initialTabIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTabIndex);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return { currentItem: allTabs[currentIndex], changeItem: setCurrentIndex }
}

function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => { return (
        <button key={index} onClick={() => changeItem(index)}>{section.tab}</button>
      )})}
      <div>{currentItem.content}</div>

    </div>
  )
}

export default App;
