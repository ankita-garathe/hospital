import React from "react";
import { useForm } from "react-hook-form";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const password = watch("password");

  return (
    <div className="main-panel">
      <h2 id="heading">Valid information is required to register.</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" id="first">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First name"
            {...register("firstName", { required: "First name is required" })}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName.message}</p>
          )}
        </div>

        <div className="form-group" id="last">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Last name"
            {...register("lastName", { required: "Last name is required" })}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName.message}</p>
          )}
        </div>

        <div className="form-group" id="phone">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            placeholder="Phone Number"
            {...register("phoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
          />
          {errors.phoneNumber && (
            <p className="error-message">{errors.phoneNumber.message}</p>
          )}
        </div>

        <div className="form-group" id="addressLine">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Address"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="error-message">{errors.address.message}</p>
          )}
        </div>

        <div className="form-group" id="roles">
          <label htmlFor="role">Role:</label>
          <select
            className="form-select"
            id="role"
            {...register("role", { required: "Role is required" })}
          >
            <option value="">Select Role</option>
            <option value="Visited-Doctor">Visited Doctor</option>
            <option value="Other-Role">Other Role</option>
          </select>
          {errors.role && (
            <p className="error-message">{errors.role.message}</p>
          )}
        </div>

        <div className="form-group" id="special">
          <label htmlFor="specialist">Specialist:</label>
          <input
            type="text"
            className="form-control"
            id="specialist"
            placeholder="Specialist"
            {...register("specialist", { required: "Specialist is required" })}
          />
          {errors.specialist && (
            <p className="error-message">{errors.specialist.message}</p>
          )}
        </div>

        <div className="form-group" id="experties">
          <label htmlFor="experience">Experience:</label>
          <input
            type="text"
            className="form-control"
            id="experience"
            placeholder="Experience"
            {...register("experience", { required: "Experience is required" })}
          />
          {errors.experience && (
            <p className="error-message">{errors.experience.message}</p>
          )}
        </div>

        <div className="form-group" id="qualif">
          <label htmlFor="qualification">Qualification:</label>
          <input
            type="text"
            className="form-control"
            id="qualification"
            placeholder="Qualification"
            {...register("qualification", {
              required: "Qualification is required",
            })}
          />
          {errors.qualification && (
            <p className="error-message">{errors.qualification.message}</p>
          )}
        </div>

        <div className="form-group" id="email">
          <label htmlFor="emailId">Email Address:</label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            placeholder="Email Address"
            {...register("emailId", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email address",
              },
            })}
          />
          {errors.emailId && (
            <p className="error-message">{errors.emailId.message}</p>
          )}
        </div>

        <div className="form-group" id="passW">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>

        <div className="form-group" id="confPass">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="form-check mb-3" id="termsCondition">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            {...register("terms", { required: "You must agree to the terms" })}
          />
          <label className="form-check-label" htmlFor="terms">
            I agree with the <a href="#">terms and conditions</a> for
            registration.
          </label>
          {errors.terms && (
            <p className="error-message">{errors.terms.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
}

export default Registration;
