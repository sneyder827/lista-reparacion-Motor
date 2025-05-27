document.addEventListener('DOMContentLoaded', () => {
    const partsList = document.getElementById('parts-list');
    const motorButtons = document.querySelectorAll('.motor-button');

    const partsData = {
        'ttr125-nkd125-cr4125': [
            { code: '7701023113267', description: 'Kit Cilindro/Piston 125CGR Rp' },
            { code: '7701023261722', description: 'Kit Empaques Completo CGR-125' },
            { code: '7705946399623', description: 'Kit Valvulas 125CGR Rp' },
            { code: '7701023912440', description: 'Kit Reten Motor CGR Rp' },
            { code: '7701023966962', description: 'Kit Balancines Inf CGR Rp' },
            { code: '7701023536455', description: 'Balancines Superior CGR Rp' },
            { code: '7705946388160', description: 'Kit Balineras AKT Original Motor CGR TTR/NKD/R3/CR4 Rp' },
            { code: '7701023536462', description: 'Botadores CGR Rp' },
            { code: '7701023536493', description: 'Bomba Aceite CGR y CG Rp' },
            { code: '7701023221870', description: 'Kit Arbol Levas AKT125 Rp' },
            { code: '4008177191206', description: 'ACEITE POWER 1 4T 20W-50 NEW LT' }
        ],
        'ttr180-cr5180-ttx180': [
            { code: '7701023131124', description: 'Kit Cilindro/Piston 180RE Rp' },
            { code: '7701023036702', description: 'Kit Valvulas CR5 Rp' },
            { code: '7705946338097', description: 'Kit Empaques Completo AK TTR180/CR5180/TTX Rp' },
            { code: '7701023036269', description: 'Arbol De Levas 180RE Rp' },
            { code: '7701023036290', description: 'Balancin Adm-Esc Cto 180RE Rp' },
            { code: '7701023587013', description: 'Cadenilla Distrib 180XM Rp' },
            { code: '7701023587051', description: 'Guia Cadenilla Distr 180XM Rp' },
            { code: '7701023587044', description: 'Guia Tensor Cadenilla 180XM Rp' },
            { code: '7701023037198', description: 'Tensor Cadenilla Dist 180RE Rp' },
            { code: '7701023036320', description: 'Bomba Aceite 180RE CR5 Rp' },
            { code: '4008177191206', description: 'POWER 1 4T 20W-50 NEW LT' },
            { code: '7701023386128', description: 'Elemento Filtro Aire TTR Rp' }
        ],
        'ttr200-cr5200-ttx200': [
            { code: '7705946443173', description: 'Kit Cilindro/Piston 200RE Rp' },
            { code: '7701023036702', description: 'Kit Valvulas CR5 Rp' },
            { code: '7705946338097', description: 'Kit Empaques Completo AK TTR180/CR5180/TTX Rp' },
            { code: '7705946451468', description: 'Cadenilla Distribucion CR5 200RE Rp' },
            { code: '7705946588737', description: 'Kit Balineras Motor TTR 180/200 Rp' },
            { code: '7705946507165', description: 'Arbol De Levas 200RE Rp' },
            { code: '7701023586979', description: 'Balancin Admision-Escape 200TTR/180XM (Con Rodillo' },
            { code: '7700149034906', description: 'Jgo Guia Cadenilla 200CR5/TTR/DS Rp' },
            { code: '7701023587020', description: 'Tensor Cad Dist 180XM/180RE Rp' },
            { code: '4008177191206', description: 'ACEITE POWER 1 4T 20W-50 NEW LT' }
        ],
        'carguero-3w200': [
            { code: '7701023080354', description: 'Kit Cilindro/Piston 3W200 Rp' },
            { code: '7705946484732', description: 'Kit Valvulas 3W200 Rp' },
            { code: '7701023467315', description: 'Kit Empaques Completo  3W200 Rp' },
            { code: '7701023219235', description: 'Botadores 3W200 Rp' },
            { code: '7705946388177', description: 'Kit Balineras AKT Original Motor CG 3W180-200 Rp' },
            { code: '7701023459143', description: 'Balancines Superior 3W180 Rp' },
            { code: '7701023653350', description: 'Balancin Inf Arbol Levas 235 Rp' },
            { code: '7701023221870', description: 'Kit Arbol Levas AKT125SL Rp' },
            { code: '7701023459310', description: 'Bomba Aceite 3W 180 Rp' },
            { code: '4008177191206', description: 'POWER 1 4T 20W-50 NEW LT' },
            { code: '7705946740142', description: 'Elemento Filtro Aire 3W200 Rp' }
        ],
        '110s-110sll': [
            { code: '7701023113274', description: 'Kit Cilindro/Piston 110S Rp' },
            { code: '7705946399616', description: 'Kit Valvulas 110S Rp' },
            { code: '7701023758109', description: 'Kit Empaques Completo AK110S Rp' },
            { code: '7701023045308', description: 'Kit Reten Motor 110 Rp' },
            { code: '7701023798761', description: 'Kit Distribucion 110 Rp' },
            { code: '7705946588751', description: 'Kit Balineras Motor AK110S Rp' },
            { code: '7701023721769', description: 'Kit Biela 110S Rp' },
            { code: '7701023871594', description: 'Guia Cadenilla 110S/X Rp' },
            { code: '7701023871549', description: 'Tensor Cadeni 110S/X Rp' },
            { code: '7701023939461', description: 'Cadenilla Encendido 110S Rp' }
        ],
        '125w': [
            { code: '7701023136136', description: 'Kit Cilindro/Piston 125W Rp' },
            { code: '7705946557948', description: 'Kit Valvula  125W-C Rp' },
            { code: '7701023466745', description: 'Kit Distribucion 125W Rp' },
            { code: '7701023768221', description: 'Kit Empaques Completo AK125 FLEX Rp' },
            { code: '7701023387149', description: 'Kit Biela 125W Rp' },
            { code: '7701023045308', description: 'Kit Reten Motor 110 Y 125W Rp' },
            { code: '7701023894586', description: 'Guia Cadenilla Encend 110S Rp' },
            { code: '7701023894593', description: 'Tensor Cadeni Encend 110S Rp' },
            { code: '7701023939461', description: 'Cadenilla Encen 110S/110XE3 Rp' }
        ],
        'dynamic-sc-r': [
            { code: '7701023370608', description: 'Kit Cilindro/Piston 125J4 Rp' },
            { code: '7705946435888', description: 'Kit Valvulas 125ANA/SC-R/J4/J5 Rp' },
            { code: '7705946768269', description: 'Kit Empaque Cto 125J4/125SC-R/125 SC-PRO Rp' },
            { code: '7701023501859', description: 'Arbol Levas 125J4 Rp' },
            { code: '7701023501873', description: 'Cadenilla Distribucion SC/J4 Rp' },
            { code: '7701023501958', description: 'Bomba Aceite 125J4 Rp' },
            { code: '7701023501668', description: 'Balancín Eje Levas ANA125' },
            { code: '7701023501897', description: 'Guía Tensor Caden ANA125' },
            { code: '7701023501903', description: 'Guía Cadenilla ANA125' },
            { code: '7701023760157', description: 'Tensor Cadenilla 125GY6' }
        ],
        'dynamic-pro-plus': [
            { code: '7701023370608', description: 'Kit Cilindro/Piston 125J4 Rp' },
            { code: '7705946814669', description: 'Válvula Admisión SC-K+/PRO+ Rp' },
            { code: '7705946814676', description: 'Válvula Escape SC-K+/PRO+ Rp' },
            { code: '7705946768269', description: 'Kit Empaque Cto 125J4/125SC-R/125 SC-PRO Rp' },
            { code: '7705946814652', description: 'Balancín Eje Levas SC-K+/PRO+ Rp' },
            { code: '7705946814690', description: 'Arbol Levas SC-K+/PRO+ Rp' },
            { code: '7705946814706', description: 'Cadenilla Distribución SC-K+/PRO+ Rp (94 Eslabones)' },
            { code: '7705946814713', description: 'Guía Tensor Cadenilla SC-K+/PRO+ Rp' },
            { code: '7705946814720', description: 'Guía Cadenilla SC-K+/PRO+ Rp' }
        ],
        'dynamic-pro-cbs': [
            { code: '7701023370608', description: 'Kit Cilindro/Piston 125J4 Rp' },
            { code: '7701023501699', description: 'Válvula E125GY6ape ANA12' },
            { code: '7701023501682', description: 'Válvula Admisión ANA125 Rp' },
            { code: '7705946768269', description: 'Kit Empaque Cto 125J4/125SC-R/125 SC-PRO Rp' },
            { code: '7701023501859', description: 'Arbol Levas 125J4 Rp' },
            { code: '7701023501897', description: 'Guía Tensor Caden ANA125 Rp' },
            { code: '7701023501903', description: 'Guía Cadenilla ANA125 Rp' },
            { code: '7701023501873', description: 'Cadenilla Distribucion SC/J4 Rp' },
            { code: '7701023501668', description: 'Balancín Eje Levas ANA125 Rp' }
        ]
    };

    motorButtons.forEach(button => {
        button.addEventListener('click', () => {
            const model = button.getAttribute('data-model');
            const parts = partsData[model];
            partsList.innerHTML = '';
            parts.forEach(part => {
                const li = document.createElement('li');
                li.textContent = `${part.code} - ${part.description}`;
                partsList.appendChild(li);
            });
        });
    });
});