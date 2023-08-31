import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const QnaSection = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const question = {
      title: data.bookName,
      body: data.body,
     
      tags: data.tags,
     
     date: data.date,
     
  };
    console.log(data); // You can replace this with your desired form submission logic
    fetch('http://localhost:5000/question', {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
      },
      body: JSON.stringify(question),
  })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: 'Book Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
        });
    }
    })
    
  };
  const predefinedTags = ['html', 'css', 'tailwind'];
  
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti
            eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title:</span>
                </label>
                <input type="text" id="title" {...register('title')} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body:</span>
                </label>
                <textarea id="body" {...register('body')} className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Tags:</span>
                </label>
                <select id="tags" {...register('tags')} className="input input-bordered">
                  {predefinedTags.map((tag) => (
                    <option key={tag} value={tag}>
                      {tag}
                    </option>
                  ))}
                </select>
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date:</span>
                </label>
                <input type="date" id="date" {...register('date')} className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QnaSection;
