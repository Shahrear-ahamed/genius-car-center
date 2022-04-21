import React from "react";
import useService from "../../hooks/useService";

const ManageService = () => {
  const [services, setServices] = useService([]);
  const deleteServide = (id) => {
    const procced = window.confirm("Are sure?");
    if (procced) {
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage Your sercice</h2>
      <div>
        {services.map((service) => (
          <h5 key={service._id}>
            {service.name}{" "}
            <button onClick={() => deleteServide(service._id)}>X</button>
          </h5>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
