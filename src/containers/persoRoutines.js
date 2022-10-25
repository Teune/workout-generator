import React, { Component } from 'react';
import Button from "react-bootstrap/Button";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th style={{minWidth: "150px"}}>Workouts</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.workoutData.slice(3).map((row, index) => {
        return (
          <tr key={index}>
            <td>
              <Button
                variant="light"
                onClick={() => props.startWorkout(row)}
                style={{ marginBottom: "5px", marginTop: "5px" }}
              >
                {row.title}
              </Button>
            </td>
            <td>
              <Button
                variant="outline-info"
                onClick={() => props.editWorkout(index)}
                style={{ margin: "5px 5px 5px 5px" }}
              >
                Edit
              </Button>
            </td>
            <td>
              <Button
                variant="outline-danger"
                onClick={() => props.removeWorkout(index)}
                style={{ margin: "5px 5px 5px 5px" }}
              >
                Delete
              </Button>
            </td>
          </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TablePerso extends Component {
    render() {
        const { workoutData, editWorkout, removeWorkout, startWorkout } = this.props;

        return <div>
            <h4>Personal workout routines</h4>
            <table>
              <TableHeader />
              <TableBody  workoutData={workoutData} editWorkout={editWorkout} removeWorkout={removeWorkout}
              startWorkout={startWorkout} />
            </table>
          </div>;
    }
}

export default TablePerso;
