yargs = require('yargs');
const fs = require('fs-extra');
const { ROCrate } = require('ro-crate')
const argv = yargs(process.argv.slice(2))
    .scriptName('ohrm-jsonld-converter')
    .usage('Usage: $0 -c RO-Crate containing a Schema.org Style Schema (SoSS)')
    .option('c', {
        alias: 'crate-path',
        describe: 'A path to the SoSS crate',
        type: 'string',
    })
    .help().argv;


main();
async function main() {
    const profile = {
        "metadata": {
            "name": "TEST PROFILE",
            "description": "JUST TESTING",
            "version": 0
        },
        "rootDatasets": {
            "Schema": {
                "type": "Dataset"
            }
        },
        "classes": {}
    }
    const vocabCrate = new ROCrate(await fs.readJSON(argv.cratePath), { array: true, link: true });
    
    for (let entity of vocabCrate.entities()) {
        if (entity["@type"].includes("rdfs:Class")) {
            profile.classes[entity["rdfs:label"]] = {
                "definition": "override",
                "subClassOf": entity.subClassOf,
                "inputs": entity["@reverse"]?.domainIncludes.map((prop) => {
                    
                    if (prop["rdfs:label"]) {
                    //console.log(vocabCrate.resolveTerm(prop["rdfs:label"][0]))
                    const input = {
                        "id": vocabCrate.resolveTerm(prop["rdfs:label"][0]) || prop["rdfs:label"],
                        "name": prop["rdfs:label"], 
                        "help": prop?.description,
                        "type": prop?.rangeIncludes.map((t) => {return t["rdfs:label"]}).flat(),
                        "multiple": true
                    }
                    if (input.type.length === 0 ) {
                        input.type = ['Text']
                    }
                    return input;
                
                }
                  
                })
            };
        

            

        }
    }


    console.log(JSON.stringify(profile, null, 2))


}