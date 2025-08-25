// Datos de Colombia - Departamentos y Municipios
const colombianData = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Bello", "Itagüí", "Envigado", "Apartadó", "Turbo", "Rionegro", "Sabaneta"],
    "Arauca": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Sabanagrande", "Puerto Colombia", "Galapa"],
    "Bolívar": ["Cartagena", "Magangué", "Turbaco", "Arjona", "El Carmen de Bolívar", "San Pablo"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa", "Villa de Leyva", "Nobsa"],
    "Caldas": ["Manizales", "Villamaría", "Chinchiná", "La Dorada", "Riosucio", "Anserma"],
    "Caquetá": ["Florencia", "San Vicente del Caguán", "Puerto Rico", "La Montañita", "El Doncello"],
    "Casanare": ["Yopal", "Aguazul", "Villanueva", "Tauramena", "Monterrey", "Paz de Ariporo"],
    "Cauca": ["Popayán", "Santander de Quilichao", "Puerto Tejada", "Patía", "Corinto", "Guapi"],
    "Cesar": ["Valledupar", "Aguachica", "Codazzi", "Bosconia", "El Copey", "La Jagua de Ibirico"],
    "Chocó": ["Quibdó", "Istmina", "Condoto", "Tadó", "Acandí", "Bahía Solano"],
    "Córdoba": ["Montería", "Cereté", "Sahagún", "Lorica", "Planeta Rica", "Montelíbano"],
    "Cundinamarca": ["Bogotá", "Soacha", "Girardot", "Zipaquirá", "Facatativá", "Chía", "Cajicá", "Fusagasugá"],
    "Guainía": ["Inírida", "Barranco Minas", "Mapiripana", "San Felipe", "Puerto Colombia"],
    "Guaviare": ["San José del Guaviare", "Calamar", "El Retorno", "Miraflores"],
    "Huila": ["Neiva", "Pitalito", "Garzón", "La Plata", "Campoalegre", "San Agustín"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia", "Manaure", "San Juan del Cesar", "Villanueva"],
    "Magdalena": ["Santa Marta", "Ciénaga", "Fundación", "Aracataca", "El Banco", "Plato"],
    "Meta": ["Villavicencio", "Acacías", "Granada", "Puerto López", "Cumaral", "San Martín"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales", "Túquerres", "Samaniego", "La Unión"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios", "Tibú"],
    "Putumayo": ["Mocoa", "Puerto Asís", "Orito", "Valle del Guamuez", "San Miguel", "Sibundoy"],
    "Quindío": ["Armenia", "Calarcá", "La Tebaida", "Montenegro", "Quimbaya", "Circasia"],
    "Risaralda": ["Pereira", "Dosquebradas", "Santa Rosa de Cabal", "La Virginia", "Marsella"],
    "San Andrés y Providencia": ["San Andrés", "Providencia"],
    "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja", "San Gil"],
    "Sucre": ["Sincelejo", "Corozal", "Sampués", "San Marcos", "Tolú", "Coveñas"],
    "Tolima": ["Ibagué", "Espinal", "Melgar", "Honda", "Líbano", "Chaparral"],
    "Valle del Cauca": ["Cali", "Palmira", "Buenaventura", "Tuluá", "Cartago", "Buga", "Jamundí"],
    "Vaupés": ["Mitú", "Carurú", "Pacoa", "Taraira", "Papunaua", "Yavaraté"],
    "Vichada": ["Puerto Carreño", "La Primavera", "Santa Rosalía", "Cumaribo"]
};

// Lista de aplicaciones disponibles
const applications = ["MAX", "NETFLIX", "WIN SPORT +", "PRIME VIDEO"];

// Variable global para almacenar los datos del formulario
let formData = {};

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    populateDepartments();
    setupEventListeners();
    showConsentModal();
}

// Poblar el select de departamentos
function populateDepartments() {
    const departmentSelect = document.getElementById('departamento');
    
    Object.keys(colombianData).forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentSelect.appendChild(option);
    });
}

