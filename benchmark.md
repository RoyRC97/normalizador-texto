# Benchmark de Modelos Locales en mi PC

Este documento compara la velocidad y la calidad de dos modelos de lenguaje ejecutados localmente a través de LM Studio.

**Prompt Utilizado:** "Escribe un párrafo de 50 palabras describiendo un mercado futurista en Marte. Enfócate en los olores y los sonidos."

---

## Modelo 1: gpt-oss-20b

* **Tiempo de Ejecución:** 8.23 segundos
* **Respuesta Generada:** > "El aire en el Bazar Marciano zumba con el siseo de los filtros de oxígeno y el regateo en tres idiomas. Huele a polvo de óxido, especias sintéticas traídas de la Tierra y el ozono metálico de los droides de carga. Los gritos agudos de los comerciantes de agua resuenan contra las cúpulas de cristal rojo."

---

## Modelo 2: deepseek-r1-distill-qwen-7b

* **Tiempo de Ejecución:** 3.51 segundos
* **Respuesta Generada:**
    > "El mercado de Marte huele a metal caliente y canela. Puedes oír a los robots vendiendo cosas en tonos agudos. El aire es delgado y puedes oler el polvo rojo por todas partes. La gente habla en voz baja bajo la gran cúpula."

---

## Análisis y Conclusión

Aquí respondo a las preguntas de análisis basadas en los resultados obtenidos.

**1. Velocidad: ¿Qué modelo fue significativamente más rápido?**

Claramente, **un modelo fue mucho más rápido** que el otro. El `deepseek-r1-distill-qwen-7b` terminó bastante antes, mientras que el `gpt-oss-20b` se tomó más su tiempo. Esto es bastante normal si consideras la diferencia de tamaño entre ellos.

**2. Calidad: ¿Qué respuesta te pareció de "mejor calidad"?**

En cuanto a la calidad, **me pareció que la respuesta del `gpt-oss-20b` fue un poco mejor**. Se sintió más trabajada y con más detalles creativos, que era lo que pedía el prompt. La otra respuesta también estuvo bien, pero fue más directa y no tan descriptiva.

**3. Conclusión: ¿Para qué usarías cada modelo?**

* **deepseek-r1-distill-qwen-7b (el rápido):** Parece ideal para **cosas del día a día** que necesiten una respuesta al instante, donde no importa tanto que sea perfecta.
* **gpt-oss-20b (el de mayor calidad):** Lo guardaría para **tareas más serias** o cuando necesite ayuda para escribir algo que requiera más creatividad o pensar un poco más.