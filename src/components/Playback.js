import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class Playback extends Component {
    state = {
        listIndex: 0,
    }

    increment = () => {
        this.state.listIndex < this.props.selectedExercise[0].exercises.length -1 &&
        this.setState({
            listIndex: this.state.listIndex +1
        })
    }

    decrement = () => {
        this.state.listIndex > 0 &&
        this.setState({
            listIndex: this.state.listIndex -1
        })
    }

    closePlayback = () => {
        this.props.handlePlayback();
    }

    render() {
        const selectedExerciseStyle = {
            color: "red",
            backgroundColor: "#fad02c",         
        };
        const listIndex = this.state.listIndex;
        const displayExercise = this.props.selectedExercise[0].exercises[listIndex];
        const exercises = this.props.selectedExercise[0].exercises;
        const exerciseList = exercises.map((exercise, index) => { if(index === this.state.listIndex) {
            return <li key={index} style={selectedExerciseStyle}>{exercise}</li>  
        } else {
            return (
              <li style={playbackStyleList} key={index}>
                {exercise}
              </li>
            );
        }
        });

        return (
          <div className="container-fluid" style={playbackBackground}>
            <h2 style={playbackStyle}>
              {this.props.selectedExercise[0].title}
            </h2>
            <span style={playbackBody}>
              <Button
                style={playbackButton}
                variant="info"
                onClick={this.decrement}
              >
                Prev.
              </Button>
              {displayExercise}
              <Button
                style={playbackButton}
                variant="info"
                onClick={this.increment}
              >
                Next
              </Button>
            </span>
            <hr></hr>
            <ul style={{ backgroundColor: "#fad02c" }}>
              {exerciseList}
            </ul>
                <div style={playbackCloseButton}>
                <Button
                    variant="secondary"
                    onClick={this.closePlayback}>Close
                </Button>
            </div>
                
          </div>
        );
    }
}

const playbackBackground = {
  backgroundColor: '#fad02c',
  borderRadius: '5px',
  maxWidth: '350px',
};

const playbackStyle = {
  backgroundColor: "#fad02c",
  color: "#333652",
  display: "flex",
  justifyContent: "center"
};

const playbackStyleList = {
  backgroundColor: "#fad02c",
  color: "#333652",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column"
};

const playbackBody = {
  backgroundColor: "#fad02c",
  color: "#333652",
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "10px",
};

const playbackButton = {
    display: "flex",
    justifyContent: "space-between",
}

const playbackCloseButton = {
  backgroundColor: "#fad02c",
  display: "flex",
  justifyContent: "space-around",
  padding: "10px 0px 10px 0px"
};

export default Playback;