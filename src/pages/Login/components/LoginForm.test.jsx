import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom'; // Necesario si utilizas useNavigate
import '@testing-library/jest-dom'
// // Mock de useNavigate para que no haya redireccionamientos reales
// vi.mock('react-router-dom', () => ({
//   ...vi.requireActual('react-router-dom'),
//   useNavigate: () => vi.fn(),
// }));

describe('LoginForm Component', () => {
  const mockGetAllData = vi.fn();

  const renderComponent = (props = {}) =>
    render(
      <Router>
        <LoginForm getAllData={mockGetAllData} loading={false} {...props} />
      </Router>
    );

  test('renders the form correctly', () => {
    renderComponent();

    expect(screen.getByText('Seguro Salud Flexible')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Nro. de documento')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Celular')).toBeInTheDocument();
    expect(screen.getByText('Cotiza aquí')).toBeInTheDocument();
  });

  test('validates DNI number correctly', () => {
    renderComponent();

    const docInput = screen.getByPlaceholderText('Nro. de documento');
    const phoneInput = screen.getByPlaceholderText('Celular');
    const submitButton = screen.getByText('Cotiza aquí');

    // Simular entrada inválida
    fireEvent.change(docInput, { target: { value: '12345' } });
    fireEvent.change(phoneInput, { target: { value: '987654321' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('*Ingrese un DNI valido')).toBeInTheDocument();
  });

  test('validates RUC number correctly', () => {
    renderComponent();

    const docTypeSelect = screen.getByRole('combobox');
    const docInput = screen.getByPlaceholderText('Nro. de documento');
    const phoneInput = screen.getByPlaceholderText('Celular');
    const submitButton = screen.getByText('Cotiza aquí');

    // Cambiar a RUC y simular entrada inválida
    fireEvent.change(docTypeSelect, { target: { value: 'RUC' } });
    fireEvent.change(docInput, { target: { value: '1234567890' } });
    fireEvent.change(phoneInput, { target: { value: '987654321' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('*Ingrese un numero de RUC valido')).toBeInTheDocument();
  });

  test('validates phone number correctly', () => {
    renderComponent();

    const docInput = screen.getByPlaceholderText('Nro. de documento');
    const phoneInput = screen.getByPlaceholderText('Celular');
    const submitButton = screen.getByText('Cotiza aquí');

    // Simular entrada inválida para el celular
    fireEvent.change(docInput, { target: { value: '12345678' } });
    fireEvent.change(phoneInput, { target: { value: '1234567' } });
    fireEvent.click(submitButton);

    expect(screen.getByText('*Ingrese un numero de celular valido')).toBeInTheDocument();
  });

  test('calls getAllData and navigates when form is valid', () => {
    renderComponent();

    const docInput = screen.getByPlaceholderText('Nro. de documento');
    const phoneInput = screen.getByPlaceholderText('Celular');
    const termsCheckbox = screen.getByText('Acepto la Política Comunicaciones Comerciales');
    const privacyCheckbox = screen.getByText('Acepto la Política de Privacidad');
    const submitButton = screen.getByText('Cotiza aquí');

    // Simular entradas válidas y aceptación de términos y privacidad
    fireEvent.change(docInput, { target: { value: '12345678' } });
    fireEvent.change(phoneInput, { target: { value: '987654321' } });
    fireEvent.click(termsCheckbox);
    fireEvent.click(privacyCheckbox);
    fireEvent.click(submitButton);

    expect(mockGetAllData).toHaveBeenCalledWith({
      docType: 'DNI',
      idNumber: '12345678',
      phone: '987654321',
      termsAccepted: true,
      privacyAccepted: true,
    });
  });
});
