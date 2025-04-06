import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';

const ContactForm = ({onSubmit}) => {
    const handleSubmit = (values, options) => {
        onSubmit(values);
            options.resetForm();
        
    };
    
    const initialValues = {
        name: '',
        number: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, 'Min 3 chars').max(50, 'Max 50 chars').trim().required(),
        number: Yup.string().min(3, 'Min 3 chars').max(50, 'Max 50 chars').trim().required(),
    });

    return (
        <div className={s.formWrapper}>
            <Formik 
                validationSchema={validationSchema} 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
            >
                    <Form className={s.form}>
                        <div className={s.fieldGroup}>
                            <label className={s.label}>
                                <span>Name</span>
                                <Field 
                                    type="text"
                                    name="name" 
                                    className={s.input}
                                /> 
                                <ErrorMessage 
                                    name="name" 
                                    component="div" 
                                    className={s.errorMessage}
                                />
                            </label>
                        </div>
                        
                        <div className={s.fieldGroup}>
                            <label className={s.label}>
                                <span>Number</span>
                                <Field 
                                    type="tel"
                                    name="number"
                                    className={s.input}
                                />
                                <ErrorMessage 
                                    name="number" 
                                    component="div" 
                                    className={s.errorMessage}
                                />
                            </label>
                        </div>
                        
                        <button 
                            type="submit" 
                            className={s.button}
                        >
                            Add contact
                        </button>
                    </Form>
                            </Formik>
        </div>
    );
};

export default ContactForm;