'use strict'

const { readFile } = require('fs');
const { promisify } = require('util')
const readfileAsync = promisify(readFile)

const INDEX_HTML_URL = './pages/content.html';
// const INDEX_HTML_URL = 'C:/Users/ElMehdiNaimi/Desktop/pages/content.html';
// const INDEX_HTML_URL = 'C:/Users/ElMehdiNaimi/Desktop/AutoForamtion/JAVASCRIPT Training/createBackEndNodeJs/SIteMorgan/index.html';
const OPTION = {encoding: 'UTF-8'};
module.exports = async() => {
    // Opération
    // Récupérer le contenu du fichier html index.html

    const contenu = await readfileAsync(INDEX_HTML_URL, OPTION);
    return contenu;
    
    // Retourner la page HTML
}
