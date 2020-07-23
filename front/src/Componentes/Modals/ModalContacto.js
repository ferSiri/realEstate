import React from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';

const Modal = ({ isShowing, toggle, setContact, targetId, mailHasBeenSent }) => {

    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        setContact(targetId)
        mailHasBeenSent(targetId)
        toggle()
    }

    const exitKey = event => {
        if (event.keyCode == 27) {
            toggle();
        }
    }

    return isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <div className="modal-overlay" />
            <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className="modal">
                    <div className="modal-header">
                        <div className="container-form-modal">
                            <div className="modal-title">Contacto</div>
                            <form onKeyDown={(e) => exitKey(e)} tabIndex="1" className="form-modal" onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    placeholder="Ingrese su nombre"
                                    name='nombre'
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "El largo máximo es 30 caracteres"
                                        },
                                        pattern: {
                                            value: /^[A-Za-zÑñáéíóúÁÉÍÓÚ0 ]*$/,
                                            message: "Caracteres no permitidos"
                                        }
                                    })}
                                />
                                {errors.nombre && errors.nombre.message && <p>{errors.nombre.message}</p>}

                                <input
                                    name='email'
                                    placeholder="Ingrese su email"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: "El largo máximo es 30 caracteres"
                                        },
                                        pattern: {
                                            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                            message: "Email no válido"
                                        }
                                    })}
                                />
                                {errors.email && errors.email.message && <p>{errors.email.message}</p>}

                                <input name='telefono'
                                    placeholder="Ingrese su teléfono"
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: "Campo obligatorio"
                                        },
                                        maxLength: {
                                            value: 10,
                                            message: "El largo máximo es 10 caracteres"
                                        },
                                        pattern: {
                                            value: /^[0-9\-]*$/,
                                            message: "Caracteres no permitidos"
                                        }
                                    })}
                                />
                                {errors.telefono && errors.telefono.message && <p>{errors.telefono.message}</p>}
                                <div>
                                    <input className='submit-button' value="Enviar" type='submit' />
                                    <button className='submit-button secondary' type="button" data-dismiss="modal" onClick={toggle}>
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>, document.body
    ) : null;
}

export default Modal;
