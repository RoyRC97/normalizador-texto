const fs = require('fs');
const OpenAI = require('openai');

// 1️⃣ Configuramos el cliente de OpenAI
const openai = new OpenAI({
  baseURL: 'http://localhost:1234/v1', // Servidor local de LM Studio
  apiKey: 'not-needed-for-local' // No se necesita API key real
});

async function chatearConModeloLocal() {
  try {
    // 2️⃣ Leemos el prompt desde el archivo
    const promptUsuario = fs.readFileSync('entrada.txt', 'utf-8');
    console.log(`Enviando prompt: "${promptUsuario}"`);

    // 3️⃣ Enviamos el mensaje al modelo
    const chatCompletion = await openai.chat.completions.create({
      model: 'mistral-7b-instruct', // o el modelo que tengas cargado
      temperature: 0.1,
      messages: [
        {
          role: 'system',
          content: 'Eres un analista de negocios experto. Tu trabajo es resumir texto en 3 bullet points clave.'
        },
        {
          role: 'user',
          content: `Genera un resumen de 3 bullet points del siguiente reporte:\n\n${promptUsuario}`
        }
      ]
    });

    // 4️⃣ Mostramos la respuesta
    const respuesta = chatCompletion.choices[0].message.content;
    console.log('\n💬 Respuesta del modelo:\n');
    console.log(respuesta);

    // 5️⃣ Guardamos la respuesta en salida.txt
    fs.writeFileSync('salida.txt', respuesta);
    console.log('\n✅ Respuesta guardada en "salida.txt"');
  } catch (error) {
    console.error('\n⚠️ Ha ocurrido un error:');
    if (error.code === 'ECONNREFUSED') {
      console.error('❌ No se pudo conectar. ¿Iniciaste el servidor en LM Studio?');
    } else {
      console.error(error.message);
    }
  }
}

// Ejecutamos la función
chatearConModeloLocal();
