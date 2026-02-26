const planDeEstudios = [
    {
        id: "cbc",
        nombre: "CBC",
        materias: [
            { id: "quimica_cbc", nombre: "Química", correlativas_cursar: [] },
            { id: "icse_cbc", nombre: "ICSE", correlativas_cursar: [] },
            { id: "ipc_cbc", nombre: "IPC", correlativas_cursar: [] },
            { id: "matematica_cbc", nombre: "Matemática", correlativas_cursar: [] },
            { id: "biofisica_cbc", nombre: "Biofísica", correlativas_cursar: [] },
            { id: "biologia_cbc", nombre: "Biología", correlativas_cursar: [] }
        ]
    },
    {
        id: "biomedico1",
        nombre: "1º AÑO",
        materias: [
            { id: "anatomia", nombre: "Anatomía", correlativas_cursar: [{ materia: "cbc", tipo: "aprobada" }] },
            { id: "histo", nombre: "Histología y Embriología", correlativas_cursar: [{ materia: "cbc", tipo: "aprobada" }] },
            { id: "salud_mental", nombre: "Salud Mental I", correlativas_cursar: [{ materia: "cbc", tipo: "aprobada" }] },
            { id: "bioetica1", nombre: "Bioética I", correlativas_cursar: [{ materia: "cbc", tipo: "aprobada" }] },
            { id: "medicina_familiar", nombre: "Medicina Familiar I", correlativas_cursar: [{ materia: "cbc", tipo: "aprobada" }] }
        ]
    },
    {
        id: "biomedico2",
        nombre: "2º AÑO",
        materias: [
            { id: "bioquimica", nombre: "Bioquímica", correlativas_cursar: [{ materia: "anatomia", tipo: "regular" }, { materia: "histo", tipo: "aprobada" }] },
            { id: "fisio", nombre: "Fisiología", correlativas_cursar: [{ materia: "anatomia", tipo: "regular" }, { materia: "histo", tipo: "aprobada" }] }
        ]
    },
    {
        id: "biomedico3",
        nombre: "3º AÑO",
        materias: [
            { id: "micro1", nombre: "Microbiología I", correlativas_cursar: [{ materia: "bioquimica", tipo: "aprobada" }, { materia: "fisio", tipo: "regular" }] },
            { id: "inmunologia", nombre: "Inmunología", correlativas_cursar: [{ materia: "bioquimica", tipo: "regular" }] },
            { id: "patologia1", nombre: "Patología I", correlativas_cursar: [{ materia: "bioquimica", tipo: "aprobada" }, { materia: "fisio", tipo: "aprobada" }] },
            { id: "farmaco1", nombre: "Farmacología I", correlativas_cursar: [{ materia: "bioquimica", tipo: "aprobada" }, { materia: "fisio", tipo: "aprobada" }] },
            { id: "micro2", nombre: "Microbiología II", correlativas_cursar: [{ materia: "micro1", tipo: "regular" }] }
        ]
    },
    {
        id: "clinico4",
        nombre: "4º AÑO",
        materias: [
            { id: "semiologia", nombre: "Semiología", correlativas_cursar: [{ materia: "ciclo_biomedico_completo", tipo: "aprobada" }] },
            { id: "patologia2", nombre: "Patología II", correlativas_cursar: [{ materia: "ciclo_biomedico_completo", tipo: "aprobada" }] },
            { id: "salud_publica1", nombre: "Salud Pública I", correlativas_cursar: [{ materia: "ciclo_biomedico_completo", tipo: "aprobada" }] },
            { id: "bioetica2", nombre: "Bioética II", correlativas_cursar: [{ materia: "ciclo_biomedico_completo", tipo: "aprobada" }] }
        ]
    },
    {
        id: "clinico5_6",
        nombre: "5º y 6º AÑO",
        materias: [
            { id: "salud_publica2", nombre: "Salud Pública II", correlativas_cursar: [{ materia: "salud_publica1", tipo: "aprobada" }] },
            { id: "farmaco2", nombre: "Farmacología II", correlativas_cursar: [{ materia: "farmaco1", tipo: "aprobada" }] },
            { id: "toxicologia", nombre: "Toxicología", correlativas_cursar: [{ materia: "farmaco1", tipo: "aprobada" }] },
            { id: "medicina_legal", nombre: "Medicina Legal", correlativas_cursar: [{ materia: "patologia2", tipo: "aprobada" }] },
            { id: "medicina_interna", nombre: "Medicina Interna", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "nutricion", nombre: "Nutrición", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "psiquiatria", nombre: "Psiquiatría", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "diagnostico", nombre: "Diagnóstico por Imágenes", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "dermatologia", nombre: "Dermatología", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "infectologia", nombre: "Infectología", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "neumonologia", nombre: "Neumonología", correlativas_cursar: [{ materia: "medicina_interna", tipo: "regular" }] },
            { id: "neurologia", nombre: "Neurología", correlativas_cursar: [{ materia: "medicina_interna", tipo: "regular" }] },
            { id: "pediatria", nombre: "Pediatría", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "cirugia", nombre: "Cirugía General", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "urologia", nombre: "Urología", correlativas_cursar: [{ materia: "cirugia", tipo: "regular" }] },
            { id: "traumatologia", nombre: "Traumatología", correlativas_cursar: [{ materia: "cirugia", tipo: "regular" }] },
            { id: "oftalmologia", nombre: "Oftalmología", correlativas_cursar: [{ materia: "semiologia", tipo: "regular" }] },
            { id: "otorrino", nombre: "Otorrinolaringología", correlativas_cursar: [{ materia: "semiologia", tipo: "regular" }] },
            { id: "neurocirugia", nombre: "Neurocirugía", correlativas_cursar: [{ materia: "cirugia", tipo: "aprobada" }] },
            { id: "obstetricia", nombre: "Obstetricia", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] },
            { id: "ginecologia", nombre: "Ginecología", correlativas_cursar: [{ materia: "semiologia", tipo: "aprobada" }] }
        ]
    },
    {
        id: "iar",
        nombre: "IAR",
        materias: [
            { id: "iar_clinica", nombre: "Clínica Médica", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_cirugia", nombre: "Cirugía", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_toco", nombre: "Tocoginecología", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_pediatria", nombre: "Pediatría", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_saludmental", nombre: "Salud Mental", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_aps", nombre: "APS", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] },
            { id: "iar_final", nombre: "Módulo Específico", correlativas_cursar: [{ materia: "todo_aprobado", tipo: "aprobada" }] }
        ]
    }
];