// Configurar todos los event listeners
function setupEventListeners() {
    // Botones del modal de consentimiento
    document.getElementById('btnAceptar').addEventListener('click', acceptConsent);
    document.getElementById('btnNoAceptar').addEventListener('click', rejectConsent);
    
    // Cambios en tipo de vivienda
    document.getElementById('tipoVivienda').addEventListener('change', handleViviendaChange);
    
    // Cambios en departamento
    document.getElementById('departamento').addEventListener('change', handleDepartmentChange);
    
    // Cambios en plan
    document.getElementById('plan').addEventListener('change', handlePlanChange);
    
    // Envío del formulario
    document.getElementById('dataForm').addEventListener('submit', handleFormSubmit);
    
    // Botón cancelar
    document.getElementById('btnCancelar').addEventListener('click', showCancelModal);
    
    // Botones del modal de resumen
    document.getElementById('btnConfirmar').addEventListener('click', confirmSubmission);
    document.getElementById('btnCorregir').addEventListener('click', correctData);
    
    // Botones del modal de cancelación
    document.getElementById('btnConfirmarCancelacion').addEventListener('click', confirmCancellation);
    document.getElementById('btnVolverCancelacion').addEventListener('click', hideCancelModal);
}

// Mostrar modal de consentimiento
function showConsentModal() {
    document.getElementById('consentModal').style.display = 'flex';
}

// Aceptar consentimiento
function acceptConsent() {
    document.getElementById('consentModal').style.display = 'none';
    document.getElementById('formContainer').style.display = 'block';
}

// Rechazar consentimiento
function rejectConsent() {
    alert('⚠️ INFORMACIÓN IMPORTANTE\n\nSi no acepta el tratamiento de datos no es posible brindarle el servicio.\n\nPara continuar debe aceptar el tratamiento de sus datos personales según el Artículo 5 de la Ley 1581 de 2012.');
}

// Manejar cambio en tipo de vivienda
function handleViviendaChange() {
    const tipoVivienda = document.getElementById('tipoVivienda').value;
    const casaFields = document.getElementById('casaFields');
    const conjuntoFields = document.getElementById('conjuntoFields');
    
    // Ocultar ambos campos condicionales
    casaFields.style.display = 'none';
    conjuntoFields.style.display = 'none';
    
    // Limpiar valores
    clearViviendaFields();
    
    // Mostrar campos apropiados
    if (tipoVivienda === 'casa') {
        casaFields.style.display = 'block';
    } else if (tipoVivienda === 'conjunto') {
        conjuntoFields.style.display = 'block';
    }
}

// Limpiar campos de vivienda
function clearViviendaFields() {
    document.getElementById('piso').value = '';
    document.getElementById('nombreConjunto').value = '';
    document.getElementById('torreBloque').value = '';
    document.getElementById('aptoCasa').value = '';
}

// Manejar cambio en departamento
function handleDepartmentChange() {
    const department = document.getElementById('departamento').value;
    const municipioSelect = document.getElementById('municipio');
    
    // Limpiar municipios anteriores
    municipioSelect.innerHTML = '<option value="">Seleccione municipio</option>';
    
    // Poblar municipios del departamento seleccionado
    if (department && colombianData[department]) {
        colombianData[department].forEach(municipality => {
            const option = document.createElement('option');
            option.value = municipality;
            option.textContent = municipality;
            municipioSelect.appendChild(option);
        });
    }
}

