"use strict";

var fs = require("fs");
var xml2js = require("xml2js");
var dotenv = require("dotenv");
var parseCSV = require('csv-parser');

dotenv.config({
  path: '/.env'
}); 
var xmlPath = process.env.PASTA_XML;
var csv = process.env.PASTA_CSV;
var consultoras = process.env.CONSULTORAS_FOLDER;
var normais = process.env.NORMAIS_FOLDER;

var date = new Date(Date.now()).toLocaleString('pt-BR', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
});


fs.createReadStream(csv).pipe(parseCSV()).on('data', function (data) {
  try {
    console.log(data.CPF);
  } catch (err) {
  }
}).on('end', function () {
});

var files = [];
fs.readdirSync(xmlPath).forEach(function (file) {
  files.push(file);
});

var parser = new xml2js.Parser({
  ignoreAttrs: false,
  mergeAttrs: true
});
var readXml = fs.readdirSync(xmlPath).forEach(function _callee(file) {
  var xml_string, parserXml;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            xml_string = fs.readFileSync("".concat(xmlPath, "/").concat(file), "utf8");
            parserXml = parser.parseString(xml_string, function (error, result) {
              if (error === null) {
                var CPF_XML = parseInt(result.nfeProc.NFe[0].infNFe[0].dest[0].CPF);

                if (CPF_XML === 0) {
                  fs.copyFileSync("".concat(xmlPath, "/").concat(file), "".concat(consultoras).concat(file));
                  console.log("Copied ".concat(file, " to ").concat(consultoras));

                  try {
                    fs.unlinkSync("".concat(xmlPath, "/").concat(file));
                    console.log("Removed ".concat(xmlPath, "/").concat(file));
                  } catch (err) {
                    console.error(err);
                  }
                } else {
                  fs.copyFileSync("".concat(xmlPath, "/").concat(file), "".concat(normais).concat(file));
                  console.log("Copied ".concat(file, " to ").concat(normais));

                  try {
                    fs.unlinkSync("".concat(xmlPath, "/").concat(file));
                    console.log("Removed ".concat(xmlPath).concat(file));
                  } catch (err) {
                    console.error(err);
                  }
                } 
              } else {
                console.log(error);
              }
            });
          } catch (err) {
            console.log(err);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});