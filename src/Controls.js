const Controls = ({ showConfigHandler }) => {
  return (
    <>
      <div className="controlsOuter">
        <h3>Controls</h3>
        <div className="componentFlex">
          <button
            className="inputButton"
            onClick={() => showConfigHandler({ type: "input" })}
          >
            Input
          </button>
          <button
            className="submitButton"
            onClick={() => showConfigHandler({ type: "button" })}
          >
            Button
          </button>
        </div>
      </div>
    </>
  );
};

export default Controls;
