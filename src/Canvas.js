import { useEffect, useState } from "react";

const Canvas = ({ formData }) => {
  const [formValues, setFormValues] = useState({});
  const [inputFields, setInputFields] = useState([]);
  const [submitField, setSubmitField] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    alert(`Form Submitted successfully \n Payload :  ${JSON.stringify(formValues)}`);
  };

  const inputChangeHandler = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    let newFormValues = JSON.parse(JSON.stringify(formValues));
    newFormValues[id] = value;
    setFormValues(newFormValues);
  };

  useEffect(() => {
    let newInputFields = JSON.parse(JSON.stringify(inputFields));
    newInputFields = formData.filter((val) => val.type !== "button");
    let submitField = formData.find((val) => val.type === "button") || {};
    setInputFields(newInputFields);
    setSubmitField(submitField);
  }, [formData]);

  return (
    <>
      <div className="canvasOuter">
        <h3>Login Form</h3>
        <div className="cardOuter">
          <div className="card">
            <form onSubmit={submitHandler}>
              {inputFields.map((field, index) => {
                return (
                  <div key={index} className="canvasField">
                    <label>{field?.label}</label>
                    <input
                      value={formValues[field?.label]}
                      id={field?.label}
                      onChange={inputChangeHandler}
                      required
                      type={field?.type}
                    />
                  </div>
                );
              })}
              {Object.keys(submitField).length > 0 && (
                <button type="submit">{submitField?.label}</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;
