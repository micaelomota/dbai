// src/main/ipcHandlers.ts
import { ipcMain } from "electron";

import { guiService } from "./services/guiService";

ipcMain.handle("getDatabases", guiService.listDatabases);
