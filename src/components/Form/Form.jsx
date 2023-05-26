import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { CustomContext } from "../../config/context/Context.jsx";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import Logo from "../Layout/Header/Logo.jsx";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { useState, useRef } from "react";
import { FiPhone } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import formImg from "../../assets/form/Rectangle 11.png"
import "../../scss/form.scss";

const Form = () => {
  const { loginUser, registerUser } = useContext(CustomContext);
  const [passwordView, setPasswordView] = useState(false);
  const location = useLocation();
  const password = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    mode: "onBlur",
  });

  password.current = watch("password");

  const submitForm = (data) => {
    let { confirmPwd, ...user } = data;
    if (location.pathname === "/login") {
      loginUser(user);
    } else {
      registerUser(user);
    }
  };

  return (
    <div className="form">
      <div className="form__left">
        <p className="form__logo" ref={password}>
          <Link to="/">
            <Logo />
          </Link>
        </p>
        <form
          noValidate
          className="form__content"
          onSubmit={handleSubmit(submitForm)}
        >
          <h2 className="form__content-title">
            {location.pathname === "/login" ? "Sign in" : "Sign Up"}
          </h2>
          <p className="form__content-text">
            {location.pathname === "/login"
              ? "If you don’t have an account register"
              : "If already have an account login"}
            <br />
            You can{" "}
            <Link to={location.pathname === "/login" ? "/register " : "/login"}>
              {location.pathname === "/login" ? "Register " : "Login "} here !
            </Link>
          </p>
          <label className="form__label">
            <span className="form__label-text">Email</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <AiOutlineMail />
              </span>
              <input
                {...register("email", {
                  required: {
                    messege: "Email обязательно к заполнению",
                    value: true,
                  },
                  minLength: {
                    messege: "Минимум 10 символов",
                    value: 10,
                  },
                  pattern: {
                    message: "Напишите правильно свой email",
                    value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/,
                  },
                })}
                type="email"
                className="form__label-input"
                aria-label="idk"
                placeholder="Enter your email address"
              />
            </div>
            <p className="register__label-error">
              {errors.email && errors.email?.message}
            </p>
          </label>
          {location.pathname === "/register" && (
            <>
              <label className="form__label">
                <span className="form__label-text">Name</span>
                <div className="form__label-field">
                  <span className="form__label-icon">
                    <HiOutlineUser />
                  </span>
                  <input
                    {...register("name", {
                      required: {
                        messege: "Имя обязательно к заполнению",
                        value: true,
                      },
                      minLength: {
                        messege: "Минимум 2 символа",
                        value: 2,
                      },
                      pattern: {
                        message: "Напишите правильно свое имя",
                        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                      },
                    })}
                    type="text"
                    className="form__label-input"
                    aria-label="idk"
                    placeholder="Enter your Name"
                  />
                </div>
                <p className="register__label-error">
                  {errors.name && errors.name?.message}
                </p>
              </label>
              <label className="form__label">
                <span className="form__label-text">Surname</span>
                <div className="form__label-field">
                  <span className="form__label-icon">
                    <FaUser />
                  </span>
                  <input
                    {...register("surname", {
                      required: {
                        messege: "Фамилия обязательна к заполнению",
                        value: true,
                      },
                      minLength: {
                        messege: "Минимум 2 символа",
                        value: 2,
                      },
                      pattern: {
                        message: "Напишите правильно свою фамилию",
                        value: /^[а-яА-ЯёЁa-zA-Z]+$/,
                      },
                    })}
                    type="text"
                    className="form__label-input"
                    aria-label="idk"
                    placeholder="Enter your Surname"
                  />
                </div>
                <p className="register__label-error">
                  {errors.surname && errors.surname?.message}
                </p>
              </label>
            </>
          )}
          {location.pathname === "/register" && (
            <label className="form__label">
              <span className="form__label-text">Phone</span>
              <div className="form__label-field">
                <span className="form__label-icon">
                  <FiPhone />
                </span>
                <InputMask
                  mask={`+\\9\\96(999)99-99-99`}
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Это поле обязательное",
                    },
                    pattern: {
                      value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                      message: "Заполните номер телефона",
                    },
                  })}
                  type="text"
                  className="form__label-input"
                  aria-label="idk"
                  placeholder="Enter your phone number"
                />
              </div>
              <p className="register__label-error">
                {errors.phone && errors.phone?.message}
              </p>
            </label>
          )}
          <label className="form__label">
            <span className="form__label-text">Password</span>
            <div className="form__label-field">
              <span
                className="form__label-icon"
                onClick={() => setPasswordView((prev) => !prev)}
              >
                {passwordView ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </span>
              <input
                {...register("password", {
                  required: {
                    message: "Пароль обязателен к заполнению",
                    value: true,
                  },
                  pattern: {
                    value:
                      /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                    message:
                      "Пароль должен содержать не менее 8 символов, заглавную букву и число!",
                  },
                })}
                type={passwordView ? "text" : "password"}
                className="form__label-input"
                aria-label="idk"
                placeholder="Enter your password"
              />
            </div>
            <p className="register__label-error">
              {errors.password && errors.password?.message}
            </p>
          </label>
          {location.pathname === "/register" && (
            <label className="form__label">
              <span className="form__label-text">Confirm Password</span>
              <div className="form__label-field">
                <input
                  {...register("confirmPwd", {
                    validate: (value) =>
                      value === password.current || "The password do not match",
                  })}
                  className="form__label-input"
                  type={passwordView ? "text" : "password"}
                  aria-label="idk"
                  placeholder="Enter your password again"
                />
              </div>
              <p className="register__label-error">
                {errors.confirmPwd && errors.confirmPwd?.message}
              </p>
            </label>
          )}
          <button type="submit" className="form__btn">
            Login
          </button>
        </form>
      </div>
      <div className="form__right">
        <img src={formImg} alt="" />
        <h2>Sign in to name</h2>
        <p>Lorem Ipsum is simply</p>
        </div>
    </div>
  );
};

export default Form;
