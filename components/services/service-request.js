import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/dist/client/router";
import { motion } from "framer-motion";
import { useState } from "react";
import ServiceButton from "../ui/service-button";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./service-request.module.css";

function ServiceRequest() {
  const router = useRouter();
  const [formStep, setFormStep] = useState(0);
  const [hasValue, setHasValue] = useState(false);
  const [selected, setSelected] = useState(false);
  const [hasValue2, setHasValue2] = useState(false);
  const [checked, setChecked] = useState({
    option1: false,
    option2: false,
    option3: false,
    option4: false,
  });

  const changeRadio = () => {
    setChecked(() => {
      return {
        option1: false,
        option2: false,
        option3: false,
        option4: false,
      };
    });
  };
  const backFormStep = () => {
    formStep == 0 ? setFormStep(0) : setFormStep((cur) => cur - 1);
  };
  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const inputCheck = (e) => {
    if (e != "") {
      setHasValue(true);
      console.log(hasValue);
    } else {
      setHasValue(false);
      console.log(hasValue);
    }
  };

  const inputCheck2 = (e) => {
    if (e != "") {
      setHasValue2(true);
      setSelected(false);
      changeRadio();
      console.log(hasValue);
    } else {
      setHasValue2(false);
      console.log(hasValue);
    }
  };

  const checkSelect = (e) => {
    if (e) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: "all" });

  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: "/api/service-request",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      if (response.status == 200) {
        reset();
        router.push("/");
      }
    } catch (err) {
      alert(err);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="flex md:max-w-2xl p-8 md:p-8 flex-col justify-between w-full xl:h-[400px] rounded-lg overflow-hidden shadow-lg  bg-gray-100 text-black"
    >
      {formStep >= 0 && (
        <motion.section
          key={formStep}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          exit={{
            x: "100vw",
            transition: { duration: 2, ease: "easeInOut" },
          }}
          transition={{ stiffness: 150, duration: 0.75 }}
          className={`space-y-6 w-full flex flex-col items-center ${
            formStep === 0 ? "block" : "hidden"
          }`}
        >
          <div className="text-center">
            <h1 className="text-4xl">Personal Information</h1>
            <p className="text-orange-500">Help us to identify you.</p>
          </div>
          <div className="w-full space-y-4">
            <div>
              <label>Name</label>
              <input
                name="name"
                type="text"
                {...register("name", {
                  required: {
                    value: true,
                    message: "You must enter your name",
                  },
                })}
                className={`bg-transparent font-light form-input border-b border-orange-500 px-2 w-full focus:outline-none text-gray-900 placeholder-current ${
                  errors.name ? "border-red-500" : null
                }`}
              />
              <div className="text-red-500 font-medium">
                {errors?.name?.message}
              </div>
            </div>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="text"
                {...register("email", {
                  required: {
                    value: true,
                    message: "You must enter an email address",
                  },
                  minLength: {
                    value: 7,
                    message: "This is too short",
                  },
                  maxLength: {
                    value: 120,
                    message: "This is too long",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "This needs to be a valid email address",
                  },
                })}
                onKeyDown={(e) => {
                  isValid && e.code == "Enter" ? completeFormStep() : null;
                }}
                className={`bg-transparent font-light border-b border-orange-500 px-2 w-full focus:outline-none text-gray-900 placeholder-current ${
                  errors.email ? "border-red-500" : null
                }`}
              />
              <div className="text-red-500 font-medium">
                {errors?.email?.message}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {formStep >= 1 && (
        <motion.section
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 150, duration: 0.75 }}
          className={`space-y-4 w-full flex flex-col items-center ${
            formStep === 1 ? "block" : "hidden"
          }`}
        >
          <div className="text-center">
            <h1 className="text-4xl">Services</h1>
            <p className="text-orange-500">
              Which services will help your business to grow?
            </p>
          </div>
          <div className="w-full">
            <div className=" grid grid-cols-2 gap-1">
              {/* iOS development */}
              <div className="col-span-2 flex items-center  gap-x-2">
                <label className="text-lg flex items-center gap-2">
                  <input
                    id={classes.checkbox1}
                    value="iOS App Developent"
                    type="checkbox"
                    {...register("service", {
                      required: {
                        value: !hasValue,
                        message: "Please select your choice(s) of service",
                      },
                    })}
                    className=" appearance-none h-4 w-4 border-2 border-orange-500 rounded"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`h-5 ${classes.iOS} w-3 absolute left-0.5 text-opacity-0 text-orange-500`}
                  />
                  iOS App Development
                </label>
              </div>

              {/* Android */}
              <div className="col-span-2 flex items-center  gap-x-2">
                <label className="text-lg flex items-center gap-2">
                  <input
                    id={classes.checkbox2}
                    value="Android App Development"
                    type="checkbox"
                    {...register("service", {
                      required: {
                        value: !hasValue,
                        message: "Please select your choice(s) of service",
                      },
                    })}
                    className=" appearance-none h-4 w-4 border-2 border-orange-500 rounded"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`h-5 ${classes.droid} w-3 absolute left-0.5 text-opacity-0 text-orange-500`}
                  />
                  Android App Development
                </label>
              </div>

              {/* app maintenance */}
              <div className="col-span-2 flex items-center gap-x-2">
                <label className="text-lg flex items-center gap-2">
                  <input
                    id={classes.checkbox5}
                    value="App Maintenance"
                    type="checkbox"
                    {...register("service", {
                      required: {
                        value: !hasValue,
                        message: "Please select your choice(s) of service",
                      },
                    })}
                    className=" appearance-none h-4 w-4 border-2 border-orange-500 rounded"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`h-5 ${classes.appm} w-3 absolute left-0.5 text-opacity-0 text-orange-500`}
                  />
                  App Maintenance
                </label>
              </div>

              {/* web development */}
              <div className="col-span-2 flex items-center  gap-x-2">
                <label className="text-lg flex items-center gap-2">
                  <input
                    id={classes.checkbox3}
                    value="Website Development"
                    type="checkbox"
                    {...register("service", {
                      required: {
                        value: !hasValue,
                        message: "Please select your choice(s) of service",
                      },
                    })}
                    className=" appearance-none h-4 w-4 border-2 border-orange-500 rounded"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`h-5 ${classes.web} w-3 absolute left-0.5 text-opacity-0 text-orange-500`}
                  />
                  Web Development
                </label>
              </div>

              {/* web maintenance */}
              <div className="col-span-2 flex items-center gap-x-2">
                <label className="text-lg flex items-center gap-2">
                  <input
                    id={classes.checkbox4}
                    value="Website Maintenance"
                    type="checkbox"
                    {...register("service", {
                      required: {
                        value: !hasValue,
                        message: "Please select your choice(s) of service",
                      },
                    })}
                    className=" appearance-none h-4 w-4 border-2 border-orange-500 rounded"
                  />
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={`h-5 ${classes.webm} w-3 absolute left-0.5 text-opacity-0 text-orange-500`}
                  />
                  Web Maintenance
                </label>
              </div>

              {/* other service */}
              <div className="col-span-2">
                <input
                  name="other_services"
                  placeholder="Specify any others..."
                  type="text"
                  {...register("other_services", {
                    required: {
                      value: false,
                      message: "Please select your choice(s) of service",
                    },
                  })}
                  onChange={(e) => {
                    inputCheck(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    e.target.value != "" && e.code == "Enter"
                      ? completeFormStep()
                      : null;
                  }}
                  className={`bg-transparent font-light form-input border-b border-orange-500 px-2 w-full focus:outline-none 
                    focus:border-b-2 text-gray-900 placeholder-current ${
                      errors.other_services ? "border-red-500" : null
                    }`}
                />
                <div className="text-red-500 font-medium">
                  {hasValue ? "" : errors?.service?.message}
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {formStep >= 2 && (
        <motion.section
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 150, duration: 0.75 }}
          className={`space-y-8 w-full flex flex-col items-center ${
            formStep === 2 ? "block" : "hidden"
          }`}
        >
          <div className="text-center">
            <h1 className="text-4xl">Budget</h1>
            <p className="text-orange-500">
              We&apos;ll help you make every dollar count.
            </p>
          </div>
          <div className="w-full gap-4 grid lg:grid-cols-4 lg:justify-between">
            {/* <5K */}
            <div className="flex items-center gap-x-1 w-full">
              <input
                disabled={hasValue2}
                defaultChecked={hasValue ? checked.option1 : hasValue}
                onSelect={(e) => {
                  checkSelect(e.target.value);
                }}
                value="<$5000"
                className="w-5 h-5 peer"
                type="radio"
                {...register("budget", {
                  required: {
                    value: !hasValue2,
                    message: "You must enter or select budget",
                  },
                })}
              />
              <label
                className={`font-bold text-lg ${
                  hasValue2 ? "" : "peer-checked:text-orange-500"
                }`}
              >
                {"< $5,000"}
              </label>
            </div>
            {/* $5,000-$10,000 */}
            <div className="flex items-center gap-x-1">
              <input
                disabled={hasValue2}
                defaultChecked={hasValue ? checked.option2 : hasValue}
                onSelect={(e) => {
                  checkSelect(e.target.value);
                }}
                value="$5,000-$10,000"
                className="w-5 h-5 peer"
                type="radio"
                {...register("budget", {
                  required: {
                    value: !hasValue2,
                    message: "You must enter or select budget",
                  },
                })}
              />
              <label
                className={`font-bold text-lg ${
                  hasValue2 ? "" : "peer-checked:text-orange-500"
                }`}
              >
                {"$5K-$10K"}
              </label>
            </div>
            {/* $10,000-$50,000 */}
            <div className="flex items-center gap-x-1">
              <input
                disabled={hasValue2}
                defaultChecked={hasValue ? checked.option3 : hasValue}
                onSelect={(e) => {
                  checkSelect(e.target.value);
                }}
                name="budget"
                value="$10,000-$50,000"
                className="w-5 h-5 peer"
                type="radio"
                {...register("budget", {
                  required: {
                    value: !hasValue2,
                    message: "You must enter or select budget",
                  },
                })}
              />
              <label
                className={`font-bold text-lg ${
                  hasValue2 ? "" : "peer-checked:text-orange-500"
                }`}
              >
                {"$10K-$50K"}
              </label>
            </div>

            {/* >$50,000 */}
            <div className="flex items-center gap-x-1">
              <input
                disabled={hasValue2}
                defaultChecked={hasValue ? checked.option4 : hasValue}
                onSelect={(e) => {
                  checkSelect(e.target.value);
                }}
                name="budget"
                value=">$50,000"
                className="w-5 h-5 peer"
                type="radio"
                {...register("budget", {
                  required: {
                    value: !hasValue2,
                    message: "You must enter or select budget",
                  },
                })}
              />
              <label
                className={`font-bold text-lg ${
                  hasValue2 ? "" : "peer-checked:text-orange-500"
                }`}
              >
                {"> $50K"}
              </label>
            </div>

            {/* Enter my amount */}
            <div className="lg:col-span-4">
              <input
                defaultValue={selected ? "" : ""}
                name="own_amount"
                placeholder="Enter my own..."
                type="text"
                {...register("own_amount", {
                  required: {
                    value: hasValue2,
                    message: "You must enter or select budget",
                  },
                })}
                onKeyUp={(e) => {
                  inputCheck2(e.target.value);
                }}
                onKeyDown={(e) => {
                  e.target.value != "" && e.code == "Enter"
                    ? completeFormStep()
                    : null;
                }}
                className={`bg-transparent font-light form-input border-b border-orange-500 px-2 w-full focus:outline-none 
                    focus:border-b-2 text-gray-900 placeholder-current `}
              />
              <div className="text-red-500 font-medium">
                {errors.budget && errors.budget.message}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {formStep >= 3 && (
        <motion.section
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ stiffness: 150, duration: 0.75 }}
          className={`space-y-8 w-full flex flex-col items-center ${
            formStep === 3 ? "block" : "hidden"
          }`}
        >
          <div className="text-center">
            <h1 className="text-4xl">Project Details</h1>
            <p className="text-orange-500">Tell us what you have in mind.</p>
            <div className="w-full">
              <textarea
                className="w-full bg-gray-50 p-2 border border-orange-300 rounded-lg"
                cols={80}
                rows={7}
                {...register("details", {
                  required: {
                    value: true,
                    message: "Please provide project details",
                  },
                })}
              ></textarea>
            </div>
            <div className="text-red-500 font-medium">
              {errors?.details?.message}
            </div>
          </div>
        </motion.section>
      )}

      <ServiceButton
        formStep={formStep}
        back={backFormStep}
        forward={completeFormStep}
        isValid={isValid}
      />
    </form>
  );
}

export default ServiceRequest;
