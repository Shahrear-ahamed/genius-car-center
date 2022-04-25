import React from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const url = "https://obscure-inlet-14741.herokuapp.com/service";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Service Name"
          {...register("name", { required: true })}
        />
        <input
          className="mb-3"
          placeholder="Image Url"
          type="text"
          {...register("img")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input className="mb-5" type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
