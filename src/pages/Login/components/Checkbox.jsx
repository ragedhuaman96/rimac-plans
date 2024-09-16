const CheckBox = ({ value, name, label, setFormData, error }) => {
    const handleClick=()=>{
        setFormData(prev=>({
            ...prev,
            [name]: !value
        }))
    }

    return (
        <div className="checkbox" onClick={handleClick}>
            <div className={`checkbox__container centrado ${(error && !value) && 'error'}`}>
                {
                    value
                        ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="20" height="20" rx="4" fill="#0A051E" />
                                <path d="M7.99992 14.4149L4.29492 10.7049L5.70493 9.29492L7.99992 11.5849L14.0449 5.54492L15.4549 6.95492L7.99992 14.4149Z" fill="white" />
                            </svg>

                        )
                        : null
                }
            </div>
            <div className={`checkbox__label ${(error && !value) && 'error'}`}>
            {
                label
            }
            </div>
        </div>

    )
}

export default CheckBox
