import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CreateUserForm from "./components/CreateUserForm";
import { deleteUser } from "./store";

/**
 * COMPONENT
 */
const Users = ({ users, auth, deleteUser }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          {users ? (
            users.map((user) => (
              <div className="border p-2" key={user.id}>
                <h1>
                  {user.username}
                  {/* <Link to={`/tasks/${user.id}`}>{user.username} </Link> */}
                  <button onClick={() => deleteUser(user)}>X</button>
                </h1>
              </div>
            ))
          ) : (
            <div>
              <h1>No Employees Yet</h1>
            </div>
          )}
        </div>
        <div className="col">
          <CreateUserForm />
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    users: state.users || [],
    auth: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteUser: (user) => {
      dispatch(deleteUser(user));
    },
  };
};

export default connect(mapState, mapDispatch)(Users);