// Manejar cambio en plan
function handlePlanChange() {
    const planSelect = document.getElementById('plan');
    const selectedOption = planSelect.options[planSelect.selectedIndex];
    const planFields = document.getElementById('planFields');
    
    if (selectedOption.value) {
        const price = selectedOption.dataset.price;
        const apps = parseInt(selectedOption.dataset.apps);
        const equipment = selectedOption.dataset.equipment;
        
        // Mostrar campos del plan
        planFields.style.display = 'block';
        
        // Establecer precio
        document.getElementById('valorPlan').value = '' + parseInt(price).toLocaleString('es-CO');
        
        // Establecer equipos
        document.getElementById('equipos').value = equipment;
        
        // Crear selección de aplicaciones
        createApplicationSelection(apps);
    } else {
        planFields.style.display = 'none';
        document.getElementById('valorPlan').value = '';
        document.getElementById('equipos').value = '';
    }
}

// Crear selección de aplicaciones
function createApplicationSelection(numApps) {
    const container = document.getElementById('aplicacionesContainer');
    const label = document.getElementById('aplicacionesLabel');
    
    // Actualizar etiqueta
    label.textContent = numApps === 1 ? 'Escoge una aplicación' : 'Escoge dos aplicaciones';
    
    // Limpiar contenedor
    container.innerHTML = '';
    
    // Crear checkboxes para cada aplicación
    applications.forEach(app => {
        const div = document.createElement('div');
        div.className = 'app-checkbox';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = 'app_' + app.replace(/\s+/g, '_');
        checkbox.name = 'aplicaciones';
        checkbox.value = app;
        checkbox.addEventListener('change', () => validateApplicationSelection(numApps));
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = app;
        
        div.appendChild(checkbox);
        div.appendChild(label);
        container.appendChild(div);
    });
}

// Validar selección de aplicaciones
function validateApplicationSelection(maxApps) {
    const checkboxes = document.querySelectorAll('input[name="aplicaciones"]:checked');
    const allCheckboxes = document.querySelectorAll('input[name="aplicaciones"]');
    
    if (checkboxes.length >= maxApps) {
        // Deshabilitar checkboxes no seleccionados
        allCheckboxes.forEach(cb => {
            if (!cb.checked) {
                cb.disabled = true;
            }
        });
    } else {
        // Habilitar todos los checkboxes
        allCheckboxes.forEach(cb => {
            cb.disabled = false;
        });
    }
}

// Manejar envío del formulario
function handleFormSubmit(e) {
    e.preventDefault();
    
    if (validateForm()) {
        collectFormData();
        showSummaryModal();
    }
}

// Validar formulario
function validateForm() {
    const requiredFields = [
        'nombreCompleto', 'tipoDocumento', 'numeroDocumento', 
        'fechaExpedicion', 'fechaNacimiento', 'correo',
        'direccion', 'tipoVivienda', 'departamento', 'municipio',
        'barrio', 'estrato', 'celular', 'plan'
    ];
    
    let isValid = true;
    let firstInvalidField = null;
    
    // Validar campos requeridos
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff0000';
            if (!firstInvalidField) {
                firstInvalidField = field;
            }
        } else {
            field.style.borderColor = '#00ff00';
        }
    });
    
    // Validar nombre completo (debe tener al menos 2 palabras)
    const nombreCompleto = document.getElementById('nombreCompleto').value.trim();
    if (nombreCompleto && nombreCompleto.split(' ').length < 2) {
        isValid = false;
        alert('⚠️ El nombre completo debe incluir nombre y apellido');
        document.getElementById('nombreCompleto').focus();
        return false;
    }
    
    // Validar email
    const email = document.getElementById('correo').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
        isValid = false;
        alert('⚠️ El correo electrónico no tiene un formato válido');
        document.getElementById('correo').focus();
        return false;
    }
    
    // Validar celular (debe ser de 10 dígitos y empezar con 3)
    const celular = document.getElementById('celular').value.trim();
    const celularRegex = /^3\d{9}$/;
    if (celular && !celularRegex.test(celular)) {
        isValid = false;
        alert('⚠️ El número de celular debe tener 10 dígitos y empezar con 3');
        document.getElementById('celular').focus();
        return false;
    }
    
    // Validar selección de aplicaciones
    const planSelect = document.getElementById('plan');
    if (planSelect.value) {
        const selectedOption = planSelect.options[planSelect.selectedIndex];
        const requiredApps = parseInt(selectedOption.dataset.apps);
        const selectedApps = document.querySelectorAll('input[name="aplicaciones"]:checked');
        
        if (selectedApps.length !== requiredApps) {
            isValid = false;
            alert(`⚠️ Debe seleccionar exactamente ${requiredApps} aplicación${requiredApps > 1 ? 'es' : ''} para este plan`);
            return false;
        }
    }
    
    if (!isValid && firstInvalidField) {
        firstInvalidField.focus();
        alert('⚠️ Por favor complete todos los campos obligatorios marcados con *');
    }
    
    return isValid;
}

