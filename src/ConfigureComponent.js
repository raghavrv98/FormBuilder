import { useEffect, useState } from "react";

const ConfigureComponent = ({
  showConfig,
  discardHandler,
  configSubmitHandler,
}) => {
  const [fieldData, setFieldData] = useState({
    label: "",
    type: showConfig === "button" ? "button" : "text",
  });

  const onChangeHandler = (event) => {
    let value = event.target.value;
    let id = event.target.id;
    let newFieldData = JSON.parse(JSON.stringify(fieldData));
    newFieldData[id] = value;
    setFieldData(newFieldData);
  };

  useEffect(() => {
    setFieldData({
      label: "",
      type: showConfig === "button" ? "button" : "text",
    });
  }, [showConfig]);

  return (
    <>
      <div className="configOuter">
        <h4>Config your {showConfig} tag</h4>
        {showConfig === "input" ? (
          <div className="configBody">
            <div className="fieldFlex">
              <label>Enter Label</label>
              <input
                id="label"
                value={fieldData?.label}
                onChange={onChangeHandler}
                className="label"
                type="text"
                placeholder="label"
              />
            </div>
            <div className="inputDivider"></div>
            <div className="fieldFlex">
              <label>Select any type</label>
              <select
                id="type"
                value={fieldData.type}
                className="label"
                onChange={onChangeHandler}
              >
                <option value="text">Text</option>
                <option value="password">Password</option>
                <option value="email">Email</option>
              </select>
            </div>
            <div className="inputDivider"></div>
            <div>
              <label>Select validations</label>
              <div className="msgBox">
                We can add validations here by passing an object in textarea box
                or by manually make them from here
              </div>
            </div>
          </div>
        ) : (
          <div className="configBody">
            <div className="fieldFlex">
              <label>Enter button title</label>
              <input
                id="label"
                className="label"
                onChange={onChangeHandler}
                value={fieldData.label}
                type="text"
                placeholder="button title"
              />
            </div>
            <div className="inputDivider"></div>
            <div>
              <label>Select validations</label>
              <div className="msgBox">
                We can add validations here by passing an object in textarea box
                or by manually make them from here
              </div>
            </div>
          </div>
        )}
        <div className="configFooter">
          <button onClick={discardHandler} className="discardConfig">
            Discard
          </button>
          <button
            onClick={() => configSubmitHandler(fieldData)}
            className="submitConfig"
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfigureComponent;
