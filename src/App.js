import { useState } from "react";
import "./App.css";
import Canvas from "./Canvas";
import ConfigureComponent from "./ConfigureComponent";
import Controls from "./Controls";

function App() {
  const [showConfig, setShowConfig] = useState("");
  const [formData, setFormData] = useState([]);

  const showConfigHandler = (value) => {
    const title = value.type;
    setShowConfig(title);
  };

  const discardHandler = () => {
    setShowConfig("");
  };

  const configSubmitHandler = (fieldData) => {
    let newFormData = JSON.parse(JSON.stringify(formData));
    newFormData.push(fieldData);
    setFormData(newFormData);
    setShowConfig("");
  };

  return (
    <div className="outer">
      <h1>Form Builder</h1>
      <div className="dashboardOuter">
        <div className="controlFlex">
          <Controls showConfigHandler={showConfigHandler} />
          {showConfig.length > 0 && (
            <ConfigureComponent
              discardHandler={discardHandler}
              showConfig={showConfig}
              configSubmitHandler={configSubmitHandler}
            />
          )}
        </div>
        <Canvas formData={formData} />
      </div>
    </div>
  );
}

export default App;
