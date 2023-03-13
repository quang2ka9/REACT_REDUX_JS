import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";


class MyComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        arrJobs: [
            {id: 'abcJob1', title: 'developer', salary: '500'},
            {id: 'abcJob2', title: 'Test', salary: '400'},
            {id: 'abcJob3', title: 'hi', salary: '300'}
        ]

    }

    addNewJob = (job) => {
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }

    deleteJob = (job) =>{
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJobs
        })
    }


    render() {
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />

            </>
        )
    }
}

export default MyComponent;