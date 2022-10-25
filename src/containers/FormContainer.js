import React, { Component } from "react";
import ButtonForm from "../components/Button";
import Input from "../components/Input";
import CheckBox from "../components/CheckBox";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      newRoutine: {
        title: "",
        exercises: []
      },

      exercisesList: [
        "Situps",
        "Plank",
        "Pushups",
        "Biceps curls",
        "Triceps extention",
        "Bench press",
        "Squats",
        "Jump Squats",
        "Lounges",
        "Calves stretch"
      ],
      showForm: props.showForm
    };

    this.state = this.initialState;

    this.handleTitle = this.handleTitle.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
  }

  handleTitle(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({ newRoutine: { ...prevState.newRoutine, title: value } })
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newRoutine.exercises.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newRoutine.exercises.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newRoutine.exercises, newSelection];
    }
    this.setState(prevState => ({
      newRoutine: { ...prevState.newRoutine, exercises: newSelectionArray }
    })
    );
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newRoutine: {
        title: "",
        exercises: []
      }
    });
  }

  submitForm = e => {
    e.preventDefault();
    this.props.handleSubmit(this.state.newRoutine);
    this.setState(this.initialState);
  };

  render() {
    return (
      <form className="container-fluid" onSubmit={this.submitForm}>
        <Input
          inputType={"text"}
          title={"Exercise routine name "}
          name={"name"}
          value={this.state.newRoutine.title}
          placeholder={"Enter a title"}
          handleChange={this.handleTitle}
        />

        <CheckBox
          title={"Exercises"}
          name={"Exercises"}
          options={this.state.exercisesList}
          selectedOptions={this.state.newRoutine.exercises}
          handleChange={this.handleCheckBox}
        />
        <ButtonForm
          action={this.state.newRoutine.title !== '' && this.state.newRoutine.exercises.length > 0 && this.submitForm}
          type={"warning"}
          title={"Submit"}
        />

        <ButtonForm
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={{ marginLeft: '35px' }}
        />
      </form>
    );
  }
}

export default FormContainer;
