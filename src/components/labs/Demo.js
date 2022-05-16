import React from "react";
const Demo = ({
                      todo = {
                          done: true,
                          title: 'Buy milk',
                          status: 'COMPLETED'
                      }
                  }) => {
    return(
        <li>
            <input type="checkbox"
                   defaultChecked={todo.done}/>
            {todo.title}
            ({todo.status})
        </li>
    );
}
export default Demo;
