import React from 'react'
import Button from '../../Button/Button';

const Form = ({
    data, 
    handleSubmit,
    handleChange,
    formsName,
    values,
    btnLabel,
    errors}) => {

        const formName = formsName;

    return (
        <div className='form-wrapper'>
            <form className="form" onSubmit={handleSubmit}>
                {data[formName].map((input) => {
                    return(
                        <div key={input.key} className="form-inputs">
                            <label htmlFor={input.key} className="form-label">{input.label}</label>
                            {input.tag === 'input' ? 
                            <>
                                <input 
                                type={input.type} 
                                name={input.key} 
                                value={values[input.key]} 
                                onChange={handleChange}
                                className="form-input"
                                />
                                {input.required ? errors[input.key] && <p className="contact-form-error">{errors[input.key]}</p> : null}
                                <br/>
                            </>
                                :
                                null
                            }
                            {input.tag === 'select' ? 
                            <>
                                <select name={input.key} value={values[input.key]} onChange={handleChange} className={input.cName}>
                                    {input.options.map((option) => {
                                        return(
                                            <option key={option.label} value={option.value}>{option.label}</option>
                                        )
                                    })}
                                </select>
                                <br/>
                            </>
                                :
                                null
                            }
                            {input.tag === 'textarea' ?
                            <>
                            <textarea name={input.key} value={values[input.key]} onChange={handleChange} className={input.cName}/>
                            <br/>
                            </>
                            :
                            null
                            }
                        </div>
                    )
                })}
                <Button type="submit" className="form-input-btn">{btnLabel}</Button>
            </form>
        </div>
    )
}

export default Form