// Recopilar datos del formulario
function collectFormData() {
    formData = {
        nombreCompleto: document.getElementById('nombreCompleto').value,
        tipoDocumento: document.getElementById('tipoDocumento').value,
        numeroDocumento: document.getElementById('numeroDocumento').value,
        fechaExpedicion: document.getElementById('fechaExpedicion').value,
        fechaNacimiento: document.getElementById('fechaNacimiento').value,
        correo: document.getElementById('correo').value,
        direccion: document.getElementById('direccion').value,
        tipoVivienda: document.getElementById('tipoVivienda').value,
        departamento: document.getElementById('departamento').value,
        municipio: document.getElementById('municipio').value,
        barrio: document.getElementById('barrio').value,
        estrato: document.getElementById('estrato').value,
        celular: document.getElementById('celular').value,
        plan: document.getElementById('plan').options[document.getElementById('plan').selectedIndex].text,
        valorPlan: document.getElementById('valorPlan').value,
        equipos: document.getElementById('equipos').value,
        aplicaciones: Array.from(document.querySelectorAll('input[name="aplicaciones"]:checked')).map(cb => cb.value),
        fechaEnvio: new Date().toLocaleString('es-CO')
    };
    
    // Agregar campos condicionales de vivienda
    const tipoVivienda = document.getElementById('tipoVivienda').value;
    if (tipoVivienda === 'casa') {
        formData.piso = document.getElementById('piso').value;
    } else if (tipoVivienda === 'conjunto') {
        formData.nombreConjunto = document.getElementById('nombreConjunto').value;
        formData.torreBloque = document.getElementById('torreBloque').value;
        formData.aptoCasa = document.getElementById('aptoCasa').value;
    }
}

// Mostrar modal de resumen
function showSummaryModal() {
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = generateSummaryHTML();
    document.getElementById('summaryModal').style.display = 'flex';
}

// Generar HTML del resumen
function generateSummaryHTML() {
    let html = '';
    
    const fieldLabels = {
        nombreCompleto: '👤 Nombre Completo',
        tipoDocumento: '📄 Tipo de Documento',
        numeroDocumento: '🔢 Número de Documento',
        fechaExpedicion: '📅 Fecha de Expedición',
        fechaNacimiento: '🎂 Fecha de Nacimiento',
        correo: '📧 Correo Electrónico',
        direccion: '🏠 Dirección',
        tipoVivienda: '🏘️ Tipo de Vivienda',
        piso: '🏢 Piso',
        nombreConjunto: '🏘️ Nombre del Conjunto',
        torreBloque: '🏗️ Torre/Bloque',
        aptoCasa: '🚪 Apto/Casa',
        departamento: '🗺️ Departamento',
        municipio: '🏙️ Municipio',
        barrio: '🏘️ Barrio',
        estrato: '📊 Estrato',
        celular: '📱 Celular',
        plan: '📦 Plan',
        valorPlan: '💰 Valor del Plan',
        aplicaciones: '📺 Aplicaciones',
        equipos: '📡 Equipos',
        fechaEnvio: '⏰ Fecha de Envío'
    };
    
    Object.keys(formData).forEach(key => {
        if (formData[key] && formData[key] !== '') {
            const label = fieldLabels[key] || key;
            let value = formData[key];
            
            if (Array.isArray(value)) {
                value = value.join(', ');
            }
            
            html += `
                <div class="summary-item">
                    <span class="summary-label">${label}:</span>
                    <span class="summary-value">${value}</span>
                </div>
            `;
        }
    });
    
    return html;
}

