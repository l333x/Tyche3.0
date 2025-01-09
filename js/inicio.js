// Variables para actividades
let academicIndex = 0;
let extraIndex = 0;

// Selección del menú de hamburguesa y los enlaces
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Alternar visibilidad del menú de navegación
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cerrar el menú de hamburguesa al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Matriz actividades academicas
const actividadesAcademicas = [
    { nombre: "Bono por cumplimiento del 90 por ciento de asistencia en el periodo académico", puntos: 20, estado: "Pendiente" },
    { nombre: "Entrega de ensayo de análisis crítico sobre un tema académico", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en debate académico sobre temas actuales", puntos: 30, estado: "Pendiente" },
    { nombre: "Presentación de proyecto de investigación en aula", puntos: 40, estado: "Pendiente" },
    { nombre: "Creación de póster académico para exposición", puntos: 25, estado: "Pendiente" },
    { nombre: "Participación en simulación de juicios académicos", puntos: 30, estado: "Pendiente" },
    { nombre: "Resolución de casos prácticos en clase", puntos: 20, estado: "Pendiente" },
    { nombre: "Exposición de tema asignado en una materia", puntos: 25, estado: "Pendiente" },
    { nombre: "Participación en mesas redondas de discusión académica", puntos: 20, estado: "Pendiente" },
    { nombre: "Elaboración de informes de lectura crítica", puntos: 15, estado: "Pendiente" },
    { nombre: "Creación de propuesta de mejora académica para la universidad", puntos: 40, estado: "Pendiente" },
    { nombre: "Desarrollo de plan de negocio en asignatura de emprendimiento", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de redacción académica", puntos: 20, estado: "Pendiente" },
    { nombre: "Elaboración de reseña crítica sobre un libro", puntos: 15, estado: "Pendiente" },
    { nombre: "Diseño de plan estratégico de marketing en clase", puntos: 50, estado: "Pendiente" },
    { nombre: "Resolución de problemas complejos en asignaturas técnicas", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en proyectos colaborativos interdisciplinarios", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a seminario sobre innovación educativa", puntos: 30, estado: "Pendiente" },
    { nombre: "Desarrollo de una investigación bibliográfica", puntos: 25, estado: "Pendiente" },
    { nombre: "Presentación de artículo científico en conferencia universitaria", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en concursos académicos de la universidad", puntos: 40, estado: "Pendiente" },
    { nombre: "Desarrollo de prototipos en asignaturas de ingeniería", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en jornadas de actualización académica", puntos: 30, estado: "Pendiente" },
    { nombre: "Elaboración de mapa mental de conceptos clave", puntos: 10, estado: "Pendiente" },
    { nombre: "Presentación de avances de tesis en foros universitarios", puntos: 50, estado: "Pendiente" },
    { nombre: "Creación de base de datos en proyectos de informática", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en hackathon organizado por la universidad", puntos: 50, estado: "Pendiente" },
    { nombre: "Diseño de plan financiero para un proyecto académico", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en talleres de matemáticas aplicadas", puntos: 20, estado: "Pendiente" },
    { nombre: "Elaboración de cronograma de estudio para asignaturas complejas", puntos: 15, estado: "Pendiente" },
    { nombre: "Desarrollo de aplicaciones móviles como proyecto final", puntos: 50, estado: "Pendiente" },
    { nombre: "Presentación de análisis de datos en materias de estadística", puntos: 40, estado: "Pendiente" },
    { nombre: "Realización de prácticas experimentales en laboratorio", puntos: 30, estado: "Pendiente" },
    { nombre: "Diseño de modelos tridimensionales en clase de diseño", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en actividades de observación astronómica", puntos: 20, estado: "Pendiente" },
    { nombre: "Exposición de estudios de caso en grupos pequeños", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en actividades de simulación empresarial", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre investigación aplicada", puntos: 30, estado: "Pendiente" },
    { nombre: "Creación de presentaciones audiovisuales para temas académicos", puntos: 25, estado: "Pendiente" },
    { nombre: "Participación en concursos de ortografía y redacción", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a conferencias magistrales organizadas por facultades", puntos: 30, estado: "Pendiente" },
    { nombre: "Elaboración de plan de trabajo para asignaturas específicas", puntos: 15, estado: "Pendiente" },
    { nombre: "Participación en proyectos de responsabilidad social universitaria", puntos: 40, estado: "Pendiente" },
    { nombre: "Diseño de encuestas y análisis de resultados en proyectos", puntos: 20, estado: "Pendiente" },
    { nombre: "Elaboración de informe técnico en asignaturas de ingeniería", puntos: 30, estado: "Pendiente" },
    { nombre: "Presentación de ideas de negocio en ferias académicas", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en círculos de lectura académica", puntos: 15, estado: "Pendiente" },
    { nombre: "Desarrollo de maquetas para representaciones prácticas", puntos: 25, estado: "Pendiente" },
    { nombre: "Creación de planes de acción en asignaturas de gestión", puntos: 40, estado: "Pendiente" },
    { nombre: "Realización de trabajos audiovisuales como ensayos visuales", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en capacitaciones técnicas de software académico", puntos: 30, estado: "Pendiente" },
    { nombre: "Presentación de ideas para la mejora de procesos educativos", puntos: 50, estado: "Pendiente" },
    { nombre: "Creación de blogs educativos sobre temas estudiados", puntos: 20, estado: "Pendiente" },
    { nombre: "Asistencia a jornadas de divulgación científica", puntos: 30, estado: "Pendiente" },
    { nombre: "Diseño de planes estratégicos para simulaciones empresariales", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en simuladores de negocios académicos", puntos: 50, estado: "Pendiente" },
    { nombre: "Creación de manuales técnicos para asignaturas especializadas", puntos: 30, estado: "Pendiente" },
    { nombre: "Resolución de problemas éticos en actividades académicas", puntos: 20, estado: "Pendiente" },
    { nombre: "Asistencia a cursos extracurriculares de idiomas", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en simulaciones de manejo de crisis", puntos: 40, estado: "Pendiente" },
    { nombre: "Desarrollo de manuales de usuario en proyectos de TI", puntos: 30, estado: "Pendiente" },
    { nombre: "Presentación de prototipos en competencias académicas", puntos: 50, estado: "Pendiente" },
    { nombre: "Diseño de estrategias publicitarias en materias de marketing", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en concursos de programación", puntos: 50, estado: "Pendiente" },
    { nombre: "Desarrollo de presentaciones dinámicas con software especializado", puntos: 20, estado: "Pendiente" },
    { nombre: "Análisis de películas relacionadas con temas académicos", puntos: 15, estado: "Pendiente" },
    { nombre: "Desarrollo de estrategias de sostenibilidad en proyectos", puntos: 30, estado: "Pendiente" },
    { nombre: "Elaboración de portafolios académicos individuales", puntos: 25, estado: "Pendiente" },
    { nombre: "Creación de boletines informativos para actividades estudiantiles", puntos: 20, estado: "Pendiente" },
    { nombre: "Análisis de sistemas sociales en proyectos de ciencias sociales", puntos: 30, estado: "Pendiente" },
    { nombre: "Realización de encuestas para análisis de mercado", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en congresos estudiantiles", puntos: 40, estado: "Pendiente" },
    { nombre: "Diseño de juegos educativos para niños", puntos: 30, estado: "Pendiente" },
    { nombre: "Implementación de proyectos de robótica en clase", puntos: 50, estado: "Pendiente" },
    { nombre: "Realización de simulaciones geográficas con herramientas digitales", puntos: 40, estado: "Pendiente" },
    { nombre: "Elaboración de presentaciones sobre problemas mundiales", puntos: 25, estado: "Pendiente" },
    { nombre: "Participación en talleres de desarrollo personal", puntos: 20, estado: "Pendiente" },
    { nombre: "Creación de presentaciones interactivas para clases", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a cursos de habilidades blandas", puntos: 20, estado: "Pendiente" },
    { nombre: "Desarrollo de algoritmos como proyecto de clase", puntos: 50, estado: "Pendiente" },
    { nombre: "Diseño de estrategias de resolución de problemas", puntos: 30, estado: "Pendiente" },
    { nombre: "Elaboración de revistas académicas con participación estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Presentación de documentales relacionados con temas de estudio", puntos: 25, estado: "Pendiente" },
    { nombre: "Desarrollo de proyectos de automatización", puntos: 50, estado: "Pendiente" },
    { nombre: "Realización de campañas de concienciación en el campus", puntos: 40, estado: "Pendiente" },
    { nombre: "Diseño de políticas educativas en simulaciones", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en juegos de rol académicos", puntos: 20, estado: "Pendiente" },
    { nombre: "Creación de planes de sostenibilidad para proyectos de clase", puntos: 30, estado: "Pendiente" },
    { nombre: "Desarrollo de estrategias de comunicación en grupos", puntos: 20, estado: "Pendiente" },
    { nombre: "Elaboración de campañas de promoción universitaria", puntos: 40, estado: "Pendiente" },
    { nombre: "Creación de análisis comparativos de casos empresariales", puntos: 30, estado: "Pendiente" },
    { nombre: "Implementación de sistemas tecnológicos como tareas finales", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en foros académicos en línea", puntos: 30, estado: "Pendiente" },
    { nombre: "Diseño de modelos de negocio innovadores", puntos: 50, estado: "Pendiente" },
    { nombre: "Presentación de proyectos en ferias científicas", puntos: 50, estado: "Pendiente" },
    { nombre: "Realización de actividades prácticas en asignaturas teóricas", puntos: 20, estado: "Pendiente" },
    { nombre: "Creación de materiales educativos interactivos", puntos: 30, estado: "Pendiente" },
    { nombre: "Desarrollo de herramientas tecnológicas como proyectos", puntos: 50, estado: "Pendiente" },
    { nombre: "Presentación de análisis socioculturales en materias sociales", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en mesas técnicas organizadas por la universidad", puntos: 40, estado: "Pendiente" }
];

// Matriz actividades extracurriculares
const actividadesExtracurriculares = [
    { nombre: "Participación en conferencia sobre innovación tecnológica", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en seminario de liderazgo juvenil", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a taller de habilidades de comunicación", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en evento cultural de danza folklórica", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en torneo interno de fútbol", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de torneo de ajedrez en la universidad", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de cocina internacional", puntos: 20, estado: "Pendiente" },
    { nombre: "Asistencia a charla motivacional organizada por la universidad", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en actividades de voluntariado comunitario", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a feria de empleo organizada en el campus", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de evento deportivo interfacultades", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en desfile de modas cultural", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a foro sobre sostenibilidad ambiental", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en taller de artes plásticas", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de actividad de reciclaje en la universidad", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en torneo de videojuegos en línea", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en concurso de fotografía universitaria", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de caminata ecológica", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en carrera atlética organizada por la universidad", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a jornada de donación de sangre", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en taller de teatro universitario", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de evento musical estudiantil", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en maratón de lectura", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a charla de finanzas personales", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de lectura universitaria", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de feria de emprendimiento estudiantil", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de primeros auxilios", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en exposición de arte estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de torneo de voleibol mixto", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en cine-foro temático", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a feria de ciencias en el campus", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de astronomía", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de jornada de limpieza en áreas verdes", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en competencia de debate estudiantil", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en taller de escritura creativa", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de torneo de baloncesto", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en evento cultural de música clásica", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre desarrollo personal", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de idiomas", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de evento de tecnología y robótica", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en actividades de integración estudiantil", puntos: 20, estado: "Pendiente" },
    { nombre: "Asistencia a conferencia sobre derechos humanos", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en taller de manualidades recicladas", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de torneo de tenis de mesa", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en recital de poesía estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en taller de fotografía nocturna", puntos: 20, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre nutrición y salud", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en festival de cine universitario", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de feria de universidades internacionales", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en torneo de rugby estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a taller de danza contemporánea", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en club de ciencias sociales", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de actividad de plantación de árboles", puntos: 40, estado: "Pendiente" },
    { nombre: "Participación en desfile estudiantil de tradiciones culturales", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a curso de emprendimiento social", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en liga universitaria de natación", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de exposición de proyectos tecnológicos", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de diseño gráfico básico", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en concurso de canto estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a foro sobre equidad de género", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en actividades de intercambio cultural", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de hackathon estudiantil", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de desarrollo de videojuegos", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en festival gastronómico universitario", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a taller de improvisación teatral", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en torneo de atletismo", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de concurso de innovación social", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en jornadas de inclusión social", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre medioambiente y sostenibilidad", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de desarrollo web", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de campeonato de videojuegos", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en torneo de ajedrez avanzado", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a curso de liderazgo empresarial", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en talleres de creatividad y diseño", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en club de meditación y mindfulness", puntos: 20, estado: "Pendiente" },
    { nombre: "Organización de jornada de bienestar estudiantil", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en torneo de hockey de campo", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a conferencia sobre innovación social", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en feria cultural de idiomas", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de concurso de fotografía temático", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en taller de yoga para estudiantes", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en festival de talentos artísticos", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre inteligencia emocional", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de campeonato universitario de fútbol", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en torneo de ping-pong estudiantil", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a curso de habilidades digitales", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de oratoria y debate", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de jornada de integración cultural", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en concurso de ensayos temáticos", puntos: 30, estado: "Pendiente" },
    { nombre: "Asistencia a taller de técnicas de estudio", puntos: 20, estado: "Pendiente" },
    { nombre: "Participación en rally de conocimientos", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de evento de cine al aire libre", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en festival de música independiente", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a charla sobre cultura emprendedora", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en club de robótica estudiantil", puntos: 30, estado: "Pendiente" },
    { nombre: "Organización de jornada de bienestar emocional", puntos: 50, estado: "Pendiente" },
    { nombre: "Participación en torneo de squash", puntos: 40, estado: "Pendiente" },
    { nombre: "Asistencia a conferencia sobre el futuro del trabajo", puntos: 30, estado: "Pendiente" },
    { nombre: "Participación en actividades de arte comunitario", puntos: 40, estado: "Pendiente" },
    { nombre: "Organización de exposición de arte y cultura", puntos: 50, estado: "Pendiente" }
];

// Asignación de actividades a cada usuario
const actividadesPorUsuario = {
    "001": {
        academicas: [actividadesAcademicas[0], actividadesAcademicas[1], actividadesAcademicas[2], actividadesAcademicas[3]],
        extracurriculares: [actividadesExtracurriculares[0], actividadesExtracurriculares[1], actividadesExtracurriculares[2], actividadesExtracurriculares[3]]
    },
    "002": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    },
    "003": {
        academicas: [actividadesAcademicas[8], actividadesAcademicas[9], actividadesAcademicas[10], actividadesAcademicas[11]],
        extracurriculares: [actividadesExtracurriculares[8], actividadesExtracurriculares[9], actividadesExtracurriculares[10], actividadesExtracurriculares[11]]
    },
    "004": {
        academicas: [actividadesAcademicas[12], actividadesAcademicas[13], actividadesAcademicas[14], actividadesAcademicas[15]],
        extracurriculares: [actividadesExtracurriculares[12], actividadesExtracurriculares[13], actividadesExtracurriculares[14], actividadesExtracurriculares[15]]
    },
    "005": {
        academicas: [actividadesAcademicas[16], actividadesAcademicas[17], actividadesAcademicas[18], actividadesAcademicas[19]],
        extracurriculares: [actividadesExtracurriculares[16], actividadesExtracurriculares[17], actividadesExtracurriculares[18], actividadesExtracurriculares[19]]
    },
    "1722273487": {
        academicas: [actividadesAcademicas[20], actividadesAcademicas[21], actividadesAcademicas[22], actividadesAcademicas[23]],
        extracurriculares: [actividadesExtracurriculares[20], actividadesExtracurriculares[21], actividadesExtracurriculares[22], actividadesExtracurriculares[23]]
    },
    "1756066088": {
        academicas: [actividadesAcademicas[24], actividadesAcademicas[25], actividadesAcademicas[26], actividadesAcademicas[27]],
        extracurriculares: [actividadesExtracurriculares[24], actividadesExtracurriculares[25], actividadesExtracurriculares[26], actividadesExtracurriculares[27]]
    },
    "1727522490": {
        academicas: [actividadesAcademicas[28], actividadesAcademicas[29], actividadesAcademicas[30], actividadesAcademicas[31]],
        extracurriculares: [actividadesExtracurriculares[28], actividadesExtracurriculares[29], actividadesExtracurriculares[30], actividadesExtracurriculares[31]]
    },
    "0820226230": {
        academicas: [actividadesAcademicas[32], actividadesAcademicas[33], actividadesAcademicas[34], actividadesAcademicas[35]],
        extracurriculares: [actividadesExtracurriculares[32], actividadesExtracurriculares[33], actividadesExtracurriculares[34], actividadesExtracurriculares[35]]
    },
    "0114368753": {
        academicas: [actividadesAcademicas[36], actividadesAcademicas[37], actividadesAcademicas[38], actividadesAcademicas[39]],
        extracurriculares: [actividadesExtracurriculares[36], actividadesExtracurriculares[37], actividadesExtracurriculares[38], actividadesExtracurriculares[39]]
    },
    "1823456706": {
        academicas: [actividadesAcademicas[40], actividadesAcademicas[41], actividadesAcademicas[42], actividadesAcademicas[43]],
        extracurriculares: [actividadesExtracurriculares[40], actividadesExtracurriculares[41], actividadesExtracurriculares[42], actividadesExtracurriculares[43]]
    },
    "1246789058": {
        academicas: [actividadesAcademicas[44], actividadesAcademicas[45], actividadesAcademicas[46], actividadesAcademicas[47]],
        extracurriculares: [actividadesExtracurriculares[44], actividadesExtracurriculares[45], actividadesExtracurriculares[46], actividadesExtracurriculares[47]]
    },
    "1720203650": {
        academicas: [actividadesAcademicas[48], actividadesAcademicas[49], actividadesAcademicas[50], actividadesAcademicas[51]],
        extracurriculares: [actividadesExtracurriculares[48], actividadesExtracurriculares[49], actividadesExtracurriculares[50], actividadesExtracurriculares[51]]
    },
    "1726251134": {
        academicas: [actividadesAcademicas[52], actividadesAcademicas[53], actividadesAcademicas[54], actividadesAcademicas[55]],
        extracurriculares: [actividadesExtracurriculares[52], actividadesExtracurriculares[53], actividadesExtracurriculares[54], actividadesExtracurriculares[55]]
    },
    "1759696492": {
        academicas: [actividadesAcademicas[56], actividadesAcademicas[57], actividadesAcademicas[58], actividadesAcademicas[59]],
        extracurriculares: [actividadesExtracurriculares[56], actividadesExtracurriculares[57], actividadesExtracurriculares[58], actividadesExtracurriculares[59]]
    },
    "1722654405": {
        academicas: [actividadesAcademicas[60], actividadesAcademicas[61], actividadesAcademicas[62], actividadesAcademicas[63]],
        extracurriculares: [actividadesExtracurriculares[60], actividadesExtracurriculares[61], actividadesExtracurriculares[62], actividadesExtracurriculares[63]]
    },
    "1036839165": {
        academicas: [actividadesAcademicas[64], actividadesAcademicas[65], actividadesAcademicas[66], actividadesAcademicas[67]],
        extracurriculares: [actividadesExtracurriculares[64], actividadesExtracurriculares[65], actividadesExtracurriculares[66], actividadesExtracurriculares[67]]
    },
    "1839250147": {
        academicas: [actividadesAcademicas[68], actividadesAcademicas[69], actividadesAcademicas[70], actividadesAcademicas[71]],
        extracurriculares: [actividadesExtracurriculares[68], actividadesExtracurriculares[69], actividadesExtracurriculares[70], actividadesExtracurriculares[71]]
    },
    "1725254895": {
        academicas: [actividadesAcademicas[72], actividadesAcademicas[73], actividadesAcademicas[74], actividadesAcademicas[75]],
        extracurriculares: [actividadesExtracurriculares[72], actividadesExtracurriculares[73], actividadesExtracurriculares[74], actividadesExtracurriculares[75]]
    },
    "1162374900": {
        academicas: [actividadesAcademicas[76], actividadesAcademicas[77], actividadesAcademicas[78], actividadesAcademicas[79]],
        extracurriculares: [actividadesExtracurriculares[76], actividadesExtracurriculares[77], actividadesExtracurriculares[78], actividadesExtracurriculares[79]]
    },
    "1755436415": {
        academicas: [actividadesAcademicas[80], actividadesAcademicas[81], actividadesAcademicas[82], actividadesAcademicas[83]],
        extracurriculares: [actividadesExtracurriculares[80], actividadesExtracurriculares[81], actividadesExtracurriculares[82], actividadesExtracurriculares[83]]
    },
    "1725083297": {
        academicas: [actividadesAcademicas[84], actividadesAcademicas[85], actividadesAcademicas[86], actividadesAcademicas[87]],
        extracurriculares: [actividadesExtracurriculares[84], actividadesExtracurriculares[85], actividadesExtracurriculares[86], actividadesExtracurriculares[87]]
    },
    "1753461092": {
        academicas: [actividadesAcademicas[88], actividadesAcademicas[89], actividadesAcademicas[90], actividadesAcademicas[91]],
        extracurriculares: [actividadesExtracurriculares[88], actividadesExtracurriculares[89], actividadesExtracurriculares[90], actividadesExtracurriculares[91]]
    },
    "1729165942": {
        academicas: [actividadesAcademicas[92], actividadesAcademicas[93], actividadesAcademicas[94], actividadesAcademicas[95]],
        extracurriculares: [actividadesExtracurriculares[92], actividadesExtracurriculares[93], actividadesExtracurriculares[94], actividadesExtracurriculares[95]]
    },
    "1753717667": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    },
    "1751284678": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    },
    "1750777938": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    },
    "1106076878": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    },
    "1725499691": {
        academicas: [actividadesAcademicas[4], actividadesAcademicas[5], actividadesAcademicas[6], actividadesAcademicas[7]],
        extracurriculares: [actividadesExtracurriculares[4], actividadesExtracurriculares[5], actividadesExtracurriculares[6], actividadesExtracurriculares[7]]
    }
};
// Usuario logueado
const currentUser = sessionStorage.getItem("cedula");
const userName = sessionStorage.getItem("usuarioNombre");
const userLastName = sessionStorage.getItem("usuarioApellido");

// Validar usuario logueado
if (!currentUser || !userName || !userLastName) {
    alert("No se encontraron datos del usuario. Por favor, inicia sesión.");
    window.location.href = "index.html"; // Redirigir a la página de inicio de sesión
}

// Mostrar nombre y apellido del usuario logueado
const userNameBox = document.getElementById("userNameBox");
if (userNameBox) {
    userNameBox.innerText = `${userName} ${userLastName}`.trim();
}

// Validar cédula y mostrar botones
const loadAcademicBtn = document.getElementById("loadAcademicBtn");
const loadExtraBtn = document.getElementById("loadExtraBtn");

// Lista de cédulas permitidas
const allowedUsers = ["001", "002", "004"];

// Validar si la cédula está en la lista permitida
if (allowedUsers.includes(currentUser)) {
    loadAcademicBtn.style.display = "inline-block";
    loadExtraBtn.style.display = "inline-block";
} else {
    loadAcademicBtn.style.display = "none";
    loadExtraBtn.style.display = "none";
}

// Cargar actividades del usuario logueado
const actividadesAsignadas = actividadesPorUsuario[currentUser] || { academicas: [], extracurriculares: [] };

// Función para mostrar actividades dinámicamente
function displayActivity(containerId, activities, index) {
    const container = document.getElementById(containerId);
    const activity = activities[index];

    if (activity) {
        container.innerHTML = `
            <div class="activity-content">
                <p><span>Nombre Actividad:</span> ${activity.nombre}</p>
                <p><span>Puntos:</span> ${activity.puntos}</p>
                <p><span>Estado:</span> ${activity.estado}</p>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="activity-content">
                <p>No hay actividades disponibles</p>
            </div>
        `;
    }
}

// Cargar actividades iniciales
displayActivity("academicActivities", actividadesAsignadas.academicas, academicIndex);
displayActivity("extraActivities", actividadesAsignadas.extracurriculares, extraIndex);

// Funciones de navegación para actividades académicas
document.getElementById("nextAcademic").addEventListener("click", () => {
    if (academicIndex < actividadesAsignadas.academicas.length - 1) academicIndex++;
    displayActivity("academicActivities", actividadesAsignadas.academicas, academicIndex);
});
document.getElementById("prevAcademic").addEventListener("click", () => {
    if (academicIndex > 0) academicIndex--;
    displayActivity("academicActivities", actividadesAsignadas.academicas, academicIndex);
});

// Funciones de navegación para actividades extracurriculares
document.getElementById("nextExtra").addEventListener("click", () => {
    if (extraIndex < actividadesAsignadas.extracurriculares.length - 1) extraIndex++;
    displayActivity("extraActivities", actividadesAsignadas.extracurriculares, extraIndex);
});
document.getElementById("prevExtra").addEventListener("click", () => {
    if (extraIndex > 0) extraIndex--;
    displayActivity("extraActivities", actividadesAsignadas.extracurriculares, extraIndex);
});

// Modal funcionalidad
const modal = document.getElementById("activityModal");
const closeModal = document.getElementById("closeModal");
const activityForm = document.getElementById("activityForm");
let currentMatrix;

loadAcademicBtn.addEventListener("click", () => {
    currentMatrix = actividadesAsignadas.academicas;
    modal.style.display = "flex";
});

loadExtraBtn.addEventListener("click", () => {
    currentMatrix = actividadesAsignadas.extracurriculares;
    modal.style.display = "flex";
});

// Guardar nueva actividad en la matriz
activityForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("activityName").value;
    const puntos = document.getElementById("activityPoints").value;
    const estado = document.getElementById("activityStatus").value;

    if (currentMatrix.length < 30) {
        currentMatrix.push({ nombre, puntos: Number(puntos), estado });
        alert("Actividad guardada correctamente.");
    } else {
        alert("No puedes agregar más actividades.");
    }

    modal.style.display = "none";
    activityForm.reset();

    // Actualizar vista
    displayActivity(
        currentMatrix === actividadesAsignadas.academicas ? "academicActivities" : "extraActivities",
        currentMatrix,
        currentMatrix.length - 1
    );
});

// Cerrar modal
closeModal.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

