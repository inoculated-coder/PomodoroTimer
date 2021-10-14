import React from "react";
import PropTypes from "prop-types";
import classNames from "../utils/class-names";

function ControlPanel({ isPlaying, onPlayPause, onStop, disable,testid }) {
  return (
    <div
      className="btn-group btn-group-lg mb-2"
      role="group"
      aria-label="Timer controls"
    >
      <button
        type="button"
        className="btn btn-primary"
        data-testid="play-pause"
        title="Start or pause timer"
        onClick={onPlayPause}
      >
        <span
          className={classNames({
            oi: true,
            "oi-media-play": !isPlaying,
            "oi-media-pause": isPlaying,
          })}
        />
      </button>
      {/* TODO: Implement stopping the current focus or break session */}
      {/* TODO: and disable when there is no active session */}
      <button
        disabled ={disable}
        data-testid={`${testid}`}
        type="button"
        className="btn btn-secondary"
        title="Stop the session"
        onClick={onStop}
      >
        <span className="oi oi-media-stop" />
      </button>
    </div>
  );
}

ControlPanel.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onPlayPause: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
};

export default ControlPanel;
