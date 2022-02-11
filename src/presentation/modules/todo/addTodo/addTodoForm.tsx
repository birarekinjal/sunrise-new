import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useTodo from '../hooks/useTodo';
import { FormValues } from '../model/todo';
// import { yupResolver } from '@hookform/resolvers/yup';
// import schema from '../schema/addTodo';

function AddTodoForm() {
  const [{ addTodoLoader }, { addTodo }] = useTodo();

  const {
    register,
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    //  resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addTodo(data);
  };

  return (
    <div>
      {addTodoLoader && 'Loading'
        || (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('firstName')} />
            <input {...register('lastName')} />
            <input type="email" {...register('email')} />
            <input type="submit" />
          </form>
        )}
    </div>
  );
}

export default AddTodoForm;
