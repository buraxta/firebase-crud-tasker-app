import React, { useEffect, useState } from "react";
import { db } from "../services/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [createTask, setCreateTask] = useState("");

  const collectionRef = collection(db, "tasks");

  useEffect(() => {
    const getTasks = async () => {
      await getDocs(collectionRef)
        .then((task) => {
          let taskData = task.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setTasks(taskData);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getTasks();
  }, []);

  // Add Task Handler
  const submitTask = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collectionRef, {
        task: createTask,
        isCecked: false,
      })
    } catch (err) {

    }
    console.log(createTask);
  };

  return (
    <>
      <div className="container">
        <div className="row col-md-12">
          <div className="card card-white">
            <div className="card-body">
              {/* Button trigger modal */}
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addTask"
              >
                Add Task
              </button>
              {tasks.map(({ task, id }) => (
                <div className="todo-list" key={id}>
                  <div className="todo-item">
                    <hr />
                    <span>
                      <div className="checker">
                        <span>
                          <input type="checkbox" />
                        </span>
                      </div>
                      &nbsp;{task}
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
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal  */}
      <div
        className="modal fade"
        id="addTask"
        tabIndex="-1"
        aria-labelledby="addTaskLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form onSubmit={submitTask} className="d-flex">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="addTaskLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a task"
                  onChange={(e) => setCreateTask(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Task;
