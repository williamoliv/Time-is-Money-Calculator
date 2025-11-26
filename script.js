/**
 * DATA STORAGE & CONFIGURATION
 */
const TRANSLATIONS = {
    en: {
        title: "Time is Money",
        subtitle: "Life Energy Calculator",
        descTitle: "Understanding the True Cost",
        descText: "This tool shifts your perspective from currency to time. By calculating how many hours of your life are exchanged for a purchase, you can make more conscious financial decisions.",
        steps: [
            "Select your currency",
            "Enter the item's price",
            "Input your net income"
        ],
        parameters: "Parameters",
        currency: "Currency",
        priceLabel: "Target Cost",
        incomeLabel: "Net Income Stream",
        monthly: "Monthly",
        annually: "Annually",
        hourly: "Hourly",
        incomeHelper: {
            monthly: "Net Monthly Pay",
            annually: "Net Annual Salary",
            hourly: "Net Hourly Rate"
        },
        hoursWeek: "Hrs/Week",
        daysWeek: "Days/Week",
        trueCost: "Life Energy Cost",
        months: "Months",
        weeks: "Weeks",
        days: "Days",
        hours: "Hours",
        impact: {
            low: "Nominal System Load",
            med: "Significant Resource Drain",
            high: "CRITICAL LIFE IMPACT"
        },
        narrative: {
            start: "Awaiting input stream...",
            prefix: "To acquire this asset of",
            suffix: "you are exchanging approximately:"
        },
        footer: {
            portfolio: "Designed by William Oliveira",
            coffee: "Buy me a coffee",
            legal: "Privacy & Terms: This tool operates entirely in your browser. No personal data is stored or transmitted. For informational purposes only."
        }
    },
    es: {
        title: "El Tiempo es Dinero",
        subtitle: "Calculadora de Energía Vital",
        descTitle: "Entendiendo el Costo Real",
        descText: "Esta herramienta cambia tu perspectiva de moneda a tiempo. Al calcular cuántas horas de tu vida se intercambian por una compra, puedes tomar decisiones financieras más conscientes.",
        steps: [
            "Selecciona tu moneda",
            "Ingresa el precio del artículo",
            "Ingresa tus ingresos netos"
        ],
        parameters: "Parámetros",
        currency: "Moneda",
        priceLabel: "Costo Objetivo",
        incomeLabel: "Flujo de Ingresos Neto",
        monthly: "Mensual",
        annually: "Anual",
        hourly: "Por Hora",
        incomeHelper: {
            monthly: "Pago Mensual Neto",
            annually: "Salario Anual Neto",
            hourly: "Tarifa por Hora Neta"
        },
        hoursWeek: "Hrs/Semana",
        daysWeek: "Días/Semana",
        trueCost: "Costo de Energía Vital",
        months: "Meses",
        weeks: "Semanas",
        days: "Días",
        hours: "Horas",
        impact: {
            low: "Carga del Sistema Nominal",
            med: "Drenaje de Recursos Significativo",
            high: "IMPACTO CRÍTICO DE VIDA"
        },
        narrative: {
            start: "Esperando flujo de entrada...",
            prefix: "Para adquirir este activo de",
            suffix: "estás intercambiando aproximadamente:"
        },
        footer: {
            portfolio: "Diseñado por William Oliveira",
            coffee: "Cómprame un café",
            legal: "Privacidad y Términos: Esta herramienta funciona completamente en tu navegador. No se almacenan ni transmiten datos personales. Solo para fines informativos."
        }
    },
    pt: {
        title: "Tempo é Dinheiro",
        subtitle: "Calculadora de Energia Vital",
        descTitle: "Entendendo o Custo Real",
        descText: "Esta ferramenta muda sua perspectiva de moeda para tempo. Ao calcular quantas horas de sua vida são trocadas por uma compra, você pode tomar decisões financeiras mais conscientes.",
        steps: [
            "Selecione sua moeda",
            "Insira o preço do item",
            "Informe sua renda líquida"
        ],
        parameters: "Parâmetros",
        currency: "Moeda",
        priceLabel: "Custo Alvo",
        incomeLabel: "Fluxo de Renda Líquida",
        monthly: "Mensal",
        annually: "Anual",
        hourly: "Por Hora",
        incomeHelper: {
            monthly: "Pagamento Mensal Líquido",
            annually: "Salário Anual Líquido",
            hourly: "Tarifa por Hora Líquida"
        },
        hoursWeek: "Hrs/Semana",
        daysWeek: "Dias/Semana",
        trueCost: "Custo de Energia Vital",
        months: "Meses",
        weeks: "Semanas",
        days: "Dias",
        hours: "Horas",
        impact: {
            low: "Carga Nominal do Sistema",
            med: "Dreno de Recursos Significativo",
            high: "IMPACTO VITAL CRÍTICO"
        },
        narrative: {
            start: "Aguardando entrada de dados...",
            prefix: "Para adquirir este ativo de",
            suffix: "você está trocando aproximadamente:"
        },
        footer: {
            portfolio: "Desenvolvido por William Oliveira",
            coffee: "Pague-me um café",
            legal: "Privacidade e Termos: Esta ferramenta opera inteiramente no seu navegador. Nenhum dado pessoal é armazenado ou transmitido. Apenas para fins informativos."
        }
    }
};