// Confirmar envío
async function confirmSubmission() {
    document.getElementById('summaryModal').style.display = 'none';
    
    // Mostrar modal de carga
    showLoadingModal();
    
    try {
        // Enviar a Google Sheets primero
        await sendToGoogleSheets();
        
        // Luego enviar a WhatsApp
        sendToWhatsApp();
        
        // Ocultar modal de carga
        hideLoadingModal();
        
        // Mostrar mensaje de éxito
        showSuccessMessage();
        
        // Reiniciar formulario después de un delay
        setTimeout(() => {
            resetForm();
        }, 3000);
        
    } catch (error) {
        // Ocultar modal de carga
        hideLoadingModal();
        
        console.error('Error al enviar datos:', error);
        
        // Mostrar error pero aún así enviar a WhatsApp
        showErrorMessage();
        sendToWhatsApp();
        
        setTimeout(() => {
            resetForm();
        }, 3000);
    }
}

// Corregir datos
function correctData() {
    document.getElementById('summaryModal').style.display = 'none';
}

// Enviar a WhatsApp - VERSIÓN CORREGIDA SIN EMOJIS PROBLEMÁTICOS
function sendToWhatsApp() {
    const phoneNumber = '573125198465';
    
    // Crear mensaje simple sin emojis problemáticos
    let message = '*NUEVO REGISTRO DE CLIENTE*\n\n';
    
    message += '*INFORMACION PERSONAL:*\n';
    message += `Nombre: ${formData.nombreCompleto}\n`;
    message += `Documento: ${formData.tipoDocumento} ${formData.numeroDocumento}\n`;
    message += `Fecha Nacimiento: ${formData.fechaNacimiento}\n`;
    message += `Email: ${formData.correo}\n`;
    message += `Celular: ${formData.celular}\n\n`;
    
    message += '*INFORMACION DE VIVIENDA:*\n';
    message += `Direccion: ${formData.direccion}\n`;
    message += `Tipo: ${formData.tipoVivienda.toUpperCase()}\n`;
    
    if (formData.piso) {
        message += `Piso: ${formData.piso}\n`;
    }
    if (formData.nombreConjunto) {
        message += `Conjunto: ${formData.nombreConjunto}\n`;
    }
    if (formData.torreBloque) {
        message += `Torre/Bloque: ${formData.torreBloque}\n`;
    }
    if (formData.aptoCasa) {
        message += `Apto/Casa: ${formData.aptoCasa}\n`;
    }
    
    message += `Ubicacion: ${formData.departamento} - ${formData.municipio}\n`;
    message += `Barrio: ${formData.barrio}\n`;
    message += `Estrato: ${formData.estrato}\n\n`;
    
    message += '*PLAN SELECCIONADO:*\n';
    message += `Plan: ${formData.plan}\n`;
    message += `Valor: ${formData.valorPlan}\n`;
    message += `Aplicaciones: ${formData.aplicaciones.join(', ')}\n`;
    message += `Equipos: ${formData.equipos}\n\n`;
    
    message += `Fecha de registro: ${formData.fechaEnvio}\n\n`;
    message += '*LISTO PARA ACTIVAR EL SERVICIO!*\n';
    message += 'Datos guardados en sistema\n';
    message += 'Bienvenido a la experiencia gaming!';
    
    console.log('Mensaje para WhatsApp:', message);
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    console.log('URL de WhatsApp:', whatsappUrl);
    
    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappUrl, '_blank');
}

// Mostrar modal de cancelación
function showCancelModal() {
    document.getElementById('cancelModal').style.display = 'flex';
}

