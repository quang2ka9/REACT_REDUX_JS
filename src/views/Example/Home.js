import React from "react";
import {withRouter} from "react-router-dom";
import Color from "./HOC/Color";
import logo from '../../assets/images/Screenshot 2023-03-06 003444.png'

import {connect} from "react-redux";

class Home extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.history.push('/todo')
        }, 3000)
    }

    handleDeleteUser = (user) => {
this.props.deleteUserRedux(user);
    }

    render() {
        console.log('>>> check props', this.props)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>
                    Hello world from Homepage with Quang
                </div>
                <div>
                    <img src={logo}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deleteUserRedux: (userDelete) => dispatch({type: 'Delete_user', payload: userDelete})
    }
}

// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
