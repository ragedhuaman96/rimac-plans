import { useState } from 'react';
import family from "@/src/assets/images/Family.webp"
import Loading from '@/src/components/Loading';
import { useNavigate } from 'react-router-dom';
import CheckBox from './Checkbox';

const LoginForm = ({getAllData, loading}) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        docType: 'DNI',
        idNumber: '',
        phone: '',
        termsAccepted: false,
        privacyAccepted: false,
      });
    
      const [errors, setErrors] = useState({});
    
      const validateForm = () => {
        let formErrors = {};
    
        // Validar DNI o RUC
        if (formData.docType === 'DNI' && !/^\d{8}$/.test(formData.idNumber)) {
          formErrors.idNumber = '*Ingrese un DNI valido';
        }
    
        if (formData.docType === 'RUC' && !/^\d{11}$/.test(formData.idNumber)) {
            formErrors.idNumber = '*Ingrese un numero de RUC valido';
        }
        // Validar número de celular
        if (!/^\d{9}$/.test(formData.phone)) {
          formErrors.phone = '*Ingrese un numero de celular valido';
        }
    
        // Validar aceptación de términos
        if (!formData.termsAccepted) {
          formErrors.termsAccepted = 'Debes aceptar la Política de Comunicaciones Comerciales';
        }
    
        // Validar aceptación de política de privacidad
        if (!formData.privacyAccepted) {
          formErrors.privacyAccepted = 'Debes aceptar la Política de Privacidad';
        }
    
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
      };
    
      const onSubmit = async () => {
        if (validateForm()) {
          try {
            await getAllData(formData);
            navigate('/plans');
          } catch (error) {
            console.error('Error al obtener datos:', error);
          }
        }
      };
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value,
        });
      };

    return (
        <div className="loginForm">
        <div className="loginForm__header">
          <div>
            <div className="loginForm__greentext">Seguro Salud Flexible</div>
            <h1>Creado para ti y tu familia</h1>
          </div>
          <div className="imgSmall">
            <img src={family} alt="" width="100%" />
          </div>
        </div>
        <p className="subtitle-14">
          Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
        </p>
        <div className="loginForm__fields">
          <div className="field">
            <select id="docType" name="docType" value={formData.docType} onChange={handleChange}>
              <option value="DNI">DNI</option>
              <option value="RUC">RUC</option>
            </select>
            <input
              id="idNumber"
              name="idNumber"
              type="text"
              placeholder="Nro. de documento"
              value={formData.idNumber}
              onChange={handleChange}
            />
          </div>
          <div>
           {errors.idNumber && <span className="error">{errors.idNumber}</span>}
          </div>
          <div className="field">
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Celular"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>
        <div className="loginForm__privacy">
          <CheckBox name="termsAccepted" value={formData.termsAccepted} setFormData={setFormData} label="Acepto la Política Comunicaciones Comerciales" error={errors.termsAccepted}/>
        </div>
        <div className="loginForm__comercial">
          <CheckBox name="privacyAccepted" value={formData.privacyAccepted} setFormData={setFormData} label="Acepto la Política de Privacidad" error={errors.privacyAccepted}/>
        </div>
        <div className="loginForm__terminos">
          <a href="https://www.rimac.com.pe/uploads/Condiciones_generales_de_contrataci%C3%B3n.pdf" target="_blank" rel="noopener noreferrer">Aplican Términos y Condiciones</a>
        </div>
        <div className="loginForm__btn" onClick={onSubmit}>
          {loading ? <div className="centrado"><Loading /></div> : <>Cotiza aquí</>}
        </div>
      </div>
    )
}

export default LoginForm

