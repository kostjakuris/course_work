import React, {useState} from "react";
import {useFormik} from "formik";
import * as yup from "yup";
import axios from "axios";
import "./Subscribe.css";

const Subscribe = () => {
    const emailSchema = yup.object().shape({
        email: yup.string().required("Ви не вказали e-mail адресу").email("Неправильна e-mail адреса"),
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
            await subscribe(values);
            handleReset(values);
        },
    });

    const [subscribeActive, setSubscribeActive] = useState(false);

    const subscribe = async ({sender_email}) => {
        try {
            const response = await axios.post("https://api.sendpulse.com/campaigns", {
                sender_email,
                sender_name: "my_sender_name",
                subject: "hello customer",
                list_id: "756589",
                name: "my_api_campaign",
                template_id: "775667"
            });
            return response.data;
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section className="subscribe">
            <h3 className="subscribe__title">Підпишіться на нашу розсилку</h3>
            <p className="subscribe__text">
                Корисні статті, акції, новини – отримайте все це зараз!
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
                    Підписатися
                </button>

            </form>
            <div>
                {touched.email && errors.email ?
                    <div className="form__label">{errors.email}</div> : null}
                <p className={subscribeActive ? "subscribe__submitText active" : "subscribe__submitText"}>
                    Ви успішно підписалися на нашу розсилку!
                </p>
            </div>
            <p className="subscribe__warning">Ми не надсилаємо спам, і не передаємо нікому ваші
                дані.</p>
        </section>
    );
};

export default Subscribe;