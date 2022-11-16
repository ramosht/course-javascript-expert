const { error } = require("./constants");
const { rejects, deepStrictEqual } = require("assert");
const File = require("./file");

(async () => {
  {
    const filepath = "./../mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filepath);
    rejects(result, rejection);
  }

  {
    const filepath = "./../mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filepath);
    rejects(result, rejection);
  }
  {
    const filepath = "./../mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filepath);
    const expected = [
      {
        name: "Guilherme Ramos",
        id: 1,
        profession: "Developer",
        birthDay: 1998,
      },
      {
        name: "Rebecca Baldez",
        id: 2,
        profession: "UX",
        birthDay: 1994,
      },
      {
        name: "Joaozinho",
        id: 3,
        profession: "QA",
        birthDay: 1991,
      },
    ];
    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
