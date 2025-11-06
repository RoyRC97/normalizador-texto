import fs from "fs";
import OpenAI from "openai";

// 1️⃣ Configuramos la conexión con LM Studio
const openai = new OpenAI({
  baseURL: "http://192.168.1.80:1234/v1", // dirección del servidor local LM Studio
  apiKey: "not-needed-for-local", // no se usa en modelos locales
});

// 2️⃣ Leemos el prompt del archivo de entrada
const promptUsuario = fs.readFileSync("entrada.txt", "utf-8");
console.log("Enviando prompt:", JSON.stringify(promptUsuario));

// 3️⃣ Función principal
async function chatearConModeloLocal() {
  try {
    // Enviamos el texto al modelo
    const completion = await openai.completions.create({
      model: "openai/gpt-oss-20b", // modelo cargado en LM Studio
      prompt: `Eres un analista de negocios experto. Resume el siguiente texto en 3 puntos clave:\n\n${promptUsuario}`,
      temperature: 0.3,
      max_tokens: 250,
    });

    // Mostramos la respuesta
    const respuesta = completion.choices[0].text;
    console.log("\n💬 Respuesta del modelo:\n");
    console.log(respuesta);

    // Guardamos la respuesta en un archivo
    fs.writeFileSync("salida.txt", respuesta);
    console.log('\n✅ Respuesta guardada en "salida.txt"');
  } catch (error) {
    console.error("\n⚠️ Ha ocurrido un error:");
    console.error(error.message);
  }
}


// 4️⃣ Ejecutamos
chatearConModeloLocal();
