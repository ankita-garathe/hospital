import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

function StafRegistration() {
  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date of Birth is required"),
    bloodGroup: Yup.string().required("Blood Group is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    adharNumber: Yup.string().required("Adhar Number is required"),
    reasonOfVisit: Yup.string().required("Reason of Visit is required"),
    pulseRate: Yup.string().required("Pulse Rate is required"),
    temperature: Yup.string().required("Temperature is required"),
    oxygenSaturation: Yup.string().required("Oxygen Saturation is required"),
    patientWeight: Yup.string().required("Patient Weight is required"),
    selectedDoctor: Yup.string().required("Selected Doctor is required"),
    terms: Yup.boolean().oneOf(
      [true],
      "You must accept the terms and conditions"
    ),
  });

  // Initialize useForm hook with validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="main-panel" id="mainPanel">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              Valid information is required to register.
            </h4>
            <form className="form-sample" onSubmit={handleSubmit(onSubmit)}>
              <p className="card-description">Personal info</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      First Name
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        {...register("firstName")}
                      />
                      <span className="text-danger">
                        {errors.firstName?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Last Name</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        {...register("lastName")}
                      />
                      <span className="text-danger">
                        {errors.lastName?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Other form fields with similar validation handling */}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Gender</label>
                    <div className="col-sm-9">
                      <select className="form-select" {...register("gender")}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      <span className="text-danger">
                        {errors.gender?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Date of Birth
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        {...register("dob")}
                        placeholder="Enter Date of Birth"
                      />
                      <span className="text-danger">{errors.dob?.message}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Blood Group
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        placeholder="Blood Group"
                        {...register("bloodGroup")}
                      />
                      <span className="text-danger">
                        {errors.bloodGroup?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-sm-9">
                      <input
                        className="form-control"
                        placeholder="Phone Number"
                        {...register("phoneNumber")}
                      />
                      <span className="text-danger">
                        {errors.phoneNumber?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Address</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Address"
                        {...register("address")}
                      />
                      <span className="text-danger">
                        {errors.address?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Email Address
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Email Address"
                        {...register("email")}
                      />
                      <span className="text-danger">
                        {errors.email?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Adhar Number
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Adhar Number"
                        {...register("adharNumber")}
                      />
                      <span className="text-danger">
                        {errors.adharNumber?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Reason of Visit
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Reason of Visit"
                        {...register("reasonOfVisit")}
                      />
                      <span className="text-danger">
                        {errors.reasonOfVisit?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Pluse Rate
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Pluse Rate"
                        {...register("pulseRate")}
                      />
                      <span className="text-danger">
                        {errors.pulseRate?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Temperature
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Temperature"
                        {...register("temperature")}
                      />
                      <span className="text-danger">
                        {errors.temperature?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Oxygen Saturation
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Oxygen Saturation"
                        {...register("oxygenSaturation")}
                      />
                      <span className="text-danger">
                        {errors.oxygenSaturation?.message}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group row">
                    <label className="col-sm-3 col-form-label">
                      Patient Weight
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Patient Weight"
                        {...register("patientWeight")}
                      />
                      <span className="text-danger">
                        {errors.patientWeight?.message}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="form-group" id="roles">
                  <label htmlFor="role">Selected Doctor:</label>
                  <select
                    className="form-select"
                    id="selectOption"
                    {...register("selectedDoctor")}
                  >
                    <option id="selectOpt1" value="">
                      Selected Doctor
                    </option>
                    <option id="selectOpt2" value="Visited-Doctor">
                      Visited Doctor
                    </option>
                    <option id="selectOpt3" value="Other-Role">
                      Other Role
                    </option>
                  </select>
                  <span className="text-danger">
                    {errors.selectedDoctor?.message}
                  </span>
                </div>
              </div>
              <div className="form-check mb-3" id="termsCondition">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("terms")}
                />
                <label className="form-check-label" htmlFor="terms">
                  I agree with the <a href="#">terms and conditions</a> for
                  registration.
                </label>
                <span className="text-danger">{errors.terms?.message}</span>
              </div>
              <button type="submit" className="btn btn-success">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default StafRegistration;
