import { useState, useMemo } from 'react';
import { TodoService } from '../../../../infrastructure/services/todo/todo.service';
import { FormValues } from '../model/todo';

const useTodo = () => {
  const [state, setState] = useState({
    addTodoLoader: false,
    isError: false,
  });

  const todoService = new TodoService();

  const handlers = useMemo(
    () => ({

      addTodo: (data : FormValues) => {
        setState({
          ...state,
          addTodoLoader: true,
          isError: false,
        });

        todoService.addTodoSubmit(data)
          .then((res: any) => {
            if (res.data) {
              setState({
                ...state,
                addTodoLoader: false,
                isError: false,
              });
              alert('data Submit');
            } else {
              setState({
                ...state,
                addTodoLoader: false,
                isError: true,
              });
              // !hideErrorMessage && alert('Error' || res.data)
            }
          })
          .catch(() => {
            setState({ ...state, addTodoLoader: false, isError: true });
          });
      },
    }),
    [],
  );

  return [state, handlers] as const;
};

export default useTodo;