const CURRENCIES = [
    { code: 'USD', symbol: '$', name_en: 'US Dollar', name_es: 'Dólar Estadounidense', name_pt: 'Dólar Americano' },
    { code: 'EUR', symbol: '€', name_en: 'Euro', name_es: 'Euro', name_pt: 'Euro' },
    { code: 'JPY', symbol: '¥', name_en: 'Japanese Yen', name_es: 'Yen Japonés', name_pt: 'Iene Japonês' },
    { code: 'GBP', symbol: '£', name_en: 'British Pound', name_es: 'Libra Esterlina', name_pt: 'Libra Esterlina' },
    { code: 'BRL', symbol: 'R$', name_en: 'Brazilian Real', name_es: 'Real Brasileño', name_pt: 'Real Brasileiro' },
    { code: 'MXN', symbol: '$', name_en: 'Mexican Peso', name_es: 'Peso Mexicano', name_pt: 'Peso Mexicano' },
    { code: 'CNY', symbol: '¥', name_en: 'Chinese Yuan', name_es: 'Yuan Chino', name_pt: 'Yuan Chinês' },
    { code: 'INR', symbol: '₹', name_en: 'Indian Rupee', name_es: 'Rupia India', name_pt: 'Rupia Indiana' },
    { code: 'CAD', symbol: '$', name_en: 'Canadian Dollar', name_es: 'Dólar Canadiense', name_pt: 'Dólar Canadense' },
    { code: 'AUD', symbol: '$', name_en: 'Australian Dollar', name_es: 'Dólar Australiano', name_pt: 'Dólar Australiano' }
];

let state = {
    lang: 'en',
    currencyCode: 'USD',
    currencySymbol: '$',
    incomeType: 'monthly',
    price: 0,
    income: 0,
    hoursPerWeek: 40,
    daysPerWeek: 5
};

let timeChart = null;
let typingTimeout = null;

/**
 * INITIALIZATION & EVENT LISTENERS
 */
function init() {
    populateCurrencies();
    updateLanguageUI();
    setupEventListeners();
    initChart();
    
    // Trigger Typewriter Effect on Load
    typeWriter('system-status', TRANSLATIONS[state.lang].subtitle, 0);
}

function setupEventListeners() {
    // Inputs
    ['input-price', 'input-income', 'input-hours', 'input-days'].forEach(id => {
        const el = document.getElementById(id);
        el.addEventListener('input', (e) => {
            handleInput(e);
        });
    });

    // Currency Select
    document.getElementById('currency-select').addEventListener('change', (e) => {
        const selected = CURRENCIES.find(c => c.code === e.target.value);
        state.currencyCode = selected.code;
        state.currencySymbol = selected.symbol;
        updateSymbols();
        triggerProgressBar();
    });

    // Ripple Effects on Glass Panels
    document.querySelectorAll('.glass-panel, .particle-trigger').forEach(el => {
        el.addEventListener('mousedown', createRipple);
    });

    // Particle Effects on specific buttons
    document.querySelectorAll('.particle-trigger').forEach(el => {
        el.addEventListener('click', (e) => spawnParticles(e.clientX, e.clientY));
    });
}

