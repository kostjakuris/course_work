import React, {useState} from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import "./Subscribe.css";

const Subscribe = () => {
    const emailSchema = yup.object().shape({
        email: yup.string().required("Вы не указали e-mail адрес").email("Неправильный e-mail адрес"),
    });
    const {
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        handleReset
    } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: emailSchema,
        onSubmit: async () => {
            setSubscribeActive(true);
            handleReset(values);
        },
    });

    const [subscribeActive, setSubscribeActive] = useState(false);

    return (
        <section className="subscribe">
            <h3 className="subscribe__title">Подпишитесь на нашу рассылку</h3>
            <p className="subscribe__text">
                Полезные статьи, акции, новости - получите все это сейчас!
            </p>
            <form onSubmit={handleSubmit} className="email__form" autoComplete="off">
                <input
                    id={"email"}
                    name={"email"}
                    type={"email"}
                    placeholder={"Ваш e-mail"}
                    className={"email"}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    touched={touched.email}
                    errors={errors.email}
                />
                <button className="subscribe__button" type="submit">
                    Подписаться
                </button>

            </form>
            <div>
                {touched.email && errors.email ?
                    <div className="form__label">{errors.email}</div> : null}
                <p className={subscribeActive ? "subscribe__submitText active" : "subscribe__submitText"}>Вы
                    успешно подписались на нашу рассылку!</p>
            </div>
            <p className="subscribe__warning">Мы не шлем спам, и передаем никому ваши данные.</p>
        </section>
    );
};

export default Subscribe;