// Ocultar modal de cancelación
function hideCancelModal() {
    document.getElementById('cancelModal').style.display = 'none';
    document.getElementById('motivoCancelacion').value = '';
}

// Confirmar cancelación
function confirmCancellation() {
    const motivo = document.getElementById('motivoCancelacion').value.trim();
    
    if (!motivo) {
        alert('⚠️ Por favor, indique el motivo de la cancelación.');
        return;
    }
    
    alert(`ℹ️ Cancelación registrada.\n\nMotivo: "${motivo}"\n\nGracias por su retroalimentación. Esperamos poder servirle en el futuro.`);
    
    hideCancelModal();
    resetForm();
}

// Reiniciar formulario
function resetForm() {
    document.getElementById('dataForm').reset();
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('casaFields').style.display = 'none';
    document.getElementById('conjuntoFields').style.display = 'none';
    document.getElementById('planFields').style.display = 'none';
    
    // Limpiar municipios
    document.getElementById('municipio').innerHTML = '<option value="">Seleccione primero el departamento</option>';
    
    // Limpiar estilos de validación
    const inputs = document.querySelectorAll('.form-control, .form-select');
    inputs.forEach(input => {
        input.style.borderColor = '#333333';
    });
    
    // Limpiar datos del formulario
    formData = {};
    
    // Mostrar modal de consentimiento
    showConsentModal();
}

// Enviar datos a Google Sheets - VERSIÓN CORREGIDA
async function sendToGoogleSheets() {
    const SHEET_ID = '1Jok8nOPWsDY5VME5XJ5TEGOoBnYXxCT--Yfxv1GF6mk';
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0gqPUSiwWHp490Pqu9_CIiwWKU_p87UiCFgsGbbJz7nyf4Ulubys8q49q42bUj8LrcQ/exec';
    
    // Preparar datos en formato simple y limpio
    const dataToSend = {
        action: 'addRow',
        sheetId: SHEET_ID,
        data: {
            nombreCompleto: formData.nombreCompleto || '',
            tipoDocumento: formData.tipoDocumento || '',
            numeroDocumento: formData.numeroDocumento || '',
            fechaExpedicion: formData.fechaExpedicion || '',
            fechaNacimiento: formData.fechaNacimiento || '',
            correo: formData.correo || '',
            direccion: formData.direccion || '',
            tipoVivienda: formData.tipoVivienda || '',
            piso: formData.piso || '',
            nombreConjunto: formData.nombreConjunto || '',
            torreBloque: formData.torreBloque || '',
            aptoCasa: formData.aptoCasa || '',
            departamento: formData.departamento || '',
            municipio: formData.municipio || '',
            barrio: formData.barrio || '',
            estrato: formData.estrato || '',
            celular: formData.celular || '',
            plan: formData.plan || '',
            valorPlan: formData.valorPlan || '',
            aplicaciones: Array.isArray(formData.aplicaciones) ? formData.aplicaciones.join(', ') : (formData.aplicaciones || ''),
            equipos: formData.equipos || '',
            fechaEnvio: formData.fechaEnvio || new Date().toLocaleString('es-CO')
        }
    };
    
    console.log('Enviando datos a Google Sheets:', dataToSend);
    
    try {
        // Usar fetch con configuración específica para Google Apps Script
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify(dataToSend),
            redirect: 'follow'
        });
        
        console.log('Respuesta HTTP status:', response.status);
        console.log('Respuesta HTTP headers:', response.headers);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const responseText = await response.text();
        console.log('Respuesta cruda de Google Sheets:', responseText);
        
        let result;
        try {
            result = JSON.parse(responseText);
        } catch (parseError) {
            console.error('Error al parsear respuesta JSON:', parseError);
            console.log('Respuesta que no se pudo parsear:', responseText);
            throw new Error('Respuesta inválida del servidor');
        }
        
        console.log('Respuesta parseada de Google Sheets:', result);
        
        if (result && result.success) {
            console.log('✅ Datos guardados exitosamente en Google Sheets');
            return result;
        } else {
            throw new Error(result?.error || 'Error desconocido en Google Sheets');
        }
        
    } catch (error) {
        console.error('❌ Error detallado al enviar a Google Sheets:', error);
        throw error;
    }
}

