import * as SQLite from "expo-sqlite";

const databaseName = "notes.db";

export const db = SQLite.openDatabase(databaseName);

export const createTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT);`,
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

//Получение всех заметок
export const getNotes = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM notes;`,
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};

export const createNoteTagsTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS note_tags (id INTEGER PRIMARY KEY AUTOINCREMENT, note_id INTEGER, tag_name TEXT);",
        [],
        () => resolve(),
        (_, error) => reject(error)
      );
    });
  });
};

// Вызов createTable после открытия базы данных
createTable()
  .then(() => {
    console.log("Table created successfully");
  })
  .catch((error) => {
    console.error("Error creating table:", error);
  });