/**
 * MICRO-INTERACTION LOGIC
 */

// 1. Typing Indicator
function typeWriter(elementId, text, i) {
    const el = document.getElementById(elementId);
    if (i === 0) el.innerHTML = ''; // Clear start
    
    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        el.innerHTML += '<span class="cursor-blink"></span>';
        
        // Remove previous cursor
        const prevCursor = el.querySelector('.cursor-blink:first-child');
        if(el.children.length > 1 && prevCursor) prevCursor.remove();

        const speed = Math.random() * 50 + 30; // Random typing speed
        typingTimeout = setTimeout(() => typeWriter(elementId, text, i + 1), speed);
    } else {
        // Keep cursor blinking at end
        const cursor = el.querySelector('.cursor-blink');
        if(cursor) cursor.style.animation = "blink 1s step-end infinite";
    }
}

// 2. Ripple Effect
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add("ripple-effect");

    const existing = button.getElementsByClassName("ripple-effect")[0];
    if (existing) {
        existing.remove();
    }

    button.appendChild(circle);
}

// 3. Particle Burst
function spawnParticles(x, y) {
    const particleCount = 8;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        document.body.appendChild(particle);

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 40 + 10;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        // Animate
        particle.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ], {
            duration: 500 + Math.random() * 200,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

// 4. Non-linear Progress Bar
function triggerProgressBar() {
    const container = document.getElementById('calc-progress-container');
    const bar = document.getElementById('calc-progress-bar');
    
    container.classList.add('loading-bar-active');
    bar.style.width = '0%';
    
    // Stuttering animation
    setTimeout(() => { bar.style.width = '30%'; }, 50);
    setTimeout(() => { bar.style.width = '45%'; }, 200);
    setTimeout(() => { bar.style.width = '80%'; }, 350);
    setTimeout(() => { 
        bar.style.width = '100%'; 
        calculate(); // Run calc when "loaded"
    }, 600);
    
    setTimeout(() => {
        container.classList.remove('loading-bar-active');
        bar.style.width = '0%';
    }, 900);
}

/**
 * CORE APP LOGIC
 */

function setLanguage(lang) {
    state.lang = lang;
    ['en', 'es', 'pt'].forEach(l => {
        const btn = document.getElementById(`lang-${l}`);
        if (l === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    populateCurrencies();
    document.getElementById('currency-select').value = state.currencyCode;
    updateLanguageUI();
    
    // Re-trigger typing effect for new language
    clearTimeout(typingTimeout);
    typeWriter('system-status', TRANSLATIONS[state.lang].subtitle, 0);
    
    triggerProgressBar();
}

function setIncomeType(type) {
    state.incomeType = type;
    ['monthly', 'annually', 'hourly'].forEach(t => {
        const btn = document.getElementById(`btn-${t}`);
        if (t === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const hourlySettings = document.getElementById('hourly-settings');
    if (type === 'hourly') {
        hourlySettings.classList.remove('hidden');
    } else {
        hourlySettings.classList.add('hidden');
    }
    document.getElementById('income-helper').innerText = TRANSLATIONS[state.lang].incomeHelper[type];
    triggerProgressBar();
}

function populateCurrencies() {
    const select = document.getElementById('currency-select');
    select.innerHTML = '';
    CURRENCIES.forEach(curr => {
        const name = curr[`name_${state.lang}`];
        const option = document.createElement('option');
        option.value = curr.code;
        option.text = `${curr.code} - ${name} (${curr.symbol})`;
        select.appendChild(option);
    });
}

function updateSymbols() {
    document.querySelectorAll('.currency-symbol').forEach(el => {
        el.innerText = state.currencySymbol;
    });
}

function updateLanguageUI() {
    const t = TRANSLATIONS[state.lang];
    document.getElementById('label-parameters').innerText = t.parameters;
    document.getElementById('label-currency').innerText = t.currency;
    document.getElementById('label-price').innerText = t.priceLabel;
    document.getElementById('label-income').innerText = t.incomeLabel;
    document.getElementById('btn-monthly').innerText = t.monthly;
    document.getElementById('btn-annually').innerText = t.annually;
    document.getElementById('btn-hourly').innerText = t.hourly;
    document.getElementById('label-hours').innerText = t.hoursWeek;
    document.getElementById('label-days').innerText = t.daysWeek;
    document.getElementById('label-truecost').innerText = t.trueCost;
    document.getElementById('stat-months').innerText = t.months;
    document.getElementById('stat-weeks').innerText = t.weeks;
    document.getElementById('stat-days').innerText = t.days;
    document.getElementById('stat-hours').innerText = t.hours;
    document.getElementById('income-helper').innerText = t.incomeHelper[state.incomeType];
    
    // New description text
    document.getElementById('desc-title').innerText = t.descTitle;
    document.getElementById('desc-text').innerText = t.descText;
    
    // Update list
    const list = document.getElementById('instruction-list');
    list.innerHTML = '';
    t.steps.forEach(step => {
        const li = document.createElement('li');
        li.innerText = step;
        list.appendChild(li);
    });

    // Footer translations
    document.getElementById('footer-portfolio').innerText = t.footer.portfolio;
    document.getElementById('footer-coffee').innerText = t.footer.coffee;
    document.getElementById('footer-legal').innerText = t.footer.legal;
}

// Debounce input
let inputTimeout;
function handleInput(e) {
    const id = e.target.id;
    const val = parseFloat(e.target.value);
    
    if (id === 'input-price') state.price = val;
    if (id === 'input-income') state.income = val;
    if (id === 'input-hours') state.hoursPerWeek = val;
    if (id === 'input-days') state.daysPerWeek = val;

    clearTimeout(inputTimeout);
    inputTimeout = setTimeout(() => {
        triggerProgressBar();
    }, 400);
}

function calculate() {
    const t = TRANSLATIONS[state.lang];
    
    if (!state.price || !state.income || state.income <= 0) {
        resetResultDisplay();
        return;
    }

    let hourlyRate = 0;
    if (state.incomeType === 'hourly') {
        hourlyRate = state.income;
    } else if (state.incomeType === 'annually') {
        hourlyRate = state.income / (state.hoursPerWeek * 52);
    } else {
        hourlyRate = state.income / (state.hoursPerWeek * 4.33);
    }

    if (hourlyRate <= 0) return;

    const totalHours = state.price / hourlyRate;
    const workHoursPerDay = state.hoursPerWeek / state.daysPerWeek;
    const totalDays = totalHours / workHoursPerDay;
    const totalWeeks = totalHours / state.hoursPerWeek;
    const totalMonths = totalWeeks / 4.33;

    animateValue("val-months", totalMonths);
    animateValue("val-weeks", totalWeeks);
    animateValue("val-days", totalDays);
    animateValue("val-hours", totalHours);

    let mainVal = totalMonths;
    let mainUnit = t.months;
    if (totalMonths < 1) {
        mainVal = totalDays;
        mainUnit = t.days;
        if (totalDays < 1) {
            mainVal = totalHours;
            mainUnit = t.hours;
        }
    }
    
    document.getElementById('main-result-value').innerText = mainVal.toFixed(1);
    document.getElementById('main-result-unit').innerText = mainUnit;

    const priceFormatted = `${state.currencySymbol}${state.price.toLocaleString()}`;
    document.getElementById('narrative-text').innerHTML = 
        `${t.narrative.prefix} <span class="font-bold text-light-text-main">${priceFormatted}</span> ${t.narrative.suffix} <span class="font-bold text-light-primary">${totalHours.toFixed(1)} ${t.hours}</span>.`;

    updateSeverity(totalMonths);
    updateChart(totalMonths, totalWeeks, totalDays, totalHours);
}

function resetResultDisplay() {
    const t = TRANSLATIONS[state.lang];
    document.getElementById('main-result-value').innerText = "0.0";
    document.getElementById('val-months').innerText = "0";
    document.getElementById('val-weeks').innerText = "0";
    document.getElementById('val-days').innerText = "0";
    document.getElementById('val-hours').innerText = "0";
    document.getElementById('narrative-text').innerText = t.narrative.start;
    
    const badge = document.getElementById('severity-badge');
    badge.innerText = "Standby";
    badge.className = "px-2 py-1 font-sys text-[10px] font-bold uppercase tracking-widest rounded badge-standby transition-colors duration-300";
    
    updateChart(0,0,0,0);
}

function updateSeverity(months) {
    const t = TRANSLATIONS[state.lang];
    const badge = document.getElementById('severity-badge');
    const mainUnit = document.getElementById('main-result-unit');
    
    // Base class
    badge.className = "px-2 py-1 font-sys text-[10px] font-bold uppercase tracking-widest rounded transition-colors duration-300 ";
    
    if (months > 3) {
        badge.classList.add('badge-high');
        badge.innerText = t.impact.high;
        mainUnit.classList.remove('text-light-primary', 'text-yellow-600');
        mainUnit.classList.add('text-red-600');
    } else if (months > 0.5) {
        badge.classList.add('badge-med');
        badge.innerText = t.impact.med;
        mainUnit.classList.remove('text-light-primary', 'text-red-600');
        mainUnit.classList.add('text-yellow-600');
    } else {
        badge.classList.add('badge-low');
        badge.innerText = t.impact.low;
        mainUnit.classList.remove('text-yellow-600', 'text-red-600');
        mainUnit.classList.add('text-light-primary');
    }
}

function animateValue(id, value) {
    const el = document.getElementById(id);
    el.innerText = value < 10 ? value.toFixed(2) : value.toFixed(1);
}

function initChart() {
    const ctx = document.getElementById('timeChart').getContext('2d');
    Chart.defaults.color = '#64748b';
    Chart.defaults.font.family = "'JetBrains Mono', monospace";

    // Plugin to draw numbers on bars
    const dataLabelPlugin = {
        id: 'dataLabels',
        afterDatasetsDraw(chart) {
            const { ctx, scales: { x, y } } = chart;
            
            chart.data.datasets.forEach((dataset, i) => {
                const meta = chart.getDatasetMeta(i);
                meta.data.forEach((bar, index) => {
                    const value = dataset.data[index];
                    if (value !== null && value !== undefined && value > 0) {
                        ctx.save();
                        ctx.fillStyle = '#1e293b'; // Slate-800
                        ctx.font = "bold 12px 'JetBrains Mono'";
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        
                        // Ensure it fits within canvas top
                        let yPos = bar.y - 5;
                        if (yPos < 10) yPos = bar.y + 15; 
                        
                        ctx.fillText(value.toFixed(1), bar.x, bar.y - 6);
                        ctx.restore();
                    }
                });
            });
        }
    };

    timeChart = new Chart(ctx, {
        type: 'bar',
        plugins: [dataLabelPlugin],
        data: {
            labels: ['Months', 'Weeks', 'Days', 'Hours'],
            datasets: [{
                label: 'Time Cost',
                data: [0, 0, 0, 0],
                backgroundColor: [
                    'rgba(37, 99, 235, 0.7)',   /* Primary Blue */
                    'rgba(245, 158, 11, 0.7)',  /* Amber */
                    'rgba(16, 185, 129, 0.7)',  /* Emerald */
                    'rgba(100, 116, 139, 0.7)'  /* Slate */
                ],
                borderColor: [
                    '#2563eb', '#d97706', '#059669', '#475569'
                ],
                borderWidth: 1,
                borderRadius: 4
            }]
        },
        options: {
            layout: {
                padding: {
                    top: 25 // Add padding to canvas to prevent clipping text
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    titleColor: '#1e293b',
                    bodyColor: '#64748b',
                    borderColor: '#e2e8f0',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) { return context.parsed.y.toFixed(2) + ' ' + context.label; }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grace: '10%', // Add space at top of chart for labels
                    grid: { color: 'rgba(0, 0, 0, 0.05)' },
                    ticks: { display: false }
                },
                x: { grid: { display: false } }
            }
        }
    });
}

function updateChart(m, w, d, h) {
    if (!timeChart) return;
    timeChart.data.datasets[0].data = [m, w, d, h];
    timeChart.update();
}

window.addEventListener('DOMContentLoaded', init);