import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { FiPhone } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../scss/form.scss";
import InputMask from "react-input-mask";
import { useState, useRef, useEffect } from "react";

const Form = () => {
  const [passwordView, setPasswordView] = useState(false);
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
  password.current = watch("password", "");
  return (
    <div className="form">
      <div className="form__left">
        <p className="form__logo" ref={password}>
          Your logo
        </p>
        <form noValidate className="form__content">
          <h2 className="form__content-title">Sign in</h2>
          <p className="form__content-text">
            If you dot't have an account register <br />
            You can <Link to={"/register"}>Register here !</Link>
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
                    value: /^[^]+@[^]+\; [s-z]{2,5}$/,
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
                      /(.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
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
          <label className="form__label">
            <span className="form__label-text">Confirm Password</span>
            <div className="form__label-field">
              {/* <span
                className="form__label-icon"
                onClick={() => setPasswordView((prev) => !prev)}
              >
                {passwordView ? <BsFillEyeFill /> : <BsFillEyeSlashFill />}
              </span> */}
              <input
                {...register("confirmPwd", {
                  validate: (value) =>
                    value === password.current || "The password do not match",
                })}
                // type={passwordView ? "text" : "password"}
                className="form__label-input"
                aria-label="idk"
                placeholder="Enter your password again"
              />
            </div>
            <p className="register__label-error">
              {errors.confirmPwd && errors.confirmPwd?.message}
            </p>
          </label>
          <button type="submit" className="form__btn">
            Login
          </button>
        </form>
      </div>
      <div className="form__right"></div>
    </div>
  );
};

export default Form;