// Mostrar modal de carga
function showLoadingModal() {
    const loadingModal = document.createElement('div');
    loadingModal.id = 'loadingModal';
    loadingModal.className = 'modal-overlay';
    loadingModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    loadingModal.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1a1a1a, #000);
            border: 2px solid #ff0000;
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        ">
            <div style="
                width: 50px;
                height: 50px;
                border: 4px solid #333;
                border-top: 4px solid #ff0000;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 1rem;
            "></div>
            <h3 style="color: #ff0000; margin-bottom: 1rem;">Enviando datos...</h3>
            <p style="color: #f8f9fa;">Por favor espere mientras procesamos su información</p>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    
    document.body.appendChild(loadingModal);
}

// Ocultar modal de carga
function hideLoadingModal() {
    const loadingModal = document.getElementById('loadingModal');
    if (loadingModal) {
        document.body.removeChild(loadingModal);
    }
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    const successModal = document.createElement('div');
    successModal.className = 'modal-overlay';
    successModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    successModal.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1a1a1a, #000);
            border: 2px solid #00ff00;
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            max-width: 500px;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
        ">
            <h2 style="color: #00ff00; margin-bottom: 1rem;">✅ ¡Éxito!</h2>
            <p style="color: #f8f9fa; margin-bottom: 1rem;">Sus datos han sido enviados correctamente.</p>
            <p style="color: #f8f9fa; margin-bottom: 1rem;">📊 Guardado en Google Sheets</p>
            <p style="color: #f8f9fa; margin-bottom: 1rem;">📱 Enviado a WhatsApp</p>
            <p style="color: #f8f9fa;">En breve nos pondremos en contacto con usted.</p>
        </div>
    `;
    
    document.body.appendChild(successModal);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        if (document.body.contains(successModal)) {
            document.body.removeChild(successModal);
        }
    }, 3000);
}

// Mostrar mensaje de error
function showErrorMessage() {
    const errorModal = document.createElement('div');
    errorModal.className = 'modal-overlay';
    errorModal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    
    errorModal.innerHTML = `
        <div style="
            background: linear-gradient(145deg, #1a1a1a, #000);
            border: 2px solid #ff0000;
            border-radius: 15px;
            padding: 2rem;
            text-align: center;
            max-width: 500px;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
        ">
            <h2 style="color: #ff0000; margin-bottom: 1rem;">⚠️ Advertencia</h2>
            <p style="color: #f8f9fa; margin-bottom: 1rem;">Hubo un problema al guardar en Google Sheets.</p>
            <p style="color: #f8f9fa; margin-bottom: 1rem;">📱 Sus datos se enviaron a WhatsApp correctamente</p>
            <p style="color: #f8f9fa;">Nuestro equipo procesará su solicitud manualmente.</p>
        </div>
    `;
    
    document.body.appendChild(errorModal);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        if (document.body.contains(errorModal)) {
            document.body.removeChild(errorModal);
        }
    }, 3000);
}

// Funciones de utilidad
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0
    }).format(amount);
}

function formatPhoneNumber(phone) {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6)}`;
    }
    return phone;
}

// Formateo automático de campos
document.addEventListener('DOMContentLoaded', function() {
    // Formatear número de celular
    const celularInput = document.getElementById('celular');
    if (celularInput) {
        celularInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 10) {
                value = value.slice(0, 10);
            }
            e.target.value = value;
        });
    }
    
    // Formatear número de documento
    const documentInput = document.getElementById('numeroDocumento');
    if (documentInput) {
        documentInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 12) {
                value = value.slice(0, 12);
            }
            e.target.value = value;
        });
    }
});
