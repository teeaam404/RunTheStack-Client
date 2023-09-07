import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const QnaSection = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);

  const onSubmit = (data) => {
    const question = {
      email: user.email,
      userImage: user.photoURL,
      userName: user.displayName,
      title: data.title,
      body: data.body,
      tags: data.tags,
      date: data.date,
    };
    console.log(data); // You can replace this with your desired form submission logic
    fetch("https://run-the-stack-server-delta.vercel.app/question", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(question),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Question Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  const predefinedTags = ["html", "css", "tailwind"];

  return (
    // <div className="hero min-h-screen bg-base-200">
    //   <div className="hero-content flex-col lg:flex-row-reverse">
    //     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //       <div className="card-body">
    //         <form onSubmit={handleSubmit(onSubmit)}>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Title:</span>
    //             </label>
    //             <input
    //               type="text"
    //               id="title"
    //               {...register("title")}
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Body:</span>
    //             </label>
    //             <textarea
    //               id="body"
    //               {...register("body")}
    //               className="input input-bordered"
    //             />
    //           </div>

    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Tags:</span>
    //             </label>
    //             <select
    //               id="tags"
    //               {...register("tags")}
    //               className="input input-bordered"
    //             >
    //               {predefinedTags.map((tag) => (
    //                 <option key={tag} value={tag}>
    //                   {tag}
    //                 </option>
    //               ))}
    //             </select>
    //           </div>

    //           <div className="form-control">
    //             <label className="label">
    //               <span className="label-text">Date:</span>
    //             </label>
    //             <input
    //               type="date"
    //               id="date"
    //               {...register("date")}
    //               className="input input-bordered"
    //             />
    //           </div>
    //           <div className="form-control mt-6">
    //             <button type="submit" className="btn btn-primary">
    //               Submit
    //             </button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="qna-bg">

      </div>
    </>
  );
};

export default QnaSection;
