import { Pool } from "pg";

// Substitua pela sua string de conexão do Render.com
const connectionString = "sua_string_de_conexao_do_render_aqui";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
