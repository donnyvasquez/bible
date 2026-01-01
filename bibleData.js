/**
 * CRONOS BIBLIA - DATA SOURCE
 * Versión de la Estructura de Datos: 1.0
 */

// Definimos la versión para validación en el HTML
window.BIBLE_DATA_VERSION = "1.0";

// Array principal de datos
window.bibleData = [
    {
      "id": "genesis",
      "title": "Génesis",
      "period": "4004 a.C. - 1805 a.C. aprox.",
      "description": "El libro de los comienzos: creación, caída, diluvio y patriarcas; Dios inicia su plan de redención.",
      "authorIntent": "Narrar los orígenes del mundo y del pueblo del pacto, mostrando que Dios crea con propósito, el pecado fractura todo, y el Señor comienza a rescatar mediante promesas a los patriarcas.",
      "genealogies": [
        {
          "id": "gen-g1",
          "title": "De Adán a Noé",
          "scripture": "Gén 5",
          "whyItMatters": "Conecta creación con juicio y preservación; muestra continuidad de la historia del pecado y la gracia.",
          "scriptureRefs": [
            "Gén 5"
          ],
          "scriptureDisplay": "Génesis 5"
        },
        {
          "id": "gen-g2",
          "title": "De Sem a Abram",
          "scripture": "Gén 11:10–32",
          "whyItMatters": "Enlaza el mundo disperso con el llamado de Abraham: Dios inicia una nueva etapa del plan redentor.",
          "scriptureRefs": [
            "Gén 11:10–32"
          ],
          "scriptureDisplay": "Génesis 11:10–32"
        }
      ],
      "gospelThreads": [
        "La promesa de la simiente (Gén 3:15) enciende la esperanza de redención.",
        "Dios elige y bendice a Abraham para bendecir a todas las naciones.",
        "Sustitución y provisión (Isaac/Carnero) anticipan la obra de Cristo.",
        "Providencia: Dios convierte mal en bien (José) para preservar la promesa."
      ],
      "events": [
        {
          "id": "gen-1",
          "title": "La Creación",
          "date": "4004 a.C.",
          "scripture": "Gén 1–2",
          "description": "El origen de todo por la palabra de Dios; humanidad a su imagen.",
          "prompt": "Light separating from darkness over primordial waters, earth forming, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios crea orden, vida y propósito, culminando en el ser humano como portador de su imagen.",
            "items": [
              "Días 1–3: formar.",
              "Días 4–6: llenar.",
              "Día 7: reposo.",
              "Dignidad humana e imago Dei."
            ]
          },
          "scriptureRefs": [
            "Gén 1–2"
          ],
          "scriptureDisplay": "Génesis 1–2"
        },
        {
          "id": "gen-2",
          "title": "La Caída y la primera promesa",
          "date": "4000 a.C. aprox.",
          "scripture": "Gén 3",
          "description": "Ruptura por desobediencia y anuncio de la simiente vencedora.",
          "prompt": "Adam and Eve in Eden with a serpent near a tree, sorrow and hope, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado introduce muerte y exilio, pero Dios siembra esperanza de redención.",
            "items": [
              "Engaño y desobediencia.",
              "Consecuencias: vergüenza y separación.",
              "Juicio y misericordia.",
              "Promesa (Gén 3:15)."
            ]
          },
          "scriptureRefs": [
            "Gén 3"
          ],
          "scriptureDisplay": "Génesis 3"
        },
        {
          "id": "gen-3",
          "title": "El Diluvio y el pacto",
          "date": "2348 a.C. aprox.",
          "scripture": "Gén 6–9",
          "description": "Juicio global y preservación por gracia; pacto del arcoíris.",
          "prompt": "A massive ark on stormy seas, then a rainbow breaking through clouds, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios juzga el mal, salva por gracia y reafirma su compromiso con la creación.",
            "items": [
              "Arca y obediencia.",
              "40 días de lluvia.",
              "Arcoíris: señal del pacto.",
              "Nuevo comienzo."
            ]
          },
          "scriptureRefs": [
            "Gén 6–9"
          ],
          "scriptureDisplay": "Génesis 6–9"
        },
        {
          "id": "gen-4",
          "title": "Babel y dispersión",
          "date": "2242 a.C. aprox.",
          "scripture": "Gén 11",
          "description": "Orgullo humano y confusión de lenguas; dispersión de naciones.",
          "prompt": "Ancient tower reaching clouds, languages confused, people dispersing, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La humanidad busca gloria propia; Dios limita el mal y prepara el escenario para bendecir naciones.",
            "items": [
              "Soberbia colectiva.",
              "Lenguas confundidas.",
              "Naciones dispersas.",
              "Necesidad de unidad bajo Dios."
            ]
          },
          "scriptureRefs": [
            "Gén 11"
          ],
          "scriptureDisplay": "Génesis 11"
        },
        {
          "id": "gen-5",
          "title": "Llamado y pacto con Abraham",
          "date": "2091 a.C. aprox.",
          "scripture": "Gén 12; 15; 17",
          "description": "Dios llama a Abram y promete tierra, descendencia y bendición universal.",
          "prompt": "Abraham under a star-filled desert sky, covenant scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El plan redentor toma forma: un pueblo para bendecir a todas las familias de la tierra.",
            "items": [
              "Salida por fe.",
              "Pacto y promesas.",
              "Justicia por fe (Gén 15).",
              "Señal: circuncisión."
            ]
          },
          "scriptureRefs": [
            "Gén 12",
            "15",
            "17"
          ],
          "scriptureDisplay": "Génesis 12; 15; 17"
        },
        {
          "id": "gen-6",
          "title": "Provisión en el monte",
          "date": "2066 a.C. aprox.",
          "scripture": "Gén 22",
          "description": "Dios provee un sustituto en lugar de Isaac.",
          "prompt": "An altar on a mountain, a ram caught in thicket, divine light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe es probada y Dios revela su carácter proveedor; eco claro del Evangelio.",
            "items": [
              "Prueba de fe.",
              "Sustitución.",
              "‘Jehová proveerá’.",
              "Promesa reafirmada."
            ]
          },
          "scriptureRefs": [
            "Gén 22"
          ],
          "scriptureDisplay": "Génesis 22"
        },
        {
          "id": "gen-7",
          "title": "Jacob: de suplantador a Israel",
          "date": "1920 a.C. aprox.",
          "scripture": "Gén 28; 32–33",
          "description": "Encuentro con Dios y transformación; reconciliación con Esaú.",
          "prompt": "Jacob wrestling a radiant messenger by night, riverbank, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios transforma identidades y sostiene su promesa pese a la fragilidad humana.",
            "items": [
              "Escalera de Jacob.",
              "Lucha en Peniel.",
              "Nuevo nombre: Israel.",
              "Reconciliación."
            ]
          },
          "scriptureRefs": [
            "Gén 28",
            "32–33"
          ],
          "scriptureDisplay": "Génesis 28; 32–33"
        },
        {
          "id": "gen-8",
          "title": "Las 12 tribus y el camino a Egipto",
          "date": "1915–1805 a.C. aprox.",
          "scripture": "Gén 35–50",
          "description": "Los hijos de Jacob forman la base nacional; Dios preserva por medio de José.",
          "prompt": "Joseph in Egyptian robes before granaries, reunion with brothers, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La providencia de Dios preserva el linaje de la promesa y prepara el Éxodo.",
            "items": [
              "José vendido y exaltado.",
              "Hambre y migración.",
              "Reunión y perdón.",
              "Israel en Egipto."
            ]
          },
          "scriptureRefs": [
            "Gén 35–50"
          ],
          "scriptureDisplay": "Génesis 35–50"
        }
      ]
    },
    {
      "id": "exodo",
      "title": "Éxodo",
      "period": "1526 a.C. - 1445 a.C. aprox.",
      "description": "Liberación de Egipto, pacto del Sinaí y establecimiento del tabernáculo.",
      "authorIntent": "Mostrar que el Dios del pacto rescata a su pueblo con poder, lo forma como nación santa mediante la ley y habita en medio de ellos.",
      "genealogies": [
        {
          "id": "exo-g1",
          "title": "Linaje de Moisés y Aarón",
          "scripture": "Éx 6:14–27",
          "whyItMatters": "Afirma autoridad del mediador y del sacerdocio levítico en la historia de redención.",
          "scriptureRefs": [
            "Éx 6:14–27"
          ],
          "scriptureDisplay": "Éxodo 6:14–27"
        }
      ],
      "gospelThreads": [
        "Pascua: liberación por sangre y sustitución.",
        "Éxodo como patrón de salvación: rescate de esclavitud a adoración.",
        "Tabernáculo: Dios habita con su pueblo, anticipando a Cristo.",
        "Moisés como mediador apunta a un Mediador mayor."
      ],
      "events": [
        {
          "id": "exo-1",
          "title": "Opresión y clamor",
          "date": "1550 a.C. aprox.",
          "scripture": "Éx 1–2",
          "description": "De familia favorecida a esclavitud; clamor del pueblo.",
          "prompt": "Hebrew slaves under harsh sun building brick cities, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La opresión prepara el escenario para una liberación que revelará el nombre de Dios.",
            "items": [
              "Nuevo faraón.",
              "Trabajo forzado.",
              "Decreto contra niños.",
              "Clamor."
            ]
          },
          "scriptureRefs": [
            "Éx 1–2"
          ],
          "scriptureDisplay": "Éxodo 1–2"
        },
        {
          "id": "exo-2",
          "title": "Zarza ardiente: el ‘YO SOY’",
          "date": "1486 a.C. aprox.",
          "scripture": "Éx 3–4",
          "description": "Dios llama a Moisés y revela su nombre y misión.",
          "prompt": "Moses before a burning bush on a mountain, radiant fire, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios se revela y envía: liberación y adoración.",
            "items": [
              "Nombre divino.",
              "Comisión.",
              "Señales.",
              "Aarón como vocero."
            ]
          },
          "scriptureRefs": [
            "Éx 3–4"
          ],
          "scriptureDisplay": "Éxodo 3–4"
        },
        {
          "id": "exo-3",
          "title": "Plagas y Pascua",
          "date": "1446 a.C.",
          "scripture": "Éx 7–12",
          "description": "Juicio sobre Egipto; sangre en las puertas; salida.",
          "prompt": "Doorposts marked with blood at night, exodus procession, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La sangre del cordero preserva: figura central que apunta al Cordero de Dios.",
            "items": [
              "Diez plagas.",
              "Cordero pascual.",
              "Primogénitos.",
              "Salida."
            ]
          },
          "scriptureRefs": [
            "Éx 7–12"
          ],
          "scriptureDisplay": "Éxodo 7–12"
        },
        {
          "id": "exo-4",
          "title": "Mar Rojo y provisión",
          "date": "1446 a.C.",
          "scripture": "Éx 14–17",
          "description": "Dios abre el mar, derrota al enemigo y provee en el desierto.",
          "prompt": "Moses raising staff as waters part into walls, people crossing, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios salva totalmente y enseña confianza diaria.",
            "items": [
              "Camino en seco.",
              "Ejército destruido.",
              "Maná y agua.",
              "Batallas iniciales."
            ]
          },
          "scriptureRefs": [
            "Éx 14–17"
          ],
          "scriptureDisplay": "Éxodo 14–17"
        },
        {
          "id": "exo-5",
          "title": "Sinaí: pacto y mandamientos",
          "date": "1446 a.C.",
          "scripture": "Éx 19–24",
          "description": "Dios hace pacto con Israel y entrega su ley.",
          "prompt": "Mount Sinai in smoke and fire, Moses with stone tablets, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pueblo rescatado es llamado a vivir como nación santa.",
            "items": [
              "Teofanía.",
              "Diez mandamientos.",
              "Ley civil.",
              "Pacto ratificado."
            ]
          },
          "scriptureRefs": [
            "Éx 19–24"
          ],
          "scriptureDisplay": "Éxodo 19–24"
        },
        {
          "id": "exo-6",
          "title": "Becerro de oro y mediación",
          "date": "1446 a.C.",
          "scripture": "Éx 32–34",
          "description": "Idolatría, disciplina y renovación; gloria y misericordia.",
          "prompt": "Moses descending with tablets, golden calf in chaos, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia sostiene el pacto; la mediación evita destrucción total.",
            "items": [
              "Idolatría.",
              "Intercesión.",
              "Misericordia/justicia.",
              "Pacto renovado."
            ]
          },
          "scriptureRefs": [
            "Éx 32–34"
          ],
          "scriptureDisplay": "Éxodo 32–34"
        },
        {
          "id": "exo-7",
          "title": "Tabernáculo y gloria",
          "date": "1445 a.C.",
          "scripture": "Éx 25–31; 35–40",
          "description": "Construcción de la morada de Dios; la gloria llena el tabernáculo.",
          "prompt": "Desert tabernacle with cloud of glory above, white linen courtyard, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios habita con su pueblo: señal de presencia y santidad.",
            "items": [
              "Arca del pacto.",
              "Sacerdocio.",
              "Muebles sagrados.",
              "Gloria llena."
            ]
          },
          "scriptureRefs": [
            "Éx 25–31",
            "35–40"
          ],
          "scriptureDisplay": "Éxodo 25–31; 35–40"
        }
      ]
    },
    {
      "id": "levitico",
      "title": "Levítico",
      "period": "1445 a.C. aprox.",
      "description": "Manual de santidad: sacrificios, sacerdocio, pureza y adoración.",
      "authorIntent": "Enseñar cómo un Dios santo puede habitar con un pueblo pecador: sacrificio, mediación sacerdotal y vida apartada.",
      "genealogies": [],
      "gospelThreads": [
        "Sistema sacrificial apunta a la expiación definitiva en Cristo.",
        "Sacerdocio y día de expiación anticipan al Sumo Sacerdote perfecto.",
        "Santidad en lo cotidiano refleja el carácter de Dios.",
        "‘Amarás a tu prójimo’ como ética del reino."
      ],
      "events": [
        {
          "id": "lev-1",
          "title": "Ofrendas y acceso a Dios",
          "date": "1445 a.C.",
          "scripture": "Lev 1–7",
          "description": "Holocaustos, ofrendas de paz, expiación y culpa.",
          "prompt": "Priests at an altar with offerings, incense rising, sacred light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Los sacrificios enseñan costo del pecado y gracia del perdón.",
            "items": [
              "Tipos de ofrendas.",
              "Expiación.",
              "Comunión.",
              "Restitución."
            ]
          },
          "scriptureRefs": [
            "Lev 1–7"
          ],
          "scriptureDisplay": "Levítico 1–7"
        },
        {
          "id": "lev-2",
          "title": "Consagración sacerdotal",
          "date": "1445 a.C.",
          "scripture": "Lev 8–10",
          "description": "Consagración de Aarón; juicio por fuego extraño.",
          "prompt": "Aaron and sons consecrated, then sudden divine fire, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Mediación requiere reverencia: Dios es santo.",
            "items": [
              "Unción.",
              "Inicio del servicio.",
              "Nadab y Abiú.",
              "Santidad."
            ]
          },
          "scriptureRefs": [
            "Lev 8–10"
          ],
          "scriptureDisplay": "Levítico 8–10"
        },
        {
          "id": "lev-3",
          "title": "Leyes de pureza",
          "date": "1445 a.C.",
          "scripture": "Lev 11–15",
          "description": "Alimentos, impureza ritual y restauración.",
          "prompt": "Ancient camp with purity rituals, water cleansing symbolism, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Pureza simboliza separación y necesidad de limpieza interior.",
            "items": [
              "Discernimiento.",
              "Purificación.",
              "Restauración.",
              "Vida comunitaria."
            ]
          },
          "scriptureRefs": [
            "Lev 11–15"
          ],
          "scriptureDisplay": "Levítico 11–15"
        },
        {
          "id": "lev-4",
          "title": "Día de la Expiación",
          "date": "1445 a.C.",
          "scripture": "Lev 16",
          "description": "Un día anual para expiar pecados; macho cabrío emisario.",
          "prompt": "High priest entering the Holy of Holies with incense, scapegoat scene outside camp, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Figura potente de sustitución y remoción del pecado.",
            "items": [
              "Sangre en el propiciatorio.",
              "Mediación.",
              "Pecado removido.",
              "Humildad."
            ]
          },
          "scriptureRefs": [
            "Lev 16"
          ],
          "scriptureDisplay": "Levítico 16"
        },
        {
          "id": "lev-5",
          "title": "Código de santidad y fiestas",
          "date": "1445 a.C.",
          "scripture": "Lev 17–27",
          "description": "Ética, justicia, amor al prójimo; fiestas y jubileos.",
          "prompt": "Festive Israelite worship calendar scene, Passover and feasts imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Santidad integra adoración, justicia y compasión.",
            "items": [
              "Amar al prójimo (Lev 19).",
              "Fiestas.",
              "Año sabático/jubileo.",
              "Bendición y disciplina."
            ]
          },
          "scriptureRefs": [
            "Lev 17–27"
          ],
          "scriptureDisplay": "Levítico 17–27"
        }
      ]
    },
    {
      "id": "numeros",
      "title": "Números",
      "period": "1445 a.C. - 1405 a.C.",
      "description": "Censo, travesía y disciplina; transición hacia la nueva generación.",
      "authorIntent": "Mostrar cómo la incredulidad retrasa la promesa, pero Dios sostiene al pueblo y prepara una nueva generación para entrar.",
      "genealogies": [
        {
          "id": "num-g1",
          "title": "Censos de Israel",
          "scripture": "Nm 1; 26",
          "whyItMatters": "Listas tribales que muestran continuidad y responsabilidad comunitaria antes de entrar a la tierra.",
          "scriptureRefs": [
            "Nm 1",
            "26"
          ],
          "scriptureDisplay": "Números 1; 26"
        }
      ],
      "gospelThreads": [
        "Incredulidad vs fe: entrar por confianza en Dios.",
        "Serpiente de bronce anticipa la salvación (Jn 3).",
        "Dios provee en el desierto: gracia diaria.",
        "El liderazgo humano falla; Dios permanece fiel."
      ],
      "events": [
        {
          "id": "num-1",
          "title": "Censo y orden del campamento",
          "date": "1445 a.C.",
          "scripture": "Nm 1–4",
          "description": "Conteo y organización para la marcha.",
          "prompt": "Vast desert camp organized by tribes around tabernacle, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios ordena a su pueblo alrededor de su presencia.",
            "items": [
              "Censo.",
              "Tribus.",
              "Levitas.",
              "Orden."
            ]
          },
          "scriptureRefs": [
            "Nm 1–4"
          ],
          "scriptureDisplay": "Números 1–4"
        },
        {
          "id": "num-2",
          "title": "Quejas y provisión",
          "date": "1444 a.C. aprox.",
          "scripture": "Nm 11–12",
          "description": "Maná, codornices; crítica a Moisés.",
          "prompt": "Manna falling like dew, people gathering, desert sunrise, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia sostiene aun cuando el corazón se queja.",
            "items": [
              "Maná.",
              "Codornices.",
              "Murmuración.",
              "Disciplina."
            ]
          },
          "scriptureRefs": [
            "Nm 11–12"
          ],
          "scriptureDisplay": "Números 11–12"
        },
        {
          "id": "num-3",
          "title": "Rebelión de Coré",
          "date": "1444 a.C. aprox.",
          "scripture": "Nm 16",
          "description": "Rebelión contra autoridad; juicio.",
          "prompt": "Ground opening in a dramatic desert scene, fearful crowd, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios defiende su santidad y orden en el liderazgo.",
            "items": [
              "Rebelión.",
              "Juicio.",
              "Intercesión.",
              "Lección."
            ]
          },
          "scriptureRefs": [
            "Nm 16"
          ],
          "scriptureDisplay": "Números 16"
        },
        {
          "id": "num-4",
          "title": "Cades: reporte de espías",
          "date": "1444 a.C. aprox.",
          "scripture": "Nm 13–14",
          "description": "Miedo colectivo; sentencia de 40 años.",
          "prompt": "Spies returning with huge grapes, giants in distance, tense camp, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Una generación pierde la promesa por incredulidad.",
            "items": [
              "Reporte.",
              "Miedo.",
              "Caleb/Josué.",
              "Sentencia."
            ]
          },
          "scriptureRefs": [
            "Nm 13–14"
          ],
          "scriptureDisplay": "Números 13–14"
        },
        {
          "id": "num-5",
          "title": "Serpiente de bronce",
          "date": "—",
          "scripture": "Nm 21",
          "description": "Juicio por serpientes; salvación al mirar la provisión.",
          "prompt": "Bronze serpent raised on a pole, people looking and being healed, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Tipo evangelístico: mirar con fe para vivir.",
            "items": [
              "Murmuración.",
              "Juicio.",
              "Señal.",
              "Sanidad."
            ]
          },
          "scriptureRefs": [
            "Nm 21"
          ],
          "scriptureDisplay": "Números 21"
        },
        {
          "id": "num-6",
          "title": "Balaam y bendición sobre Israel",
          "date": "—",
          "scripture": "Nm 22–24",
          "description": "Intentos de maldición frustrados; oráculo de esperanza.",
          "prompt": "Prophet Balaam on a hill overlooking Israel camp, star imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios convierte maldición en bendición; esperanza real futura.",
            "items": [
              "Asna habla.",
              "Oráculos.",
              "Bendición.",
              "‘Estrella’ profética."
            ]
          },
          "scriptureRefs": [
            "Nm 22–24"
          ],
          "scriptureDisplay": "Números 22–24"
        },
        {
          "id": "num-7",
          "title": "Transición: nueva generación y preparación",
          "date": "1406 a.C. aprox.",
          "scripture": "Nm 26–36",
          "description": "Segundo censo, herencias y preparación final.",
          "prompt": "New generation gathered as leaders map tribal inheritance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios prepara al pueblo para entrar, con orden y justicia.",
            "items": [
              "Segundo censo.",
              "Herencias.",
              "Ciudades de refugio.",
              "Preparación."
            ]
          },
          "scriptureRefs": [
            "Nm 26–36"
          ],
          "scriptureDisplay": "Números 26–36"
        }
      ]
    },
    {
      "id": "deuteronomio",
      "title": "Deuteronomio",
      "period": "1405 a.C.",
      "description": "Discursos finales de Moisés: renovación del pacto y llamado a amar a Dios.",
      "authorIntent": "Renovar el pacto para una nueva generación, aplicando la ley al futuro en Canaán y enfatizando amor, obediencia y memoria.",
      "genealogies": [],
      "gospelThreads": [
        "‘Ama al Señor’ (Shema) como centro del corazón: prepara el Evangelio.",
        "Bendición/maldición: necesidad de obediencia y de un corazón nuevo.",
        "Profeta como Moisés anticipa a Cristo.",
        "Elección por gracia y llamado a amar al extranjero."
      ],
      "events": [
        {
          "id": "deu-1",
          "title": "Recordar el camino y renovar la alianza",
          "date": "1405 a.C.",
          "scripture": "Dt 1–4",
          "description": "Memoria del desierto y llamado a obedecer.",
          "prompt": "Moses speaking to a vast assembly near Jordan, solemn sunrise, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La memoria espiritual protege contra repetir errores.",
            "items": [
              "Historia reciente.",
              "Advertencias.",
              "Fidelidad de Dios.",
              "Identidad."
            ]
          },
          "scriptureRefs": [
            "Dt 1–4"
          ],
          "scriptureDisplay": "Deuteronomio 1–4"
        },
        {
          "id": "deu-2",
          "title": "El Shema: amar a Dios con todo",
          "date": "1405 a.C.",
          "scripture": "Dt 6",
          "description": "Amor total y enseñanza a los hijos.",
          "prompt": "Family teaching children beside an open scroll, warm home light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La obediencia fluye del amor y se transmite generacionalmente.",
            "items": [
              "Amar a Dios.",
              "Palabra en casa.",
              "Memoria.",
              "Formación."
            ]
          },
          "scriptureRefs": [
            "Dt 6"
          ],
          "scriptureDisplay": "Deuteronomio 6"
        },
        {
          "id": "deu-3",
          "title": "Pacto, justicia y compasión",
          "date": "1405 a.C.",
          "scripture": "Dt 10–26",
          "description": "Leyes que forman una sociedad justa.",
          "prompt": "Ancient community with fair scales and care for outsiders, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios forma un pueblo justo que refleja su carácter.",
            "items": [
              "Justicia.",
              "Cuidado del vulnerable.",
              "Fiestas.",
              "Santificación."
            ]
          },
          "scriptureRefs": [
            "Dt 10–26"
          ],
          "scriptureDisplay": "Deuteronomio 10–26"
        },
        {
          "id": "deu-4",
          "title": "Bendiciones y maldiciones",
          "date": "1405 a.C.",
          "scripture": "Dt 27–30",
          "description": "Consecuencias del pacto; llamado a escoger vida.",
          "prompt": "Two mountains scene with blessings and curses proclamation, dramatic wide shot, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La ley muestra el camino; el corazón necesita transformación.",
            "items": [
              "Elección vida/muerte.",
              "Arrepentimiento.",
              "Esperanza.",
              "Corazón circuncidado."
            ]
          },
          "scriptureRefs": [
            "Dt 27–30"
          ],
          "scriptureDisplay": "Deuteronomio 27–30"
        },
        {
          "id": "deu-5",
          "title": "Sucesión y muerte de Moisés",
          "date": "1405 a.C.",
          "scripture": "Dt 31–34",
          "description": "Josué es comisionado; Moisés muere en el Nebo.",
          "prompt": "Old Moses on Mount Nebo gazing at the promised land at golden sunset, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Termina una era; la promesa continúa con nuevo liderazgo.",
            "items": [
              "Comisión a Josué.",
              "Cántico/benedición.",
              "Visión de la tierra.",
              "Muerte."
            ]
          },
          "scriptureRefs": [
            "Dt 31–34"
          ],
          "scriptureDisplay": "Deuteronomio 31–34"
        }
      ]
    },
    {
      "id": "josue",
      "title": "Josué",
      "period": "1405 a.C. - 1375 a.C. aprox.",
      "description": "Entrada, conquista y repartición de Canaán.",
      "authorIntent": "Mostrar la fidelidad de Dios al cumplir la promesa de la tierra, y llamar a obediencia y pacto renovado bajo el liderazgo de Josué.",
      "genealogies": [],
      "gospelThreads": [
        "Dios cumple promesas: gracia y fidelidad.",
        "Reposo en la tierra anticipa el reposo mayor en Cristo.",
        "Pacto renovado: escoger servir a Dios.",
        "Inclusión por fe (Rahab) apunta a gracia para las naciones."
      ],
      "events": [
        {
          "id": "jos-1",
          "title": "Cruce del Jordán",
          "date": "1405 a.C.",
          "scripture": "Jos 3–4",
          "description": "Entrada milagrosa: el arca y el río detenido.",
          "prompt": "Ark of the covenant crossing a dry Jordan riverbed, water piled up, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios abre camino y establece memoria comunitaria.",
            "items": [
              "Paso en seco.",
              "12 piedras.",
              "Memoria.",
              "Temor reverente."
            ]
          },
          "scriptureRefs": [
            "Jos 3–4"
          ],
          "scriptureDisplay": "Josué 3–4"
        },
        {
          "id": "jos-2",
          "title": "Jericó y Rahab",
          "date": "1405 a.C.",
          "scripture": "Jos 2; 6",
          "description": "Espionaje, fe de Rahab y caída de muros.",
          "prompt": "Jericho walls collapsing as trumpets sound, Rahab’s scarlet cord, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La victoria es por fe; la gracia incluye a quien cree.",
            "items": [
              "Cordón rojo.",
              "Siete vueltas.",
              "Muros caen.",
              "Rahab salvada."
            ]
          },
          "scriptureRefs": [
            "Jos 2",
            "6"
          ],
          "scriptureDisplay": "Josué 2; 6"
        },
        {
          "id": "jos-3",
          "title": "Derrota y restauración en Hai",
          "date": "1405 a.C.",
          "scripture": "Jos 7–8",
          "description": "Pecado oculto trae derrota; arrepentimiento y victoria.",
          "prompt": "Israelite camp in tension, then a renewed battle plan at dawn, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La santidad importa: el pecado rompe fuerza comunitaria.",
            "items": [
              "Acán.",
              "Confesión.",
              "Purificación.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Jos 7–8"
          ],
          "scriptureDisplay": "Josué 7–8"
        },
        {
          "id": "jos-4",
          "title": "Conquista del sur y norte",
          "date": "1400 a.C. aprox.",
          "scripture": "Jos 10–12",
          "description": "Campañas y consolidación; ‘sol detenido’ como señal.",
          "prompt": "Battlefield under a sun seeming to stand still, dramatic divine intervention, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios lucha por su pueblo, cumpliendo promesa con poder.",
            "items": [
              "Gabaón.",
              "Granizo.",
              "Victoria.",
              "Consolidación."
            ]
          },
          "scriptureRefs": [
            "Jos 10–12"
          ],
          "scriptureDisplay": "Josué 10–12"
        },
        {
          "id": "jos-5",
          "title": "Repartición y ciudades de refugio",
          "date": "—",
          "scripture": "Jos 13–21",
          "description": "Herencias tribales; refugio y levitas.",
          "prompt": "Ancient map distribution among tribes, peaceful settlement scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La tierra se organiza con justicia y misericordia.",
            "items": [
              "Herencias.",
              "Ciudades de refugio.",
              "Levitas.",
              "Culto."
            ]
          },
          "scriptureRefs": [
            "Jos 13–21"
          ],
          "scriptureDisplay": "Josué 13–21"
        },
        {
          "id": "jos-6",
          "title": "Renovación del pacto en Siquem",
          "date": "1375 a.C. aprox.",
          "scripture": "Jos 24",
          "description": "‘Yo y mi casa serviremos al Señor’.",
          "prompt": "Joshua raising a covenant stone before a gathered nation, solemn scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El libro concluye con una decisión espiritual: servir al Señor.",
            "items": [
              "Memoria.",
              "Elección.",
              "Testimonio.",
              "Compromiso."
            ]
          },
          "scriptureRefs": [
            "Jos 24"
          ],
          "scriptureDisplay": "Josué 24"
        }
      ]
    },
    {
      "id": "jueces",
      "title": "Jueces",
      "period": "1375 a.C. - 1050 a.C. aprox.",
      "description": "Ciclos de pecado, opresión, clamor y liberación antes de la monarquía.",
      "authorIntent": "Mostrar las consecuencias de abandonar a Dios y la necesidad de un rey fiel: ‘cada uno hacía lo que bien le parecía’.",
      "genealogies": [],
      "gospelThreads": [
        "La necesidad de un libertador definitivo apunta a Cristo.",
        "La gracia rescata repetidamente a un pueblo infiel.",
        "El pecado desordena sociedad y culto; urge un rey justo.",
        "Dios usa instrumentos débiles para mostrar su poder."
      ],
      "events": [
        {
          "id": "jud-1",
          "title": "El ciclo espiritual",
          "date": "Siglos XIII–XI a.C.",
          "scripture": "Jue 2",
          "description": "Patrón repetido: pecado → opresión → clamor → juez → paz.",
          "prompt": "Symbolic cycle wheel with scenes of idolatry, oppression, prayer, and deliverance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jueces explica el colapso moral cuando el pueblo olvida el pacto.",
            "items": [
              "Olvido.",
              "Opresión.",
              "Clamor.",
              "Liberación."
            ]
          },
          "scriptureRefs": [
            "Jue 2"
          ],
          "scriptureDisplay": "Jueces 2"
        },
        {
          "id": "jud-2",
          "title": "Débora y Barac",
          "date": "1250 a.C. aprox.",
          "scripture": "Jue 4–5",
          "description": "Victoria por dirección profética; cántico de triunfo.",
          "prompt": "Deborah under a palm tree inspiring Barak, battle in valley, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios levanta liderazgo valiente; la victoria es suya.",
            "items": [
              "Profecía.",
              "Batalla.",
              "Sísara.",
              "Cántico."
            ]
          },
          "scriptureRefs": [
            "Jue 4–5"
          ],
          "scriptureDisplay": "Jueces 4–5"
        },
        {
          "id": "jud-3",
          "title": "Gedeón y los 300",
          "date": "1170 a.C. aprox.",
          "scripture": "Jue 6–8",
          "description": "Victoria con pocos para la gloria de Dios.",
          "prompt": "Three hundred men with torches and jars at night, sudden light burst, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios reduce recursos para fortalecer la fe.",
            "items": [
              "Llamado.",
              "Vellón.",
              "300.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Jue 6–8"
          ],
          "scriptureDisplay": "Jueces 6–8"
        },
        {
          "id": "jud-4",
          "title": "Sansón: fuerza y fragilidad",
          "date": "1075 a.C. aprox.",
          "scripture": "Jue 13–16",
          "description": "Nazareo, caída por deseo; sacrificio final.",
          "prompt": "Samson pushing massive pillars in a collapsing temple, tragic heroic tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El poder sin santidad se autodestruye; Dios aun así cumple propósito.",
            "items": [
              "Nazareo.",
              "Dalila.",
              "Caída.",
              "Sacrificio."
            ]
          },
          "scriptureRefs": [
            "Jue 13–16"
          ],
          "scriptureDisplay": "Jueces 13–16"
        },
        {
          "id": "jud-5",
          "title": "Caos civil y necesidad de rey",
          "date": "—",
          "scripture": "Jue 17–21",
          "description": "Idolatría interna y violencia; cierre sombrío.",
          "prompt": "Dark chaotic tribal conflict scene, broken idols, somber wide shot, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El libro cierra mostrando urgencia de liderazgo justo y corazón renovado.",
            "items": [
              "Religión privada corrupta.",
              "Violencia.",
              "Guerra civil.",
              "‘No había rey’."
            ]
          },
          "scriptureRefs": [
            "Jue 17–21"
          ],
          "scriptureDisplay": "Jueces 17–21"
        }
      ]
    },
    {
      "id": "rut",
      "title": "Rut",
      "period": "1100 a.C. aprox.",
      "description": "Historia de lealtad y redención en los días de los jueces; conecta al linaje davídico.",
      "authorIntent": "Mostrar cómo la fidelidad y la gracia de Dios obran en lo cotidiano, integrando a una extranjera al pueblo del pacto y preservando el linaje de David.",
      "genealogies": [
        {
          "id": "rut-g1",
          "title": "Genealogía de David",
          "scripture": "Rut 4:18–22",
          "whyItMatters": "Enlaza la historia de Rut con la promesa real, preparando el camino hacia el Mesías.",
          "scriptureRefs": [
            "Rut 4:18–22"
          ],
          "scriptureDisplay": "Rut 4:18–22"
        }
      ],
      "gospelThreads": [
        "Pariente redentor (goel) anticipa a Cristo como Redentor.",
        "Una gentíl entra al pueblo del pacto: anticipo de inclusión de naciones.",
        "Providencia de Dios en decisiones ordinarias.",
        "Linaje de David prepara esperanza mesiánica."
      ],
      "events": [
        {
          "id": "rut-1",
          "title": "Decisión de Rut",
          "date": "1100 a.C. aprox.",
          "scripture": "Rut 1",
          "description": "Rut se une a Noemí y al Dios de Israel.",
          "prompt": "Ruth and Naomi walking toward Bethlehem at sunset, dusty road, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe se expresa en lealtad y entrega a Dios.",
            "items": [
              "Pérdidas en Moab.",
              "Retorno a Belén.",
              "Voto de Rut.",
              "Nueva esperanza."
            ]
          },
          "scriptureRefs": [
            "Rut 1"
          ],
          "scriptureDisplay": "Rut 1"
        },
        {
          "id": "rut-2",
          "title": "Espigar en el campo de Booz",
          "date": "1100 a.C.",
          "scripture": "Rut 2",
          "description": "Providencia guía a Rut; Booz muestra gracia.",
          "prompt": "Ruth gleaning in a golden barley field while Boaz watches respectfully, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia se ve en justicia y generosidad hacia el vulnerable.",
            "items": [
              "Trabajo humilde.",
              "Protección.",
              "Generosidad.",
              "Favor."
            ]
          },
          "scriptureRefs": [
            "Rut 2"
          ],
          "scriptureDisplay": "Rut 2"
        },
        {
          "id": "rut-3",
          "title": "Redención en la era",
          "date": "1100 a.C.",
          "scripture": "Rut 3",
          "description": "Rut apela al derecho de redención; integridad de Booz.",
          "prompt": "Night threshing floor scene with respectful tension and honor, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Redención se mueve por fidelidad al pacto y honor.",
            "items": [
              "Instrucción de Noemí.",
              "Petición.",
              "Integridad.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Rut 3"
          ],
          "scriptureDisplay": "Rut 3"
        },
        {
          "id": "rut-4",
          "title": "Puerta de la ciudad: el goel actúa",
          "date": "1100 a.C.",
          "scripture": "Rut 4",
          "description": "Transacción legal; Booz redime y se casa con Rut.",
          "prompt": "Ancient city gate with elders, Boaz exchanging sandal in legal ceremony, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Redención restaura familia, herencia y futuro.",
            "items": [
              "Testigos.",
              "Redención.",
              "Matrimonio.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Rut 4"
          ],
          "scriptureDisplay": "Rut 4"
        },
        {
          "id": "rut-5",
          "title": "Obed y el linaje de David",
          "date": "1090 a.C. aprox.",
          "scripture": "Rut 4:13–22",
          "description": "Nacimiento de Obed y genealogía hasta David.",
          "prompt": "Baby in arms with a glowing family-tree motif leading to a future king, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El final conecta lo pequeño con lo mesiánico: Dios conduce la historia.",
            "items": [
              "Obed nace.",
              "Noemí restaurada.",
              "Genealogía.",
              "Camino a David."
            ]
          },
          "scriptureRefs": [
            "Rut 4:13–22"
          ],
          "scriptureDisplay": "Rut 4:13–22"
        }
      ]
    },
    {
      "id": "1samuel",
      "title": "1 Samuel",
      "period": "1100 a.C. - 1010 a.C. aprox.",
      "description": "Transición: de jueces a monarquía; Samuel, Saúl y el ascenso de David.",
      "authorIntent": "Narrar el cambio institucional de Israel y mostrar que el liderazgo sin obediencia fracasa; Dios busca un rey conforme a su corazón.",
      "genealogies": [],
      "gospelThreads": [
        "Dios levanta un rey ungido: anticipa al Ungido definitivo.",
        "Obediencia mejor que sacrificio: el corazón importa.",
        "David como tipo del Mesías: pastor, ungido, perseguido.",
        "El fracaso de Saúl revela necesidad de un Rey fiel."
      ],
      "events": [
        {
          "id": "1sam-1",
          "title": "Nacimiento y llamado de Samuel",
          "date": "1100 a.C. aprox.",
          "scripture": "1 Sam 1–3",
          "description": "Ana ora; Samuel sirve y oye la voz de Dios.",
          "prompt": "Child Samuel in the tabernacle near Eli, warm lamp light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia inicia con oración y un profeta que escucha a Dios.",
            "items": [
              "Oración de Ana.",
              "Dedicación.",
              "Llamado nocturno.",
              "Palabra profética."
            ]
          },
          "scriptureRefs": [
            "1 Sam 1–3"
          ],
          "scriptureDisplay": "1 Samuel 1–3"
        },
        {
          "id": "1sam-2",
          "title": "El arca y la caída de Elí",
          "date": "—",
          "scripture": "1 Sam 4–7",
          "description": "Arca capturada y devuelta; juicio y restauración parcial.",
          "prompt": "Ark of the covenant among Philistines, idol Dagon fallen, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La presencia de Dios no es un amuleto; se requiere reverencia.",
            "items": [
              "Derrota.",
              "Arca capturada.",
              "Dagon cae.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "1 Sam 4–7"
          ],
          "scriptureDisplay": "1 Samuel 4–7"
        },
        {
          "id": "1sam-3",
          "title": "Saúl ungido y probado",
          "date": "1050 a.C. aprox.",
          "scripture": "1 Sam 9–15",
          "description": "Saúl es coronado; desobediencia lo descalifica.",
          "prompt": "Samuel anointing Saul with oil, then Saul in anxious disobedience, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El liderazgo sin obediencia termina en rechazo.",
            "items": [
              "Ungimiento.",
              "Victorias iniciales.",
              "Impaciencia.",
              "Rechazo divino."
            ]
          },
          "scriptureRefs": [
            "1 Sam 9–15"
          ],
          "scriptureDisplay": "1 Samuel 9–15"
        },
        {
          "id": "1sam-4",
          "title": "David ungido",
          "date": "1030 a.C. aprox.",
          "scripture": "1 Sam 16",
          "description": "Dios elige al menor; corazón antes que apariencia.",
          "prompt": "Samuel anointing young David in Bethlehem, family watching, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios levanta al rey según su corazón.",
            "items": [
              "Elección inesperada.",
              "Ungimiento secreto.",
              "Espíritu sobre David.",
              "Contraste con Saúl."
            ]
          },
          "scriptureRefs": [
            "1 Sam 16"
          ],
          "scriptureDisplay": "1 Samuel 16"
        },
        {
          "id": "1sam-5",
          "title": "David y Goliat",
          "date": "1025 a.C. aprox.",
          "scripture": "1 Sam 17",
          "description": "Fe vence al gigante; Israel es librado.",
          "prompt": "Young David with sling facing armored giant in Valley of Elah, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La victoria de Dios llega por confianza, no por tamaño.",
            "items": [
              "Desafío 40 días.",
              "Honda y piedra.",
              "Goliat cae.",
              "Gloria a Dios."
            ]
          },
          "scriptureRefs": [
            "1 Sam 17"
          ],
          "scriptureDisplay": "1 Samuel 17"
        },
        {
          "id": "1sam-6",
          "title": "Persecución y misericordia",
          "date": "1020–1010 a.C.",
          "scripture": "1 Sam 18–26",
          "description": "Saúl persigue; David perdona dos veces.",
          "prompt": "David hidden in a cave while Saul passes by, dramatic shadows, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Integridad del ungido prepara su reinado.",
            "items": [
              "Amistad con Jonatán.",
              "Cueva de En-gadi.",
              "Perdón.",
              "Carácter."
            ]
          },
          "scriptureRefs": [
            "1 Sam 18–26"
          ],
          "scriptureDisplay": "1 Samuel 18–26"
        },
        {
          "id": "1sam-7",
          "title": "Fin de Saúl",
          "date": "1010 a.C. aprox.",
          "scripture": "1 Sam 28; 31",
          "description": "Endor, derrota y muerte en Gilboa.",
          "prompt": "Night scene of Endor then a tragic battlefield on Mount Gilboa, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La desobediencia persistente termina en ruina; se abre camino al rey elegido.",
            "items": [
              "Desesperación.",
              "Endor.",
              "Derrota.",
              "Muerte."
            ]
          },
          "scriptureRefs": [
            "1 Sam 28",
            "31"
          ],
          "scriptureDisplay": "1 Samuel 28; 31"
        }
      ]
    },
    {
      "id": "2samuel",
      "title": "2 Samuel",
      "period": "1010 a.C. - 970 a.C. aprox.",
      "description": "Reinado de David: establecimiento del reino y el pacto davídico, con luces y sombras.",
      "authorIntent": "Mostrar el reinado de David como instrumento del plan de Dios, enfatizando el pacto davídico y cómo el pecado del rey trae dolor, pero la gracia sostiene la promesa.",
      "genealogies": [],
      "gospelThreads": [
        "Pacto davídico: promesa de un Rey eterno (cumplida en Cristo).",
        "Arca y adoración: la presencia de Dios en el centro del reino.",
        "El pecado de David muestra necesidad de un Rey sin pecado.",
        "Misericordia y disciplina apuntan al Evangelio: arrepentimiento real."
      ],
      "events": [
        {
          "id": "2sa-1",
          "title": "David coronado y unifica el reino",
          "date": "1010 a.C. aprox.",
          "scripture": "2 Sam 1–5",
          "description": "David es reconocido como rey; Jerusalén se convierte en capital.",
          "prompt": "David crowned in Hebron then entering Jerusalem triumphantly, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La unificación prepara el escenario para el pacto y la adoración central.",
            "items": [
              "Coronación.",
              "Unificación.",
              "Jerusalén.",
              "Consolidación."
            ]
          },
          "scriptureRefs": [
            "2 Sam 1–5"
          ],
          "scriptureDisplay": "2 Samuel 1–5"
        },
        {
          "id": "2sa-2",
          "title": "El arca llega a Jerusalén",
          "date": "—",
          "scripture": "2 Sam 6",
          "description": "David trae el arca con gozo y reverencia.",
          "prompt": "David dancing before the Ark entering Jerusalem, joyful procession, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Adoración auténtica coloca a Dios en el centro del liderazgo.",
            "items": [
              "Proceso correcto.",
              "Gozo.",
              "Reverencia.",
              "Presencia."
            ]
          },
          "scriptureRefs": [
            "2 Sam 6"
          ],
          "scriptureDisplay": "2 Samuel 6"
        },
        {
          "id": "2sa-3",
          "title": "Pacto davídico",
          "date": "—",
          "scripture": "2 Sam 7",
          "description": "Dios promete un trono eterno a la casa de David.",
          "prompt": "Night vision of covenant promise over David’s palace, heavenly light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La promesa del Mesías Rey se vuelve explícita.",
            "items": [
              "Casa eterna.",
              "Hijo prometido.",
              "Reino perpetuo.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "2 Sam 7"
          ],
          "scriptureDisplay": "2 Samuel 7"
        },
        {
          "id": "2sa-4",
          "title": "Pecado con Betsabé y arrepentimiento",
          "date": "—",
          "scripture": "2 Sam 11–12",
          "description": "Caída moral; confrontación de Natán; disciplina.",
          "prompt": "David in sorrow after prophetic confrontation, palace shadows, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado trae muerte; la gracia llama al arrepentimiento.",
            "items": [
              "Adulterio.",
              "Injusticia.",
              "Profeta Natán.",
              "Arrepentimiento."
            ]
          },
          "scriptureRefs": [
            "2 Sam 11–12"
          ],
          "scriptureDisplay": "2 Samuel 11–12"
        },
        {
          "id": "2sa-5",
          "title": "Absalón y la fractura interna",
          "date": "—",
          "scripture": "2 Sam 13–18",
          "description": "Rebelión del hijo; dolor familiar y nacional.",
          "prompt": "Absalom’s rebellion with a sorrowful David fleeing, dramatic landscape, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado tiene ondas largas; el reino necesita restauración profunda.",
            "items": [
              "Conflicto familiar.",
              "Rebelión.",
              "Huida.",
              "Duelo."
            ]
          },
          "scriptureRefs": [
            "2 Sam 13–18"
          ],
          "scriptureDisplay": "2 Samuel 13–18"
        },
        {
          "id": "2sa-6",
          "title": "Cierre del reinado: cántico y legado",
          "date": "970 a.C. aprox.",
          "scripture": "2 Sam 22–24",
          "description": "Cántico de David, últimos actos y lecciones.",
          "prompt": "Old David singing a psalm with a harp, sunset over Jerusalem, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia termina destacando la dependencia de Dios y la necesidad de gracia.",
            "items": [
              "Cántico.",
              "Últimas palabras.",
              "Censo y juicio.",
              "Altar en Arauna."
            ]
          },
          "scriptureRefs": [
            "2 Sam 22–24"
          ],
          "scriptureDisplay": "2 Samuel 22–24"
        }
      ]
    },
    {
      "id": "1reyes",
      "title": "1 Reyes",
      "period": "970 a.C. - 853 a.C. aprox.",
      "description": "Reinado de Salomón, construcción del templo y división del reino; profeta Elías.",
      "authorIntent": "Trazar el auge y declive del reino unido, mostrando que la infidelidad al pacto divide y corrompe; Dios levanta profetas para llamar al arrepentimiento.",
      "genealogies": [],
      "gospelThreads": [
        "Templo: Dios habita con su pueblo, sombra del templo vivo en Cristo.",
        "Sabiduría humana es insuficiente sin obediencia.",
        "Elías confronta idolatría: Dios revela su exclusividad.",
        "La división muestra necesidad de un Rey perfecto que unifique."
      ],
      "events": [
        {
          "id": "1ki-1",
          "title": "Salomón y la sabiduría",
          "date": "970 a.C. aprox.",
          "scripture": "1 Re 1–4",
          "description": "Ascenso de Salomón; pide sabiduría.",
          "prompt": "Young Solomon praying in a grand night scene, divine wisdom light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La sabiduría es don, pero demanda fidelidad.",
            "items": [
              "Coronación.",
              "Pide sabiduría.",
              "Juicio famoso.",
              "Paz inicial."
            ]
          },
          "scriptureRefs": [
            "1 Re 1–4"
          ],
          "scriptureDisplay": "1 Re 1–4"
        },
        {
          "id": "1ki-2",
          "title": "Construcción y dedicación del templo",
          "date": "966–959 a.C. aprox.",
          "scripture": "1 Re 5–8",
          "description": "Templo en Jerusalén; gloria llena la casa.",
          "prompt": "Solomon’s temple dedication with cloud of glory filling the sanctuary, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El templo centraliza adoración y anticipa comunión plena con Dios.",
            "items": [
              "Construcción.",
              "Arca al templo.",
              "Oración.",
              "Gloria."
            ]
          },
          "scriptureRefs": [
            "1 Re 5–8"
          ],
          "scriptureDisplay": "1 Re 5–8"
        },
        {
          "id": "1ki-3",
          "title": "Declive de Salomón",
          "date": "—",
          "scripture": "1 Re 10–11",
          "description": "Riqueza y alianzas; idolatría; juicio anunciado.",
          "prompt": "Solomon surrounded by foreign idols and splendor, shadow of decline, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El corazón dividido destruye el legado.",
            "items": [
              "Reina de Sabá.",
              "Riquezas.",
              "Esposas e ídolos.",
              "Advertencia."
            ]
          },
          "scriptureRefs": [
            "1 Re 10–11"
          ],
          "scriptureDisplay": "1 Re 10–11"
        },
        {
          "id": "1ki-4",
          "title": "División: Roboam y Jeroboam",
          "date": "931 a.C. aprox.",
          "scripture": "1 Re 12",
          "description": "Reino se divide; becerros de oro en el norte.",
          "prompt": "Two thrones splitting a kingdom map, golden calves in Bethel, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La idolatría institucionaliza el pecado.",
            "items": [
              "Consejo necio.",
              "División.",
              "Becerros.",
              "Cisma espiritual."
            ]
          },
          "scriptureRefs": [
            "1 Re 12"
          ],
          "scriptureDisplay": "1 Re 12"
        },
        {
          "id": "1ki-5",
          "title": "Elías: sequía y Carmelo",
          "date": "—",
          "scripture": "1 Re 17–18",
          "description": "Dios responde con fuego; Baal es confrontado.",
          "prompt": "Elijah on Mount Carmel with fire from heaven consuming altar, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios se revela como único Señor, llamando a decisión.",
            "items": [
              "Sequía.",
              "Sarepta.",
              "Carmelo.",
              "Arrepentimiento."
            ]
          },
          "scriptureRefs": [
            "1 Re 17–18"
          ],
          "scriptureDisplay": "1 Re 17–18"
        },
        {
          "id": "1ki-6",
          "title": "Dios habla en el susurro",
          "date": "—",
          "scripture": "1 Re 19",
          "description": "Huida de Elías; encuentro con Dios en Horeb.",
          "prompt": "Elijah in a cave, gentle whisper light after storm and fire, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios fortalece a sus siervos y preserva un remanente.",
            "items": [
              "Desánimo.",
              "Horeb.",
              "Susurro.",
              "Remanente."
            ]
          },
          "scriptureRefs": [
            "1 Re 19"
          ],
          "scriptureDisplay": "1 Re 19"
        }
      ]
    },
    {
      "id": "2reyes",
      "title": "2 Reyes",
      "period": "853 a.C. - 562 a.C. aprox.",
      "description": "Historia de Israel y Judá hacia el exilio; ministerio de Eliseo y caída de ambos reinos.",
      "authorIntent": "Demostrar que la persistente idolatría y la injusticia conducen al juicio (exilio), pero Dios conserva esperanza por su pacto.",
      "genealogies": [],
      "gospelThreads": [
        "Los profetas anuncian juicio y esperanza: necesidad de arrepentimiento.",
        "Exilio evidencia gravedad del pecado; prepara anhelo de restauración.",
        "Milagros de Eliseo señalan la compasión de Dios.",
        "La promesa davídica sobrevive incluso en disciplina."
      ],
      "events": [
        {
          "id": "2ki-1",
          "title": "Eliseo y continuidad profética",
          "date": "—",
          "scripture": "2 Re 2",
          "description": "Elías asciende; Eliseo recibe manto.",
          "prompt": "Elijah taken in a fiery chariot, Elisha receiving mantle, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios continúa hablando y obrando por medio de sus profetas.",
            "items": [
              "Ascenso de Elías.",
              "Manto a Eliseo.",
              "Doble porción.",
              "Continuidad."
            ]
          },
          "scriptureRefs": [
            "2 Re 2"
          ],
          "scriptureDisplay": "2 Re 2"
        },
        {
          "id": "2ki-2",
          "title": "Milagros y misericordia",
          "date": "—",
          "scripture": "2 Re 4–6",
          "description": "Aceite, resurrección, pan multiplicado, sanidad.",
          "prompt": "Prophetic miracles: oil flowing, bread multiplied, compassionate scenes, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios se acerca al necesitado: compasión que apunta al ministerio de Cristo.",
            "items": [
              "Provisión.",
              "Vida restaurada.",
              "Multiplicación.",
              "Misericordia."
            ]
          },
          "scriptureRefs": [
            "2 Re 4–6"
          ],
          "scriptureDisplay": "2 Re 4–6"
        },
        {
          "id": "2ki-3",
          "title": "Naamán y la sanidad por obediencia",
          "date": "—",
          "scripture": "2 Re 5",
          "description": "El sirio es sanado; gracia para gentiles.",
          "prompt": "Naaman in Jordan waters being healed, humble posture, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia rompe fronteras: anticipo de inclusión de naciones.",
            "items": [
              "Orgullo.",
              "Instrucción simple.",
              "Sanidad.",
              "Fe."
            ]
          },
          "scriptureRefs": [
            "2 Re 5"
          ],
          "scriptureDisplay": "2 Re 5"
        },
        {
          "id": "2ki-4",
          "title": "Caída de Israel (Samaria)",
          "date": "722 a.C.",
          "scripture": "2 Re 17",
          "description": "El reino del norte es exiliado por Asiria.",
          "prompt": "Samaria falling with smoke, people led away in chains, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El juicio llega por idolatría persistente.",
            "items": [
              "Advertencias ignoradas.",
              "Asiria.",
              "Exilio.",
              "Lección."
            ]
          },
          "scriptureRefs": [
            "2 Re 17"
          ],
          "scriptureDisplay": "2 Re 17"
        },
        {
          "id": "2ki-5",
          "title": "Ezequías: reforma y liberación",
          "date": "701 a.C. aprox.",
          "scripture": "2 Re 18–20",
          "description": "Confía ante Asiria; Dios libra Jerusalén.",
          "prompt": "King Hezekiah praying in temple, angelic deliverance over Assyrian camp, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe humilde trae liberación; Dios honra confianza.",
            "items": [
              "Reforma.",
              "Carta de Senaquerib.",
              "Oración.",
              "Liberación."
            ]
          },
          "scriptureRefs": [
            "2 Re 18–20"
          ],
          "scriptureDisplay": "2 Re 18–20"
        },
        {
          "id": "2ki-6",
          "title": "Josías: hallazgo de la Ley",
          "date": "622 a.C. aprox.",
          "scripture": "2 Re 22–23",
          "description": "Renovación del pacto; reformas profundas.",
          "prompt": "Scroll of the Law discovered in temple, King Josiah weeping, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La Palabra despierta arrepentimiento: principio de reforma.",
            "items": [
              "Libro hallado.",
              "Arrepentimiento.",
              "Pacto.",
              "Reforma."
            ]
          },
          "scriptureRefs": [
            "2 Re 22–23"
          ],
          "scriptureDisplay": "2 Re 22–23"
        },
        {
          "id": "2ki-7",
          "title": "Caída de Judá y exilio",
          "date": "586 a.C.",
          "scripture": "2 Re 24–25",
          "description": "Jerusalén cae; templo destruido; deportación.",
          "prompt": "Jerusalem in flames, temple ruins, exiles marching, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El juicio purifica; la esperanza queda en el pacto de Dios.",
            "items": [
              "Sitio.",
              "Destrucción.",
              "Exilio.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "2 Re 24–25"
          ],
          "scriptureDisplay": "2 Re 24–25"
        }
      ]
    },
    {
      "id": "1cronicas",
      "title": "1 Crónicas",
      "period": "Genealogías desde Adán hasta David; enfoque en el reino y la adoración.",
      "description": "Compilado postexílico (c. 450–400 a.C.), desde la creación hasta la muerte de David.",
      "authorIntent": "Reafirmar identidad del pueblo tras el exilio, destacando la línea davídica, el templo y la adoración como centro de la vida nacional.",
      "genealogies": [
        {
          "id": "1ch-g1",
          "title": "Genealogías desde Adán",
          "scripture": "1 Cr 1–9",
          "whyItMatters": "Conecta el pueblo restaurado con la historia total de Dios, apuntando a la línea mesiánica.",
          "scriptureRefs": [
            "1 Cr 1–9"
          ],
          "scriptureDisplay": "1 Cr 1–9"
        }
      ],
      "gospelThreads": [
        "Genealogías conectan creación con el Mesías.",
        "David como rey ideal prepara esperanza del Rey perfecto.",
        "Adoración ordenada apunta a una comunión restaurada.",
        "El templo y sacerdocio prefiguran acceso por Cristo."
      ],
      "events": [
        {
          "id": "1ch-1",
          "title": "Genealogías: identidad y promesa",
          "date": "—",
          "scripture": "1 Cr 1–9",
          "description": "Listas desde Adán, tribus y familias.",
          "prompt": "Ancient scrolls unfolding into a luminous family tree spanning generations, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Las genealogías restauran memoria e identidad del pacto.",
            "items": [
              "De Adán a Abraham.",
              "Tribus.",
              "Levitas.",
              "Retorno."
            ]
          },
          "scriptureRefs": [
            "1 Cr 1–9"
          ],
          "scriptureDisplay": "1 Cr 1–9"
        },
        {
          "id": "1ch-2",
          "title": "David: ascenso y unidad",
          "date": "—",
          "scripture": "1 Cr 10–12",
          "description": "De Saúl a David; el reino se une.",
          "prompt": "Tribes rallying around David, banners and unity, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "David aparece como punto de unidad bajo Dios.",
            "items": [
              "Fin de Saúl.",
              "Apoyo tribal.",
              "Unificación.",
              "Jerusalén."
            ]
          },
          "scriptureRefs": [
            "1 Cr 10–12"
          ],
          "scriptureDisplay": "1 Cr 10–12"
        },
        {
          "id": "1ch-3",
          "title": "Arca y adoración organizada",
          "date": "—",
          "scripture": "1 Cr 13–16",
          "description": "El arca regresa; se organiza la alabanza.",
          "prompt": "Levitical musicians with harps and cymbals as the Ark is brought with joy, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La adoración ordenada se ve como respuesta al Dios presente.",
            "items": [
              "Proceso correcto.",
              "Música levítica.",
              "Acción de gracias.",
              "Pacto."
            ]
          },
          "scriptureRefs": [
            "1 Cr 13–16"
          ],
          "scriptureDisplay": "1 Cr 13–16"
        },
        {
          "id": "1ch-4",
          "title": "Preparación del templo",
          "date": "—",
          "scripture": "1 Cr 22–29",
          "description": "David prepara materiales y encarga a Salomón.",
          "prompt": "Old David handing plans to Solomon, temple materials stacked, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Aunque David no construye, prepara el futuro: legado de adoración.",
            "items": [
              "Planificación.",
              "Recursos.",
              "Instrucciones.",
              "Oración final."
            ]
          },
          "scriptureRefs": [
            "1 Cr 22–29"
          ],
          "scriptureDisplay": "1 Cr 22–29"
        }
      ]
    },
    {
      "id": "2cronicas",
      "title": "2 Crónicas",
      "period": "Reyes de Judá y el templo; reformas y caídas hasta el exilio.",
      "description": "c. 450–400 a.C. (postexílico).",
      "authorIntent": "Enfatizar que la fidelidad al Señor trae bendición y que las reformas centradas en el templo y la Palabra son cruciales; explicar el exilio como consecuencia del pecado.",
      "genealogies": [],
      "gospelThreads": [
        "El templo como lugar de encuentro anticipa el acceso definitivo en Cristo.",
        "Reformas genuinas nacen de humildad y oración.",
        "Juicio y misericordia: Dios disciplina para restaurar.",
        "Esperanza postexílica prepara restauración mayor."
      ],
      "events": [
        {
          "id": "2ch-1",
          "title": "Salomón y dedicación del templo",
          "date": "—",
          "scripture": "2 Cr 1–7",
          "description": "Templo dedicado; gloria llena; oración por perdón.",
          "prompt": "Temple dedication with overwhelming glory cloud and worship, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios escucha oración y llama a humildad.",
            "items": [
              "Sabiduría.",
              "Dedicación.",
              "Gloria.",
              "2 Cr 7:14."
            ]
          },
          "scriptureRefs": [
            "2 Cr 1–7"
          ],
          "scriptureDisplay": "2 Cr 1–7"
        },
        {
          "id": "2ch-2",
          "title": "Reformas de Asa y Josafat",
          "date": "—",
          "scripture": "2 Cr 14–20",
          "description": "Buscar a Dios trae paz; victoria por adoración.",
          "prompt": "Army praising with singers ahead, miraculous deliverance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La batalla se gana confiando en Dios.",
            "items": [
              "Asa.",
              "Josafat.",
              "Oración.",
              "Alabanza."
            ]
          },
          "scriptureRefs": [
            "2 Cr 14–20"
          ],
          "scriptureDisplay": "2 Cr 14–20"
        },
        {
          "id": "2ch-3",
          "title": "Ezequías y restauración del culto",
          "date": "—",
          "scripture": "2 Cr 29–31",
          "description": "Purifica el templo; celebra Pascua.",
          "prompt": "Hezekiah reopening temple gates, Passover celebration scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Volver a Dios incluye volver al culto y a la gracia.",
            "items": [
              "Purificación.",
              "Pascua.",
              "Unidad.",
              "Generosidad."
            ]
          },
          "scriptureRefs": [
            "2 Cr 29–31"
          ],
          "scriptureDisplay": "2 Cr 29–31"
        },
        {
          "id": "2ch-4",
          "title": "Manasés: caída y arrepentimiento",
          "date": "—",
          "scripture": "2 Cr 33",
          "description": "El rey más idólatra se humilla y es restaurado.",
          "prompt": "King Manasseh in chains then praying in humility, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia puede restaurar aun grandes fracasos.",
            "items": [
              "Idolatría.",
              "Cautiverio.",
              "Humillación.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "2 Cr 33"
          ],
          "scriptureDisplay": "2 Cr 33"
        },
        {
          "id": "2ch-5",
          "title": "Exilio y edicto de Ciro",
          "date": "586–538 a.C.",
          "scripture": "2 Cr 36",
          "description": "Caída de Jerusalén; anuncio de retorno.",
          "prompt": "Jerusalem ruins fade into a hopeful scroll with Cyrus decree, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Juicio no es el fin: Dios abre camino de retorno.",
            "items": [
              "Caída.",
              "Exilio.",
              "Disciplina.",
              "Ciro."
            ]
          },
          "scriptureRefs": [
            "2 Cr 36"
          ],
          "scriptureDisplay": "2 Cr 36"
        }
      ]
    },
    {
      "id": "esdras",
      "title": "Esdras",
      "period": "Retorno del exilio y reconstrucción del templo.",
      "description": "538–457 a.C. aprox.",
      "authorIntent": "Mostrar la restauración postexílica: Dios cumple su palabra, restaura el culto y llama a santidad comunitaria mediante la Palabra.",
      "genealogies": [
        {
          "id": "ezr-g1",
          "title": "Listas de retornados",
          "scripture": "Esd 2",
          "whyItMatters": "Reafirman identidad del pueblo restaurado y continuidad del pacto.",
          "scriptureRefs": [
            "Esd 2"
          ],
          "scriptureDisplay": "Esdras 2"
        }
      ],
      "gospelThreads": [
        "El regreso es gracia: Dios cumple promesas pese al pecado.",
        "El templo restaurado apunta a la presencia de Dios con su pueblo.",
        "Reforma por la Palabra anticipa discipulado del Evangelio.",
        "Pureza del pueblo prepara esperanza mesiánica."
      ],
      "events": [
        {
          "id": "ezr-1",
          "title": "Edicto de Ciro y primer retorno",
          "date": "538 a.C.",
          "scripture": "Esd 1–2",
          "description": "Dios mueve a Ciro; listas de retornados.",
          "prompt": "Persian king Cyrus issuing a decree, exiles returning with vessels, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios gobierna reyes para cumplir su palabra.",
            "items": [
              "Decreto.",
              "Vasos del templo.",
              "Retorno.",
              "Listas."
            ]
          },
          "scriptureRefs": [
            "Esd 1–2"
          ],
          "scriptureDisplay": "Esdras 1–2"
        },
        {
          "id": "ezr-2",
          "title": "Altar y fundamentos del templo",
          "date": "537–536 a.C.",
          "scripture": "Esd 3",
          "description": "Adoración reinicia antes de la seguridad plena.",
          "prompt": "Altar rebuilt amid ruins, people worshiping with tears and joy, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La adoración precede a la comodidad: Dios primero.",
            "items": [
              "Altar.",
              "Fiestas.",
              "Cimientos.",
              "Lágrimas/alegría."
            ]
          },
          "scriptureRefs": [
            "Esd 3"
          ],
          "scriptureDisplay": "Esdras 3"
        },
        {
          "id": "ezr-3",
          "title": "Oposición y pausa",
          "date": "—",
          "scripture": "Esd 4",
          "description": "Resistencia externa e interna detiene la obra.",
          "prompt": "Construction halted by hostile officials, tense legal scrolls, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La restauración enfrenta oposición; perseverar requiere fe.",
            "items": [
              "Oposición.",
              "Cartas.",
              "Detención.",
              "Prueba."
            ]
          },
          "scriptureRefs": [
            "Esd 4"
          ],
          "scriptureDisplay": "Esdras 4"
        },
        {
          "id": "ezr-4",
          "title": "Profetas animan y templo se completa",
          "date": "520–516 a.C.",
          "scripture": "Esd 5–6",
          "description": "Hageo y Zacarías; templo terminado.",
          "prompt": "Prophets encouraging builders, temple completed under sunlight, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La Palabra reactiva obediencia y esperanza.",
            "items": [
              "Profetas.",
              "Reinicio.",
              "Confirmación de decreto.",
              "Dedicación."
            ]
          },
          "scriptureRefs": [
            "Esd 5–6"
          ],
          "scriptureDisplay": "Esdras 5–6"
        },
        {
          "id": "ezr-5",
          "title": "Esdras y reforma espiritual",
          "date": "458 a.C. aprox.",
          "scripture": "Esd 7–10",
          "description": "Esdras enseña la ley; confronta matrimonios mixtos.",
          "prompt": "Ezra reading the Law to the assembly, tears and repentance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La santidad comunitaria se reconstruye con la Palabra.",
            "items": [
              "Comisión.",
              "Enseñanza.",
              "Arrepentimiento.",
              "Reforma."
            ]
          },
          "scriptureRefs": [
            "Esd 7–10"
          ],
          "scriptureDisplay": "Esdras 7–10"
        }
      ]
    },
    {
      "id": "nehemias",
      "title": "Nehemías",
      "period": "Reconstrucción de muros y renovación del pacto.",
      "description": "445–432 a.C. aprox.",
      "authorIntent": "Relatar la reconstrucción de Jerusalén y mostrar que la restauración verdadera incluye estructuras, justicia y renovación del corazón por la Palabra.",
      "genealogies": [],
      "gospelThreads": [
        "Dios restaura comunidades: defensa y misión.",
        "La Palabra trae convicción y gozo (Ne 8).",
        "Arrepentimiento comunitario prepara el anuncio del Evangelio.",
        "Liderazgo servicial refleja el corazón del Reino."
      ],
      "events": [
        {
          "id": "neh-1",
          "title": "Llamado de Nehemías y permiso real",
          "date": "445 a.C.",
          "scripture": "Ne 1–2",
          "description": "Oración, carga y comisión para reconstruir.",
          "prompt": "Nehemiah praying in Persian court then journeying to ruined Jerusalem, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La restauración comienza con oración y visión.",
            "items": [
              "Carga.",
              "Oración.",
              "Permiso.",
              "Viaje."
            ]
          },
          "scriptureRefs": [
            "Ne 1–2"
          ],
          "scriptureDisplay": "Ne 1–2"
        },
        {
          "id": "neh-2",
          "title": "Muros reconstruidos pese a oposición",
          "date": "445 a.C.",
          "scripture": "Ne 3–6",
          "description": "Trabajo organizado con vigilancia constante.",
          "prompt": "Builders on Jerusalem wall holding tools and swords, determined faces, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Fe y trabajo: ‘una mano en la obra, otra en la espada’.",
            "items": [
              "Organización.",
              "Burla/oposición.",
              "Perseverancia.",
              "Muralla termina."
            ]
          },
          "scriptureRefs": [
            "Ne 3–6"
          ],
          "scriptureDisplay": "Ne 3–6"
        },
        {
          "id": "neh-3",
          "title": "La Palabra leída y avivamiento",
          "date": "444 a.C.",
          "scripture": "Ne 8",
          "description": "Esdras lee; el pueblo entiende y celebra.",
          "prompt": "Ezra reading the scroll to a huge crowd, joyful tears, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Comprender la Palabra produce convicción y gozo.",
            "items": [
              "Lectura.",
              "Explicación.",
              "Arrepentimiento.",
              "Fiesta."
            ]
          },
          "scriptureRefs": [
            "Ne 8"
          ],
          "scriptureDisplay": "Ne 8"
        },
        {
          "id": "neh-4",
          "title": "Confesión y pacto renovado",
          "date": "444 a.C.",
          "scripture": "Ne 9–10",
          "description": "Oración histórica; compromiso comunitario.",
          "prompt": "Nation gathered in fasting, hands raised in confession, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia se relee a la luz de la fidelidad de Dios.",
            "items": [
              "Confesión.",
              "Historia.",
              "Pacto.",
              "Compromisos."
            ]
          },
          "scriptureRefs": [
            "Ne 9–10"
          ],
          "scriptureDisplay": "Ne 9–10"
        },
        {
          "id": "neh-5",
          "title": "Reformas sociales y cierre",
          "date": "432 a.C. aprox.",
          "scripture": "Ne 11–13",
          "description": "Reordenamiento, justicia económica, purificación.",
          "prompt": "Nehemiah confronting injustice with firm compassion, city life restored, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La santidad incluye economía, culto y vida diaria.",
            "items": [
              "Justicia.",
              "Orden.",
              "Reformas.",
              "Perseverancia."
            ]
          },
          "scriptureRefs": [
            "Ne 11–13"
          ],
          "scriptureDisplay": "Ne 11–13"
        }
      ]
    },
    {
      "id": "ester",
      "title": "Ester",
      "period": "Providencia de Dios en el exilio persa.",
      "description": "c. 483–473 a.C.",
      "authorIntent": "Mostrar la providencia de Dios aun cuando su nombre no se menciona explícitamente; proteger a su pueblo y preservar la promesa en medio de amenazas.",
      "genealogies": [],
      "gospelThreads": [
        "Dios gobierna ‘detrás de escena’ para preservar la línea mesiánica.",
        "Liberación mediante mediación arriesgada: eco del sacrificio.",
        "Reversión de sentencia de muerte: imagen de redención.",
        "Purim como memoria de salvación."
      ],
      "events": [
        {
          "id": "est-1",
          "title": "Ester llega al trono",
          "date": "—",
          "scripture": "Est 1–2",
          "description": "Una huérfana judía se convierte en reina.",
          "prompt": "Esther crowned in Persian palace, elegant yet humble, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios posiciona personas para tiempos críticos.",
            "items": [
              "Vasti depuesta.",
              "Ester elegida.",
              "Providencia.",
              "Preparación."
            ]
          },
          "scriptureRefs": [
            "Est 1–2"
          ],
          "scriptureDisplay": "Ester 1–2"
        },
        {
          "id": "est-2",
          "title": "La conspiración y Mardoqueo",
          "date": "—",
          "scripture": "Est 2:19–23",
          "description": "Un complot es descubierto y registrado.",
          "prompt": "Mordecai overhearing plot in palace corridor, secretive tension, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Detalles pequeños se vuelven decisivos en la providencia divina.",
            "items": [
              "Conspiración.",
              "Descubrimiento.",
              "Registro.",
              "Semilla futura."
            ]
          },
          "scriptureRefs": [
            "Est 2:19–23"
          ],
          "scriptureDisplay": "Ester 2:19–23"
        },
        {
          "id": "est-3",
          "title": "Decreto de exterminio",
          "date": "—",
          "scripture": "Est 3",
          "description": "Hamán trama destruir a los judíos.",
          "prompt": "Haman presenting a sealed decree, ominous Persian court, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Amenaza existencial sobre el pueblo del pacto.",
            "items": [
              "Orgullo.",
              "Suerte (pur).",
              "Decreto.",
              "Crisis."
            ]
          },
          "scriptureRefs": [
            "Est 3"
          ],
          "scriptureDisplay": "Ester 3"
        },
        {
          "id": "est-4",
          "title": "‘Para un tiempo como este’",
          "date": "—",
          "scripture": "Est 4–5",
          "description": "Ester intercede arriesgando su vida; ayuno y banquetes.",
          "prompt": "Esther approaching the king uninvited, tense golden hall, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Mediación valiente por el pueblo: imagen de intercesión.",
            "items": [
              "Ayuno.",
              "Valor.",
              "Banquetes.",
              "Intercesión."
            ]
          },
          "scriptureRefs": [
            "Est 4–5"
          ],
          "scriptureDisplay": "Ester 4–5"
        },
        {
          "id": "est-5",
          "title": "Reversión: Hamán cae, el pueblo vive",
          "date": "—",
          "scripture": "Est 6–10",
          "description": "Honra a Mardoqueo; sentencia revertida; Purim.",
          "prompt": "Persian gallows scene reversing fate, joyful celebration of Purim, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios revierte la muerte y trae alegría: patrón de salvación.",
            "items": [
              "Reversión.",
              "Defensa.",
              "Victoria.",
              "Purim."
            ]
          },
          "scriptureRefs": [
            "Est 6–10"
          ],
          "scriptureDisplay": "Ester 6–10"
        }
      ]
    },
    {
      "id": "job",
      "title": "Job",
      "period": "Patriarcal (fecha incierta).",
      "description": "Sufrimiento del justo y sabiduría sobre el misterio del dolor.",
      "authorIntent": "Explorar el sufrimiento sin respuestas simplistas, defendiendo la soberanía y sabiduría de Dios y llamando a una fe que adora aun sin entender.",
      "genealogies": [],
      "gospelThreads": [
        "El justo sufre: anticipa al Justo perfecto que sufre por otros.",
        "Necesidad de mediador: Job anhela un Redentor vivo.",
        "La soberanía de Dios en medio del mal.",
        "Restauración final refleja esperanza del Evangelio."
      ],
      "events": [
        {
          "id": "job-1",
          "title": "Prueba del justo",
          "date": "—",
          "scripture": "Job 1–2",
          "description": "Job pierde todo; mantiene integridad aunque golpeado.",
          "prompt": "Righteous man in ashes under stormy skies, steadfast faith, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe es probada; Dios sigue siendo digno.",
            "items": [
              "Pérdida.",
              "Dolor.",
              "Integridad.",
              "Adoración."
            ]
          },
          "scriptureRefs": [
            "Job 1–2"
          ],
          "scriptureDisplay": "Job 1–2"
        },
        {
          "id": "job-2",
          "title": "Diálogos: teología insuficiente",
          "date": "—",
          "scripture": "Job 3–31",
          "description": "Amigos ofrecen explicaciones; Job clama justicia.",
          "prompt": "Three friends debating with Job under a desert night, intense expressions, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Sufrimiento no siempre es castigo directo; se requiere humildad.",
            "items": [
              "Acusaciones.",
              "Defensa.",
              "Lamento.",
              "Búsqueda."
            ]
          },
          "scriptureRefs": [
            "Job 3–31"
          ],
          "scriptureDisplay": "Job 3–31"
        },
        {
          "id": "job-3",
          "title": "Eliú y preparación",
          "date": "—",
          "scripture": "Job 32–37",
          "description": "Eliú enfatiza la grandeza de Dios y disciplina.",
          "prompt": "Young Elihu speaking passionately with storm gathering, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios puede formar el carácter mediante dolor.",
            "items": [
              "Corrección.",
              "Grandeza.",
              "Disciplina.",
              "Preparación."
            ]
          },
          "scriptureRefs": [
            "Job 32–37"
          ],
          "scriptureDisplay": "Job 32–37"
        },
        {
          "id": "job-4",
          "title": "Dios responde desde el torbellino",
          "date": "—",
          "scripture": "Job 38–41",
          "description": "Dios revela su sabiduría y poder creador.",
          "prompt": "Divine voice in a whirlwind over vast cosmos, awe and humility, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La respuesta no es explicación completa, sino revelación de Dios.",
            "items": [
              "Creación.",
              "Providencia.",
              "Awe.",
              "Humildad."
            ]
          },
          "scriptureRefs": [
            "Job 38–41"
          ],
          "scriptureDisplay": "Job 38–41"
        },
        {
          "id": "job-5",
          "title": "Arrepentimiento y restauración",
          "date": "—",
          "scripture": "Job 42",
          "description": "Job se humilla; Dios restaura y vindica.",
          "prompt": "Job restored with family and peace under golden light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La esperanza apunta a una restauración final mayor.",
            "items": [
              "Arrepentimiento.",
              "Intercesión.",
              "Restauración.",
              "Gracia."
            ]
          },
          "scriptureRefs": [
            "Job 42"
          ],
          "scriptureDisplay": "Job 42"
        }
      ]
    },
    {
      "id": "salmos",
      "title": "Salmos",
      "period": "c. 1000–400 a.C. (colección).",
      "description": "Cancionero de Israel: lamento, alabanza, sabiduría y esperanza mesiánica.",
      "authorIntent": "Dar palabras para orar y adorar en todas las estaciones, formando el corazón del pueblo y señalando al Rey y Siervo prometidos.",
      "genealogies": [],
      "gospelThreads": [
        "Salmos mesiánicos anuncian al Rey sufriente y victorioso.",
        "Lamento y confianza modelan fe auténtica.",
        "Adoración centra la vida en Dios, no en circunstancias.",
        "El Señor como pastor y refugio apunta al cuidado de Cristo."
      ],
      "events": [
        {
          "id": "ps-1",
          "title": "Lamento y confianza",
          "date": "—",
          "scripture": "Sal 3; 13; 42",
          "description": "Orar en angustia sin perder la esperanza.",
          "prompt": "Person praying in the night with tears, yet dawn breaking, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe se expresa con honestidad y esperanza.",
            "items": [
              "Queja.",
              "Petición.",
              "Confianza.",
              "Alabanza."
            ]
          },
          "scriptureRefs": [
            "Sal 3",
            "13",
            "42"
          ],
          "scriptureDisplay": "Salmos 3; 13; 42"
        },
        {
          "id": "ps-2",
          "title": "El Rey ungido",
          "date": "—",
          "scripture": "Sal 2; 110",
          "description": "El Mesías reina; el Señor pone enemigos por estrado.",
          "prompt": "Crowned king on Zion with heavenly radiance, prophetic majesty, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Rey prometido gobierna con autoridad divina.",
            "items": [
              "Hijo ungido.",
              "Reinado.",
              "Sacerdote-rey.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Sal 2",
            "110"
          ],
          "scriptureDisplay": "Salmos 2; 110"
        },
        {
          "id": "ps-3",
          "title": "El Siervo sufriente",
          "date": "—",
          "scripture": "Sal 22; 69",
          "description": "Dolor del justo y vindicación: lenguaje que Jesús toma.",
          "prompt": "Suffering righteous figure under dark sky, then vindication light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El sufrimiento del justo apunta a la cruz y victoria.",
            "items": [
              "Abandono aparente.",
              "Burla.",
              "Confianza.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Sal 22",
            "69"
          ],
          "scriptureDisplay": "Salmos 22; 69"
        },
        {
          "id": "ps-4",
          "title": "Adoración y creación",
          "date": "—",
          "scripture": "Sal 19; 104; 150",
          "description": "Los cielos declaran; todo respira alabe.",
          "prompt": "Starry heavens over mountains, then exuberant worship with instruments, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La creación y la congregación cantan la gloria de Dios.",
            "items": [
              "Creación.",
              "Ley.",
              "Alabanza.",
              "Doxología."
            ]
          },
          "scriptureRefs": [
            "Sal 19",
            "104",
            "150"
          ],
          "scriptureDisplay": "Salmos 19; 104; 150"
        },
        {
          "id": "ps-5",
          "title": "El Pastor y el refugio",
          "date": "—",
          "scripture": "Sal 23; 91",
          "description": "Dios guía, protege y da descanso.",
          "prompt": "Shepherd leading sheep beside still waters, serene protection, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios como pastor anticipa al Buen Pastor.",
            "items": [
              "Guía.",
              "Provisión.",
              "Protección.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Sal 23",
            "91"
          ],
          "scriptureDisplay": "Salmos 23; 91"
        }
      ]
    },
    {
      "id": "proverbios",
      "title": "Proverbios",
      "period": "c. 970–700 a.C. (compilación).",
      "description": "Sabiduría práctica para vivir con temor del Señor.",
      "authorIntent": "Formar carácter y decisiones sabias, mostrando que la verdadera sabiduría comienza con reverencia a Dios y se expresa en justicia, dominio propio y palabras sanas.",
      "genealogies": [],
      "gospelThreads": [
        "La sabiduría personificada prepara el lenguaje del Logos.",
        "Temor del Señor como fundamento del discipulado.",
        "Justicia hacia el prójimo como fruto del corazón transformado.",
        "El corazón humano necesita guardia y redención."
      ],
      "events": [
        {
          "id": "prov-1",
          "title": "Temor del Señor: fundamento",
          "date": "—",
          "scripture": "Pr 1–9",
          "description": "Sabiduría vs necedad; llamado a escuchar.",
          "prompt": "Two paths: wisdom inviting in bright city gate, folly in shadows, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La vida se decide por a quién escuchas.",
            "items": [
              "Fundamento.",
              "Advertencias.",
              "Camino recto.",
              "Corazón."
            ]
          },
          "scriptureRefs": [
            "Pr 1–9"
          ],
          "scriptureDisplay": "Pr 1–9"
        },
        {
          "id": "prov-2",
          "title": "Sabiduría en relaciones y palabras",
          "date": "—",
          "scripture": "Pr 10–22",
          "description": "Dichos sobre lengua, amistad, trabajo, justicia.",
          "prompt": "Symbolic scenes of speech as light or fire, community life, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Las palabras revelan el corazón y construyen o destruyen.",
            "items": [
              "Lengua.",
              "Amistad.",
              "Trabajo.",
              "Justicia."
            ]
          },
          "scriptureRefs": [
            "Pr 10–22"
          ],
          "scriptureDisplay": "Pr 10–22"
        },
        {
          "id": "prov-3",
          "title": "Justicia con el vulnerable",
          "date": "—",
          "scripture": "Pr 14; 19; 31",
          "description": "Compasión y responsabilidad social.",
          "prompt": "Hands offering bread to the poor, scales of justice, warm light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La sabiduría ama al prójimo de forma concreta.",
            "items": [
              "Generosidad.",
              "Integridad.",
              "Defensa del débil.",
              "Misericordia."
            ]
          },
          "scriptureRefs": [
            "Pr 14",
            "19",
            "31"
          ],
          "scriptureDisplay": "Pr 14; 19; 31"
        },
        {
          "id": "prov-4",
          "title": "La mujer sabia y el hogar",
          "date": "—",
          "scripture": "Pr 31",
          "description": "Retrato de virtud: labor, temor del Señor, dignidad.",
          "prompt": "Wise woman managing household and commerce with dignity, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Sabiduría se encarna en vida diaria y reverencia.",
            "items": [
              "Trabajo.",
              "Generosidad.",
              "Temor del Señor.",
              "Dignidad."
            ]
          },
          "scriptureRefs": [
            "Pr 31"
          ],
          "scriptureDisplay": "Pr 31"
        }
      ]
    },
    {
      "id": "eclesiastes",
      "title": "Eclesiastés",
      "period": "c. 940–900 a.C. (tradicionalmente).",
      "description": "Reflexión sobre la vanidad de la vida sin Dios.",
      "authorIntent": "Desenmascarar la insuficiencia de placer, éxito y sabiduría humana para dar sentido; conducir a temer a Dios y vivir con esperanza.",
      "genealogies": [],
      "gospelThreads": [
        "La insatisfacción humana apunta a necesidad de redención.",
        "Temer a Dios y guardar sus mandamientos: orientación hacia el Reino.",
        "La vida ‘bajo el sol’ resalta anhelo de eternidad.",
        "Juicio final hace necesaria la gracia."
      ],
      "events": [
        {
          "id": "ecl-1",
          "title": "Vanidad ‘bajo el sol’",
          "date": "—",
          "scripture": "Ecl 1–2",
          "description": "Búsqueda en placer, trabajo, sabiduría: vacío.",
          "prompt": "Royal figure surrounded by wealth fading into dust, melancholy light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Sin Dios, lo grandioso se vuelve vacío.",
            "items": [
              "Placer.",
              "Trabajo.",
              "Sabiduría.",
              "Cansancio."
            ]
          },
          "scriptureRefs": [
            "Ecl 1–2"
          ],
          "scriptureDisplay": "Eclesiastés 1–2"
        },
        {
          "id": "ecl-2",
          "title": "Tiempo y eternidad en el corazón",
          "date": "—",
          "scripture": "Ecl 3",
          "description": "Hay tiempo para todo; Dios puso eternidad.",
          "prompt": "Flowing hourglass over changing seasons, subtle divine glow, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El corazón anhela más que lo temporal.",
            "items": [
              "Tiempo.",
              "Eternidad.",
              "Soberanía.",
              "Confianza."
            ]
          },
          "scriptureRefs": [
            "Ecl 3"
          ],
          "scriptureDisplay": "Eclesiastés 3"
        },
        {
          "id": "ecl-3",
          "title": "Injusticia y fragilidad",
          "date": "—",
          "scripture": "Ecl 4–8",
          "description": "Opresión, muerte y límites de la vida.",
          "prompt": "Contrasting scenes of oppression and graves, then a hopeful horizon, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El mundo roto clama por un Rey justo.",
            "items": [
              "Opresión.",
              "Fragilidad.",
              "Límites.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ecl 4–8"
          ],
          "scriptureDisplay": "Eclesiastés 4–8"
        },
        {
          "id": "ecl-4",
          "title": "Conclusión: teme a Dios",
          "date": "—",
          "scripture": "Ecl 12",
          "description": "Teme a Dios; todo será juzgado.",
          "prompt": "Old sage closing a scroll with sunrise behind, solemn yet hopeful, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El sentido se encuentra en Dios, no en la vanidad.",
            "items": [
              "Temor.",
              "Obediencia.",
              "Juicio.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ecl 12"
          ],
          "scriptureDisplay": "Eclesiastés 12"
        }
      ]
    },
    {
      "id": "cantares",
      "title": "Cantares",
      "period": "c. 950 a.C. (tradicionalmente).",
      "description": "Poesía del amor conyugal: belleza, deseo y pacto.",
      "authorIntent": "Celebrar el amor matrimonial con dignidad, mostrando la bondad de la creación y el poder del amor fiel dentro del pacto.",
      "genealogies": [],
      "gospelThreads": [
        "Amor fiel refleja el carácter del Dios que hace pacto.",
        "La pureza y el compromiso apuntan a una relación restaurada.",
        "Lenguaje de jardín evoca Edén y esperanza de restauración.",
        "Imágenes de boda anticipan la ‘boda del Cordero’."
      ],
      "events": [
        {
          "id": "can-1",
          "title": "Amor y deleite con honor",
          "date": "—",
          "scripture": "Cant 1–2",
          "description": "Atracción y alegría sin vergüenza.",
          "prompt": "Couple in a garden with blossoms and warm light, reverent romance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El amor en pacto es bueno y celebrable.",
            "items": [
              "Gozo.",
              "Dignidad.",
              "Belleza.",
              "Seguridad."
            ]
          },
          "scriptureRefs": [
            "Cant 1–2"
          ],
          "scriptureDisplay": "Cantares 1–2"
        },
        {
          "id": "can-2",
          "title": "Búsqueda y pertenencia",
          "date": "—",
          "scripture": "Cant 3",
          "description": "Anhelo y encuentro; lenguaje de boda.",
          "prompt": "Night search in ancient streets then wedding procession imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El amor fiel persevera y se celebra.",
            "items": [
              "Anhelo.",
              "Encuentro.",
              "Boda.",
              "Pacto."
            ]
          },
          "scriptureRefs": [
            "Cant 3"
          ],
          "scriptureDisplay": "Cantares 3"
        },
        {
          "id": "can-3",
          "title": "Exclusividad y compromiso",
          "date": "—",
          "scripture": "Cant 4–6",
          "description": "Admiración y lealtad mutua.",
          "prompt": "Poetic admiration scene with symbolic vineyard and crown, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pacto protege y honra el amor.",
            "items": [
              "Exclusividad.",
              "Fidelidad.",
              "Cuidado.",
              "Respeto."
            ]
          },
          "scriptureRefs": [
            "Cant 4–6"
          ],
          "scriptureDisplay": "Cantares 4–6"
        },
        {
          "id": "can-4",
          "title": "El amor fuerte como la muerte",
          "date": "—",
          "scripture": "Cant 8",
          "description": "Culmina en la fuerza del amor y su sello.",
          "prompt": "Symbolic seal over a heart with flames of love, solemn beauty, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Amor fiel apunta a la fidelidad divina y esperanza final.",
            "items": [
              "Sello.",
              "Fuerza.",
              "Fidelidad.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Cant 8"
          ],
          "scriptureDisplay": "Cantares 8"
        }
      ]
    },
    {
      "id": "isaias",
      "title": "Isaías",
      "period": "c. 740–681 a.C.",
      "description": "Profecías de juicio y esperanza; el Santo de Israel y el Siervo sufriente.",
      "authorIntent": "Confrontar pecado e idolatría, llamar a arrepentimiento, y anunciar la salvación futura: el Mesías, el Siervo y el reino de paz.",
      "genealogies": [],
      "gospelThreads": [
        "El Siervo sufriente (Is 53) apunta directamente a Cristo.",
        "Emanuel: Dios con nosotros (Is 7; 9).",
        "Buenas nuevas a los pobres (Is 61) prefiguran el Evangelio.",
        "Nuevo cielo y nueva tierra alimentan la esperanza final."
      ],
      "events": [
        {
          "id": "isa-1",
          "title": "Visión del trono y comisión",
          "date": "c. 740 a.C.",
          "scripture": "Is 6",
          "description": "Dios santo llama a Isaías y purifica sus labios.",
          "prompt": "Isaiah before the heavenly throne with seraphim, coal touching lips, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión profética nace de adoración y purificación.",
            "items": [
              "Santidad.",
              "Convicción.",
              "Purificación.",
              "Envío."
            ]
          },
          "scriptureRefs": [
            "Is 6"
          ],
          "scriptureDisplay": "Isaías 6"
        },
        {
          "id": "isa-2",
          "title": "Emanuel y el niño-rey",
          "date": "c. 735–700 a.C.",
          "scripture": "Is 7; 9",
          "description": "Señales de esperanza: Dios con nosotros; Príncipe de paz.",
          "prompt": "Prophetic child-king imagery with light over dark land, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios promete presencia y un rey justo.",
            "items": [
              "Emanuel.",
              "Luz en tinieblas.",
              "Príncipe de paz.",
              "Reino."
            ]
          },
          "scriptureRefs": [
            "Is 7",
            "9"
          ],
          "scriptureDisplay": "Isaías 7; 9"
        },
        {
          "id": "isa-3",
          "title": "Juicio y remanente",
          "date": "—",
          "scripture": "Is 1–5; 10",
          "description": "Denuncia injusticia; promesa de remanente fiel.",
          "prompt": "City of Jerusalem with injustice contrasted by a small faithful remnant, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios disciplina para purificar y preservar promesa.",
            "items": [
              "Injusticia.",
              "Llamado.",
              "Juicio.",
              "Remanente."
            ]
          },
          "scriptureRefs": [
            "Is 1–5",
            "10"
          ],
          "scriptureDisplay": "Isaías 1–5; 10"
        },
        {
          "id": "isa-4",
          "title": "El Siervo sufriente",
          "date": "—",
          "scripture": "Is 42; 49; 50; 52–53",
          "description": "El siervo lleva el pecado y trae paz.",
          "prompt": "Suffering servant bearing wounds yet radiant with redemption, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Centro evangelístico del AT: sustitución y justificación.",
            "items": [
              "Cargas.",
              "Heridas.",
              "Expiación.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Is 42",
            "49",
            "50",
            "52–53"
          ],
          "scriptureDisplay": "Isaías 42; 49; 50; 52–53"
        },
        {
          "id": "isa-5",
          "title": "Consuelo y nuevo éxodo",
          "date": "—",
          "scripture": "Is 40–55",
          "description": "‘Consolad’ y camino preparado; redención.",
          "prompt": "Highway through desert with people returning in joy, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios trae un nuevo éxodo: liberación y restauración.",
            "items": [
              "Consuelo.",
              "Camino.",
              "Redención.",
              "Cántico."
            ]
          },
          "scriptureRefs": [
            "Is 40–55"
          ],
          "scriptureDisplay": "Isaías 40–55"
        },
        {
          "id": "isa-6",
          "title": "Reino final y nueva creación",
          "date": "—",
          "scripture": "Is 65–66",
          "description": "Nuevo cielo y nueva tierra; adoración universal.",
          "prompt": "New heavens and new earth with nations worshiping in peace, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Esperanza escatológica culmina en restauración total.",
            "items": [
              "Nueva creación.",
              "Justicia.",
              "Adoración.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Is 65–66"
          ],
          "scriptureDisplay": "Isaías 65–66"
        }
      ]
    },
    {
      "id": "jeremias",
      "title": "Jeremías",
      "period": "c. 627–586 a.C.",
      "description": "Últimos años de Judá antes del exilio; llamado al arrepentimiento y anuncio del nuevo pacto.",
      "authorIntent": "Advertir sobre juicio inminente por idolatría e injusticia, llamar a rendirse a la disciplina de Dios, y prometer un nuevo pacto escrito en el corazón.",
      "genealogies": [],
      "gospelThreads": [
        "Nuevo pacto (Jer 31) se cumple en Cristo.",
        "Dios busca el corazón, no solo ritual.",
        "Juicio sirve para restauración futura.",
        "Esperanza en medio del exilio: Dios permanece fiel."
      ],
      "events": [
        {
          "id": "jer-1",
          "title": "Llamado del profeta",
          "date": "627 a.C.",
          "scripture": "Jer 1",
          "description": "Dios llama a Jeremías desde joven.",
          "prompt": "Young Jeremiah receiving a prophetic call with almond branch symbolism, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La palabra de Dios se levanta contra reinos y pecados.",
            "items": [
              "Comisión.",
              "Temor vs confianza.",
              "Palabra.",
              "Fidelidad."
            ]
          },
          "scriptureRefs": [
            "Jer 1"
          ],
          "scriptureDisplay": "Jeremías 1"
        },
        {
          "id": "jer-2",
          "title": "El templo no es amuleto",
          "date": "—",
          "scripture": "Jer 7",
          "description": "Sermón del templo: justicia y arrepentimiento.",
          "prompt": "Jeremiah proclaiming at temple gates, crowd reacting, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Religión sin justicia es engaño.",
            "items": [
              "Advertencia.",
              "Injusticia.",
              "Arrepentimiento.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Jer 7"
          ],
          "scriptureDisplay": "Jeremías 7"
        },
        {
          "id": "jer-3",
          "title": "El yugo y la rendición al exilio",
          "date": "—",
          "scripture": "Jer 27–29",
          "description": "Aceptar disciplina; carta a los exiliados.",
          "prompt": "Jeremiah wearing a yoke, then a letter carried to exiles in Babylon, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios guía incluso en disciplina: ‘busquen el bienestar’.",
            "items": [
              "Yugo.",
              "Falsos profetas.",
              "Carta.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Jer 27–29"
          ],
          "scriptureDisplay": "Jeremías 27–29"
        },
        {
          "id": "jer-4",
          "title": "Nuevo pacto",
          "date": "—",
          "scripture": "Jer 31–33",
          "description": "Dios promete una alianza interna y perdón.",
          "prompt": "Heart with law written upon it, gentle divine light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Promesa clave del Evangelio: perdón y transformación del corazón.",
            "items": [
              "Ley en el corazón.",
              "Perdón.",
              "Conocimiento de Dios.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Jer 31–33"
          ],
          "scriptureDisplay": "Jeremías 31–33"
        },
        {
          "id": "jer-5",
          "title": "Caída de Jerusalén",
          "date": "586 a.C.",
          "scripture": "Jer 39; 52",
          "description": "Conquista y destrucción; confirmación del juicio.",
          "prompt": "Jerusalem burning as Babylonian armies enter, sorrowful tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El juicio llega; Dios no se burla del pecado.",
            "items": [
              "Sitio.",
              "Caída.",
              "Exilio.",
              "Dolor."
            ]
          },
          "scriptureRefs": [
            "Jer 39",
            "52"
          ],
          "scriptureDisplay": "Jeremías 39; 52"
        }
      ]
    },
    {
      "id": "lamentaciones",
      "title": "Lamentaciones",
      "period": "586 a.C. aprox.",
      "description": "Poemas de duelo por la caída de Jerusalén.",
      "authorIntent": "Dar lenguaje para lamentar el juicio, reconocer el pecado y aferrarse a la esperanza en la misericordia de Dios.",
      "genealogies": [],
      "gospelThreads": [
        "Lamento bíblico guía a esperanza real (no negación).",
        "‘Nuevas son cada mañana’ sostiene al afligido.",
        "El juicio revela necesidad de redención.",
        "Dios es fiel aun en disciplina."
      ],
      "events": [
        {
          "id": "lam-1",
          "title": "Ciudad desolada",
          "date": "586 a.C.",
          "scripture": "Lam 1",
          "description": "Jerusalén llora; pérdida y soledad.",
          "prompt": "Ruined Jerusalem streets at dusk, mourning figure, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado trae consecuencias reales; el lamento es apropiado.",
            "items": [
              "Soledad.",
              "Dolor.",
              "Reconocimiento.",
              "Duelo."
            ]
          },
          "scriptureRefs": [
            "Lam 1"
          ],
          "scriptureDisplay": "Lamentaciones 1"
        },
        {
          "id": "lam-2",
          "title": "Juicio del Señor",
          "date": "586 a.C.",
          "scripture": "Lam 2",
          "description": "Dios derriba defensas; la disciplina es severa.",
          "prompt": "City walls collapsing under divine judgment symbolism, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios es justo; el juicio es serio.",
            "items": [
              "Juicio.",
              "Ruina.",
              "Lágrimas.",
              "Clamor."
            ]
          },
          "scriptureRefs": [
            "Lam 2"
          ],
          "scriptureDisplay": "Lamentaciones 2"
        },
        {
          "id": "lam-3",
          "title": "Esperanza en la misericordia",
          "date": "586 a.C.",
          "scripture": "Lam 3",
          "description": "En medio del dolor: misericordias nuevas cada mañana.",
          "prompt": "Single beam of dawn light over ashes, hope emerging, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia sostiene: esperanza anclada en el carácter de Dios.",
            "items": [
              "Misericordia.",
              "Fidelidad.",
              "Espera.",
              "Oración."
            ]
          },
          "scriptureRefs": [
            "Lam 3"
          ],
          "scriptureDisplay": "Lamentaciones 3"
        },
        {
          "id": "lam-4",
          "title": "Inversión total",
          "date": "586 a.C.",
          "scripture": "Lam 4",
          "description": "Lo valioso se vuelve ceniza; hambre y vergüenza.",
          "prompt": "Contrast of once-glorious city now in famine, stark imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado deshumaniza; urge restauración.",
            "items": [
              "Hambre.",
              "Vergüenza.",
              "Quiebre.",
              "Llamado."
            ]
          },
          "scriptureRefs": [
            "Lam 4"
          ],
          "scriptureDisplay": "Lamentaciones 4"
        },
        {
          "id": "lam-5",
          "title": "Oración final: restaura",
          "date": "586 a.C.",
          "scripture": "Lam 5",
          "description": "Clamor por restauración.",
          "prompt": "Hands lifted in prayer over ruins, pleading for restoration, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El lamento termina como oración: ‘restáuranos’.",
            "items": [
              "Confesión.",
              "Petición.",
              "Esperanza.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Lam 5"
          ],
          "scriptureDisplay": "Lamentaciones 5"
        }
      ]
    },
    {
      "id": "ezequiel",
      "title": "Ezequiel",
      "period": "c. 593–571 a.C.",
      "description": "Visiones del exilio: gloria de Dios, juicio, y restauración con un corazón nuevo.",
      "authorIntent": "Explicar el exilio como consecuencia de pecado, mostrar la gloria y soberanía de Dios, y anunciar restauración: corazón nuevo, Espíritu y un nuevo templo.",
      "genealogies": [],
      "gospelThreads": [
        "Corazón nuevo y Espíritu (Ez 36) anticipan el nuevo pacto.",
        "Pastor verdadero (Ez 34) apunta a Cristo.",
        "Gloria de Dios regresa: esperanza de presencia restaurada.",
        "Restauración de huesos secos: vida por el Espíritu."
      ],
      "events": [
        {
          "id": "eze-1",
          "title": "Visión de la gloria",
          "date": "593 a.C.",
          "scripture": "Ez 1–3",
          "description": "Carros vivientes; llamado profético en el exilio.",
          "prompt": "Ezekiel seeing the glorious chariot-throne with wheels and lightning, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios no está limitado al templo: su gloria está con los exiliados.",
            "items": [
              "Gloria.",
              "Soberanía.",
              "Comisión.",
              "Rollo."
            ]
          },
          "scriptureRefs": [
            "Ez 1–3"
          ],
          "scriptureDisplay": "Ezequiel 1–3"
        },
        {
          "id": "eze-2",
          "title": "Gloria se aparta del templo",
          "date": "—",
          "scripture": "Ez 8–11",
          "description": "Idolatría interna; gloria se retira.",
          "prompt": "Temple interior with idols, glory departing in sorrowful light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La presencia se retira por pecado; necesidad de purificación.",
            "items": [
              "Idolatría.",
              "Juicio.",
              "Gloria se va.",
              "Exilio."
            ]
          },
          "scriptureRefs": [
            "Ez 8–11"
          ],
          "scriptureDisplay": "Ezequiel 8–11"
        },
        {
          "id": "eze-3",
          "title": "Pastores infieles y el Pastor",
          "date": "—",
          "scripture": "Ez 34",
          "description": "Denuncia líderes; promesa de un Pastor davídico.",
          "prompt": "Shepherd-king gathering sheep, contrasted with corrupt leaders, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Promesa de un pastor verdadero que cuida y salva.",
            "items": [
              "Líderes infieles.",
              "Dios busca.",
              "Pastor davídico.",
              "Paz."
            ]
          },
          "scriptureRefs": [
            "Ez 34"
          ],
          "scriptureDisplay": "Ezequiel 34"
        },
        {
          "id": "eze-4",
          "title": "Huesos secos",
          "date": "—",
          "scripture": "Ez 37",
          "description": "Vida nueva por el Espíritu; restauración de Israel.",
          "prompt": "Valley of dry bones coming to life, wind and spirit imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Renacimiento espiritual anticipa regeneración del Evangelio.",
            "items": [
              "Muerte.",
              "Palabra.",
              "Espíritu.",
              "Vida."
            ]
          },
          "scriptureRefs": [
            "Ez 37"
          ],
          "scriptureDisplay": "Ezequiel 37"
        },
        {
          "id": "eze-5",
          "title": "Corazón nuevo y limpieza",
          "date": "—",
          "scripture": "Ez 36",
          "description": "Agua limpia, corazón nuevo, Espíritu.",
          "prompt": "Water cleansing flowing over a heart transformed, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Promesa directa del nuevo pacto: transformación interna.",
            "items": [
              "Limpieza.",
              "Nuevo corazón.",
              "Espíritu.",
              "Obediencia."
            ]
          },
          "scriptureRefs": [
            "Ez 36"
          ],
          "scriptureDisplay": "Ezequiel 36"
        },
        {
          "id": "eze-6",
          "title": "Nuevo templo y gloria regresa",
          "date": "—",
          "scripture": "Ez 40–48",
          "description": "Visión de templo y río de vida.",
          "prompt": "Future temple with river of life flowing, trees on both sides, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La presencia restaurada culmina en vida y sanidad.",
            "items": [
              "Templo.",
              "Medidas.",
              "Río.",
              "Jehová-sama."
            ]
          },
          "scriptureRefs": [
            "Ez 40–48"
          ],
          "scriptureDisplay": "Ezequiel 40–48"
        }
      ]
    },
    {
      "id": "daniel",
      "title": "Daniel",
      "period": "c. 605–536 a.C.",
      "description": "Fidelidad en el exilio y visiones del reino de Dios sobre reinos humanos.",
      "authorIntent": "Animar al pueblo a permanecer fiel bajo presión imperial, mostrando que Dios gobierna la historia y establecerá un reino eterno.",
      "genealogies": [],
      "gospelThreads": [
        "‘Hijo del Hombre’ (Dn 7) se conecta con Jesús.",
        "Reino eterno vence reinos humanos.",
        "Liberación en hornos/fosas apunta a salvación poderosa.",
        "Profecías fortalecen esperanza mesiánica."
      ],
      "events": [
        {
          "id": "dan-1",
          "title": "Resolución en Babilonia",
          "date": "605 a.C.",
          "scripture": "Dn 1",
          "description": "Daniel decide no contaminarse; Dios da favor.",
          "prompt": "Young Daniel and friends refusing royal food, calm courage, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Fidelidad cotidiana sostiene testimonio.",
            "items": [
              "Identidad.",
              "Disciplina.",
              "Favor.",
              "Sabiduría."
            ]
          },
          "scriptureRefs": [
            "Dn 1"
          ],
          "scriptureDisplay": "Dn 1"
        },
        {
          "id": "dan-2",
          "title": "Sueño de la estatua",
          "date": "—",
          "scripture": "Dn 2",
          "description": "Reinos humanos caen; piedra se vuelve monte.",
          "prompt": "Giant statue dream shattered by a stone becoming a mountain, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El reino de Dios es indestructible.",
            "items": [
              "Interpretación.",
              "Reinos.",
              "Piedra.",
              "Reino eterno."
            ]
          },
          "scriptureRefs": [
            "Dn 2"
          ],
          "scriptureDisplay": "Dn 2"
        },
        {
          "id": "dan-3",
          "title": "Horno de fuego",
          "date": "—",
          "scripture": "Dn 3",
          "description": "Tres jóvenes firmes; ‘uno como hijo de los dioses’.",
          "prompt": "Fiery furnace with three men unharmed and a radiant fourth figure, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios está presente en la prueba y salva.",
            "items": [
              "Idolatría estatal.",
              "Fidelidad.",
              "Presencia.",
              "Rescate."
            ]
          },
          "scriptureRefs": [
            "Dn 3"
          ],
          "scriptureDisplay": "Dn 3"
        },
        {
          "id": "dan-4",
          "title": "Humillación de Nabucodonosor",
          "date": "—",
          "scripture": "Dn 4",
          "description": "Orgullo derribado; soberanía reconocida.",
          "prompt": "Proud king humbled, then restored while acknowledging heaven, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios resiste al soberbio y exalta al humilde.",
            "items": [
              "Orgullo.",
              "Juicio.",
              "Humillación.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Dn 4"
          ],
          "scriptureDisplay": "Dn 4"
        },
        {
          "id": "dan-5",
          "title": "Escritura en la pared",
          "date": "539 a.C.",
          "scripture": "Dn 5",
          "description": "Belsasar juzgado; reino cae.",
          "prompt": "Handwriting on palace wall, terrified king, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios pesa y juzga reinos.",
            "items": [
              "Banquete.",
              "Señal.",
              "Juicio.",
              "Caída."
            ]
          },
          "scriptureRefs": [
            "Dn 5"
          ],
          "scriptureDisplay": "Dn 5"
        },
        {
          "id": "dan-6",
          "title": "Foso de leones",
          "date": "—",
          "scripture": "Dn 6",
          "description": "Oración fiel; Dios libra.",
          "prompt": "Daniel praying then surrounded by lions in moonlit den, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fidelidad en oración sostiene en persecución.",
            "items": [
              "Decreto.",
              "Oración.",
              "Foso.",
              "Liberación."
            ]
          },
          "scriptureRefs": [
            "Dn 6"
          ],
          "scriptureDisplay": "Dn 6"
        },
        {
          "id": "dan-7",
          "title": "Visión del Hijo del Hombre",
          "date": "—",
          "scripture": "Dn 7",
          "description": "Un reino eterno dado al Hijo del Hombre.",
          "prompt": "Heavenly court with Ancient of Days and Son of Man receiving a kingdom, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Lenguaje clave para la identidad mesiánica de Jesús.",
            "items": [
              "Bestias.",
              "Juicio.",
              "Hijo del Hombre.",
              "Reino eterno."
            ]
          },
          "scriptureRefs": [
            "Dn 7"
          ],
          "scriptureDisplay": "Dn 7"
        }
      ]
    },
    {
      "id": "oseas",
      "title": "Oseas",
      "period": "c. 755–715 a.C.",
      "description": "Amor fiel de Dios frente a la infidelidad de Israel.",
      "authorIntent": "Usar el matrimonio de Oseas como señal viva para denunciar idolatría y anunciar un amor restaurador que persigue al infiel.",
      "genealogies": [],
      "gospelThreads": [
        "Amor del pacto refleja el Evangelio: Dios busca al infiel.",
        "Redención de la esposa anticipa rescate por precio.",
        "‘Quiero misericordia y no sacrificio’ enfatiza corazón.",
        "Restauración final muestra gracia transformadora."
      ],
      "events": [
        {
          "id": "hos-1",
          "title": "Matrimonio-signo",
          "date": "—",
          "scripture": "Os 1–3",
          "description": "Oseas y Gomer ilustran infidelidad y amor perseverante.",
          "prompt": "Prophet with sorrowful yet faithful love rescuing a wandering spouse, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia encarna el mensaje: amor fiel que redime.",
            "items": [
              "Infidelidad.",
              "Dolor.",
              "Rescate.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Os 1–3"
          ],
          "scriptureDisplay": "Oseas 1–3"
        },
        {
          "id": "hos-2",
          "title": "Acusación contra idolatría",
          "date": "—",
          "scripture": "Os 4–7",
          "description": "Israel se prostituye con ídolos; juicio anunciado.",
          "prompt": "Broken altar with idols and a grieving prophet, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado es adulterio espiritual.",
            "items": [
              "Idolatría.",
              "Injusticia.",
              "Advertencia.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Os 4–7"
          ],
          "scriptureDisplay": "Oseas 4–7"
        },
        {
          "id": "hos-3",
          "title": "Misericordia sobre ritual",
          "date": "—",
          "scripture": "Os 6",
          "description": "Dios busca conocimiento de Él y misericordia.",
          "prompt": "Open heart over empty ritual scene, gentle divine light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La relación con Dios supera formalismo.",
            "items": [
              "Misericordia.",
              "Conocimiento.",
              "Arrepentimiento.",
              "Vida."
            ]
          },
          "scriptureRefs": [
            "Os 6"
          ],
          "scriptureDisplay": "Oseas 6"
        },
        {
          "id": "hos-4",
          "title": "Esperanza de restauración",
          "date": "—",
          "scripture": "Os 11; 14",
          "description": "Dios atrae con cuerdas de amor; llamado a volver.",
          "prompt": "Fatherly figure drawing a child with cords of love, hopeful sunrise, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El amor de Dios vence el rechazo y trae nueva vida.",
            "items": [
              "Amor paternal.",
              "Llamado a volver.",
              "Sanidad.",
              "Renuevo."
            ]
          },
          "scriptureRefs": [
            "Os 11",
            "14"
          ],
          "scriptureDisplay": "Oseas 11; 14"
        }
      ]
    },
    {
      "id": "joel",
      "title": "Joel",
      "period": "Fecha debatida (c. 835 o 500 a.C.).",
      "description": "Langosta, llamado al arrepentimiento y promesa del Espíritu.",
      "authorIntent": "Interpretar calamidad como llamado a volver a Dios y anunciar el ‘día del Señor’, culminando en la promesa del derramamiento del Espíritu.",
      "genealogies": [],
      "gospelThreads": [
        "Derramamiento del Espíritu se cumple en Pentecostés.",
        "Arrepentimiento abre camino a restauración.",
        "Día del Señor señala juicio y salvación.",
        "Dios habita con su pueblo: esperanza del Evangelio."
      ],
      "events": [
        {
          "id": "joel-1",
          "title": "Plaga y lamento",
          "date": "—",
          "scripture": "Jl 1",
          "description": "Desastre nacional despierta al arrepentimiento.",
          "prompt": "Locust swarm over fields, people lamenting in sackcloth, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La crisis se convierte en llamado espiritual.",
            "items": [
              "Pérdida.",
              "Lamento.",
              "Ayuno.",
              "Clamor."
            ]
          },
          "scriptureRefs": [
            "Jl 1"
          ],
          "scriptureDisplay": "Joel 1"
        },
        {
          "id": "joel-2",
          "title": "Día del Señor y llamado a volver",
          "date": "—",
          "scripture": "Jl 2",
          "description": "‘Rasgad el corazón’ y volved.",
          "prompt": "Prophetic trumpet with gathering clouds, hearts turning to God, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Arrepentimiento verdadero es interno.",
            "items": [
              "Volved.",
              "Compasión de Dios.",
              "Restauración.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Jl 2"
          ],
          "scriptureDisplay": "Joel 2"
        },
        {
          "id": "joel-3",
          "title": "Promesa del Espíritu",
          "date": "—",
          "scripture": "Jl 2:28–32",
          "description": "Espíritu sobre toda carne; salvación para quien invoque.",
          "prompt": "Spirit poured like fire and light over diverse people, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Puente directo al Evangelio y Hechos 2.",
            "items": [
              "Espíritu.",
              "Profecía.",
              "Invocar al Señor.",
              "Salvación."
            ]
          },
          "scriptureRefs": [
            "Jl 2:28–32"
          ],
          "scriptureDisplay": "Joel 2:28–32"
        },
        {
          "id": "joel-4",
          "title": "Juicio y bendición final",
          "date": "—",
          "scripture": "Jl 3",
          "description": "Dios juzga naciones y bendice a Sion.",
          "prompt": "Valley of decision with nations gathered, then a river of blessing, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios defiende a su pueblo y restaura.",
            "items": [
              "Juicio.",
              "Defensa.",
              "Restauración.",
              "Presencia."
            ]
          },
          "scriptureRefs": [
            "Jl 3"
          ],
          "scriptureDisplay": "Joel 3"
        }
      ]
    },
    {
      "id": "amos",
      "title": "Amós",
      "period": "c. 760 a.C.",
      "description": "Justicia social y juicio sobre una religiosidad hipócrita.",
      "authorIntent": "Confrontar la injusticia, opresión y falsa adoración, anunciando juicio y una futura restauración del ‘tabernáculo de David’.",
      "genealogies": [],
      "gospelThreads": [
        "Dios exige justicia: fruto de un corazón redimido.",
        "‘Buscadme y viviréis’ resuena con el llamado del Evangelio.",
        "Restauración del tabernáculo de David se conecta con inclusión de gentiles (Hch 15).",
        "Juicio revela necesidad de un Salvador."
      ],
      "events": [
        {
          "id": "amo-1",
          "title": "Oráculos contra naciones",
          "date": "—",
          "scripture": "Am 1–2",
          "description": "Dios juzga violencia e injusticia en todas partes.",
          "prompt": "Prophet announcing judgment over surrounding nations, stormy sky, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios es juez universal, no tribal.",
            "items": [
              "Naciones.",
              "Justicia.",
              "Responsabilidad.",
              "Soberanía."
            ]
          },
          "scriptureRefs": [
            "Am 1–2"
          ],
          "scriptureDisplay": "Amós 1–2"
        },
        {
          "id": "amo-2",
          "title": "Denuncia de opresión y ritual vacío",
          "date": "—",
          "scripture": "Am 3–6",
          "description": "Ricos oprimen; culto sin justicia es rechazado.",
          "prompt": "Scales of justice tipped by corruption, empty altar, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios aborrece adoración sin misericordia.",
            "items": [
              "Opresión.",
              "Corrupción.",
              "Ritual vacío.",
              "Llamado."
            ]
          },
          "scriptureRefs": [
            "Am 3–6"
          ],
          "scriptureDisplay": "Amós 3–6"
        },
        {
          "id": "amo-3",
          "title": "Visiones de juicio",
          "date": "—",
          "scripture": "Am 7–9",
          "description": "Plomada, langosta, fuego; inevitabilidad del juicio.",
          "prompt": "Plumb line vision over a leaning wall, intense prophetic symbolism, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La medida de Dios es perfecta; el pecado tiene fin.",
            "items": [
              "Plomada.",
              "Intercesión.",
              "Crisis.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Am 7–9"
          ],
          "scriptureDisplay": "Amós 7–9"
        },
        {
          "id": "amo-4",
          "title": "Restauración davídica",
          "date": "—",
          "scripture": "Am 9:11–15",
          "description": "Dios levantará el tabernáculo de David.",
          "prompt": "Restored Davidic tent with nations streaming in, hopeful light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Esperanza mesiánica y misión a las naciones.",
            "items": [
              "Restauración.",
              "Naciones.",
              "Abundancia.",
              "Paz."
            ]
          },
          "scriptureRefs": [
            "Am 9:11–15"
          ],
          "scriptureDisplay": "Amós 9:11–15"
        }
      ]
    },
    {
      "id": "abdias",
      "title": "Abdías",
      "period": "c. 586 a.C.",
      "description": "Juicio contra Edom por orgullo y violencia contra Judá.",
      "authorIntent": "Denunciar el orgullo y la traición de Edom y afirmar que el día del Señor traerá justicia; el reino pertenecerá al Señor.",
      "genealogies": [],
      "gospelThreads": [
        "Dios resiste al soberbio: necesidad de humildad.",
        "Justicia divina defiende al oprimido.",
        "El reino del Señor culmina en soberanía final.",
        "Perdón y reconciliación son necesarios para el Evangelio."
      ],
      "events": [
        {
          "id": "abd-1",
          "title": "Orgullo derribado",
          "date": "—",
          "scripture": "Abd 1–9",
          "description": "Edom confía en fortalezas y cae.",
          "prompt": "Rock fortress city collapsing, proud banners falling, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El orgullo es un falso refugio.",
            "items": [
              "Altivez.",
              "Autoengaño.",
              "Caída.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Abd 1–9"
          ],
          "scriptureDisplay": "Abdías 1–9"
        },
        {
          "id": "abd-2",
          "title": "Violencia contra el hermano",
          "date": "—",
          "scripture": "Abd 10–14",
          "description": "Edom se alegra del desastre ajeno.",
          "prompt": "Brother betraying brother at a city gate, sorrowful tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La indiferencia ante el dolor ajeno es pecado.",
            "items": [
              "Traición.",
              "Aprovecharse.",
              "Crueldad.",
              "Culpa."
            ]
          },
          "scriptureRefs": [
            "Abd 10–14"
          ],
          "scriptureDisplay": "Abdías 10–14"
        },
        {
          "id": "abd-3",
          "title": "Día del Señor y reino",
          "date": "—",
          "scripture": "Abd 15–21",
          "description": "Justicia y restauración: ‘el reino será del Señor’.",
          "prompt": "Mount Zion with light as nations bow, kingdom belonging to God, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia termina en el reinado de Dios.",
            "items": [
              "Día del Señor.",
              "Justicia.",
              "Restauración.",
              "Reino."
            ]
          },
          "scriptureRefs": [
            "Abd 15–21"
          ],
          "scriptureDisplay": "Abdías 15–21"
        }
      ]
    },
    {
      "id": "jonas",
      "title": "Jonás",
      "period": "c. 760 a.C.",
      "description": "Misericordia de Dios para las naciones y confrontación del corazón religioso.",
      "authorIntent": "Mostrar que Dios es compasivo con pecadores (incluidos gentiles) y confrontar el nacionalismo y la dureza del corazón del profeta.",
      "genealogies": [],
      "gospelThreads": [
        "Señal de Jonás (3 días) apunta a muerte y resurrección de Jesús.",
        "Misericordia para naciones anticipa la Gran Comisión.",
        "Arrepentimiento genuino trae gracia.",
        "Dios confronta prejuicios religiosos."
      ],
      "events": [
        {
          "id": "jon-1",
          "title": "Huida del profeta",
          "date": "—",
          "scripture": "Jon 1",
          "description": "Jonás escapa; tormenta y lanzamiento al mar.",
          "prompt": "Storm-tossed ship at night, prophet thrown into raging sea, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Desobedecer no evade la misión; Dios persigue con gracia.",
            "items": [
              "Huida.",
              "Tormenta.",
              "Confesión.",
              "Mar."
            ]
          },
          "scriptureRefs": [
            "Jon 1"
          ],
          "scriptureDisplay": "Jonás 1"
        },
        {
          "id": "jon-2",
          "title": "El gran pez y oración",
          "date": "—",
          "scripture": "Jon 2",
          "description": "Jonás es preservado y ora desde la profundidad.",
          "prompt": "Prophet inside a great fish with faint light, praying, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Descenso y rescate prefiguran muerte y vida.",
            "items": [
              "Profundidad.",
              "Oración.",
              "Rescate.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Jon 2"
          ],
          "scriptureDisplay": "Jonás 2"
        },
        {
          "id": "jon-3",
          "title": "Arrepentimiento de Nínive",
          "date": "—",
          "scripture": "Jon 3",
          "description": "Ciudad se arrepiente; Dios perdona.",
          "prompt": "Massive ancient city in fasting and sackcloth, humble repentance, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios ama a los pecadores y responde al arrepentimiento.",
            "items": [
              "Predicación breve.",
              "Ayuno.",
              "Cambio.",
              "Perdón."
            ]
          },
          "scriptureRefs": [
            "Jon 3"
          ],
          "scriptureDisplay": "Jonás 3"
        },
        {
          "id": "jon-4",
          "title": "El corazón de Jonás y la planta",
          "date": "—",
          "scripture": "Jon 4",
          "description": "Dios confronta la falta de compasión del profeta.",
          "prompt": "Jonah under a withering plant, God teaching compassion, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión demanda un corazón como el de Dios.",
            "items": [
              "Enojo.",
              "Planta.",
              "Lección.",
              "Compasión."
            ]
          },
          "scriptureRefs": [
            "Jon 4"
          ],
          "scriptureDisplay": "Jonás 4"
        }
      ]
    },
    {
      "id": "miqueas",
      "title": "Miqueas",
      "period": "c. 735–700 a.C.",
      "description": "Juicio por injusticia y esperanza mesiánica (Belén).",
      "authorIntent": "Denunciar corrupción de líderes y anunciar juicio, mientras promete un gobernante venidero y un futuro de paz.",
      "genealogies": [],
      "gospelThreads": [
        "Nacimiento en Belén (Mi 5:2) apunta a Jesús.",
        "Dios pide justicia, misericordia y humildad (Mi 6:8).",
        "Rey-pastor trae paz verdadera.",
        "Restauración final alimenta la esperanza del Evangelio."
      ],
      "events": [
        {
          "id": "mic-1",
          "title": "Juicio sobre Samaria y Judá",
          "date": "—",
          "scripture": "Mi 1–3",
          "description": "Corrupción y opresión; juicio anunciado.",
          "prompt": "Prophet over a collapsing city with injustice imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios juzga la opresión y la corrupción espiritual.",
            "items": [
              "Líderes corruptos.",
              "Opresión.",
              "Juicio.",
              "Advertencia."
            ]
          },
          "scriptureRefs": [
            "Mi 1–3"
          ],
          "scriptureDisplay": "Miqueas 1–3"
        },
        {
          "id": "mic-2",
          "title": "Belén: el gobernante prometido",
          "date": "—",
          "scripture": "Mi 5",
          "description": "Un pastor-rey saldrá de Belén.",
          "prompt": "Star-lit Bethlehem with a shepherd-king silhouette, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Promesa mesiánica directa hacia el Evangelio.",
            "items": [
              "Belén.",
              "Eternidad.",
              "Pastoreo.",
              "Paz."
            ]
          },
          "scriptureRefs": [
            "Mi 5"
          ],
          "scriptureDisplay": "Miqueas 5"
        },
        {
          "id": "mic-3",
          "title": "Ética del pacto",
          "date": "—",
          "scripture": "Mi 6:1–8",
          "description": "‘¿Qué pide el Señor?’ justicia, misericordia, humildad.",
          "prompt": "Scales of justice and compassionate hands, humble walk path, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La vida transformada es fruto de conocer a Dios.",
            "items": [
              "Justicia.",
              "Misericordia.",
              "Humildad.",
              "Fidelidad."
            ]
          },
          "scriptureRefs": [
            "Mi 6:1–8"
          ],
          "scriptureDisplay": "Miqueas 6:1–8"
        },
        {
          "id": "mic-4",
          "title": "Esperanza: Sion restaurada",
          "date": "—",
          "scripture": "Mi 4; 7",
          "description": "Naciones fluyen; Dios perdona y restaura.",
          "prompt": "Nations streaming to a mountain of the Lord, peace and light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios perdona y guía hacia un futuro de paz.",
            "items": [
              "Restauración.",
              "Perdón.",
              "Paz.",
              "Futuro."
            ]
          },
          "scriptureRefs": [
            "Mi 4",
            "7"
          ],
          "scriptureDisplay": "Miqueas 4; 7"
        }
      ]
    },
    {
      "id": "nahum",
      "title": "Nahúm",
      "period": "c. 663–612 a.C.",
      "description": "Juicio sobre Nínive: Dios es justo y defensor.",
      "authorIntent": "Anunciar la caída de Nínive, mostrando que Dios juzga la crueldad y protege a los suyos.",
      "genealogies": [],
      "gospelThreads": [
        "Dios es refugio en tribulación.",
        "Justicia divina frena la violencia.",
        "Juicio sobre el mal prepara anhelo de salvación.",
        "La paz verdadera llega bajo el reinado de Dios."
      ],
      "events": [
        {
          "id": "nah-1",
          "title": "Carácter de Dios: justo y refugio",
          "date": "—",
          "scripture": "Na 1",
          "description": "Dios lento para la ira, poderoso; refugio para el que confía.",
          "prompt": "Stormy skies with a safe refuge under divine light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios combina justicia y misericordia.",
            "items": [
              "Justicia.",
              "Refugio.",
              "Soberanía.",
              "Confianza."
            ]
          },
          "scriptureRefs": [
            "Na 1"
          ],
          "scriptureDisplay": "Na 1"
        },
        {
          "id": "nah-2",
          "title": "Caída de Nínive anunciada",
          "date": "612 a.C. (anunciado)",
          "scripture": "Na 2",
          "description": "La ciudad violenta cae.",
          "prompt": "Ancient city walls breached, chariots and flames, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El mal no dura para siempre.",
            "items": [
              "Asedio.",
              "Caída.",
              "Juicio.",
              "Fin."
            ]
          },
          "scriptureRefs": [
            "Na 2"
          ],
          "scriptureDisplay": "Na 2"
        },
        {
          "id": "nah-3",
          "title": "Razón del juicio: crueldad",
          "date": "—",
          "scripture": "Na 3",
          "description": "Violencia e idolatría reciben respuesta.",
          "prompt": "Violent empire imagery fading into judgment, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios defiende al oprimido.",
            "items": [
              "Crueldad.",
              "Engaño.",
              "Juicio.",
              "Lección."
            ]
          },
          "scriptureRefs": [
            "Na 3"
          ],
          "scriptureDisplay": "Na 3"
        }
      ]
    },
    {
      "id": "habacuc",
      "title": "Habacuc",
      "period": "c. 609–597 a.C.",
      "description": "Diálogo con Dios sobre injusticia; vivir por la fe.",
      "authorIntent": "Mostrar cómo la fe persevera cuando Dios usa medios inesperados; enseñar que ‘el justo por la fe vivirá’ y culminar en adoración.",
      "genealogies": [],
      "gospelThreads": [
        "‘El justo por la fe vivirá’ se vuelve pilar del Evangelio (Romanos/Gálatas).",
        "Dios es soberano aun cuando usa instrumentos imperfectos.",
        "La fe adora en medio de la incertidumbre.",
        "Esperanza en la salvación futura."
      ],
      "events": [
        {
          "id": "hab-1",
          "title": "Pregunta: ¿hasta cuándo?",
          "date": "—",
          "scripture": "Hab 1",
          "description": "El profeta clama por injusticia interna.",
          "prompt": "Prophet crying out over injustice in a city, dark clouds, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe puede preguntar sin dejar de confiar.",
            "items": [
              "Queja.",
              "Injusticia.",
              "Clamor.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Hab 1"
          ],
          "scriptureDisplay": "Habacuc 1"
        },
        {
          "id": "hab-2",
          "title": "Respuesta: Babilonia y el principio de fe",
          "date": "—",
          "scripture": "Hab 2",
          "description": "Dios usará Babilonia; ‘por la fe vivirá’.",
          "prompt": "Visionary tablet with words ‘live by faith’ glowing, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe se aferra a Dios, no a circunstancias.",
            "items": [
              "Anuncio.",
              "Espera.",
              "Fe.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Hab 2"
          ],
          "scriptureDisplay": "Habacuc 2"
        },
        {
          "id": "hab-3",
          "title": "Ay y justicia futura",
          "date": "—",
          "scripture": "Hab 2:6–20",
          "description": "Oráculos de ay contra violencia y avaricia.",
          "prompt": "Five woes as shadowy empires crumble under justice, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios juzga sistemas corruptos.",
            "items": [
              "Avaricia.",
              "Violencia.",
              "Idolatría.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Hab 2:6–20"
          ],
          "scriptureDisplay": "Habacuc 2:6–20"
        },
        {
          "id": "hab-4",
          "title": "Oración y canto de confianza",
          "date": "—",
          "scripture": "Hab 3",
          "description": "Aunque falte fruto, me alegraré en el Señor.",
          "prompt": "Prophet worshiping with raised hands amid barren fields, radiant faith, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe celebra a Dios incluso sin evidencia inmediata.",
            "items": [
              "Memoria de obras.",
              "Temor reverente.",
              "Gozo.",
              "Confianza."
            ]
          },
          "scriptureRefs": [
            "Hab 3"
          ],
          "scriptureDisplay": "Habacuc 3"
        }
      ]
    },
    {
      "id": "sofonias",
      "title": "Sofonías",
      "period": "c. 640–621 a.C.",
      "description": "Día del Señor: juicio y restauración; remanente humilde.",
      "authorIntent": "Advertir sobre el juicio venidero y llamar a buscar al Señor, prometiendo restauración y gozo de Dios sobre su pueblo.",
      "genealogies": [],
      "gospelThreads": [
        "Día del Señor señala juicio y esperanza de salvación.",
        "Dios canta sobre su pueblo (Sof 3): gracia y deleite.",
        "Remanente humilde anticipa ‘bienaventurados’ del Reino.",
        "Restauración de naciones apunta a misión."
      ],
      "events": [
        {
          "id": "sof-1",
          "title": "Día del Señor: advertencia",
          "date": "—",
          "scripture": "Sof 1",
          "description": "Juicio cercano sobre pecado e idolatría.",
          "prompt": "Dark day-of-the-Lord storm over city, trumpet imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El pecado tiene fecha de rendición de cuentas.",
            "items": [
              "Juicio.",
              "Idolatría.",
              "Alarma.",
              "Urgencia."
            ]
          },
          "scriptureRefs": [
            "Sof 1"
          ],
          "scriptureDisplay": "Sofonías 1"
        },
        {
          "id": "sof-2",
          "title": "Buscar al Señor",
          "date": "—",
          "scripture": "Sof 2",
          "description": "Llamado a humildad; juicio a naciones.",
          "prompt": "Humble people praying while surrounding nations face judgment, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Humildad abre camino a refugio.",
            "items": [
              "Buscar.",
              "Humildad.",
              "Naciones.",
              "Refugio."
            ]
          },
          "scriptureRefs": [
            "Sof 2"
          ],
          "scriptureDisplay": "Sofonías 2"
        },
        {
          "id": "sof-3",
          "title": "Restauración y canto de Dios",
          "date": "—",
          "scripture": "Sof 3",
          "description": "Dios restaura y se goza sobre su pueblo.",
          "prompt": "Joyful God rejoicing over restored people, celebratory light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia culmina en gozo y renovación.",
            "items": [
              "Remanente.",
              "Purificación.",
              "Gozo.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Sof 3"
          ],
          "scriptureDisplay": "Sofonías 3"
        }
      ]
    },
    {
      "id": "hageo",
      "title": "Hageo",
      "period": "520 a.C.",
      "description": "Llamado a reconstruir el templo y priorizar a Dios.",
      "authorIntent": "Motivar al pueblo postexílico a priorizar la casa de Dios, prometiendo su presencia y una gloria futura mayor.",
      "genealogies": [],
      "gospelThreads": [
        "Prioridades del corazón: buscar primero a Dios.",
        "Presencia de Dios en la obra comunitaria.",
        "Gloria futura del templo apunta a Cristo.",
        "Esperanza de reino sacudido: Dios reina."
      ],
      "events": [
        {
          "id": "hag-1",
          "title": "Repriorizar: ‘consideren sus caminos’",
          "date": "520 a.C.",
          "scripture": "Hag 1",
          "description": "El pueblo descuida el templo; Dios confronta.",
          "prompt": "Ruined temple foundations contrasted with paneled houses, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La esterilidad espiritual a menudo nace de prioridades torcidas.",
            "items": [
              "Excusas.",
              "Esterilidad.",
              "Llamado.",
              "Obediencia."
            ]
          },
          "scriptureRefs": [
            "Hag 1"
          ],
          "scriptureDisplay": "Hageo 1"
        },
        {
          "id": "hag-2",
          "title": "Dios está con ustedes",
          "date": "520 a.C.",
          "scripture": "Hag 1:12–15",
          "description": "El pueblo responde; Dios anima.",
          "prompt": "Builders returning to work with renewed hope, divine presence symbol, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La obediencia reabre el gozo y la fuerza.",
            "items": [
              "Temor reverente.",
              "Ánimo.",
              "Obra.",
              "Presencia."
            ]
          },
          "scriptureRefs": [
            "Hag 1:12–15"
          ],
          "scriptureDisplay": "Hageo 1:12–15"
        },
        {
          "id": "hag-3",
          "title": "Gloria futura mayor",
          "date": "520 a.C.",
          "scripture": "Hag 2:1–9",
          "description": "La gloria postrera será mayor; Dios sacude naciones.",
          "prompt": "Second temple glowing with future glory while nations are shaken, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Promesa que se extiende hasta el Mesías.",
            "items": [
              "Ánimo.",
              "Gloria.",
              "Sacudida.",
              "Paz."
            ]
          },
          "scriptureRefs": [
            "Hag 2:1–9"
          ],
          "scriptureDisplay": "Hageo 2:1–9"
        },
        {
          "id": "hag-4",
          "title": "Zorobabel como sello",
          "date": "520 a.C.",
          "scripture": "Hag 2:20–23",
          "description": "Dios reafirma propósito y linaje.",
          "prompt": "Leader Zerubbabel with signet ring symbolism, hopeful dawn, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios sostiene la línea davídica hacia la promesa.",
            "items": [
              "Elección.",
              "Sello.",
              "Esperanza.",
              "Linaje."
            ]
          },
          "scriptureRefs": [
            "Hag 2:20–23"
          ],
          "scriptureDisplay": "Hageo 2:20–23"
        }
      ]
    },
    {
      "id": "zacarias",
      "title": "Zacarías",
      "period": "520–518 a.C. (y más).",
      "description": "Visiones de restauración y profecías mesiánicas.",
      "authorIntent": "Animar al pueblo a reconstruir con esperanza, revelando un futuro rey humilde, purificación y triunfo final de Dios.",
      "genealogies": [],
      "gospelThreads": [
        "Rey humilde en asno apunta a Jesús (Zac 9).",
        "‘Mirarán al que traspasaron’ anticipa la cruz (Zac 12).",
        "Fuente de purificación (Zac 13) conecta con expiación.",
        "Dios reina y trae paz a las naciones."
      ],
      "events": [
        {
          "id": "zac-1",
          "title": "Visiones nocturnas: restauración",
          "date": "520 a.C.",
          "scripture": "Zac 1–6",
          "description": "Caballos, candelabro, rollo, sumo sacerdote purificado.",
          "prompt": "Series of prophetic visions in moonlit atmosphere, lampstand and angelic messengers, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios asegura que la restauración avanza por su Espíritu.",
            "items": [
              "Consolación.",
              "Purificación.",
              "Espíritu.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Zac 1–6"
          ],
          "scriptureDisplay": "Zacarías 1–6"
        },
        {
          "id": "zac-2",
          "title": "‘No con fuerza, sino con mi Espíritu’",
          "date": "520 a.C.",
          "scripture": "Zac 4",
          "description": "Candelabro y olivos: obra por el Espíritu.",
          "prompt": "Golden lampstand fed by olive trees, radiant spiritual energy, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Principio de renovación espiritual para toda época.",
            "items": [
              "Espíritu.",
              "Dependencia.",
              "Luz.",
              "Obra."
            ]
          },
          "scriptureRefs": [
            "Zac 4"
          ],
          "scriptureDisplay": "Zacarías 4"
        },
        {
          "id": "zac-3",
          "title": "El Rey humilde",
          "date": "—",
          "scripture": "Zac 9:9–10",
          "description": "Rey viene en asno; paz a naciones.",
          "prompt": "Humble king riding a donkey into a city with palms, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Profecía clave del Evangelio (entrada triunfal).",
            "items": [
              "Humildad.",
              "Reinado.",
              "Paz.",
              "Naciones."
            ]
          },
          "scriptureRefs": [
            "Zac 9:9–10"
          ],
          "scriptureDisplay": "Zacarías 9:9–10"
        },
        {
          "id": "zac-4",
          "title": "El Pastor herido",
          "date": "—",
          "scripture": "Zac 11–13",
          "description": "Pastor rechazado; traspasado; purificación.",
          "prompt": "Pierced shepherd with a fountain of cleansing flowing, reverent tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Lenguaje directo hacia la cruz y la purificación.",
            "items": [
              "Rechazo.",
              "Traspasado.",
              "Arrepentimiento.",
              "Purificación."
            ]
          },
          "scriptureRefs": [
            "Zac 11–13"
          ],
          "scriptureDisplay": "Zacarías 11–13"
        },
        {
          "id": "zac-5",
          "title": "Reino final: el Señor reina",
          "date": "—",
          "scripture": "Zac 14",
          "description": "Día del Señor; adoración universal.",
          "prompt": "Mount of Olives split with light, nations worshiping the Lord, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Culmina en el reinado universal de Dios.",
            "items": [
              "Día del Señor.",
              "Reino.",
              "Adoración.",
              "Paz."
            ]
          },
          "scriptureRefs": [
            "Zac 14"
          ],
          "scriptureDisplay": "Zacarías 14"
        }
      ]
    },
    {
      "id": "malaquias",
      "title": "Malaquías",
      "period": "c. 430 a.C.",
      "description": "Último profeta del AT: culto tibio, injusticia y esperanza del mensajero.",
      "authorIntent": "Confrontar la apatía espiritual y la injusticia, llamar a fidelidad del pacto, y preparar la expectativa del mensajero que abrirá camino al Señor.",
      "genealogies": [],
      "gospelThreads": [
        "Mensajero prepara el camino: puente a Juan el Bautista.",
        "Purificación del culto anticipa la obra santificadora de Cristo.",
        "Fidelidad en matrimonio refleja pacto y Evangelio.",
        "Día del Señor y ‘sol de justicia’ apuntan al Mesías."
      ],
      "events": [
        {
          "id": "mal-1",
          "title": "Culto indiferente",
          "date": "—",
          "scripture": "Mal 1",
          "description": "Ofrendas defectuosas revelan corazón frío.",
          "prompt": "Altar with blemished offerings contrasted with a pure flame, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios busca honor real, no ritual barato.",
            "items": [
              "Desprecio.",
              "Formalismo.",
              "Corrección.",
              "Honra."
            ]
          },
          "scriptureRefs": [
            "Mal 1"
          ],
          "scriptureDisplay": "Malaquías 1"
        },
        {
          "id": "mal-2",
          "title": "Pacto y fidelidad",
          "date": "—",
          "scripture": "Mal 2",
          "description": "Sacerdocio corrupto y traición matrimonial.",
          "prompt": "Broken covenant scroll and a wedding ring repaired by light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fidelidad refleja el carácter del Dios de pacto.",
            "items": [
              "Liderazgo.",
              "Matrimonio.",
              "Fidelidad.",
              "Santidad."
            ]
          },
          "scriptureRefs": [
            "Mal 2"
          ],
          "scriptureDisplay": "Malaquías 2"
        },
        {
          "id": "mal-3",
          "title": "El mensajero y la purificación",
          "date": "—",
          "scripture": "Mal 3",
          "description": "Viene el mensajero; Dios refina como fuego.",
          "prompt": "Messenger arriving before a refining fire purifying silver, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Preparación para el evangelio: arrepentimiento y purificación.",
            "items": [
              "Mensajero.",
              "Refinador.",
              "Justicia.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Mal 3"
          ],
          "scriptureDisplay": "Malaquías 3"
        },
        {
          "id": "mal-4",
          "title": "Día del Señor y esperanza",
          "date": "—",
          "scripture": "Mal 4",
          "description": "‘Sol de justicia’; retorno de Elías.",
          "prompt": "Rising sun of righteousness over a healed land, prophetic dawn, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Cierra el AT con expectativa mesiánica.",
            "items": [
              "Sol de justicia.",
              "Juicio.",
              "Elías.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Mal 4"
          ],
          "scriptureDisplay": "Malaquías 4"
        }
      ]
    },
    {
      "id": "mateo",
      "title": "Mateo",
      "period": "c. 5 a.C. - 30 d.C. (vida de Jesús); escrito c. 60–80 d.C.",
      "description": "Jesús como Mesías-Rey: cumplimiento de profecías y Reino de los cielos.",
      "authorIntent": "Presentar a Jesús como el Mesías prometido, nuevo Moisés y Rey davídico, mostrando cumplimiento profético y enseñando la ética del Reino.",
      "genealogies": [
        {
          "id": "mat-g1",
          "title": "Genealogía de Jesús",
          "scripture": "Mt 1:1–17",
          "whyItMatters": "Conecta a Jesús con Abraham y David, mostrando cumplimiento del pacto y legitimidad mesiánica.",
          "scriptureRefs": [
            "Mt 1:1–17"
          ],
          "scriptureDisplay": "Mateo 1:1–17"
        }
      ],
      "gospelThreads": [
        "Jesús cumple promesas de Abraham y David.",
        "El Reino de los cielos: arrepentimiento y discipulado.",
        "Muerte y resurrección como centro del Evangelio.",
        "Gran Comisión: misión a todas las naciones."
      ],
      "events": [
        {
          "id": "mat-1",
          "title": "Genealogía y nacimiento del Mesías",
          "date": "c. 5–4 a.C.",
          "scripture": "Mt 1–2",
          "description": "Jesús nace como hijo de David; visita de magos; huida a Egipto.",
          "prompt": "Nativity with star and wise men, royal Davidic symbolism, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Mateo conecta a Jesús con promesas y profecías.",
            "items": [
              "Genealogía.",
              "Emanuel.",
              "Magi.",
              "Cumplimiento."
            ]
          },
          "scriptureRefs": [
            "Mt 1–2"
          ],
          "scriptureDisplay": "Mateo 1–2"
        },
        {
          "id": "mat-2",
          "title": "Bautismo y tentación",
          "date": "c. 27 d.C.",
          "scripture": "Mt 3–4",
          "description": "Identidad revelada; victoria sobre tentación.",
          "prompt": "Jesus baptized in Jordan with heavens opened, then resisting temptation in desert, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jesús inicia misión como Hijo obediente.",
            "items": [
              "Bautismo.",
              "‘Hijo amado’.",
              "Tentación.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Mt 3–4"
          ],
          "scriptureDisplay": "Mateo 3–4"
        },
        {
          "id": "mat-3",
          "title": "Sermón del Monte",
          "date": "—",
          "scripture": "Mt 5–7",
          "description": "Bienaventuranzas y ética del Reino.",
          "prompt": "Jesus teaching on a hillside to a large crowd, serene morning, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Reino transforma corazón, no solo conducta externa.",
            "items": [
              "Bienaventuranzas.",
              "Ley interior.",
              "Oración.",
              "Sabiduría."
            ]
          },
          "scriptureRefs": [
            "Mt 5–7"
          ],
          "scriptureDisplay": "Mateo 5–7"
        },
        {
          "id": "mat-4",
          "title": "Parábolas del Reino",
          "date": "—",
          "scripture": "Mt 13",
          "description": "El Reino crece con poder oculto.",
          "prompt": "Parables imagery: sower, mustard seed, treasure in a field, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios avanza su Reino de forma sorprendente.",
            "items": [
              "Sembrador.",
              "Cizaña.",
              "Mostaza.",
              "Tesoro."
            ]
          },
          "scriptureRefs": [
            "Mt 13"
          ],
          "scriptureDisplay": "Mateo 13"
        },
        {
          "id": "mat-5",
          "title": "Pasión y resurrección",
          "date": "30 d.C. aprox.",
          "scripture": "Mt 26–28",
          "description": "Cena, cruz y tumba vacía.",
          "prompt": "Last Supper then crucifixion silhouette and empty tomb dawn, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Cumbre redentora: sustitución y victoria.",
            "items": [
              "Pacto en sangre.",
              "Cruz.",
              "Resurrección.",
              "Victoria."
            ]
          },
          "scriptureRefs": [
            "Mt 26–28"
          ],
          "scriptureDisplay": "Mateo 26–28"
        },
        {
          "id": "mat-6",
          "title": "Gran Comisión",
          "date": "—",
          "scripture": "Mt 28:18–20",
          "description": "Enviar a hacer discípulos de todas las naciones.",
          "prompt": "Risen Jesus commissioning disciples on a mountain with global horizon, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La historia del Mesías abre misión mundial.",
            "items": [
              "Autoridad.",
              "Discipulado.",
              "Bautismo.",
              "Presencia."
            ]
          },
          "scriptureRefs": [
            "Mt 28:18–20"
          ],
          "scriptureDisplay": "Mateo 28:18–20"
        }
      ]
    },
    {
      "id": "marcos",
      "title": "Marcos",
      "period": "Ministerio de Jesús; escrito c. 55–70 d.C.",
      "description": "Jesús como Siervo poderoso: acción, autoridad y la cruz.",
      "authorIntent": "Proclamar a Jesús como el Hijo de Dios que sirve con poder, llama al discipulado sacrificial y triunfa por medio de la cruz y resurrección.",
      "genealogies": [],
      "gospelThreads": [
        "La cruz redefine poder: victoria por sacrificio.",
        "Jesús derrota enfermedad, demonios y pecado: anticipo del reino.",
        "Discipulado implica tomar la cruz.",
        "Resurrección confirma identidad del Hijo."
      ],
      "events": [
        {
          "id": "mk-1",
          "title": "Inicio del Evangelio",
          "date": "c. 27 d.C.",
          "scripture": "Mc 1",
          "description": "Juan prepara; bautismo; comienzo de predicación.",
          "prompt": "John the Baptist in wilderness, then Jesus emerging from Jordan waters, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Marcos va directo al punto: Jesús inaugura el Reino.",
            "items": [
              "Preparación.",
              "Bautismo.",
              "Tentación.",
              "Anuncio."
            ]
          },
          "scriptureRefs": [
            "Mc 1"
          ],
          "scriptureDisplay": "Marcos 1"
        },
        {
          "id": "mk-2",
          "title": "Autoridad de Jesús",
          "date": "—",
          "scripture": "Mc 2–3",
          "description": "Perdona pecados, sana, confronta legalismo.",
          "prompt": "Jesus healing a paralytic lowered through roof, crowd astonished, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La autoridad de Jesús incluye lo invisible: perdón.",
            "items": [
              "Perdón.",
              "Sanidad.",
              "Controversias.",
              "Compasión."
            ]
          },
          "scriptureRefs": [
            "Mc 2–3"
          ],
          "scriptureDisplay": "Marcos 2–3"
        },
        {
          "id": "mk-3",
          "title": "Milagros y parábolas",
          "date": "—",
          "scripture": "Mc 4–6",
          "description": "Calma tormenta, alimenta multitudes.",
          "prompt": "Sea calmed by Jesus, then feeding of thousands, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Reino irrumpe con poder y misericordia.",
            "items": [
              "Tormenta.",
              "Semilla.",
              "Pan.",
              "Misericordia."
            ]
          },
          "scriptureRefs": [
            "Mc 4–6"
          ],
          "scriptureDisplay": "Marcos 4–6"
        },
        {
          "id": "mk-4",
          "title": "Confesión y camino a la cruz",
          "date": "—",
          "scripture": "Mc 8–10",
          "description": "‘Tú eres el Cristo’; llamado a cargar la cruz.",
          "prompt": "Disciples on the road with Jesus pointing toward Jerusalem, solemn, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Mesías vence por sufrimiento voluntario.",
            "items": [
              "Confesión.",
              "Anuncios de pasión.",
              "Discipulado.",
              "Servicio."
            ]
          },
          "scriptureRefs": [
            "Mc 8–10"
          ],
          "scriptureDisplay": "Marcos 8–10"
        },
        {
          "id": "mk-5",
          "title": "Pasión y resurrección",
          "date": "30 d.C. aprox.",
          "scripture": "Mc 14–16",
          "description": "Juicio, cruz y tumba vacía.",
          "prompt": "Crucifixion scene then empty tomb with angelic light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Centro del Evangelio en narrativa rápida y directa.",
            "items": [
              "Cena.",
              "Getsemaní.",
              "Cruz.",
              "Resurrección."
            ]
          },
          "scriptureRefs": [
            "Mc 14–16"
          ],
          "scriptureDisplay": "Marcos 14–16"
        }
      ]
    },
    {
      "id": "lucas",
      "title": "Lucas",
      "period": "Vida de Jesús; escrito c. 60–85 d.C.",
      "description": "Jesús como Salvador universal: compasión, Espíritu y salvación para marginados.",
      "authorIntent": "Ofrecer un relato ordenado y confiable del ministerio de Jesús, destacando que la salvación es para todos (judíos y gentiles) y que el Espíritu guía la misión.",
      "genealogies": [
        {
          "id": "lk-g1",
          "title": "Genealogía de Jesús",
          "scripture": "Lc 3:23–38",
          "whyItMatters": "Conecta a Jesús con toda la humanidad (hasta Adán), subrayando salvación universal.",
          "scriptureRefs": [
            "Lc 3:23–38"
          ],
          "scriptureDisplay": "Lucas 3:23–38"
        }
      ],
      "gospelThreads": [
        "Jesús busca y salva al perdido: gracia para marginados.",
        "Cumplimiento de promesas a Israel para bendecir a las naciones.",
        "El Espíritu capacita y guía misión.",
        "Muerte y resurrección como eje de perdón."
      ],
      "events": [
        {
          "id": "lk-1",
          "title": "Anuncios y nacimientos",
          "date": "c. 6–4 a.C.",
          "scripture": "Lc 1–2",
          "description": "Zacarías, María; nacimiento de Jesús; Simeón y Ana.",
          "prompt": "Annunciation to Mary, nativity, and temple presentation with prophetic elders, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Lucas subraya gozo, humildad y cumplimiento.",
            "items": [
              "Cánticos.",
              "Encarnación.",
              "Humildad.",
              "Profecía."
            ]
          },
          "scriptureRefs": [
            "Lc 1–2"
          ],
          "scriptureDisplay": "Lucas 1–2"
        },
        {
          "id": "lk-2",
          "title": "Genealogía y misión",
          "date": "c. 27 d.C.",
          "scripture": "Lc 3–4",
          "description": "Genealogía hasta Adán; Nazaret; buenas nuevas a pobres.",
          "prompt": "Jesus reading Isaiah in synagogue, Spirit anointing imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jesús inicia misión como Salvador universal.",
            "items": [
              "Genealogía.",
              "Espíritu.",
              "Nazaret.",
              "Misión."
            ]
          },
          "scriptureRefs": [
            "Lc 3–4"
          ],
          "scriptureDisplay": "Lucas 3–4"
        },
        {
          "id": "lk-3",
          "title": "Parábolas de gracia",
          "date": "—",
          "scripture": "Lc 10; 15",
          "description": "Buen samaritano; hijo pródigo.",
          "prompt": "Parable scenes: Samaritan helping wounded man, father embracing prodigal, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia redefine prójimo y pertenencia.",
            "items": [
              "Compasión.",
              "Perdón.",
              "Restauración.",
              "Alegría."
            ]
          },
          "scriptureRefs": [
            "Lc 10",
            "15"
          ],
          "scriptureDisplay": "Lucas 10; 15"
        },
        {
          "id": "lk-4",
          "title": "Zaqueo y el perdido",
          "date": "—",
          "scripture": "Lc 19",
          "description": "Jesús busca al cobrador; transformación.",
          "prompt": "Zacchaeus in a tree seeing Jesus, then joyful meal in home, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La salvación produce cambio tangible.",
            "items": [
              "Búsqueda.",
              "Hospitalidad.",
              "Arrepentimiento.",
              "Restitución."
            ]
          },
          "scriptureRefs": [
            "Lc 19"
          ],
          "scriptureDisplay": "Lucas 19"
        },
        {
          "id": "lk-5",
          "title": "Pasión y resurrección",
          "date": "30 d.C. aprox.",
          "scripture": "Lc 22–24",
          "description": "Cruz; camino a Emaús; comisión.",
          "prompt": "Road to Emmaus with risen Jesus walking, warm evening light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jesús interpreta las Escrituras: todo apunta a Él.",
            "items": [
              "Cena.",
              "Cruz.",
              "Emaús.",
              "Comisión."
            ]
          },
          "scriptureRefs": [
            "Lc 22–24"
          ],
          "scriptureDisplay": "Lucas 22–24"
        }
      ]
    },
    {
      "id": "juan",
      "title": "Juan",
      "period": "Ministerio de Jesús; escrito c. 70–95 d.C.",
      "description": "Jesús como el Verbo eterno: creer para tener vida.",
      "authorIntent": "Mostrar, mediante ‘señales’ y discursos, que Jesús es el Hijo de Dios y el Verbo encarnado; llamar a creer para recibir vida eterna.",
      "genealogies": [],
      "gospelThreads": [
        "El Verbo se hizo carne: encarnación como fundamento del Evangelio.",
        "Señales revelan gloria y apuntan a la fe.",
        "‘Yo Soy’ conecta a Jesús con el nombre divino.",
        "La cruz es exaltación y victoria; nueva vida por creer."
      ],
      "events": [
        {
          "id": "jn-1",
          "title": "El Verbo encarnado",
          "date": "—",
          "scripture": "Jn 1",
          "description": "Prólogo: luz y vida; el Verbo se hace carne.",
          "prompt": "Cosmic light forming into a humble human figure, Word made flesh, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Juan declara identidad eterna de Jesús.",
            "items": [
              "Verbo.",
              "Luz.",
              "Gracia y verdad.",
              "Encarnación."
            ]
          },
          "scriptureRefs": [
            "Jn 1"
          ],
          "scriptureDisplay": "Juan 1"
        },
        {
          "id": "jn-2",
          "title": "Señales: Cana y nuevos comienzos",
          "date": "—",
          "scripture": "Jn 2–4",
          "description": "Agua a vino; nuevo nacimiento; agua viva.",
          "prompt": "Wedding at Cana turning water into wine, then living water well scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jesús inaugura nueva creación y vida.",
            "items": [
              "Cana.",
              "Templo.",
              "Nicodemo.",
              "Samaritana."
            ]
          },
          "scriptureRefs": [
            "Jn 2–4"
          ],
          "scriptureDisplay": "Juan 2–4"
        },
        {
          "id": "jn-3",
          "title": "Yo Soy: pan, luz, buen pastor",
          "date": "—",
          "scripture": "Jn 6–10",
          "description": "Discursos que revelan identidad.",
          "prompt": "Jesus as bread and light imagery, shepherd carrying sheep, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Jesús es provisión, guía y cuidado.",
            "items": [
              "Pan de vida.",
              "Luz del mundo.",
              "Buen Pastor.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Jn 6–10"
          ],
          "scriptureDisplay": "Juan 6–10"
        },
        {
          "id": "jn-4",
          "title": "Lázaro y la resurrección",
          "date": "—",
          "scripture": "Jn 11",
          "description": "Jesús resucita a Lázaro; ‘Yo soy la resurrección’.",
          "prompt": "Jesus calling Lazarus from tomb, dramatic light and astonished crowd, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Señal máxima antes de la cruz: vida vence muerte.",
            "items": [
              "Dolor.",
              "Fe.",
              "Señal.",
              "Conspiración."
            ]
          },
          "scriptureRefs": [
            "Jn 11"
          ],
          "scriptureDisplay": "Juan 11"
        },
        {
          "id": "jn-5",
          "title": "Última cena y oración",
          "date": "—",
          "scripture": "Jn 13–17",
          "description": "Amor, Espíritu prometido, unidad.",
          "prompt": "Last Supper foot washing scene, then luminous prayer for unity, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La comunidad del Evangelio nace del amor y del Espíritu.",
            "items": [
              "Lavatorio.",
              "Mandamiento nuevo.",
              "Consolador.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Jn 13–17"
          ],
          "scriptureDisplay": "Juan 13–17"
        },
        {
          "id": "jn-6",
          "title": "Cruz y resurrección",
          "date": "30 d.C. aprox.",
          "scripture": "Jn 18–21",
          "description": "‘Consumado es’; apariciones; restauración de Pedro.",
          "prompt": "Cross on Golgotha then sunrise empty tomb and breakfast by the sea, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La victoria de Jesús produce vida y misión.",
            "items": [
              "Cruz.",
              "Resurrección.",
              "Apariciones.",
              "Restauración."
            ]
          },
          "scriptureRefs": [
            "Jn 18–21"
          ],
          "scriptureDisplay": "Juan 18–21"
        }
      ]
    },
    {
      "id": "hechos",
      "title": "Hechos",
      "period": "30–62 d.C. aprox.",
      "description": "Nacimiento y expansión de la iglesia por el Espíritu: de Jerusalén a Roma.",
      "authorIntent": "Narrar cómo el Espíritu Santo capacita a la iglesia para testificar de Jesús, romper barreras étnicas y llevar el Evangelio hasta los confines del mundo.",
      "genealogies": [],
      "gospelThreads": [
        "Pentecostés: Espíritu y misión mundial.",
        "Justificación por gracia se consolida en comunidad multicultural.",
        "Conversión de Pablo muestra poder transformador del Evangelio.",
        "La iglesia como testigo hasta lo último de la tierra."
      ],
      "events": [
        {
          "id": "act-1",
          "title": "Ascensión y promesa del Espíritu",
          "date": "30 d.C.",
          "scripture": "Hch 1",
          "description": "Jesús asciende; comisión de ser testigos.",
          "prompt": "Ascension scene with disciples looking up, bright clouds, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión nace de la autoridad resucitada y el poder del Espíritu.",
            "items": [
              "Ascensión.",
              "Comisión.",
              "Oración.",
              "Espera."
            ]
          },
          "scriptureRefs": [
            "Hch 1"
          ],
          "scriptureDisplay": "Hechos 1"
        },
        {
          "id": "act-2",
          "title": "Pentecostés",
          "date": "30 d.C.",
          "scripture": "Hch 2",
          "description": "El Espíritu desciende; predicación; nueva comunidad.",
          "prompt": "Pentecost with tongues of fire over diverse people, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio se anuncia con poder y se forma comunidad.",
            "items": [
              "Espíritu.",
              "Predicación.",
              "Arrepentimiento.",
              "Iglesia."
            ]
          },
          "scriptureRefs": [
            "Hch 2"
          ],
          "scriptureDisplay": "Hechos 2"
        },
        {
          "id": "act-3",
          "title": "Persecución y expansión",
          "date": "—",
          "scripture": "Hch 4–8",
          "description": "Testimonio, oposición; Esteban; dispersión.",
          "prompt": "Stephen before council then believers spreading along roads, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La oposición impulsa la misión hacia afuera.",
            "items": [
              "Valentía.",
              "Persecución.",
              "Esteban.",
              "Dispersión."
            ]
          },
          "scriptureRefs": [
            "Hch 4–8"
          ],
          "scriptureDisplay": "Hechos 4–8"
        },
        {
          "id": "act-4",
          "title": "Cornelio y apertura a gentiles",
          "date": "—",
          "scripture": "Hch 10–11",
          "description": "El Espíritu rompe barreras; inclusión plena.",
          "prompt": "Peter and Cornelius with light symbolizing inclusion, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia es para todas las naciones.",
            "items": [
              "Visión.",
              "Espíritu.",
              "Bautismo.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Hch 10–11"
          ],
          "scriptureDisplay": "Hechos 10–11"
        },
        {
          "id": "act-5",
          "title": "Conversión y misión de Pablo",
          "date": "—",
          "scripture": "Hch 9; 13–28",
          "description": "De perseguidor a apóstol; viajes hasta Roma.",
          "prompt": "Saul struck by light on Damascus road, then preaching across the Mediterranean, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio transforma y se expande hasta el corazón del imperio.",
            "items": [
              "Conversión.",
              "Viajes.",
              "Iglesias.",
              "Roma."
            ]
          },
          "scriptureRefs": [
            "Hch 9",
            "13–28"
          ],
          "scriptureDisplay": "Hechos 9; 13–28"
        },
        {
          "id": "act-6",
          "title": "Concilio de Jerusalén",
          "date": "49 d.C. aprox.",
          "scripture": "Hch 15",
          "description": "La salvación es por gracia, no por ley.",
          "prompt": "Apostolic council debating with scrolls, unity and peace, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La doctrina sostiene la misión multicultural.",
            "items": [
              "Debate.",
              "Gracia.",
              "Decisión.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Hch 15"
          ],
          "scriptureDisplay": "Hechos 15"
        }
      ]
    },
    {
      "id": "romanos",
      "title": "Romanos",
      "period": "c. 57 d.C.",
      "description": "Evangelio explicado: justicia por fe y vida en el Espíritu.",
      "authorIntent": "Exponer con profundidad el Evangelio: pecado universal, justificación por fe, unión con Cristo y vida transformada, incluyendo el lugar de Israel y las naciones.",
      "genealogies": [],
      "gospelThreads": [
        "Justificación por fe: núcleo del Evangelio.",
        "Unión con Cristo: nueva identidad y libertad.",
        "Espíritu Santo capacita santidad y misión.",
        "Misericordia de Dios para judíos y gentiles."
      ],
      "events": [
        {
          "id": "rom-1",
          "title": "El problema universal del pecado",
          "date": "57 d.C.",
          "scripture": "Ro 1–3",
          "description": "Todos pecaron; nadie se justifica por obras.",
          "prompt": "Symbolic courtroom with humanity accountable, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Pone el suelo común: necesidad absoluta de gracia.",
            "items": [
              "Gentiles.",
              "Judíos.",
              "Culpa universal.",
              "Necesidad."
            ]
          },
          "scriptureRefs": [
            "Ro 1–3"
          ],
          "scriptureDisplay": "Romanos 1–3"
        },
        {
          "id": "rom-2",
          "title": "Justificación por fe",
          "date": "57 d.C.",
          "scripture": "Ro 3–5",
          "description": "Dios declara justo por la fe; paz con Dios.",
          "prompt": "Cross as the center of a courtroom verdict of ‘justified’, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio es regalo: justicia imputada por Cristo.",
            "items": [
              "Expiación.",
              "Fe.",
              "Paz.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ro 3–5"
          ],
          "scriptureDisplay": "Romanos 3–5"
        },
        {
          "id": "rom-3",
          "title": "Vida nueva en Cristo y en el Espíritu",
          "date": "57 d.C.",
          "scripture": "Ro 6–8",
          "description": "Muerte al pecado; adopción; ninguna condenación.",
          "prompt": "Chains breaking with a dove and light symbolizing the Spirit, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia no solo perdona: transforma.",
            "items": [
              "Unión.",
              "Santificación.",
              "Adopción.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ro 6–8"
          ],
          "scriptureDisplay": "Romanos 6–8"
        },
        {
          "id": "rom-4",
          "title": "Israel, misericordia y vida práctica",
          "date": "57 d.C.",
          "scripture": "Ro 9–16",
          "description": "Plan de Dios con Israel; ética del amor; misión.",
          "prompt": "Olive tree grafting imagery with diverse people united, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Doctrina desemboca en adoración y servicio.",
            "items": [
              "Soberanía.",
              "Misericordia.",
              "Unidad.",
              "Servicio."
            ]
          },
          "scriptureRefs": [
            "Ro 9–16"
          ],
          "scriptureDisplay": "Romanos 9–16"
        }
      ]
    },
    {
      "id": "1corintios",
      "title": "1 Corintios",
      "period": "c. 55 d.C.",
      "description": "Correcciones pastorales: unidad, santidad, dones y resurrección.",
      "authorIntent": "Corregir divisiones y desórdenes en una iglesia urbana, centrando todo en la cruz, el amor y la esperanza de la resurrección.",
      "genealogies": [],
      "gospelThreads": [
        "La cruz redefine sabiduría y poder.",
        "La santidad comunitaria refleja el Evangelio.",
        "Los dones sirven al cuerpo; el amor es superior.",
        "La resurrección sostiene esperanza y ética."
      ],
      "events": [
        {
          "id": "1co-1",
          "title": "Unidad y la cruz",
          "date": "55 d.C.",
          "scripture": "1 Co 1–4",
          "description": "Divisiones; la cruz como sabiduría de Dios.",
          "prompt": "Cross-centered unity among diverse believers, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La identidad en Cristo supera partidos y orgullo.",
            "items": [
              "Divisiones.",
              "Cruz.",
              "Humildad.",
              "Servicio."
            ]
          },
          "scriptureRefs": [
            "1 Co 1–4"
          ],
          "scriptureDisplay": "1 Corintios 1–4"
        },
        {
          "id": "1co-2",
          "title": "Santidad en cuerpo y relaciones",
          "date": "55 d.C.",
          "scripture": "1 Co 5–7",
          "description": "Disciplina, pureza, matrimonio.",
          "prompt": "Community practicing holiness with gentle restoration, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio transforma ética sexual y comunitaria.",
            "items": [
              "Disciplina.",
              "Pureza.",
              "Libertad.",
              "Cuidado."
            ]
          },
          "scriptureRefs": [
            "1 Co 5–7"
          ],
          "scriptureDisplay": "1 Corintios 5–7"
        },
        {
          "id": "1co-3",
          "title": "Orden en adoración y dones",
          "date": "55 d.C.",
          "scripture": "1 Co 11–14",
          "description": "Cena del Señor, dones, amor, profecía.",
          "prompt": "Church gathering with communion table and diverse gifts in harmony, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Los dones edifican cuando el amor guía.",
            "items": [
              "Cena.",
              "Dones.",
              "Amor (13).",
              "Orden."
            ]
          },
          "scriptureRefs": [
            "1 Co 11–14"
          ],
          "scriptureDisplay": "1 Corintios 11–14"
        },
        {
          "id": "1co-4",
          "title": "Resurrección",
          "date": "55 d.C.",
          "scripture": "1 Co 15",
          "description": "Cristo resucitó; esperanza y victoria.",
          "prompt": "Empty tomb transforming into a field of resurrected life, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Sin resurrección no hay Evangelio; con ella hay victoria.",
            "items": [
              "Primicias.",
              "Cuerpo glorioso.",
              "Victoria.",
              "Perseverancia."
            ]
          },
          "scriptureRefs": [
            "1 Co 15"
          ],
          "scriptureDisplay": "1 Corintios 15"
        }
      ]
    },
    {
      "id": "2corintios",
      "title": "2 Corintios",
      "period": "c. 55–56 d.C.",
      "description": "Defensa del ministerio y poder en debilidad; reconciliación y generosidad.",
      "authorIntent": "Reconciliar relación con la iglesia, defender la autenticidad apostólica y enseñar que el poder de Dios se perfecciona en la debilidad, impulsando generosidad y santidad.",
      "genealogies": [],
      "gospelThreads": [
        "Dios consuela en aflicción: esperanza del Evangelio.",
        "Nuevo pacto: ministerio del Espíritu.",
        "Reconciliación en Cristo es misión central.",
        "Poder en debilidad refleja la cruz."
      ],
      "events": [
        {
          "id": "2co-1",
          "title": "Consuelo en aflicción",
          "date": "55–56 d.C.",
          "scripture": "2 Co 1",
          "description": "Dios consuela para consolar.",
          "prompt": "Broken vessel being mended by light, comfort imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El sufrimiento no es desperdicio en manos de Dios.",
            "items": [
              "Consuelo.",
              "Esperanza.",
              "Comunidad.",
              "Testimonio."
            ]
          },
          "scriptureRefs": [
            "2 Co 1"
          ],
          "scriptureDisplay": "2 Corintios 1"
        },
        {
          "id": "2co-2",
          "title": "Ministerio del nuevo pacto",
          "date": "—",
          "scripture": "2 Co 3–4",
          "description": "Gloria del Espíritu; tesoro en vasos de barro.",
          "prompt": "Clay jars glowing with treasure, veil removed, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La transformación viene del Espíritu, no de letras.",
            "items": [
              "Gloria.",
              "Espíritu.",
              "Vasos de barro.",
              "Perseverancia."
            ]
          },
          "scriptureRefs": [
            "2 Co 3–4"
          ],
          "scriptureDisplay": "2 Corintios 3–4"
        },
        {
          "id": "2co-3",
          "title": "Reconciliación",
          "date": "—",
          "scripture": "2 Co 5",
          "description": "Nueva creación; embajadores.",
          "prompt": "Ambassadors bringing peace across a broken wall, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Cristo reconcilia y envía.",
            "items": [
              "Nueva creación.",
              "Reconciliación.",
              "Embajadores.",
              "Gracia."
            ]
          },
          "scriptureRefs": [
            "2 Co 5"
          ],
          "scriptureDisplay": "2 Corintios 5"
        },
        {
          "id": "2co-4",
          "title": "Poder en debilidad y generosidad",
          "date": "—",
          "scripture": "2 Co 8–12",
          "description": "Ofrenda, espina; gracia suficiente.",
          "prompt": "Weakness embraced with a radiant cross, generous giving imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia sostiene misión y generosidad.",
            "items": [
              "Ofrenda.",
              "Humildad.",
              "Espina.",
              "Gracia."
            ]
          },
          "scriptureRefs": [
            "2 Co 8–12"
          ],
          "scriptureDisplay": "2 Corintios 8–12"
        }
      ]
    },
    {
      "id": "galatas",
      "title": "Gálatas",
      "period": "c. 48–55 d.C.",
      "description": "Libertad en Cristo: justificación por fe, no por ley.",
      "authorIntent": "Defender el Evangelio contra el legalismo, afirmando que somos justificados por la fe y llamados a vivir por el Espíritu.",
      "genealogies": [],
      "gospelThreads": [
        "Justificación por fe protege el Evangelio.",
        "La cruz anula jactancia y esclavitud.",
        "Hijo y heredero: identidad por gracia.",
        "Fruto del Espíritu: ética del Reino."
      ],
      "events": [
        {
          "id": "gal-1",
          "title": "Defensa del Evangelio",
          "date": "—",
          "scripture": "Gá 1–2",
          "description": "No hay otro evangelio; Pablo confronta a Pedro.",
          "prompt": "Two paths labeled ‘grace’ and ‘legalism’, apostolic confrontation, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La verdad del Evangelio se preserva con valentía.",
            "items": [
              "Otro evangelio.",
              "Autoridad apostólica.",
              "Confrontación.",
              "Verdad."
            ]
          },
          "scriptureRefs": [
            "Gá 1–2"
          ],
          "scriptureDisplay": "Gá 1–2"
        },
        {
          "id": "gal-2",
          "title": "Justificación por fe",
          "date": "—",
          "scripture": "Gá 2–3",
          "description": "No por obras; Abraham creyó.",
          "prompt": "Abraham under stars linked to a cross of faith, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La promesa se recibe por fe, no por mérito.",
            "items": [
              "Fe.",
              "Promesa.",
              "Ley como ayo.",
              "Cristo."
            ]
          },
          "scriptureRefs": [
            "Gá 2–3"
          ],
          "scriptureDisplay": "Gá 2–3"
        },
        {
          "id": "gal-3",
          "title": "Hijos y herederos",
          "date": "—",
          "scripture": "Gá 4",
          "description": "Adopción; libertad vs esclavitud.",
          "prompt": "Adoption scene with a father placing a ring on a child, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La identidad se basa en gracia y pertenencia.",
            "items": [
              "Adopción.",
              "Abba.",
              "Libertad.",
              "Herencia."
            ]
          },
          "scriptureRefs": [
            "Gá 4"
          ],
          "scriptureDisplay": "Gá 4"
        },
        {
          "id": "gal-4",
          "title": "Vida por el Espíritu",
          "date": "—",
          "scripture": "Gá 5–6",
          "description": "Fruto del Espíritu y servicio en amor.",
          "prompt": "Tree bearing fruit with dove symbol, community serving, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La libertad se expresa en amor.",
            "items": [
              "Fruto.",
              "Carne vs Espíritu.",
              "Servicio.",
              "Cosecha."
            ]
          },
          "scriptureRefs": [
            "Gá 5–6"
          ],
          "scriptureDisplay": "Gá 5–6"
        }
      ]
    },
    {
      "id": "efesios",
      "title": "Efesios",
      "period": "c. 60–62 d.C.",
      "description": "Identidad en Cristo: unidad, gracia y vida nueva.",
      "authorIntent": "Enseñar la riqueza de la salvación en Cristo, la unidad de judíos y gentiles en un solo cuerpo, y una ética coherente con la nueva identidad.",
      "genealogies": [],
      "gospelThreads": [
        "Salvación por gracia (Ef 2) como centro del Evangelio.",
        "Unidad en un solo cuerpo: derriba muros.",
        "Iglesia como templo vivo: presencia de Dios.",
        "Armadura espiritual: perseverancia en misión."
      ],
      "events": [
        {
          "id": "eph-1",
          "title": "Bendiciones en Cristo",
          "date": "—",
          "scripture": "Ef 1",
          "description": "Elección, adopción y esperanza.",
          "prompt": "Heavenly blessings cascading onto believers united in Christ, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La identidad nace en la gracia de Dios.",
            "items": [
              "Elección.",
              "Adopción.",
              "Redención.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ef 1"
          ],
          "scriptureDisplay": "Efesios 1"
        },
        {
          "id": "eph-2",
          "title": "Gracia y nuevo pueblo",
          "date": "—",
          "scripture": "Ef 2",
          "description": "Salvos por gracia; muro derribado.",
          "prompt": "Wall of hostility crumbling as diverse people embrace, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio crea una humanidad nueva.",
            "items": [
              "Gracia.",
              "Fe.",
              "Paz.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Ef 2"
          ],
          "scriptureDisplay": "Efesios 2"
        },
        {
          "id": "eph-3",
          "title": "Iglesia: misterio revelado",
          "date": "—",
          "scripture": "Ef 3–4",
          "description": "Un solo cuerpo; dones para edificar.",
          "prompt": "Body imagery with diverse gifts building a living temple, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La unidad se practica con madurez y servicio.",
            "items": [
              "Misterio.",
              "Dones.",
              "Madurez.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "Ef 3–4"
          ],
          "scriptureDisplay": "Efesios 3–4"
        },
        {
          "id": "eph-4",
          "title": "Vida nueva y armadura",
          "date": "—",
          "scripture": "Ef 5–6",
          "description": "Familia, ética, batalla espiritual.",
          "prompt": "Armor of God with belt, shield, and light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La vida cristiana es formación y resistencia.",
            "items": [
              "Ética.",
              "Familia.",
              "Armadura.",
              "Oración."
            ]
          },
          "scriptureRefs": [
            "Ef 5–6"
          ],
          "scriptureDisplay": "Efesios 5–6"
        }
      ]
    },
    {
      "id": "filipenses",
      "title": "Filipenses",
      "period": "c. 60–62 d.C.",
      "description": "Gozo en Cristo: humildad y perseverancia en medio de dificultades.",
      "authorIntent": "Animar a una iglesia amada a vivir en unidad y gozo, mostrando que Cristo es el centro, incluso en sufrimiento.",
      "genealogies": [],
      "gospelThreads": [
        "Gozo no depende de circunstancias, sino de Cristo.",
        "Himno cristológico (Fil 2) muestra encarnación y exaltación.",
        "Unidad se guarda por humildad.",
        "Esperanza futura sostiene la perseverancia."
      ],
      "events": [
        {
          "id": "php-1",
          "title": "Gozo en la misión",
          "date": "—",
          "scripture": "Fil 1",
          "description": "El Evangelio avanza aun en cadenas.",
          "prompt": "Chains transformed into a pathway for the Gospel, joyful glow, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión no se detiene por sufrimiento.",
            "items": [
              "Cadenas.",
              "Avance.",
              "Valentía.",
              "Gozo."
            ]
          },
          "scriptureRefs": [
            "Fil 1"
          ],
          "scriptureDisplay": "Filipenses 1"
        },
        {
          "id": "php-2",
          "title": "Humildad de Cristo",
          "date": "—",
          "scripture": "Fil 2",
          "description": "Cristo se humilló y fue exaltado.",
          "prompt": "Christ descending in humility then exalted in glory, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Modelo de vida del Reino: servir para reinar.",
            "items": [
              "Encarnación.",
              "Cruz.",
              "Exaltación.",
              "Imitar."
            ]
          },
          "scriptureRefs": [
            "Fil 2"
          ],
          "scriptureDisplay": "Filipenses 2"
        },
        {
          "id": "php-3",
          "title": "Conocer a Cristo",
          "date": "—",
          "scripture": "Fil 3",
          "description": "Desechar méritos; ganar a Cristo.",
          "prompt": "Scales with self-righteousness fading, Christ shining as true treasure, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La justicia es por fe, no por logros.",
            "items": [
              "Renuncia.",
              "Fe.",
              "Meta.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Fil 3"
          ],
          "scriptureDisplay": "Filipenses 3"
        },
        {
          "id": "php-4",
          "title": "Paz y contentamiento",
          "date": "—",
          "scripture": "Fil 4",
          "description": "Aprender contentamiento; pensar en lo bueno.",
          "prompt": "Peaceful heart amid storm, gentle light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La paz de Dios guarda mente y corazón.",
            "items": [
              "Paz.",
              "Contentamiento.",
              "Generosidad.",
              "Oración."
            ]
          },
          "scriptureRefs": [
            "Fil 4"
          ],
          "scriptureDisplay": "Filipenses 4"
        }
      ]
    },
    {
      "id": "colosenses",
      "title": "Colosenses",
      "period": "c. 60–62 d.C.",
      "description": "Supremacía de Cristo sobre todo; vida nueva.",
      "authorIntent": "Proteger a la iglesia de falsas enseñanzas, exaltando la suficiencia y supremacía de Cristo y llamando a vivir la nueva vida en Él.",
      "genealogies": [],
      "gospelThreads": [
        "Cristo es imagen de Dios y creador: centro del Evangelio.",
        "La cruz reconcilia todas las cosas.",
        "No añadir reglas humanas para ser aceptados.",
        "Vida nueva se practica en relaciones y comunidad."
      ],
      "events": [
        {
          "id": "col-1",
          "title": "Cristo supremo",
          "date": "—",
          "scripture": "Col 1",
          "description": "Himno: creador, reconciliador, cabeza.",
          "prompt": "Cosmic Christ reigning over creation, radiant majesty, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Cristo no es accesorio: es el centro.",
            "items": [
              "Creador.",
              "Reconciliador.",
              "Cabeza.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Col 1"
          ],
          "scriptureDisplay": "Colosenses 1"
        },
        {
          "id": "col-2",
          "title": "Suficiencia contra falsas filosofías",
          "date": "—",
          "scripture": "Col 2",
          "description": "Plenitud en Cristo; libertad de reglas humanas.",
          "prompt": "Chains of man-made rules breaking under the fullness of Christ, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La aceptación viene de Cristo, no de añadidos.",
            "items": [
              "Plenitud.",
              "Cruz.",
              "Libertad.",
              "Discernimiento."
            ]
          },
          "scriptureRefs": [
            "Col 2"
          ],
          "scriptureDisplay": "Colosenses 2"
        },
        {
          "id": "col-3",
          "title": "Morir y resucitar con Cristo",
          "date": "—",
          "scripture": "Col 3",
          "description": "Despojarse del viejo yo; vestir el nuevo.",
          "prompt": "Old garments discarded, new radiant clothing, community unity, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La identidad produce ética: compasión y santidad.",
            "items": [
              "Viejo/nuevo.",
              "Perdón.",
              "Amor.",
              "Unidad."
            ]
          },
          "scriptureRefs": [
            "Col 3"
          ],
          "scriptureDisplay": "Colosenses 3"
        },
        {
          "id": "col-4",
          "title": "Cristo en casa y misión",
          "date": "—",
          "scripture": "Col 3–4",
          "description": "Relaciones y oración; testimonio.",
          "prompt": "Household harmony and prayerful mission scene, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La fe se vive en lo cotidiano y se comparte.",
            "items": [
              "Familia.",
              "Trabajo.",
              "Oración.",
              "Testimonio."
            ]
          },
          "scriptureRefs": [
            "Col 3–4"
          ],
          "scriptureDisplay": "Colosenses 3–4"
        }
      ]
    },
    {
      "id": "1tesalonicenses",
      "title": "1 Tesalonicenses",
      "period": "c. 50–51 d.C.",
      "description": "Aliento a una iglesia joven: santidad y esperanza en la venida de Cristo.",
      "authorIntent": "Fortalecer a creyentes perseguidos, afirmar su fe, enseñar sobre la segunda venida y llamar a una vida santa y amorosa.",
      "genealogies": [],
      "gospelThreads": [
        "Esperanza futura sostiene perseverancia.",
        "Santificación como respuesta a la gracia.",
        "La iglesia como ejemplo misionero.",
        "Consuelo sobre la resurrección y la venida."
      ],
      "events": [
        {
          "id": "1th-1",
          "title": "Fe en medio de persecución",
          "date": "50–51 d.C.",
          "scripture": "1 Ts 1",
          "description": "La iglesia recibe la palabra con gozo del Espíritu.",
          "prompt": "Young church gathering quietly under persecution, joyful inner light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio produce una comunidad resiliente.",
            "items": [
              "Recepción.",
              "Ejemplo.",
              "Misión.",
              "Gozo."
            ]
          },
          "scriptureRefs": [
            "1 Ts 1"
          ],
          "scriptureDisplay": "1 Ts 1"
        },
        {
          "id": "1th-2",
          "title": "Ministerio pastoral íntegro",
          "date": "—",
          "scripture": "1 Ts 2",
          "description": "Pablo como padre/madre espiritual; integridad.",
          "prompt": "Shepherd-like apostle encouraging believers, humble warmth, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El liderazgo cristiano sirve, no explota.",
            "items": [
              "Integridad.",
              "Cuidado.",
              "Ejemplo.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "1 Ts 2"
          ],
          "scriptureDisplay": "1 Ts 2"
        },
        {
          "id": "1th-3",
          "title": "Santidad y amor",
          "date": "—",
          "scripture": "1 Ts 4",
          "description": "Pureza y amor fraternal; trabajo honesto.",
          "prompt": "Community serving each other, pure living symbol, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La esperanza futura impulsa obediencia presente.",
            "items": [
              "Pureza.",
              "Amor.",
              "Trabajo.",
              "Testimonio."
            ]
          },
          "scriptureRefs": [
            "1 Ts 4"
          ],
          "scriptureDisplay": "1 Ts 4"
        },
        {
          "id": "1th-4",
          "title": "Esperanza en la venida",
          "date": "—",
          "scripture": "1 Ts 4–5",
          "description": "Los muertos en Cristo resucitan; vigilancia.",
          "prompt": "Risen Christ returning in glory with hope-filled believers, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Consuelo: la muerte no es el final.",
            "items": [
              "Resurrección.",
              "Venida.",
              "Vigilancia.",
              "Consuelo."
            ]
          },
          "scriptureRefs": [
            "1 Ts 4–5"
          ],
          "scriptureDisplay": "1 Ts 4–5"
        }
      ]
    },
    {
      "id": "2tesalonicenses",
      "title": "2 Tesalonicenses",
      "period": "c. 51–52 d.C.",
      "description": "Correcciones sobre el ‘día del Señor’ y llamado a perseverar y trabajar.",
      "authorIntent": "Aclarar confusión sobre el fin, fortalecer la perseverancia bajo persecución y corregir ocio espiritual.",
      "genealogies": [],
      "gospelThreads": [
        "La esperanza no justifica pasividad.",
        "Dios es justo: juzgará maldad.",
        "Perseverancia bajo presión es parte del discipulado.",
        "Fidelidad cotidiana mientras esperamos."
      ],
      "events": [
        {
          "id": "2th-1",
          "title": "Perseverar bajo persecución",
          "date": "—",
          "scripture": "2 Ts 1",
          "description": "Dios hará justicia y dará descanso.",
          "prompt": "Believers enduring hardship with a future light of justice, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios ve y recompensará la fidelidad.",
            "items": [
              "Justicia.",
              "Consuelo.",
              "Esperanza.",
              "Perseverancia."
            ]
          },
          "scriptureRefs": [
            "2 Ts 1"
          ],
          "scriptureDisplay": "2 Ts 1"
        },
        {
          "id": "2th-2",
          "title": "Aclaración del día del Señor",
          "date": "—",
          "scripture": "2 Ts 2",
          "description": "No se alarmen; tiempos bajo soberanía.",
          "prompt": "Scroll with prophetic timeline and calming light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La escatología debe producir firmeza, no pánico.",
            "items": [
              "No alarmarse.",
              "Firmeza.",
              "Soberanía.",
              "Verdad."
            ]
          },
          "scriptureRefs": [
            "2 Ts 2"
          ],
          "scriptureDisplay": "2 Ts 2"
        },
        {
          "id": "2th-3",
          "title": "Mantener tradición apostólica",
          "date": "—",
          "scripture": "2 Ts 2:15",
          "description": "Aferrarse a la enseñanza recibida.",
          "prompt": "Hands holding an apostolic scroll, steady flame, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La doctrina preserva la salud de la iglesia.",
            "items": [
              "Tradición.",
              "Doctrina.",
              "Identidad.",
              "Firmeza."
            ]
          },
          "scriptureRefs": [
            "2 Ts 2:15"
          ],
          "scriptureDisplay": "2 Ts 2:15"
        },
        {
          "id": "2th-4",
          "title": "Trabajo y disciplina",
          "date": "—",
          "scripture": "2 Ts 3",
          "description": "No vivir en desorden; trabajar.",
          "prompt": "Community working diligently with integrity, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Esperar a Cristo incluye responsabilidad diaria.",
            "items": [
              "Trabajo.",
              "Orden.",
              "Disciplina.",
              "Ejemplo."
            ]
          },
          "scriptureRefs": [
            "2 Ts 3"
          ],
          "scriptureDisplay": "2 Ts 3"
        }
      ]
    },
    {
      "id": "1timoteo",
      "title": "1 Timoteo",
      "period": "c. 62–64 d.C.",
      "description": "Orden en la iglesia: doctrina sana, liderazgo y piedad.",
      "authorIntent": "Instruir a Timoteo para cuidar la enseñanza, ordenar la vida de la iglesia y formar líderes íntegros.",
      "genealogies": [],
      "gospelThreads": [
        "Doctrina sana protege el Evangelio.",
        "La piedad nace de la gracia, no de mitos.",
        "Liderazgo con carácter refleja a Cristo.",
        "La iglesia como familia que cuida a vulnerables."
      ],
      "events": [
        {
          "id": "1ti-1",
          "title": "Cuidar la doctrina",
          "date": "—",
          "scripture": "1 Tim 1",
          "description": "Evangelio verdadero vs enseñanzas extrañas.",
          "prompt": "Guardian at a gate labeled ‘sound doctrine’, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio se preserva con claridad.",
            "items": [
              "Advertencia.",
              "Gracia.",
              "Testimonio.",
              "Fidelidad."
            ]
          },
          "scriptureRefs": [
            "1 Tim 1"
          ],
          "scriptureDisplay": "1 Timoteo 1"
        },
        {
          "id": "1ti-2",
          "title": "Oración y adoración ordenada",
          "date": "—",
          "scripture": "1 Tim 2",
          "description": "Orar por autoridades; conducta reverente.",
          "prompt": "Church praying for leaders, peaceful civic imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión incluye intercesión y testimonio público.",
            "items": [
              "Oración.",
              "Paz.",
              "Testimonio.",
              "Orden."
            ]
          },
          "scriptureRefs": [
            "1 Tim 2"
          ],
          "scriptureDisplay": "1 Timoteo 2"
        },
        {
          "id": "1ti-3",
          "title": "Cualificaciones de líderes",
          "date": "—",
          "scripture": "1 Tim 3",
          "description": "Obispos/diáconos: carácter y ejemplo.",
          "prompt": "Checklist of virtues over a leader serving humbly, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Carácter precede plataforma.",
            "items": [
              "Sobriedad.",
              "Hospitalidad.",
              "Familia.",
              "Ejemplo."
            ]
          },
          "scriptureRefs": [
            "1 Tim 3"
          ],
          "scriptureDisplay": "1 Timoteo 3"
        },
        {
          "id": "1ti-4",
          "title": "Piedad práctica y cuidado",
          "date": "—",
          "scripture": "1 Tim 4–6",
          "description": "Entrenarse en piedad; riqueza y generosidad.",
          "prompt": "Training for godliness imagery with community care, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia forma hábitos y generosidad.",
            "items": [
              "Piedad.",
              "Enseñanza.",
              "Contentamiento.",
              "Generosidad."
            ]
          },
          "scriptureRefs": [
            "1 Tim 4–6"
          ],
          "scriptureDisplay": "1 Timoteo 4–6"
        }
      ]
    },
    {
      "id": "2timoteo",
      "title": "2 Timoteo",
      "period": "c. 64–67 d.C.",
      "description": "Última carta de Pablo: perseverar, sufrir y guardar la Palabra.",
      "authorIntent": "Animar a Timoteo a permanecer fiel al Evangelio, aun con sufrimiento, y a transmitir la enseñanza a otros.",
      "genealogies": [],
      "gospelThreads": [
        "La Escritura es inspirada y útil: base de formación.",
        "Sufrir por el Evangelio es parte del llamado.",
        "Transmitir a otros: multiplicación discipular.",
        "Esperanza en la corona futura."
      ],
      "events": [
        {
          "id": "2ti-1",
          "title": "No avergonzarse del Evangelio",
          "date": "—",
          "scripture": "2 Tim 1",
          "description": "Avivar el don; valentía en amor.",
          "prompt": "Flame being fanned into a stronger fire, courageous witness, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio demanda valentía y fidelidad.",
            "items": [
              "Avivar don.",
              "Valentía.",
              "Amor.",
              "Poder."
            ]
          },
          "scriptureRefs": [
            "2 Tim 1"
          ],
          "scriptureDisplay": "2 Timoteo 1"
        },
        {
          "id": "2ti-2",
          "title": "Multiplicar discípulos",
          "date": "—",
          "scripture": "2 Tim 2",
          "description": "Encomendar a hombres fieles; metáforas de soldado/atleta.",
          "prompt": "Soldier, athlete, and farmer symbols around discipleship, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión se expande por reproducción fiel.",
            "items": [
              "Multiplicar.",
              "Disciplina.",
              "Perseverar.",
              "Servicio."
            ]
          },
          "scriptureRefs": [
            "2 Tim 2"
          ],
          "scriptureDisplay": "2 Timoteo 2"
        },
        {
          "id": "2ti-3",
          "title": "Tiempos difíciles y Escritura",
          "date": "—",
          "scripture": "2 Tim 3",
          "description": "Peligros; la Escritura equipa.",
          "prompt": "Open Scriptures shining as a lamp in dark times, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La Palabra sostiene en confusión cultural.",
            "items": [
              "Advertencia.",
              "Ejemplo.",
              "Escritura.",
              "Equipar."
            ]
          },
          "scriptureRefs": [
            "2 Tim 3"
          ],
          "scriptureDisplay": "2 Timoteo 3"
        },
        {
          "id": "2ti-4",
          "title": "Correr la carrera",
          "date": "—",
          "scripture": "2 Tim 4",
          "description": "Predica la palabra; ‘he peleado la buena batalla’.",
          "prompt": "Runner finishing a race with a crown of light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Final de vida con fidelidad y esperanza.",
            "items": [
              "Predicar.",
              "Perseverar.",
              "Corona.",
              "Fidelidad."
            ]
          },
          "scriptureRefs": [
            "2 Tim 4"
          ],
          "scriptureDisplay": "2 Timoteo 4"
        }
      ]
    },
    {
      "id": "tito",
      "title": "Tito",
      "period": "c. 62–64 d.C.",
      "description": "Formar iglesias sanas: liderazgo y buenas obras por gracia.",
      "authorIntent": "Instruir a Tito a establecer líderes, refutar falsa enseñanza y enseñar que la gracia produce una vida de buenas obras.",
      "genealogies": [],
      "gospelThreads": [
        "La gracia educa para vivir santamente.",
        "Buenas obras fluyen de una nueva identidad, no de legalismo.",
        "Liderazgo íntegro protege la comunidad.",
        "La misericordia nos salvó y renovó."
      ],
      "events": [
        {
          "id": "tit-1",
          "title": "Establecer ancianos",
          "date": "—",
          "scripture": "Tit 1",
          "description": "Cualificaciones y defensa contra falsos maestros.",
          "prompt": "Church leaders appointed with integrity checklist, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Iglesias sanas necesitan líderes sanos.",
            "items": [
              "Ancianos.",
              "Carácter.",
              "Doctrina.",
              "Protección."
            ]
          },
          "scriptureRefs": [
            "Tit 1"
          ],
          "scriptureDisplay": "Tito 1"
        },
        {
          "id": "tit-2",
          "title": "Gracia que educa",
          "date": "—",
          "scripture": "Tit 2",
          "description": "La gracia enseña sobriedad y esperanza.",
          "prompt": "Grace as a teacher guiding people toward light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia forma hábitos de santidad.",
            "items": [
              "Sobriedad.",
              "Buenas obras.",
              "Esperanza.",
              "Venida."
            ]
          },
          "scriptureRefs": [
            "Tit 2"
          ],
          "scriptureDisplay": "Tito 2"
        },
        {
          "id": "tit-3",
          "title": "Salvación por misericordia",
          "date": "—",
          "scripture": "Tit 3",
          "description": "Lavamiento y renovación del Espíritu.",
          "prompt": "Water and dove symbolizing renewal, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Renovación interna por el Espíritu.",
            "items": [
              "Misericordia.",
              "Renovación.",
              "Justificación.",
              "Herencia."
            ]
          },
          "scriptureRefs": [
            "Tit 3"
          ],
          "scriptureDisplay": "Tito 3"
        }
      ]
    },
    {
      "id": "filemon",
      "title": "Filemón",
      "period": "c. 60–62 d.C.",
      "description": "Reconciliación práctica: Onésimo ya es hermano.",
      "authorIntent": "Apelar a Filemón para recibir a Onésimo no como esclavo sino como hermano, mostrando el poder del Evangelio para transformar relaciones y estructuras.",
      "genealogies": [],
      "gospelThreads": [
        "El Evangelio crea fraternidad real.",
        "Reconciliación y perdón como ética central.",
        "Dignidad humana en Cristo.",
        "Amor persuade más que imposición."
      ],
      "events": [
        {
          "id": "phm-1",
          "title": "Intercesión por Onésimo",
          "date": "—",
          "scripture": "Flm 8–16",
          "description": "Pablo ruega por el esclavo convertido.",
          "prompt": "Letter being handed with hopeful reconciliation imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia cambia estatus: de esclavo a hermano.",
            "items": [
              "Intercesión.",
              "Nueva identidad.",
              "Fraternidad.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "Flm 8–16"
          ],
          "scriptureDisplay": "Filemón 8–16"
        },
        {
          "id": "phm-2",
          "title": "Restitución y gracia",
          "date": "—",
          "scripture": "Flm 17–19",
          "description": "Pablo asume deuda; pide recepción.",
          "prompt": "Debt ledger crossed out by a signature, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Imagen de sustitución: otro paga la deuda.",
            "items": [
              "Deuda.",
              "Sustitución.",
              "Gracia.",
              "Perdón."
            ]
          },
          "scriptureRefs": [
            "Flm 17–19"
          ],
          "scriptureDisplay": "Filemón 17–19"
        },
        {
          "id": "phm-3",
          "title": "Comunión restaurada",
          "date": "—",
          "scripture": "Flm 20–25",
          "description": "Esperanza de reconciliación plena.",
          "prompt": "Two men embracing as brothers in a house church, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio se ve cuando la comunidad restaura.",
            "items": [
              "Perdón.",
              "Unidad.",
              "Testimonio.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "Flm 20–25"
          ],
          "scriptureDisplay": "Filemón 20–25"
        }
      ]
    },
    {
      "id": "hebreos",
      "title": "Hebreos",
      "period": "c. 60–70 d.C.",
      "description": "Cristo superior: Sumo Sacerdote, sacrificio perfecto y nuevo pacto.",
      "authorIntent": "Animar a creyentes cansados mostrando la supremacía de Cristo sobre ángeles, Moisés y sacerdocio; llamar a perseverar por fe.",
      "genealogies": [],
      "gospelThreads": [
        "Cristo es el Sumo Sacerdote perfecto.",
        "Sacrificio único reemplaza el sistema levítico.",
        "Nuevo pacto y acceso al Lugar Santísimo.",
        "Fe perseverante mira a Jesús."
      ],
      "events": [
        {
          "id": "heb-1",
          "title": "Cristo superior y revelación final",
          "date": "—",
          "scripture": "Heb 1–2",
          "description": "El Hijo es superior a ángeles; se hizo humano.",
          "prompt": "Radiant Son enthroned above angels, then humble incarnation, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Dios habló finalmente por su Hijo.",
            "items": [
              "Superioridad.",
              "Encarnación.",
              "Salvación.",
              "Advertencia."
            ]
          },
          "scriptureRefs": [
            "Heb 1–2"
          ],
          "scriptureDisplay": "Hebreos 1–2"
        },
        {
          "id": "heb-2",
          "title": "Sumo Sacerdote compasivo",
          "date": "—",
          "scripture": "Heb 4–5",
          "description": "Jesús entiende debilidad; acceso al trono de gracia.",
          "prompt": "High priest figure with compassionate light, throne of grace, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Tenemos acceso con confianza por Cristo.",
            "items": [
              "Compasión.",
              "Intercesión.",
              "Gracia.",
              "Acceso."
            ]
          },
          "scriptureRefs": [
            "Heb 4–5"
          ],
          "scriptureDisplay": "Hebreos 4–5"
        },
        {
          "id": "heb-3",
          "title": "Nuevo pacto y sacrificio perfecto",
          "date": "—",
          "scripture": "Heb 8–10",
          "description": "Una vez para siempre; velo abierto.",
          "prompt": "Torn temple veil revealing bright holy presence, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La cruz abre acceso definitivo.",
            "items": [
              "Nuevo pacto.",
              "Sangre.",
              "Acceso.",
              "Seguridad."
            ]
          },
          "scriptureRefs": [
            "Heb 8–10"
          ],
          "scriptureDisplay": "Hebreos 8–10"
        },
        {
          "id": "heb-4",
          "title": "Galería de la fe",
          "date": "—",
          "scripture": "Heb 11–12",
          "description": "Testigos; correr la carrera mirando a Jesús.",
          "prompt": "Stadium of witnesses cheering runners toward a radiant Jesus, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Perseverancia se alimenta mirando a Cristo.",
            "items": [
              "Fe.",
              "Testigos.",
              "Disciplina.",
              "Meta."
            ]
          },
          "scriptureRefs": [
            "Heb 11–12"
          ],
          "scriptureDisplay": "Hebreos 11–12"
        },
        {
          "id": "heb-5",
          "title": "Exhortación final",
          "date": "—",
          "scripture": "Heb 13",
          "description": "Vida práctica: amor, pureza, liderazgo, adoración.",
          "prompt": "Community living love and worship, altar imagery, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La doctrina culmina en una vida de adoración.",
            "items": [
              "Amor.",
              "Hospitalidad.",
              "Pureza.",
              "Alabanza."
            ]
          },
          "scriptureRefs": [
            "Heb 13"
          ],
          "scriptureDisplay": "Hebreos 13"
        }
      ]
    },
    {
      "id": "santiago",
      "title": "Santiago",
      "period": "c. 45–62 d.C.",
      "description": "Fe práctica: obras, lengua, sabiduría y justicia.",
      "authorIntent": "Mostrar que la fe genuina se evidencia en una vida transformada: perseverancia, dominio de la lengua, compasión y justicia social.",
      "genealogies": [],
      "gospelThreads": [
        "La fe viva produce obras.",
        "Sabiduría de lo alto forma carácter pacificador.",
        "La lengua puede destruir o edificar: necesita redención.",
        "Cuidado del pobre refleja el corazón del Evangelio."
      ],
      "events": [
        {
          "id": "jas-1",
          "title": "Pruebas y perseverancia",
          "date": "—",
          "scripture": "Stg 1",
          "description": "Gozo en pruebas; sabiduría pedida a Dios.",
          "prompt": "Refining fire forging steadfast faith, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Las pruebas forman madurez.",
            "items": [
              "Perseverancia.",
              "Sabiduría.",
              "Humildad.",
              "Oír/hacer."
            ]
          },
          "scriptureRefs": [
            "Stg 1"
          ],
          "scriptureDisplay": "Santiago 1"
        },
        {
          "id": "jas-2",
          "title": "Fe y obras",
          "date": "—",
          "scripture": "Stg 2",
          "description": "No favoritismo; fe sin obras está muerta.",
          "prompt": "Community welcoming the poor equally, living faith in action, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia se ve en justicia concreta.",
            "items": [
              "Sin favoritismo.",
              "Obras.",
              "Misericordia.",
              "Justicia."
            ]
          },
          "scriptureRefs": [
            "Stg 2"
          ],
          "scriptureDisplay": "Santiago 2"
        },
        {
          "id": "jas-3",
          "title": "Lengua y sabiduría",
          "date": "—",
          "scripture": "Stg 3",
          "description": "La lengua como fuego; sabiduría de lo alto.",
          "prompt": "Small flame representing tongue, then a peaceful dove of wisdom, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La sabiduría verdadera produce paz.",
            "items": [
              "Lengua.",
              "Sabiduría.",
              "Paz.",
              "Humildad."
            ]
          },
          "scriptureRefs": [
            "Stg 3"
          ],
          "scriptureDisplay": "Santiago 3"
        },
        {
          "id": "jas-4",
          "title": "Humildad y oración",
          "date": "—",
          "scripture": "Stg 4–5",
          "description": "Sométanse a Dios; paciencia; oración de fe.",
          "prompt": "Hands in prayer with rain imagery like Elijah, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El orgullo cede ante Dios; la oración sostiene.",
            "items": [
              "Humildad.",
              "Resistencia.",
              "Paciencia.",
              "Oración."
            ]
          },
          "scriptureRefs": [
            "Stg 4–5"
          ],
          "scriptureDisplay": "Santiago 4–5"
        }
      ]
    },
    {
      "id": "1pedro",
      "title": "1 Pedro",
      "period": "c. 62–64 d.C.",
      "description": "Esperanza en sufrimiento: identidad como pueblo santo y testigo.",
      "authorIntent": "Animar a creyentes perseguidos a vivir con esperanza, santidad y mansedumbre, recordando que Cristo sufrió primero y la gloria viene después.",
      "genealogies": [],
      "gospelThreads": [
        "Nueva identidad: peregrinos con esperanza viva.",
        "Sufrimiento con propósito: seguir a Cristo.",
        "Iglesia como sacerdocio real: misión en el mundo.",
        "Humildad y cuidado pastoral."
      ],
      "events": [
        {
          "id": "1pe-1",
          "title": "Esperanza viva",
          "date": "—",
          "scripture": "1 Pe 1",
          "description": "Nuevo nacimiento; herencia incorruptible.",
          "prompt": "Living hope as a sunrise over exiles on the road, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La resurrección sostiene esperanza.",
            "items": [
              "Nuevo nacimiento.",
              "Herencia.",
              "Santidad.",
              "Gozo."
            ]
          },
          "scriptureRefs": [
            "1 Pe 1"
          ],
          "scriptureDisplay": "1 Pedro 1"
        },
        {
          "id": "1pe-2",
          "title": "Pueblo de Dios y piedra angular",
          "date": "—",
          "scripture": "1 Pe 2",
          "description": "Sacerdocio real; Cristo piedra.",
          "prompt": "Living stones forming a spiritual temple around a cornerstone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La iglesia es templo vivo y testigo.",
            "items": [
              "Identidad.",
              "Testimonio.",
              "Piedra angular.",
              "Sacerdocio."
            ]
          },
          "scriptureRefs": [
            "1 Pe 2"
          ],
          "scriptureDisplay": "1 Pedro 2"
        },
        {
          "id": "1pe-3",
          "title": "Sufrir haciendo el bien",
          "date": "—",
          "scripture": "1 Pe 3–4",
          "description": "Responder con mansedumbre; Cristo sufrió una vez.",
          "prompt": "Believers responding gently under accusation, cross-centered hope, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El bien y la mansedumbre son armas del Reino.",
            "items": [
              "Mansedumbre.",
              "Esperanza.",
              "Sufrimiento.",
              "Gloria."
            ]
          },
          "scriptureRefs": [
            "1 Pe 3–4"
          ],
          "scriptureDisplay": "1 Pedro 3–4"
        },
        {
          "id": "1pe-4",
          "title": "Cuidado y humildad",
          "date": "—",
          "scripture": "1 Pe 5",
          "description": "Pastores y rebaño; humildad; resistir al diablo.",
          "prompt": "Shepherd caring for flock under protective light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La comunidad se sostiene con humildad y vigilancia.",
            "items": [
              "Pastoreo.",
              "Humildad.",
              "Vigilancia.",
              "Gracia."
            ]
          },
          "scriptureRefs": [
            "1 Pe 5"
          ],
          "scriptureDisplay": "1 Pedro 5"
        }
      ]
    },
    {
      "id": "2pedro",
      "title": "2 Pedro",
      "period": "c. 64–67 d.C.",
      "description": "Contra falsos maestros: crecer en gracia y esperar el día del Señor.",
      "authorIntent": "Advertir sobre falsos maestros, afirmar la certeza del testimonio apostólico y llamar a crecer en santidad esperando el retorno de Cristo.",
      "genealogies": [],
      "gospelThreads": [
        "Crecimiento en carácter como evidencia de fe.",
        "Certeza de la Palabra profética.",
        "Juicio sobre falsedad y corrupción.",
        "Esperanza futura impulsa santidad."
      ],
      "events": [
        {
          "id": "2pe-1",
          "title": "Crecimiento en virtud",
          "date": "—",
          "scripture": "2 Pe 1",
          "description": "Añadir fe, virtud, dominio propio, amor.",
          "prompt": "Staircase of virtues ascending toward light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La gracia produce progreso real.",
            "items": [
              "Virtud.",
              "Conocimiento.",
              "Amor.",
              "Seguridad."
            ]
          },
          "scriptureRefs": [
            "2 Pe 1"
          ],
          "scriptureDisplay": "2 Pedro 1"
        },
        {
          "id": "2pe-2",
          "title": "Advertencia sobre falsos maestros",
          "date": "—",
          "scripture": "2 Pe 2",
          "description": "Corrupción y juicio seguro.",
          "prompt": "Wolves in sheep clothing among a flock, warning tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Evangelio no se negocia.",
            "items": [
              "Falsedad.",
              "Codicia.",
              "Juicio.",
              "Cuidado."
            ]
          },
          "scriptureRefs": [
            "2 Pe 2"
          ],
          "scriptureDisplay": "2 Pedro 2"
        },
        {
          "id": "2pe-3",
          "title": "Día del Señor y nueva creación",
          "date": "—",
          "scripture": "2 Pe 3",
          "description": "No tarda; vivan en santidad; nuevos cielos y tierra.",
          "prompt": "Cosmic renewal imagery with new heavens and new earth, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La esperanza escatológica forma ética presente.",
            "items": [
              "Paciencia.",
              "Santidad.",
              "Esperanza.",
              "Nueva creación."
            ]
          },
          "scriptureRefs": [
            "2 Pe 3"
          ],
          "scriptureDisplay": "2 Pedro 3"
        }
      ]
    },
    {
      "id": "1juan",
      "title": "1 Juan",
      "period": "c. 85–95 d.C.",
      "description": "Seguridad y discernimiento: Dios es luz y amor; pruebas de vida eterna.",
      "authorIntent": "Fortalecer a la iglesia frente a falsas doctrinas, mostrando marcas de la vida nueva: fe en Cristo, obediencia, amor y discernimiento espiritual.",
      "genealogies": [],
      "gospelThreads": [
        "Dios es luz: caminar en verdad y confesión.",
        "Dios es amor: amar al hermano evidencia fe.",
        "Jesús vino en carne: doctrina correcta importa.",
        "Seguridad de vida eterna: confianza en Cristo."
      ],
      "events": [
        {
          "id": "1jn-1",
          "title": "Dios es luz",
          "date": "—",
          "scripture": "1 Jn 1",
          "description": "Confesión y limpieza; comunión.",
          "prompt": "Light illuminating a path as people confess and are cleansed, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La comunión con Dios implica transparencia y gracia.",
            "items": [
              "Luz.",
              "Confesión.",
              "Perdón.",
              "Comunión."
            ]
          },
          "scriptureRefs": [
            "1 Jn 1"
          ],
          "scriptureDisplay": "1 Juan 1"
        },
        {
          "id": "1jn-2",
          "title": "Prueba: obediencia y amor",
          "date": "—",
          "scripture": "1 Jn 2–3",
          "description": "Mandamiento nuevo; hijos de Dios.",
          "prompt": "Community loving each other, heart-shaped light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El amor confirma la nueva identidad.",
            "items": [
              "Obediencia.",
              "Amor.",
              "Identidad.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "1 Jn 2–3"
          ],
          "scriptureDisplay": "1 Juan 2–3"
        },
        {
          "id": "1jn-3",
          "title": "Discernir espíritus",
          "date": "—",
          "scripture": "1 Jn 4",
          "description": "Probar doctrinas; Cristo encarnado.",
          "prompt": "Testing spirits with a cross and incarnation symbol, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Doctrina sana protege el amor verdadero.",
            "items": [
              "Encarnación.",
              "Verdad.",
              "Discernimiento.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "1 Jn 4"
          ],
          "scriptureDisplay": "1 Juan 4"
        },
        {
          "id": "1jn-4",
          "title": "Seguridad de vida eterna",
          "date": "—",
          "scripture": "1 Jn 5",
          "description": "Testimonio; confianza; oración.",
          "prompt": "Assurance symbol: sealed letter ‘eternal life’ with peace, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La seguridad se basa en Cristo y su testimonio.",
            "items": [
              "Testimonio.",
              "Fe.",
              "Seguridad.",
              "Oración."
            ]
          },
          "scriptureRefs": [
            "1 Jn 5"
          ],
          "scriptureDisplay": "1 Juan 5"
        }
      ]
    },
    {
      "id": "2juan",
      "title": "2 Juan",
      "period": "c. 85–95 d.C.",
      "description": "Caminar en verdad y amor; rechazar falsa enseñanza.",
      "authorIntent": "Exhortar a la comunidad a vivir en amor y verdad, y a no apoyar a quienes niegan a Cristo encarnado.",
      "genealogies": [],
      "gospelThreads": [
        "Verdad y amor van juntos.",
        "Hospitalidad con discernimiento.",
        "Doctrina sobre Cristo es esencial.",
        "Perseverancia en lo recibido."
      ],
      "events": [
        {
          "id": "2jn-1",
          "title": "Verdad y amor",
          "date": "—",
          "scripture": "2 Jn 1–6",
          "description": "Caminar según mandamientos.",
          "prompt": "Path labeled ‘truth’ and ‘love’ intertwined, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La obediencia se expresa como amor.",
            "items": [
              "Verdad.",
              "Amor.",
              "Obediencia.",
              "Gozo."
            ]
          },
          "scriptureRefs": [
            "2 Jn 1–6"
          ],
          "scriptureDisplay": "2 Juan 1–6"
        },
        {
          "id": "2jn-2",
          "title": "Advertencia a engañadores",
          "date": "—",
          "scripture": "2 Jn 7–11",
          "description": "No recibir a quien niega a Cristo.",
          "prompt": "Doorway with discernment symbol, refusing false teacher, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El apoyo indiscriminado puede difundir error.",
            "items": [
              "Engañadores.",
              "Discernimiento.",
              "Hospitalidad.",
              "Fidelidad."
            ]
          },
          "scriptureRefs": [
            "2 Jn 7–11"
          ],
          "scriptureDisplay": "2 Juan 7–11"
        }
      ]
    },
    {
      "id": "3juan",
      "title": "3 Juan",
      "period": "c. 85–95 d.C.",
      "description": "Hospitalidad y liderazgo: apoyar misioneros fieles.",
      "authorIntent": "Elogiar la hospitalidad de Gayo, corregir el abuso de poder de Diótrefes y animar a imitar lo bueno.",
      "genealogies": [],
      "gospelThreads": [
        "Hospitalidad impulsa misión.",
        "Liderazgo humilde vs control.",
        "Imitar lo bueno: fruto de verdad.",
        "Comunidad como red misionera."
      ],
      "events": [
        {
          "id": "3jn-1",
          "title": "Prosperar en la verdad",
          "date": "—",
          "scripture": "3 Jn 1–4",
          "description": "Gozo por caminar en verdad.",
          "prompt": "Scroll of truth bringing joy to a community, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La verdad se mide por vida, no solo palabras.",
            "items": [
              "Verdad.",
              "Gozo.",
              "Testimonio.",
              "Integridad."
            ]
          },
          "scriptureRefs": [
            "3 Jn 1–4"
          ],
          "scriptureDisplay": "3 Juan 1–4"
        },
        {
          "id": "3jn-2",
          "title": "Hospitalidad misionera",
          "date": "—",
          "scripture": "3 Jn 5–8",
          "description": "Recibir y apoyar a enviados.",
          "prompt": "Believers welcoming traveling missionaries with supplies, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La misión se sostiene con generosidad.",
            "items": [
              "Hospitalidad.",
              "Apoyo.",
              "Misión.",
              "Colaboración."
            ]
          },
          "scriptureRefs": [
            "3 Jn 5–8"
          ],
          "scriptureDisplay": "3 Juan 5–8"
        },
        {
          "id": "3jn-3",
          "title": "Advertencia contra Diótrefes",
          "date": "—",
          "scripture": "3 Jn 9–10",
          "description": "Ambición y rechazo de hermanos.",
          "prompt": "Proud leader blocking a doorway, contrasted with humble service, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El poder sin amor daña la comunidad.",
            "items": [
              "Ambición.",
              "Control.",
              "Reprensión.",
              "Cuidado."
            ]
          },
          "scriptureRefs": [
            "3 Jn 9–10"
          ],
          "scriptureDisplay": "3 Juan 9–10"
        },
        {
          "id": "3jn-4",
          "title": "Imitar lo bueno",
          "date": "—",
          "scripture": "3 Jn 11–12",
          "description": "Ejemplo de Demetrio.",
          "prompt": "Community pointing to a faithful example, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La imitación forma cultura del Reino.",
            "items": [
              "Imitar.",
              "Testimonio.",
              "Bondad.",
              "Verdad."
            ]
          },
          "scriptureRefs": [
            "3 Jn 11–12"
          ],
          "scriptureDisplay": "3 Juan 11–12"
        }
      ]
    },
    {
      "id": "judas",
      "title": "Judas",
      "period": "c. 60–90 d.C.",
      "description": "Contender por la fe frente a falsos maestros.",
      "authorIntent": "Llamar a la iglesia a defender la fe apostólica, discernir y permanecer en el amor de Dios, rescatando a otros con misericordia.",
      "genealogies": [],
      "gospelThreads": [
        "Discernimiento ante falsedad es acto de amor.",
        "La fe apostólica es el fundamento.",
        "Misericordia hacia los que dudan.",
        "Doxología: Dios guarda sin caída."
      ],
      "events": [
        {
          "id": "jud-1",
          "title": "Contender por la fe",
          "date": "—",
          "scripture": "Jud 3–4",
          "description": "Defender la fe entregada una vez.",
          "prompt": "Shield labeled ‘faith’ protecting a community, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La iglesia protege el Evangelio con firmeza y amor.",
            "items": [
              "Fe apostólica.",
              "Defensa.",
              "Discernimiento.",
              "Cuidado."
            ]
          },
          "scriptureRefs": [
            "Jud 3–4"
          ],
          "scriptureDisplay": "Judas 3–4"
        },
        {
          "id": "jud-2",
          "title": "Ejemplos de juicio",
          "date": "—",
          "scripture": "Jud 5–16",
          "description": "Advertencias: rebelión, inmoralidad, orgullo.",
          "prompt": "Warning signs over dark examples, solemn tone, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La falsedad tiene consecuencias serias.",
            "items": [
              "Advertencia.",
              "Juicio.",
              "Corrupción.",
              "Cuidado."
            ]
          },
          "scriptureRefs": [
            "Jud 5–16"
          ],
          "scriptureDisplay": "Judas 5–16"
        },
        {
          "id": "jud-3",
          "title": "Edificarse y rescatar",
          "date": "—",
          "scripture": "Jud 20–23",
          "description": "Orar en el Espíritu; tener misericordia.",
          "prompt": "Community praying together, reaching out to rescue someone from danger, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La firmeza doctrinal va con misericordia práctica.",
            "items": [
              "Oración.",
              "Misericordia.",
              "Rescate.",
              "Amor."
            ]
          },
          "scriptureRefs": [
            "Jud 20–23"
          ],
          "scriptureDisplay": "Judas 20–23"
        },
        {
          "id": "jud-4",
          "title": "Doxología",
          "date": "—",
          "scripture": "Jud 24–25",
          "description": "Dios puede guardarnos sin caída.",
          "prompt": "Community worshiping with protective divine light, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Cierre en adoración y seguridad.",
            "items": [
              "Guardar.",
              "Gozo.",
              "Gloria.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Jud 24–25"
          ],
          "scriptureDisplay": "Judas 24–25"
        }
      ]
    },
    {
      "id": "apocalipsis",
      "title": "Apocalipsis",
      "period": "c. 90–95 d.C.",
      "description": "Revelación de Jesucristo: victoria final del Cordero y esperanza para la iglesia perseguida.",
      "authorIntent": "Fortalecer a la iglesia mostrando que Jesús reina, juzga el mal, sostiene a los santos y traerá una nueva creación; llamar a perseverar y adorar al Cordero.",
      "genealogies": [],
      "gospelThreads": [
        "Jesús es el Cordero vencedor: centro de la historia.",
        "La adoración verdadera vence idolatría imperial.",
        "Perseverancia en tribulación con esperanza segura.",
        "Nueva creación culmina el plan bíblico."
      ],
      "events": [
        {
          "id": "rev-1",
          "title": "Visión del Cristo glorificado",
          "date": "c. 90–95 d.C.",
          "scripture": "Ap 1",
          "description": "Jesús entre candeleros; palabra a la iglesia.",
          "prompt": "Glorified Christ among seven lampstands, radiant and awe-inspiring, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La iglesia sufre, pero Cristo camina en medio de ella.",
            "items": [
              "Señor resucitado.",
              "Candeleros.",
              "Autoridad.",
              "Consuelo."
            ]
          },
          "scriptureRefs": [
            "Ap 1"
          ],
          "scriptureDisplay": "Apocalipsis 1"
        },
        {
          "id": "rev-2",
          "title": "Cartas a las siete iglesias",
          "date": "—",
          "scripture": "Ap 2–3",
          "description": "Llamados a arrepentimiento, fidelidad y victoria.",
          "prompt": "Seven ancient churches represented by glowing lamps, each with a message scroll, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El mensaje es pastoral: perseverar y vencer.",
            "items": [
              "Amor primero.",
              "Fidelidad.",
              "Arrepentimiento.",
              "Promesas."
            ]
          },
          "scriptureRefs": [
            "Ap 2–3"
          ],
          "scriptureDisplay": "Apocalipsis 2–3"
        },
        {
          "id": "rev-3",
          "title": "Trono y el Cordero",
          "date": "—",
          "scripture": "Ap 4–5",
          "description": "Adoración celestial; el Cordero abre el rollo.",
          "prompt": "Heavenly throne room with the Lamb receiving the scroll, worshiping multitudes, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El Cordero controla la historia: esperanza para los santos.",
            "items": [
              "Trono.",
              "Cordero.",
              "Rollo.",
              "Adoración."
            ]
          },
          "scriptureRefs": [
            "Ap 4–5"
          ],
          "scriptureDisplay": "Apocalipsis 4–5"
        },
        {
          "id": "rev-4",
          "title": "Conflicto y juicio",
          "date": "—",
          "scripture": "Ap 12–18",
          "description": "Dragón, bestias, Babilonia cae.",
          "prompt": "Symbolic cosmic battle with dragon and beasts, then Babylon falling, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "El mal se revela y es juzgado; Dios sostiene a su pueblo.",
            "items": [
              "Guerra espiritual.",
              "Bestias.",
              "Resistencia.",
              "Juicio."
            ]
          },
          "scriptureRefs": [
            "Ap 12–18"
          ],
          "scriptureDisplay": "Apocalipsis 12–18"
        },
        {
          "id": "rev-5",
          "title": "Retorno del Rey",
          "date": "—",
          "scripture": "Ap 19",
          "description": "Cristo regresa victorioso.",
          "prompt": "Rider on a white horse returning in glory, triumphant, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "La victoria final pertenece a Cristo.",
            "items": [
              "Rey.",
              "Victoria.",
              "Justicia.",
              "Esperanza."
            ]
          },
          "scriptureRefs": [
            "Ap 19"
          ],
          "scriptureDisplay": "Apocalipsis 19"
        },
        {
          "id": "rev-6",
          "title": "Nueva creación",
          "date": "—",
          "scripture": "Ap 21–22",
          "description": "Nuevo cielo y tierra; Nueva Jerusalén; río de vida.",
          "prompt": "New Jerusalem descending with river of life and tree, epic cinematic biblical art, realistic lighting, high detail, reverent tone",
          "details": {
            "intro": "Culmina la Biblia: Dios con su pueblo para siempre.",
            "items": [
              "Nueva Jerusalén.",
              "Presencia.",
              "Río de vida.",
              "Sanidad."
            ]
          },
          "scriptureRefs": [
            "Ap 21–22"
          ],
          "scriptureDisplay": "Apocalipsis 21–22"
        }
      ]
    }
  ];
// NOTA: He incluido Génesis y Éxodo completos como ejemplo. 
// Debes asegurarte de que este archivo contenga TODO el array de los 66 libros que generamos previamente.
