import React, { Component } from 'react';
import Button from "react-bootstrap/Button";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Workouts</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.workoutData.slice(0, 3).map((row, index) => {
        return (
            <tr key={index}>
                <td>
                    <Button variant="light" 
                            onClick={() => props.startWorkout(row)}
                            style={{ marginBottom: '5px', marginTop: '5px' }}
                    >
                        {row.title}
                    </Button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TablePreset extends Component {
    render() {
        const { workoutData, startWorkout } = this.props;

        return <div style={tablePresetStyle}>
            <h4>Preset workout routines</h4>
            <table>
                <TableHeader />
                <TableBody workoutData={workoutData} startWorkout={startWorkout} />
            </table>
        </div>;
    }
}

const tablePresetStyle = {
  borderTop: "1px solid #e9eaec",
  marginTop: "30px",
  paddingTop: "10px"
};

export default TablePreset;
