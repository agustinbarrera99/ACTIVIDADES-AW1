PROMPT INICIAL

Actúa como un cliente comitente (un profesional independiente) que quiere encargar el desarrollo de su sitio web. Tu objetivo es proporcionarme el brief de requerimientos y los textos para que YO cree el sitio web usando HTML básico.

Genera la información respetando exactamente los siguientes puntos:
1. Perfil del Cliente Comitente (Quien solicita la web):
   - Nombre y profesión o rubro (ej. psicólogo, fotógrafo, traductor, consultor, etc.).
   - Breve contexto sobre su trabajo y objetivo con la web.
2. Protopersona (Perfil del usuario final / cliente del profesional):
   - Perfil de la persona ideal que visitará la web (nombre ficticio, edad, necesidad o problema a resolver).
3. Historia de Usuario:
   - Redacta 1 historia de usuario: "Como [protopersona], quiero [acción en la web] para [beneficio esperado]".

4. Restricciones del Proyecto Web:
   - El sitio tendrá ÚNICAMENTE 2 páginas web (Página 1: Quién soy / Servicios | Página 2: Formulario de Contacto).
   - Restricción técnica: NO se usará CSS ni JavaScript. Solo código HTML básico.
5. Requerimientos Funcionales y Contenido Real (Textos para Maquetar):
   - Para la Página 1: Proporciona los textos redactados y completos (título principal, párrafos de presentación, lista de servicios y trayectoria). No uses Lorem Ipsum.
   - Para la Página 2: Proporciona el texto introductorio y la lista detallada de campos requeridos para el formulario, sugiriendo el tipo de input de HTML para cada uno (text, email, select, textarea, submit, etc.).

LÍMITES Y REGLAS DE RESPUESTA (MUY IMPORTANTE):
- NO generes código HTML, etiquetas ni la estructura de los archivos.
- NO hagas preguntas finales ni te ofrezcas a realizar el maquetado o continuar el chat.
- Tu respuesta debe finalizar inmediatamente después de entregar los textos y requerimientos.

RESPUESTA DEL PROMPT

## 1. Perfil del Cliente Comitente

**Nombre:** Mariana Ferreyra
**Profesión:** Nutricionista y consultora en alimentación saludable

**Contexto:** Mariana es Licenciada en Nutrición con más de 8 años de experiencia, actualmente atiende de forma particular en un consultorio propio en Córdoba y también ofrece seguimiento a distancia por videollamada. Hasta ahora conseguía pacientes solo por recomendación boca a boca e Instagram, pero siente que pierde oportunidades porque no tiene un espacio propio y profesional donde la gente pueda conocer su trayectoria y, sobre todo, contactarla de forma directa y ordenada. Su objetivo con la web es tener una carta de presentación clara, transmitir confianza y contar con un canal de contacto formal que no dependa de las redes sociales.

## 2. Protopersona

**Nombre:** Julián Acosta
**Edad:** 34 años
**Perfil:** Trabaja en relación de dependencia en una oficina, tiene rutinas muy sedentarias y hace poco le diagnosticaron colesterol alto. Quiere empezar un cambio de hábitos alimenticios pero no sabe por dónde arrancar ni en quién confiar. Busca en Google "nutricionista cerca mío" y necesita encontrar rápido información sobre la experiencia del profesional y una forma simple de pedir un turno, sin tener que llamar por teléfono ni escribir por redes.

## 3. Historia de Usuario

Como Julián (paciente potencial que busca mejorar su alimentación), quiero completar un formulario de contacto con mis datos y mi consulta desde la web, para poder solicitar un turno inicial sin necesidad de llamar por teléfono ni buscar la nutricionista en redes sociales.

## 4. Restricciones del Proyecto Web

El sitio constará únicamente de dos páginas: **Página 1 (Quién soy / Servicios)** y **Página 2 (Formulario de Contacto)**, enlazadas entre sí mediante navegación básica. No se utilizará CSS ni JavaScript bajo ninguna circunstancia; el desarrollo debe resolverse exclusivamente con etiquetas HTML semánticas y estructurales.

## 5. Requerimientos Funcionales y Contenido Real

### Página 1: Quién soy / Servicios

**Título principal:**
Mariana Ferreyra — Nutrición y Alimentación Saludable

**Párrafo de presentación 1:**
Soy Licenciada en Nutrición, especializada en acompañar a personas que quieren mejorar su alimentación de forma real y sostenible, sin dietas extremas ni prohibiciones imposibles de cumplir. Mi trabajo se basa en escuchar la historia de cada paciente y armar un plan que se adapte a su vida, no al revés.

**Párrafo de presentación 2:**
Atiendo de forma presencial en mi consultorio de Córdoba y también ofrezco seguimiento online para quienes prefieren la comodidad de una consulta por videollamada. Mi objetivo es que cada persona entienda por qué come lo que come, y pueda tomar decisiones más saludables sin sentir que renuncia a todo lo que le gusta.

**Lista de servicios:**
- Consulta nutricional inicial (evaluación completa y plan alimentario personalizado)
- Seguimiento mensual presencial u online
- Planes de alimentación para deportistas
- Asesoramiento nutricional en diabetes, colesterol e hipertensión
- Talleres grupales de alimentación saludable para empresas

**Trayectoria:**
Recibida en la Universidad Nacional de Córdoba en 2016. Realicé una diplomatura en Nutrición Deportiva y un posgrado en Educación Alimentaria. Desde 2018 atiendo de forma particular, habiendo acompañado a más de 400 pacientes en procesos de cambio de hábitos. Participé como disertante en jornadas de nutrición organizadas por colegios profesionales de la provincia.

### Página 2: Formulario de Contacto

**Texto introductorio:**
¿Querés empezar tu proceso hacia una alimentación más saludable? Completá el siguiente formulario contándome un poco sobre vos y tu consulta, y me pondré en contacto a la brevedad para coordinar tu primer turno.

**Campos del formulario sugeridos:**
- Nombre completo → input tipo `text`
- Correo electrónico → input tipo `email`
- Teléfono de contacto → input tipo `tel`
- Motivo de consulta (selección) → input tipo `select` (opciones: Bajar de peso / Alimentación deportiva / Control de colesterol o diabetes / Alimentación general / Otro)
- Modalidad de atención preferida → input tipo `select` (opciones: Presencial / Online)
- Mensaje o comentario adicional → `textarea`
- Botón de envío → input tipo `submit`

