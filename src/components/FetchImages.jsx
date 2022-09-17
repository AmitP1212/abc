import React from 'react';
import '../App.css';
//Import react routes and its other modules
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Bootstrap libraries
// import '../Content/bootstrap.min.css';
import 'bootstrap';
//jquery, popper.js libraries for bootstrap modal
// import '../Script/jquery.min.js';
import $ from 'jquery';
//Axios servies module for post or get request
import axios from 'axios';

class FetchImages extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            userdetails: []
        }
    }
    //Get user details inside bootstrap modal popup
    userdetails(userid) {

        const fd = new FormData();
        fd.append('userid', userid);


        axios.post('http://localhost/save.php', fd
        ).then(res => {

            //Storing user detail in state array object
            this.setState({ userdetails: res.data[0] });
            $("#myModal").modal("show");

        }
        );
    }
    componentDidMount() {
        //Get all users details in bootstrap table
        axios.get('http://localhost:8080/admin/getadmin').then(res => {
            //Storing users detail in state array object
            this.setState({ data: res.data });
            console.log(res.data)
        });

    }


    render() {

        return (

            <div className="maincontainer">

                <h1 className="mr-5 ml-5 mt-5">Reactjs simple crud tutorial for beginners</h1>
                <div className="container mb-5 mt-5 text-left">
                    <button className="bg-primary mb-3"><Link className="nav-link" to={'/adduser'}><span>Add</span><i className="fas fa-user"></i></Link></button>
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Username</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((result) => {
                                return (

                                    <tr>
                                        <td>{result.admin_id}</td>
                                        <td>{result.admin_password}</td>
                                        <td>{result.admin_profile_image}</td>
                                        <td>
                                            <button className="bg-info" onClick={e => { this.userdetails(result.id) }}> <i className="fas fa-eye"></i> </button>
                                            <button className="bg-warning"> <i className="fas fa-edit"></i> </button>
                                            <button className="bg-danger"> <i className="fas fa-trash"></i> </button>
                                        </td>
                                    </tr>

                                )
                            })}


                        </tbody>
                    </table>


                </div>
                <div className="modal" id="myModal">
                    <div className="modal-dialog">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h4 className="modal-title align-center">User : {this.state.userdetails.username}</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>

                            <div className="modal-body text-center">
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Email</th>
                                            <th>Username</th>

                                        </tr>
                                    </thead>
                                    <tbody>


                                        <tr>
                                            <td>{this.state.userdetails.id}</td>
                                            <td>{this.state.userdetails.email}</td>
                                            <td>{this.state.userdetails.username}</td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    };
}
export default FetchImages;