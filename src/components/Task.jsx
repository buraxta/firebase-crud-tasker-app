import React, {useEffect, useState} from "react";
import { db } from "../services/firebase.config";
import { collection, getDocs } from "firebase/firestore";

const Task = () => {

  const [tasks, setTasks] = useState([]);

  const collectionRef = collection(db, 'tasks');

  useEffect(() => {
    const getTasks = async () => {
      await getDocs(collectionRef).then((task) => {
        let taskData = task.docs.map((doc) => ({...doc.data(), id: doc.id}));
        setTasks(taskData);
      })
    }
    getTasks();
  }, [])
  
  return (
    <>
      <div className="container">
        <div className="row col-md-12">
          <div className="card card-white">
            <div className="card-body">

              {tasks.map(({task, id}) => 
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
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Task;
