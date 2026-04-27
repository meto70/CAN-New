import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware für JSON-Anfragen
  app.use(express.json());

  // --- API ROUTEN ---
  
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // HIER KÖNNTE EIN E-MAIL DIENST INTEGRIERT WERDEN (z.B. Resend oder Nodemailer)
      // Für den Moment loggen wir die Anfrage in der Server-Konsole
      console.log("NEUE ANFRAGE ERHALTEN:");
      console.log(`Von: ${name} (${email})`);
      console.log(`Nachricht: ${message}`);
      
      // Simulation einer erfolgreichen Verarbeitung
      // In einer realen Umgebung würden Sie hier resend.emails.send({...}) aufrufen
      
      res.status(200).json({ 
        success: true, 
        message: "Anfrage erfolgreich empfangen." 
      });
    } catch (error) {
      console.error("Fehler beim Verarbeiten der Kontaktanfrage:", error);
      res.status(500).json({ 
        success: false, 
        message: "Server-Fehler beim Senden der Nachricht." 
      });
    }
  });

  // --- VITE MIDDLEWARE ---

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
  });
}

startServer();
