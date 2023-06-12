import React from "react";

const Task = () => {
  return (
    <>
      <div className="container">
        <div className="row col-md-12">
          <div className="card card-white">
            <div className="card-body">
              <div className="todo-list">
                <div className="todo-item">
                  <hr />
                  <span>
                    <div className="checker">
                      <span>
                        <input type="checkbox" />
                      </span>
                    </div>
                    &nbsp;Learn Web Dev
                  </span>
                  <span className="float-end mx-3">
                    <button type="button" className="btn btn-primary">
                      Edit Task
                    </button>
                  </span>
                  <button
                    type="button"
                    className="btn btn-danger  float-end mx-3"
                  >
                    Delete Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
